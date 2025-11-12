import EndangeredAnimals from "@/components/app/endangered/EndangeredAnimals/EndangeredAnimals"
import EndangeredIntro from "@/components/app/endangered/EndangeredIntro/EndangeredIntro"

const page = () => {
    return (
        <div>
            <EndangeredIntro />
            <EndangeredAnimals />
        </div>
    )
}

export default page
