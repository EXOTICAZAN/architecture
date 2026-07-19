import { eq, desc } from "drizzle-orm";
import { z } from "zod";
import { bookings } from "../drizzle/schema";
import { getDb } from "./db";
import { adminProcedure, publicProcedure, router } from "./_core/trpc";

const bookingInput = z.object({
  name: z.string().min(1).max(255),
  email: z.string().email().max(320),
  phone: z.string().min(1).max(64),
  date: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "Must be YYYY-MM-DD"),
  time: z.string().regex(/^\d{2}:\d{2}$/, "Must be HH:MM"),
  message: z.string().max(2000).optional(),
});

export const bookingRouter = router({
  // Public — anyone can submit a booking from the website
  submit: publicProcedure
    .input(bookingInput)
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");

      await db.insert(bookings).values({
        name: input.name,
        email: input.email,
        phone: input.phone,
        date: input.date,
        time: input.time,
        message: input.message ?? null,
        status: "pending",
      });

      return { success: true };
    }),

  // Admin only — list all bookings newest first
  list: adminProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");
    return db.select().from(bookings).orderBy(desc(bookings.createdAt));
  }),

  // Admin only — update booking status
  updateStatus: adminProcedure
    .input(
      z.object({
        id: z.number().int().positive(),
        status: z.enum(["pending", "confirmed", "cancelled"]),
      }),
    )
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      await db
        .update(bookings)
        .set({ status: input.status })
        .where(eq(bookings.id, input.id));
      return { success: true };
    }),

  // Admin only — delete a booking
  delete: adminProcedure
    .input(z.object({ id: z.number().int().positive() }))
    .mutation(async ({ input }) => {
      const db = await getDb();
      if (!db) throw new Error("Database not available");
      await db.delete(bookings).where(eq(bookings.id, input.id));
      return { success: true };
    }),

  // Admin only — stats for dashboard summary cards
  stats: adminProcedure.query(async () => {
    const db = await getDb();
    if (!db) throw new Error("Database not available");
    const all = await db.select().from(bookings);
    return {
      total: all.length,
      pending: all.filter((b) => b.status === "pending").length,
      confirmed: all.filter((b) => b.status === "confirmed").length,
      cancelled: all.filter((b) => b.status === "cancelled").length,
    };
  }),
});
