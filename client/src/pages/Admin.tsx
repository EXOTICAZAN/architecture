import { useState } from 'react'
import { trpc } from '@/lib/trpc'
import { useAuth } from '@/_core/hooks/useAuth'
import { startLogin } from '@/const'
import { toast } from 'sonner'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog'
import {
  Calendar,
  CheckCircle2,
  Clock,
  Loader2,
  LogOut,
  Phone,
  Mail,
  MessageSquare,
  Trash2,
  XCircle,
  Users,
  TrendingUp,
  RefreshCw,
} from 'lucide-react'
import type { Booking } from '@shared/types'

// ─── helpers ────────────────────────────────────────────────────────────────

function statusBadge(status: Booking['status']) {
  switch (status) {
    case 'pending':
      return <Badge className="bg-amber-100 text-amber-800 border-amber-200 hover:bg-amber-100">Pending</Badge>
    case 'confirmed':
      return <Badge className="bg-green-100 text-green-800 border-green-200 hover:bg-green-100">Confirmed</Badge>
    case 'cancelled':
      return <Badge className="bg-red-100 text-red-800 border-red-200 hover:bg-red-100">Cancelled</Badge>
  }
}

function formatDate(dateStr: string) {
  const [y, m, d] = dateStr.split('-').map(Number)
  return new Date(y, m - 1, d).toLocaleDateString('en-PK', {
    weekday: 'short', day: 'numeric', month: 'short', year: 'numeric',
  })
}

function formatTime(timeStr: string) {
  const [h, m] = timeStr.split(':').map(Number)
  const suffix = h >= 12 ? 'PM' : 'AM'
  const hour = h % 12 || 12
  return `${hour}:${String(m).padStart(2, '0')} ${suffix}`
}

function formatCreatedAt(d: Date) {
  return new Date(d).toLocaleDateString('en-PK', {
    day: 'numeric', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  })
}

// ─── Stat card ───────────────────────────────────────────────────────────────

function StatCard({ label, value, icon: Icon, colour }: {
  label: string; value: number; icon: React.ElementType; colour: string
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-6 flex items-center gap-4">
      <div className={`flex size-12 items-center justify-center rounded-xl ${colour}`}>
        <Icon className="size-6" />
      </div>
      <div>
        <p className="text-2xl font-semibold text-foreground">{value}</p>
        <p className="text-sm text-muted-foreground">{label}</p>
      </div>
    </div>
  )
}

// ─── Booking row ─────────────────────────────────────────────────────────────

