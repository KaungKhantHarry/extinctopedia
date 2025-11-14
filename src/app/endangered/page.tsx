import EndangeredAnimals from "@/components/app/endangered/EndangeredAnimals/EndangeredAnimals"
import EndangeredIntro from "@/components/app/endangered/EndangeredIntro/EndangeredIntro"
import HelpThem from "@/components/app/endangered/HelpThem/HelpThem"
import TakeAction from "@/components/app/endangered/TakeAction /TakeAction"
import Sources from "@/components/common/Sources"

const page = () => {
    return (
        <div>
            <EndangeredIntro />
            <EndangeredAnimals />
            <TakeAction />
            <HelpThem />
            <Sources />
        </div>
    )
}

export default page
