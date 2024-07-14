import React from "react";

const Table = ({ columns, data }) => {
  return (
    <div className="flex flex-col shadow-lg">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="border rounded-lg overflow-hidden ">
            <table className="min-w-full divide-y divide-gray-900 border-collapse">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th
                      scope="col"
                      key={column.accessor}
                      className="bg-accredian-bg px-6 py-3 text-start text-lg font-medium text-accredian-blue uppercase "
                    >
                      {column.Header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 ">
                {data.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column) => (
                      <td
                        key={column.accessor}
                        className="px-6 py-4 whitespace-nowrap text-md font-medium text-gray-800 "
                      >
                        {row[column.accessor]}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
