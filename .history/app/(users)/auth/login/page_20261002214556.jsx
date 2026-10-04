import React from 'react';

function page() {
  return (
    <>
      <div className="text-center text-orange-500 flex flex-col   items-center border-2 border-white shadow-2xl max-w-xl mx-auto ">
        <h2 className='text-4xl'>Welcome Back</h2>
        <form>
          <div className="flex flex-col gap-4 mt-4">
            <div className="mt-2 flex flex-col w-full   ">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="Enter email" className='border-2 ml-2 rounded-lg p-2' />
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input type="password" placeholder="Enter Password" className='border-2 ml-2 rounded-lg p-2'/>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default page;
