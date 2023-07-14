import HText from "@/shared/HText"
import { BenefitType, SelectedPage } from "@/shared/types"
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import Home from "../home"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitPageGraphic from "@/assets/BenefitsPageGraphic.png"

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6 " />,
        title: "State of the Art Facilities",
        description: "El peluca  sapeee sisi lokita rescatate loco ahi no me estas por matarrrrrr"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6 " />,
        title: "100/s of Diverse Classes",
        description: "El peluca  sapeee sisi lokita rescatate loco ahi no me estas por matarrrrrr"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6 " />,
        title: "Expert Personal Trainers",
        description: "El peluca  sapeee sisi lokita rescatate loco ahi no me estas por matarrrrrr"
    },
]

const container = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2
        }
    }
}


type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Benefits = ({ setSelectedPage }: Props) => {
    return (
        <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
            <motion.div
                onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}>
                {/* Header */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 1 }}
                    variants={{
                        hidden: { opacity: 0, x: -100 },
                        visible: { opacity: 1, x: 0 },
                    }}
                    className="md:my-5 md:w-3/5">
                    <HText>MORE THAN JUST A GYM.</HText>
                    <p className="my-5 text-sm">estas como lokitaaa</p>
                </motion.div>

                {/* Benefits */}
                <motion.div className="md:flex items-center justify-between gap-8 mt-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.25 }}
                    variants={container}
                >
                    {benefits.map((benefit: BenefitType) => (
                        <Benefit
                            key={benefit.title}
                            icon={benefit.icon}
                            title={benefit.title}
                            description={benefit.description}
                            setSelectedPage={setSelectedPage} />
                    ))}
                </motion.div>

                {/* Graphics and Description */}
                <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
                    {/* Graphic */}
                    <img src={BenefitPageGraphic} alt="benefits-page" className="mx-auto" />
                    {/* Description */}
                    <div>
                        {/* Title */}
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstracwaves ">
                                <motion.div
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    transition={{ duration: 1 }}
                                    variants={{
                                        hidden: { opacity: 0, x: -100 },
                                        visible: { opacity: 1, x: 0 },
                                    }}
                                >
                                    <HText>
                                        MILLIONS OF MEMBERS. THOUSANDS OF LOCATIONS.  {" "}
                                        <span className="text-primary-500">ONE PLAN.</span>
                                    </HText>
                                </motion.div>
                            </div>

                        </div>
                        {/* Description */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.5 }}
                            transition={{delay: 0.5, duration: 1 }}
                            variants={{
                                hidden: { opacity: 0, x: -100 },
                                visible: { opacity: 1, x: 0 },
                            }}
                        >
                            <p className="my-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa, dolore voluptatem! Fuga culpa quod corporis perspiciatis aliquam obcaecati, delectus labore maiores vitae atque, consequuntur quasi rem ex esse accusantium ullam.</p>
                            <p className="mb-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam ratione obcaecati architecto, deserunt, sed vitae labore officiis unde neque, ipsa necessitatibus aliquam asperiores veniam at quibusdam? Numquam vero eligendi quaerat!</p>
                        </motion.div>
                        {/* Button */}
                        <div className="relative mt-16">
                            <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles ">
                                <ActionButton setSelectedPage={setSelectedPage}>
                                    Join Now
                                </ActionButton>
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}

export default Benefits