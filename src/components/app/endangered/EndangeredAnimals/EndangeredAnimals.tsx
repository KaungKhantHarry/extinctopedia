import Image from "next/image";
import { endangeredAnimals } from "../../../../data/endangeredAnimalsData";

const EndangeredAnimals = () => {
    return (
        <div className="flex flex-col gap-5 py-15">
            {
                endangeredAnimals.map((ea) => (
                    <div key={ea.name} className="flex flex-col gap-5">
                        <div className="w-full h-auto">
                            <Image src={ea.photo} alt={ea.name}/>
                        </div>
                        <div className="px-5 flex flex-col gap-5">
                            <p className="text-2xl font-mono tracking-tighter font-bold md:text-3xl xl:text-4xl">
                            {ea.name}
                            </p>
                            <p className="text-md whitespace-pre-line md:text-xl xl:text-xl">
                                {ea.description}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default EndangeredAnimals
