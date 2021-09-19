import * as React from 'react';

// TODO: Improve types
// https://react.christmas/2020/22

interface TableProps<T> {
  columns: Array<keyof T>;
  rows: Array<T>;

  renderCell: (column: keyof T, row: T) => React.ReactNode;
}

export default function Table<T>({ columns, rows, renderCell }: TableProps<T>) {
  return (
    <table>
      <thead>
        <tr>
          {columns.map((column, columnIndex) => (
            <th
              key={columnIndex}
              style={{ textTransform: 'capitalize', textAlign: 'left' }}
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map(column => renderCell(column, row))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
