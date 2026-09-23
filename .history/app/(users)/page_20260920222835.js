import Image from "next/image";
const HomePage = ()=>{
  return(
    <div className="mx-auto w-5xl border-2 border-white ">
      <h1 className='text-3xl font-semibold text-center mt-5 mb-5'>Welcome to NextJS Course</h1>
      <Image
      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuTqzYEV1OdNSCwaaYRqImexL9Wo9Zc6MvqQJZbMaHjw&s=10'}
      width={70}
      height={70}

      />
    </div>

  )
}
export default HomePage;
