import Link from "next/link";
import Button from "./button";
const Navigation = ()=>{
    return(
        <>
        <nav className="grid grid-cols-3 justify-baseline items-center pt-5 mb-5 w-full max-w-7xl mx-auto">
            <div className="font-semibold text-4xl">
                <h2>Thapa Technicle</h2>
            </div>
            <ul className="flex gap-9 cursor-pointer">
             <li><Link href='/'>Home</Link></li>
             <li><Link href='/dashboard'>Dashboard</Link></li>
             <li><Link href='/about/teams'>Team</Link></li>
             <li><Link href='/services'>services</Link></li>
            </ul>
            <div className="flex ms-[70px] gap-[50px] items-center">
               <Button text='Sign up'/>
               <Button text='Sign in'/>
            </div>
        </nav>
        </>
    )
}
export default Navigation;
