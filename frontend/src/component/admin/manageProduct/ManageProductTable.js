import React, { useEffect } from 'react';
import { MdDelete, MdEdit } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTable } from 'react-table';
import { getAdminProducts } from '../../../slices/adminSlice/adminSlice';
import { deleteProduct } from '../../../slices/productSlice/productsSlice';
import Loader from '../../layout/Loader/Loader';
import { STATUSES } from '../../../store/statuses';

const ManageProductTable = () => {
    const { products: data, status } = useSelector((state) => state.admin.productsData);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const location = useLocation();
    const handleEditClick = (orderId) => {
        navigate(`/admin/product/${orderId}`, { state: location.state });
    };
    useEffect(() => {
        if (data.length === 0)
            dispatch(getAdminProducts());
    }, [dispatch, data.length]);

    const handleDeleteClick = (productId) => {
        dispatch(deleteProduct({ productId })).then(() => {
            dispatch(getAdminProducts());
        })
    };
    const columns = [
        { Header: 'ID', accessor: '_id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Stock', accessor: 'stock' },
        {
            Header: 'Actions',
            accessor: 'actions',
            Cell: ({ row }) => (
                <div className="flex space-x-2">
                    <button
                        onClick={() => handleEditClick(row.original._id)}
                        className="text-blue-500 hover:underline focus:outline-none mx-2"
                    >
                        <MdEdit />
                    </button>
                    <button
                        onClick={() => handleDeleteClick(row.original._id)}
                        className="text-red-500 hover:underline focus:outline-none"
                    >
                        <MdDelete />
                    </button>
                </div>
            ),
        },
    ];

    function MyTable() {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({ columns, data });

        if (status === STATUSES.LOADING)
            return <Loader />

        return (
            <div className="overflow-x-auto">
                <table {...getTableProps()} className="min-w-full bg-white border border-gray-200">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="bg-slate-400">
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className="py-2 px-4 border-b border-gray-200 text-start">{column.render('Header')}</th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            const isOutOfStock = row.values.stock <= 0;

                            return (
                                <tr
                                    {...row.getRowProps()}
                                    className={`border-b border-gray-200 ${isOutOfStock ? 'bg-red-100' : ''}`}
                                >
                                    {row.cells.map(cell => (
                                        <td {...cell.getCellProps()} className="py-2 px-4">
                                            {cell.render('Cell')}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }

    return <MyTable />;
}

export default ManageProductTable;
