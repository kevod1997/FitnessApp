import useMediaQuery from '@/hooks/useMediaQuery'
import { SelectedPage } from '@/shared/types'
import ActionButton from '@/shared/ActionButton'
import HomePageText from "@/assets/HomePageText.png"
import HomePageGraphic from "@/assets/HomePageGraphic.png"
import SponsorRedBull from "@/assets/SponsorRedBull.png"
import SponsorForbes from "@/assets/SponsorForbes.png"
import SponsorFortune from "@/assets/SponsorFortune.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  return (
    <section
    id="home "
    className='gap-16 bg-gray-20 py-10 md:h-full md:pb-0'
    >
        {/* Image and main header */}
        <div>
          {/* Main header */}
          <div>
        {/* headings */}
        <div>
          <div>
            <div>
              <img alt='home-page-text' src={HomePageText}/>
            </div>
          </div>
          <p>
            LOCURA TOTAL
          </p>
        </div>
            {/* ACTIONS */}
            <div>
              <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              <AnchorLink className='text-sm font-bold text-primary-500 underline hover:text-secondary-500'
              onClick={()=> setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}>

              </AnchorLink>
            </div>
          </div>

          {/* image */}
          <div></div>
        </div>
    </section>
  )
}

export default Home