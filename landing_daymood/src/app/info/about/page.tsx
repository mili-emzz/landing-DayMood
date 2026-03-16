import Image from "next/image";
import Navbar from "@/app/components/shared/navbar";

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-[#FDF5F5] font-sans flex flex-col relative overflow-hidden text-black">
            <Navbar />

            <div className="flex-1 w-full max-w-6xl mx-auto px-6 md:px-12 pt-28 md:pt-32 pb-10 flex flex-col md:flex-row items-center justify-between relative z-10">

                <div className="w-full md:w-[60%] lg:w-[50%] flex flex-col gap-8 md:gap-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                        Sobre Nosotras
                    </h1>

                    <div className="flex flex-col gap-6 text-lg md:text-xl font-medium leading-relaxed">
                        <p>
                            La pandemia transformó nuestra dinámica social, poniendo la salud mental en el centro de la conversación. Aunque la digitalización nos acercó a nuevas formas de expresión.
                        </p>
                        <p>
                            Aún así, el acceso a herramientas digitales para el bienestar emocional sigue siendo limitado y poco visible.
                        </p>
                        <p>
                            Con DayMood, proponemos una aplicación móvil como herramienta para la facilidad de un registro diario.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-[40%] lg:w-[45%] h-[350px] md:h-[400px] relative mt-16 md:mt-0 flex items-center justify-center md:justify-end">
                    <div className="relative w-full h-full max-w-[400px]">
                        <Image
                            src="/emotions.png"
                            alt="Emociones DayMood"
                            fill
                            className="object-contain object-right md:object-center"
                            priority
                        />
                    </div>
                </div>

            </div>

            <div className="w-full max-w-6xl mx-auto px-6 md:px-12 pb-32 relative z-10 mt-2 md:mt-4">

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight text-center mb-12 md:mb-20">
                    Conoce al equipo
                </h2>
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-center mb-12 md:mb-20">
                    Lúmina
                </h2>

                <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-24">
                    {[
                        { name: "Emilia", role: "Desarrollador frontend" },
                        { name: "Nadia", role: "Desarrollador backend" },
                        { name: "Emma", role: "Desarrollador backend" },
                    ].map((member, index) => (
                        <div key={index} className="flex flex-col items-center group text-center">
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 transition-colors">{member.name}</h3>
                            <p className="text-lg md:text-xl font-medium text-gray-500 mt-1">{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>

        </main>
    );
}
