import React from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

const ManageProductTable = () => {
    const { data } = useSelector((state) => state.products);

    const columns = [
        { Header: 'ID', accessor: '_id' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Stock', accessor: 'stock' },
    ];

    function MyTable() {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({ columns, data });

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
