
// Components
import CounterBox from '@/components/modules/CounterBox/CounterBox'

export default function CounterBanner() {
    return (
        <div className=" w-full p-28 relative flex justify-center items-center snap-center  bg-white">
            <div data-aos='fade' className=" flex justify-center items-center flex-wrap gap-24">
                <CounterBox count={250} title={'انواع قهوه'} />
                <CounterBox count={123} title={'ساعت تست'} />
                <CounterBox count={321} title={'بازارهای قهوه'} />
                <CounterBox count={220} title={'مارک های قهوه'} />
            </div>
        </div>
    )
}
