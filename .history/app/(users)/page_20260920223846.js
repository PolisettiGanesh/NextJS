import Image from 'next/image';
const HomePage = () => {
  return (
    <div className="mx-auto w-5xl border-2 border-white p-4">
      <h1 className="text-3xl font-semibold text-center mt-5 mb-5">
        Welcome to NextJS Course
      </h1>
      <div className='d-f'>
        <Image src={'/nextJS.jpg'} alt="NextJS" width={200} height={150} />
        <Image src={'/nextJS.jpg'} alt="NextJS" width={200} height={150} />
      </div>
    </div>
  );
};
export default HomePage;
