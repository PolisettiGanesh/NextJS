import { discoverValidationDepths } from "next/dist/server/app-render/instant-validation/instant-validation";
import Image from "next/image";
const HomePage = ()=>{
  return(
    discoverValidationDepths
    <h1 className='text-3xl font-semibold text-center mt-5'>Welcome to NextJS Course</h1>

  )
}
export default HomePage;
