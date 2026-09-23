import Link from "next/link";
const Navigation = ()=>{
    return(
        <>
        <nav className="grid grid-cols-3 ms-5 mt-5 mb-5">
            <div className="font-semibold text-4xl">
                <h2>Thapa Technicle</h2>
            </div>
            <ul className="flex gap-9 cursor-pointer">
             <li><Link href='/'>Home</Link></li>
             <li><Link href='/about'>About</Link></li>
             <li><Link href='/about/teams'>Team</Link></li>
             <li><Link href='/services'>services</Link></li>
            </ul>
            <div className="flex justify-between items-center">
                <button>Signup</button>
                <button>Signin</button>
            </div>
        </nav>
        </>
    )
}
export default Navigation;
