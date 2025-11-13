import EndangeredAnimals from "@/components/app/endangered/EndangeredAnimals/EndangeredAnimals"
import EndangeredIntro from "@/components/app/endangered/EndangeredIntro/EndangeredIntro"
import HelpThem from "@/components/app/endangered/HelpThem/HelpThem"
import Sources from "@/components/common/Sources"

const page = () => {
    return (
        <div>
            <EndangeredIntro />
            <EndangeredAnimals />
            <HelpThem />
            <Sources />
        </div>
    )
}

export default page
