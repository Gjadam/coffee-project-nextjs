
// Components
import SectionHeader from '@/components/modules/SectionHeader/SectionHeader'
import UserBox from './UserBox'

export default function Users({users}) {
  return (
    <div className=' flex justify-center items-center flex-col'>
        <div className="">
            <SectionHeader title={"کاربران"}/>
        </div>
        <div className=" flex justify-center items-center gap-10 flex-wrap">
            {
                users.map(user => (
                    <UserBox key={user._id} {...user}/>
                ))
            }

        </div>
    </div>
  )
}
