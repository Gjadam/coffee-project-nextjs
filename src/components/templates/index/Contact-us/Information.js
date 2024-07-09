
// Components
import ContactUsBox from '@/components/modules/ContactUsBox/ContactUsBox'
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'

// Icons
import { FaPhone } from 'react-icons/fa'
import { FaLocationDot } from 'react-icons/fa6'
import { MdEmail } from 'react-icons/md'

export default function Information() {
    return (
        <div className=" w-full lg:w-1/2">
            <SectionHeader title={"آدرس ها"} />
            <div data-aos='fade-up' className=" flex justify-between items-center flex-wrap gap-10 p-5 w-full">
                <div className=" flex justify-center items-start flex-col gap-5">
                    <ContactUsBox title='آدرس' body='198 خیابان 21 غربی، سوئیت 721 قزوین NY 10010'>
                        <FaLocationDot className=' text-primary text-2xl' />
                    </ContactUsBox>
                    <ContactUsBox title='تلفن' body='+95 (0) 123 456 789'>
                        <FaPhone className=' text-primary text-2xl' />
                    </ContactUsBox>
                    <ContactUsBox title='ایمیل' body='barista@qodeinteractive.com'>
                        <MdEmail className=' text-primary text-2xl' />
                    </ContactUsBox>
                </div>
                <div className=" flex justify-center items-start flex-col gap-5">
                    <ContactUsBox title='آدرس' body='198 خیابان 21 غربی، سوئیت 721 قزوین NY 10010'>
                        <FaLocationDot className=' text-primary text-2xl' />
                    </ContactUsBox>
                    <ContactUsBox title='تلفن' body='+95 (0) 123 456 789'>
                        <FaPhone className=' text-primary text-2xl' />
                    </ContactUsBox>
                    <ContactUsBox title='ایمیل' body='barista@qodeinteractive.com'>
                        <MdEmail className=' text-primary text-2xl' />
                    </ContactUsBox>
                </div>
            </div>
        </div>
    )
}
