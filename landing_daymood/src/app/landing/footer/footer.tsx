import Image from 'next/image'

export default function Footer() {
    return (
        <div className="w-full h-screen flex flex-row relative w-full overflow-hidden justify-between">
            <div className="">
                <div>
                    <p className="text-6xl font-bold text-black w-[75%]">
                        Herramienta de registro personal, no sustituto psicológico. Registra notas, comparte anónimamente en el foro, checa estadísticas.
                    </p>
                </div>
                <footer className="w-[100%] h-[20%] flex flex-col">

                    <div className="w-full h-full flex flex-row">

                        <div className="w-full h-full flex flex-col">
                            <p className="text-2xl font-bold text-black">
                                DayMood
                            </p>
                            <p className="text-xl text-black">
                                Aplicación de registro y personalización de emociones
                            </p>
                        </div>

                        <div className="w-full h-full flex flex-col text-black">
                            <ul>
                                <li>Nuestro equipo</li>
                                <li>Política de privacidad</li>
                                <li>Manual de Usuario</li>
                            </ul>
                        </div>
                    </div>

                    <div className="w-full h-full flex flex-col text-black">
                        <p>© [2026] Lúmina. Todos los derechos reservados.</p>
                    </div>
                </footer>
            </div>
            <div className="w-[50%] md:w-[40%] lg:w-[50%] h-full">
                <Image
                    src="/mock-down-right.png"
                    alt="DayMood Features Left"
                    fill
                    className="object-contain object-right-bottom"
                />
            </div>

        </div>
    )
}