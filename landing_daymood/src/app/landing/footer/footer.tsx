import Image from 'next/image'

export default function Footer() {
    return (
        <div className="w-full h-screen flex flex-row relative overflow-hidden justify-between">
           
            <div className="flex flex-col justify-end w-full lg:w-[60%] h-full pb-12 pl-12 lg:pb-16 lg:pl-20 z-10">
                <div className="mb-12 lg:mb-16">
                    <p className="text-4xl lg:text-[44px] font-bold text-black w-full flex leading-[1.05] tracking-tight">
                        Herramienta de registro personal, no sustituto psicológico. Registra notas, comparte anónimamente en el foro, checa estadísticas.
                    </p>
                </div>
                
                <footer className="w-full flex flex-col gap-10 lg:gap-14">

                    <div className="w-full flex flex-row justify-between pr-4 lg:pr-20">

                        <div className="flex flex-col border-l-[4px] border-[#FF9F9B] pl-6 w-[55%] lg:w-[45%]">
                            <p className="text-3xl font-bold text-black mb-3">
                                DayMood
                            </p>
                            <p className="text-xl text-black leading-snug">
                                Aplicación móvil para el registro y personalización de emociones
                            </p>
                        </div>

                        <div className="flex flex-col text-black text-lg lg:text-xl w-[40%] pl-8">
                            <ul className="flex flex-col gap-4 font-medium">
                                <li className="cursor-pointer">Nuestro equipo</li>
                                <li className="cursor-pointer">Aviso de privacidad</li>
                                <li className="cursor-pointer">Manual de Usuario</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full flex text-black text-lg justify-start lg:justify-center pr-10">
                        <p className="text-center md:pl-24 lg:pl-0 font-medium">© [2026] Lúmina. Todos los derechos reservados.</p>
                    </div>
                </footer>
            </div>

            <div className="w-[50%] md:w-[40%] lg:w-[50%] h-full relative">
                <Image
                    src="/mock-down-right.png"
                    alt="DayMood Features Left"
                    fill
                    className="object-contain object-right-bottom scale-[1.1] translate-y-[2%] translate-x-[5%]"
                />
            </div>

        </div>
    )
}
