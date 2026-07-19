import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { Philosophy } from '@/components/Philosophy'
import { Explore3D } from '@/components/Explore3D'
import { FeaturedProjects } from '@/components/FeaturedProjects'
import { Stats } from '@/components/Stats'
import { Process } from '@/components/Process'
import { Services } from '@/components/Services'
import { Testimonials } from '@/components/Testimonials'
import { Faq } from '@/components/Faq'
import { Contact } from '@/components/Contact'
import { SiteFooter } from '@/components/SiteFooter'

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="relative">
        <Hero />
        <Philosophy />
        <Explore3D />
        <FeaturedProjects />
        <Stats />
        <Process />
        <Services />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
