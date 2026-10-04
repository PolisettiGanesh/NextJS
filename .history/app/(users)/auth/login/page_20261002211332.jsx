import React from 'react';

function page() {
  return (
    <>
      <div className="text-center text-orange-500 flex flex-col justify-center items-center border-2 border-white shadow-2xl max-w-xl mx-auto">
        <h2>Welcome Back</h2>
        <form >
            <div className='flex flex-col gap-4'>
            <div className="mt-2 ">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Enter email" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder="Enter Password" />
          </div>
            </div>
        </form>
      </div>
    </>
  );
}

export default page;
