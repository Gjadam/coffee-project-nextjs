// Components
import Footer from "./components/modules/Footer/Footer";
import NavBar from "./components/modules/NavBar/NavBar";
import Header from "./components/templates/Index//Header/Header";
import AllProducts from "./components/templates/Index/AllProducts/AllProducts";
import CounterBanner from "./components/templates/Index/CounterBanner/CounterBanner";
import InfiniteLogos from "./components/templates/Index/InfiniteLogos/InfiniteLogos";
import OfferBanner from "./components/templates/Index/OfferBanner/OfferBanner";
import ProductsBanner from "./components/templates/Index/ProductsBanner/ProductsBanner";
import Promote from "./components/templates/Index/Promote/Promote";
import ReporterBanner from "./components/templates/Index/ReporterBanner/ReporterBanner";
import SimpleBanner from "./components/templates/Index/SimpleBanner/SimpleBanner";

// Authorization
import { authUser } from "@/utils/auth";


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
