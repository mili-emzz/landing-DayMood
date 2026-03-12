import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full flex justify-center p-4">
            <nav className="bg-white shadow-[0_4px_20px_rgba(0,0,0,0.08)] rounded-full px-8 py-3 w-full max-w-4xl flex items-center justify-between border border-gray-100">
                <Link href="/" className="text-2xl font-bold text-black">
                    DayMood
                </Link>
                <ul className="flex items-center gap-2">
                    <li>
                        <Link href="/about" className="px-6 py-2 rounded-full text-gray-900 font-medium transition-colors duration-300 hover:bg-[#FFB4A2]">
                            Nosotras
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className="px-6 py-2 rounded-full text-gray-900 font-medium transition-colors duration-300 hover:bg-[#FFB4A2]">
                            Contacto
                        </Link>
                    </li>
                    <li>
                        <Link href="/download" className="px-6 py-2 rounded-full text-gray-900 font-medium transition-colors duration-300 hover:bg-[#FFB4A2]">
                            Descargar
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}