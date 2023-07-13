import HText from "@/shared/HText"
import { SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import {motion} from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
            onViewportEnter={()=> setSelectedPage(SelectedPage.Benefits)}>
                {/* Header */}
                <div className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM.</HText>
                <p className="my-5 text-sm">estas como lokitaaa</p>
                </div>

                {/* Benefits */}
            </motion.div>
        </section>
    )
}

export default Benefits