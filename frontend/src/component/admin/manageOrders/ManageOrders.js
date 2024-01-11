import ManageOrdersTable from "./ManageOrdersTable";
const ManageOrders = () => {
  return (
    <>
      <div className='bg-slate-900 py-10  pb-20 min-h-screen'>
        <div className='max-w-5xl mx-auto'>
          <div className='mx-5 mb-20'>
            <p className='text-white text-3xl font-bold mb-5'>Available Orders</p>
            <ManageOrdersTable />
          </div>
        </div>
      </div>
    </>
  );
};

export default ManageOrders;
