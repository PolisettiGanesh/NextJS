import Image from 'next/image';
import ReactImage from './images/React.jpg'
const HomePage = () => {
  return (
    <div className="mx-auto w-5xl border-2 border-white p-4">
      <h1 className="text-3xl font-semibold text-center mt-5 mb-5">
        Welcome to NextJS Course
      </h1>
      <div className='flex gap-4'>
        <Image src={'/nextJS.jpg'} alt="NextJS" width={200} height={150} className='shadow-lg'/>
        <Image src={ReactImage} alt="ReactJS" width={200} height={150} className='shadow-lg'/>
      </div>
    </div>
  );
};
export default HomePage;
