import Link from "next/link";

export default function Button({ href, children }: { href: string; children: React.ReactNode }) {
 
    return (
        <Link href={href} className="px-10 py-5 bg-white text-black rounded-full font-medium transition-colors duration-500 hover:bg-[#FEB4A7] shadow">
            {children}
        </Link>
    );
}