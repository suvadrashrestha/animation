import Image from "next/image";
import React from "react";

interface TableProps<T> {
  data: T[];
  columns: { key: string; label: string }[];
  actions?: (item: T) => React.ReactNode;
}

const Table = <T,>({ data, columns, actions }: TableProps<T>) => {
  if (!data || data.length === 0)
    return (
      <div className="flex justify-center items-center  h-full">
        <Image
          src={"/images/no_data.png"}
          alt="no_data"
          className="w-auto h-auto"
          height={400}
          width={400}
        />
      </div>
    );

  return (
    <table className=" w-full [&_td]:border-b [&_th]:border-b border-collapse [&_th]:px-4 [&_th]:py-3 [&_td]:px-4 [&_td]:py-3 [&_td]:text-left ">
      <thead>
        <tr>
          {columns.map((col) => (
            <th key={col.key}>{col.label}</th>
          ))}
          {actions && <th>Actions</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((item, id) => (
          <tr key={id}>
            {columns.map((col) => {
              if (col.key === "companyName") {
                return (
                  <td key={col.key}>
                    {(item as Record<string, { name: string }>)["company"]
                      ?.name || "N/A"}
                  </td>
                );
              }
              return (
                <td key={col.key}>
                  {(item as Record<string, string>)[col.key]}
                </td>
              );
            })}
            {actions && <td>{actions(item)}</td>}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
