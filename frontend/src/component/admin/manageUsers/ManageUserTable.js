import React from 'react';
import { useSelector } from 'react-redux';
import { useTable } from 'react-table';

const ManageUserTable = () => {
    const adminData = useSelector((state) => state.admin.data);
    const users = adminData ? adminData.users : [];

    const columns = [
        { Header: 'User ID', accessor: '_id' },
        { Header: 'Email', accessor: 'email' },
        { Header: 'Name', accessor: 'name' },
        { Header: 'Role', accessor: 'role' },
    ];
    function MyTable() {
        const {
            getTableProps,
            getTableBodyProps,
            headerGroups,
            rows,
            prepareRow,
        } = useTable({ columns, data: users });

        return (
            <div className="overflow-x-auto">
                <table {...getTableProps()} className="min-w-full bg-white border border-gray-200">
                    <thead>
                        {headerGroups.map(headerGroup => (
                            <tr {...headerGroup.getHeaderGroupProps()} className="bg-gray-100">
                                {headerGroup.headers.map(column => (
                                    <th {...column.getHeaderProps()} className="py-2 px-4 border-b border-gray-200 text-start">
                                        {column.render('Header')}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {rows.map(row => {
                            prepareRow(row);
                            const isAdmin = row.values.role === 'admin';

                            return (
                                <tr
                                    {...row.getRowProps()}
                                    className={`border-b border-gray-200 ${isAdmin ? 'bg-green-200' : ''}`}
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

export default ManageUserTable;