function BookingRow({
  booking,
  onStatusChange,
  onDelete,
}: {
  booking: Booking
  onStatusChange: (id: number, status: Booking['status']) => void
  onDelete: (id: number) => void
}) {
  return (
    <div className="rounded-xl border border-border bg-card p-5 space-y-4 hover:border-brand/40 transition-colors duration-200">
      {/* Top row: name + status badge */}
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="font-semibold text-foreground text-lg leading-tight">{booking.name}</p>
          <p className="text-xs text-muted-foreground mt-0.5">
            Submitted {formatCreatedAt(booking.createdAt)}
          </p>
        </div>
        {statusBadge(booking.status)}
      </div>

      {/* Contact info */}
      <div className="grid gap-2 sm:grid-cols-2">
        <a href={`mailto:${booking.email}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors">
          <Mail className="size-4 shrink-0 text-brand" />{booking.email}
        </a>
        <a href={`tel:${booking.phone}`} className="flex items-center gap-2 text-sm text-muted-foreground hover:text-brand transition-colors">
          <Phone className="size-4 shrink-0 text-brand" />{booking.phone}
        </a>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="size-4 shrink-0 text-brand" />{formatDate(booking.date)}
        </div>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Clock className="size-4 shrink-0 text-brand" />{formatTime(booking.time)}
        </div>
      </div>

      {/* Message */}
      {booking.message && (
        <div className="flex gap-2 rounded-lg bg-secondary p-3 text-sm text-muted-foreground">
          <MessageSquare className="size-4 shrink-0 text-brand mt-0.5" />
          <p className="leading-relaxed">{booking.message}</p>
        </div>
      )}

      {/* Actions */}
      <div className="flex flex-wrap gap-2 pt-1">
        {booking.status !== 'confirmed' && (
          <Button
            size="sm"
            onClick={() => onStatusChange(booking.id, 'confirmed')}
            className="bg-green-600 hover:bg-green-700 text-white gap-1.5"
          >
            <CheckCircle2 className="size-3.5" />Confirm
          </Button>
        )}
        {booking.status !== 'pending' && (
          <Button
            size="sm" variant="outline"
            onClick={() => onStatusChange(booking.id, 'pending')}
            className="gap-1.5"
          >
            <Clock className="size-3.5" />Set Pending
          </Button>
        )}
        {booking.status !== 'cancelled' && (
          <Button
            size="sm" variant="outline"
            onClick={() => onStatusChange(booking.id, 'cancelled')}
            className="border-red-200 text-red-600 hover:bg-red-50 gap-1.5"
          >
            <XCircle className="size-3.5" />Cancel
          </Button>
        )}
        <Button
          size="sm" variant="outline"
          onClick={() => onDelete(booking.id)}
          className="ml-auto border-red-200 text-red-600 hover:bg-red-50 gap-1.5"
        >
          <Trash2 className="size-3.5" />Delete
        </Button>
      </div>
    </div>
  )
}

// ─── Main panel ──────────────────────────────────────────────────────────────

export default function Admin() {
  const { user, loading: authLoading, logout } = useAuth()
  const [deleteId, setDeleteId] = useState<number | null>(null)
  const utils = trpc.useUtils()

  const statsQuery = trpc.booking.stats.useQuery(undefined, { enabled: user?.role === 'admin' })
  const listQuery = trpc.booking.list.useQuery(undefined, { enabled: user?.role === 'admin' })

  const updateStatus = trpc.booking.updateStatus.useMutation({
    onSuccess: () => {
      utils.booking.list.invalidate()
      utils.booking.stats.invalidate()
      toast.success('Booking updated')
    },
    onError: () => toast.error('Failed to update booking'),
  })

  const deleteBooking = trpc.booking.delete.useMutation({
    onSuccess: () => {
      utils.booking.list.invalidate()
      utils.booking.stats.invalidate()
      toast.success('Booking deleted')
      setDeleteId(null)
    },
    onError: () => toast.error('Failed to delete booking'),
  })

  // ── Loading state ──
  if (authLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Loader2 className="size-8 animate-spin text-brand" />
      </div>
    )
  }

  // ── Not logged in ──
  if (!user) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-8">
        <div className="w-full max-w-sm text-center space-y-6">
          <img src="/logo.png" alt="JI Architects" className="h-20 w-auto mx-auto object-contain" />
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Admin Panel</h1>
            <p className="mt-2 text-sm text-muted-foreground">Sign in to manage appointments</p>
          </div>
          <Button onClick={startLogin} className="w-full bg-brand hover:bg-brand/90 text-white rounded-full">
            Sign in with Manus
          </Button>
        </div>
      </div>
    )
  }

  // ── Not admin ──
  if (user.role !== 'admin') {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background p-8">
        <div className="w-full max-w-sm text-center space-y-4">
          <XCircle className="size-12 text-red-500 mx-auto" />
          <h1 className="text-xl font-semibold text-foreground">Access Denied</h1>
          <p className="text-sm text-muted-foreground">
            Your account doesn't have admin access. Contact the site owner to get admin rights.
          </p>
          <Button variant="outline" onClick={logout} className="gap-2">
            <LogOut className="size-4" />Sign Out
          </Button>
        </div>
      </div>
    )
  }

  // ── Admin view ──
  const allBookings = listQuery.data ?? []
  const pending = allBookings.filter((b) => b.status === 'pending')
  const confirmed = allBookings.filter((b) => b.status === 'confirmed')
  const cancelled = allBookings.filter((b) => b.status === 'cancelled')

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="JI Architects" className="h-10 w-auto object-contain" />
            <div>
              <p className="text-sm font-semibold text-foreground leading-none">Admin Panel</p>
              <p className="text-xs text-muted-foreground mt-0.5">{user.name ?? user.email}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button
              size="sm" variant="outline"
              onClick={() => { utils.booking.list.invalidate(); utils.booking.stats.invalidate() }}
              className="gap-1.5"
            >
              <RefreshCw className="size-3.5" />Refresh
            </Button>
            <Button size="sm" variant="outline" onClick={logout} className="gap-1.5">
              <LogOut className="size-3.5" />Sign Out
            </Button>
            <a href="/" className="text-sm text-muted-foreground hover:text-brand transition-colors">
              ← Website
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 space-y-10">

        {/* Stats */}
        {statsQuery.data && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <StatCard label="Total Bookings" value={statsQuery.data.total} icon={TrendingUp} colour="bg-brand/10 text-brand" />
            <StatCard label="Pending" value={statsQuery.data.pending} icon={Clock} colour="bg-amber-100 text-amber-700" />
            <StatCard label="Confirmed" value={statsQuery.data.confirmed} icon={CheckCircle2} colour="bg-green-100 text-green-700" />
            <StatCard label="Cancelled" value={statsQuery.data.cancelled} icon={XCircle} colour="bg-red-100 text-red-700" />
          </div>
        )}

        {/* Bookings table by status */}
        {listQuery.isLoading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="size-8 animate-spin text-brand" />
          </div>
        ) : allBookings.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center">
            <Users className="size-12 text-muted-foreground/40 mb-4" />
            <p className="text-lg font-medium text-foreground">No bookings yet</p>
            <p className="text-sm text-muted-foreground mt-1">Appointment requests from the website will appear here.</p>
          </div>
        ) : (
          <Tabs defaultValue="pending">
            <TabsList className="mb-6">
              <TabsTrigger value="pending">
                Pending <span className="ml-1.5 text-xs bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded-full">{pending.length}</span>
              </TabsTrigger>
              <TabsTrigger value="confirmed">
                Confirmed <span className="ml-1.5 text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">{confirmed.length}</span>
              </TabsTrigger>
              <TabsTrigger value="cancelled">
                Cancelled <span className="ml-1.5 text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded-full">{cancelled.length}</span>
              </TabsTrigger>
              <TabsTrigger value="all">
                All <span className="ml-1.5 text-xs bg-secondary text-muted-foreground px-1.5 py-0.5 rounded-full">{allBookings.length}</span>
              </TabsTrigger>
            </TabsList>

            {(['pending', 'confirmed', 'cancelled'] as const).map((tab) => {
              const items = tab === 'pending' ? pending : tab === 'confirmed' ? confirmed : cancelled
              return (
                <TabsContent key={tab} value={tab} className="space-y-4">
                  {items.length === 0 ? (
                    <div className="rounded-xl border border-border bg-card p-12 text-center text-sm text-muted-foreground">
                      No {tab} bookings
                    </div>
                  ) : items.map((b) => (
                    <BookingRow
                      key={b.id}
                      booking={b}
                      onStatusChange={(id, status) => updateStatus.mutate({ id, status })}
                      onDelete={(id) => setDeleteId(id)}
                    />
                  ))}
                </TabsContent>
              )
            })}

            <TabsContent value="all" className="space-y-4">
              {allBookings.map((b) => (
                <BookingRow
                  key={b.id}
                  booking={b}
                  onStatusChange={(id, status) => updateStatus.mutate({ id, status })}
                  onDelete={(id) => setDeleteId(id)}
                />
              ))}
            </TabsContent>
          </Tabs>
        )}
      </main>

      {/* Delete confirm dialog */}
      <AlertDialog open={deleteId !== null} onOpenChange={(open) => !open && setDeleteId(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete this booking?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. The booking record will be permanently removed from the database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => deleteId !== null && deleteBooking.mutate({ id: deleteId })}
              className="bg-red-600 hover:bg-red-700 text-white"
            >
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
