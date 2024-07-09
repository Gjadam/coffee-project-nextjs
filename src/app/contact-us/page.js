
// Components
import CategoryHeader from '../../components/modules/CategoryHeader/CategoryHeader'
import Footer from '../../components/modules/Footer/Footer'
import NavBar from '../../components/modules/NavBar/NavBar'
import Form from '../../components/templates/index/Contact-us/Form'
import Information from '../../components/templates/index/Contact-us/Information'

// Backend
import { authUser } from '@/utils/serverHelpers'

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
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528000654!2d-74.14448744699546!3d40.69763123333061!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1719251810638!5m2!1sen!2s" width="100%" height="100%" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
            <Footer />
        </>
    )
}
