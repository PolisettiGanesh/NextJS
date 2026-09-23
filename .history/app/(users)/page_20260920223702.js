import Image from "next/image";
const HomePage = ()=>{
  return(
    <div className="mx-auto w-5xl border-2 border-white ">
      <h1 className='text-3xl font-semibold text-center mt-5 mb-5'>Welcome to NextJS Course</h1>
      <Image
      src={'/public/nextJS.jpg'}
      alt="NextJS"
      width={70}
      height={70}
      />
    </div>

  )
}
export default HomePage;
