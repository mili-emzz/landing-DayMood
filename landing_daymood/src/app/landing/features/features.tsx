import Image from 'next/image';

export default function Features() {
    return (
        <section className="relative w-full h-screen bg-[#F9EDED] overflow-hidden flex flex-col justify-between">

            <div className="w-full px-6 md:px-12 lg:px-20 pt-12 md:pt-20 z-30">
                <h1 className="text-4xl lg:text-[4.5rem] font-bold text-black leading-[1] tracking-tight text-left">
                    Personaliza e interactúa
                </h1>
            </div>

            <div className="flex-1 w-full flex items-end justify-between relative mt-8">

                <div className="relative w-[50%] md:w-[40%] lg:w-[50%] h-full">
                    <Image
                        src="/mock-middle-left.png"
                        alt="DayMood Features Left"
                        fill
                        className="object-contain object-left-bottom"
                    />
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 -mt-10">
                    <div className="relative w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[180px] md:h-[180px]">
                        <Image
                            src="/lumina-logo.png"
                            alt="Lumina Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                <div className="relative w-[50%] md:w-[40%] lg:w-[50%] h-full scale-[1.15] transform origin-bottom-right">
                    <Image
                        src="/mock-middle-right.png"
                        alt="DayMood Features Right"
                        fill
                        className="object-contain object-right-bottom"
                    />
                </div>

            </div>
        </section>
    );
}
