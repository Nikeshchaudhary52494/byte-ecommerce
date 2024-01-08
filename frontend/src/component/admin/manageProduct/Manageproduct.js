import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import ManageProductTable from './ManageProductTable';

const Manageproduct = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className='bg-slate-900 min-h-screen pb-20'>
        <div className='max-w-5xl mx-auto mb-20'>
          <button
            onClick={() => navigate('/admin/manageproduct/addproduct')}
            className='bg-green-400 mx-5 p-2 rounded-md my-5'>Add new Product</button>
          <div className='mx-5'>
            <p className='text-white text-3xl font-bold mb-5'>Available products</p>
            <ManageProductTable />
          </div>
        </div>
      </div>

    </>
  )
}

export default Manageproduct