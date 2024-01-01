import React from 'react'
import { Link } from 'react-router-dom'
import ManageProductTable from './ManageProductTable';

const Manageproduct = () => {
  return (
    <>
      <div className='bg-slate-900 min-h-screen'>
        <div className='max-w-5xl mx-auto'>
          <div>
            <Link to='/user/admin/manageproduct/addproduct'>
              <button className='bg-green-400 p-2 rounded-md my-5'>Add new Product</button>
            </Link>
          </div>
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