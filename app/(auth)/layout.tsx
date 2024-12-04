import React from 'react'

const AdminLayout = ({children} : {children: React.ReactNode}) => {
  return (
   <>
    <div className='border-2 rounded-lg p-2 flex justify-center bg-black text-white items-center'>
        <h2>Login Now , 20% off</h2>
    </div>
    {children}
   </>
  )
}

export default AdminLayout
