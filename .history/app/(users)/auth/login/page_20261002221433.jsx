'use client';
import { useForm } from 'react-hook-form';
function page() {
  // const data = useForm();
  const { register, handleSubmit } = useForm();
    function handleData(data){
        console.log(data);
    }

  return (
    <>
      <div className=" text-orange-500 flex flex-col  items-center border-2 border-white shadow-xl shadow-amber-50 max-w-sm mx-auto p-4 ">
        <h2 className="text-4xl font-semibold">Welcome Back</h2>
        <form autoComplete="off" onSubmit={handleSubmit(handleData)}>
          <div className="flex flex-col gap-4 mt-4">
            <div className="mt-2 flex flex-col w-full ">
              <label htmlFor="email">Email</label>
              <input
              {...register('email')}
                type="email"
                placeholder="Enter email"
                className="border-2 mt-1 ml-2 rounded-lg p-2"
              />
            </div>
            <div className="mt-2 flex flex-col w-full">
              <label htmlFor="password">Password</label>
              <input
              {...register('password')}
                type="password"
                placeholder="Enter Password"
                className="mt-1 border-2 ml-2 rounded-lg p-2"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold rounded p-2"
            >
              Submit{' '}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default page;
