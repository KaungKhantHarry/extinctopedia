import { resultsData } from "@/data/resultsData"
import Image from "next/image"

const Results = () => {
    return (
        <div className="px-5 py-15 bg-[#F7F6EF] text-[#005A25] text-center">
            <h1 className="font-semibold text-2xl">
                Amazon Conservation's Result
            </h1>
            <div className="py-5 flex flex-col md:grid md:grid-cols-3">
                {
                    resultsData.map((data) => (
                        <div key={data.name} className="h-[300px] bg-[#F7F6EF] flex flex-col gap-5 justify-center items-center">
                            <Image src={data.photo} alt={data.name} className="size-36 rounded-[50%]"/>
                            <h1 className="text-xl font-semibold md:h-[85px]">
                                {data.name}
                            </h1>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Results
