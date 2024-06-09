
// Components
import CategoryHeader from '../components/modules/CategoryHeader/CategoryHeader'
import Footer from '../components/modules/Footer/Footer'
import NavBar from '../components/modules/NavBar/NavBar'
import Form from '../components/templates/Index/Contact-us/Form'
import Information from '../components/templates/Index/Contact-us/Information'
import Map from '../components/templates/Index/Contact-us/Map'

// Backend
import { authUser } from '@/utils/auth'

export default async function Contact_us() {

    const user = await authUser()

    return (
        <>
            <NavBar isLogin={user} />
            <CategoryHeader title={'ارتباط با ما'} />
            <div className=" my-28">
                <div className=" container mx-auto flex justify-center items-start flex-col lg:flex-row  gap-10 my-28 p-10">
                    <Form />
                    <Information />
                </div>
                <div className=" flex justify-center items-center h-96">
                    <Map />
                </div>
            </div>
            <Footer />
        </>
    )
}
