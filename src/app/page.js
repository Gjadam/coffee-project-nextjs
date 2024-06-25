// Components
import Footer from '@/components/modules/Footer/Footer'
import NavBar from '@/components/modules/NavBar/NavBar'
import AllProducts from '@/components/templates/index/AllProducts/AllProducts'
import CounterBanner from '@/components/templates/index/CounterBanner/CounterBanner'
import Header from '@/components/templates/index/Header/Header'
import InfiniteLogos from '@/components/templates/index/InfiniteLogos/InfiniteLogos'
import OfferBanner from '@/components/templates/index/OfferBanner/OfferBanner'
import ProductsBanner from '@/components/templates/index/ProductsBanner/ProductsBanner'
import Promote from '@/components/templates/index/Promote/Promote'
import ReporterBanner from '@/components/templates/index/ReporterBanner/ReporterBanner'
import SimpleBanner from '@/components/templates/index/SimpleBanner/SimpleBanner'

// Authorization
import { authUser } from '@/utils/serverHelpers'


export default async function Home() {

  const user = await authUser()


  return (
    <div className="snap-y snap-mandatory h-svh w-svw overflow-y-auto">
      <NavBar isLogin={user} />
      <Header />
      <Promote />
      <ProductsBanner />
      <OfferBanner />
      <ReporterBanner />
      <CounterBanner />
      <SimpleBanner />
      <InfiniteLogos />
      <AllProducts />
      <Footer />
    </div>
  )
}
