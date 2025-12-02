// "use client"

// import {
//   ColumnDef,
//   flexRender,
//   getCoreRowModel,
//   useReactTable,
// } from "@tanstack/react-table"

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableRow,
// } from "@/components/ui/table"

// interface DataTableProps<TData, TValue> {
//   columns: ColumnDef<TData, TValue>[]
//   data: TData[],
//   onRowClick?: (row: TData) => void;
// }

// export function DataTable<TData, TValue>({
//   columns,
//   data,
//   onRowClick,
// }: DataTableProps<TData, TValue>) {
//   const table = useReactTable({
//     data,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//   })

//   return (
//     <div className="overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm">
//       <Table>
//         <TableBody>
//           {table.getRowModel().rows?.length ? (
//             table.getRowModel().rows.map((row, index) => (
//               <TableRow
//                 onClick={() => onRowClick?.(row.original)}
//                 key={row.id}
//                 data-state={row.getIsSelected() && "selected"}
//                 className="cursor-pointer transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 hover:shadow-sm border-b border-slate-100 dark:border-slate-800 last:border-0 group"
//                 style={{ 
//                   animation: 'fadeIn 0.4s ease-out forwards',
//                   animationDelay: `${index * 50}ms`,
//                   opacity: 0
//                 }}
//               >
//                 {row.getVisibleCells().map((cell) => (
//                   <TableCell 
//                     key={cell.id} 
//                     className="text-sm p-5 text-slate-700 dark:text-slate-300 group-hover:text-slate-900 dark:group-hover:text-slate-100 transition-colors"
//                   >
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             ))
//           ) : (
//             <TableRow className="hover:bg-transparent">
//               <TableCell 
//                 colSpan={columns.length} 
//                 className="h-20 text-slate-500 dark:text-slate-400 text-center"
//                 style={{ 
//                   animation: 'fadeIn 0.4s ease-out forwards',
//                   opacity: 0
//                 }}
//               >
//                 <div className="flex flex-col items-center gap-1.5">
//                   <svg 
//                     className="w-8 h-8 text-slate-300 dark:text-slate-600" 
//                     fill="none" 
//                     viewBox="0 0 24 24" 
//                     stroke="currentColor"
//                   >
//                     <path 
//                       strokeLinecap="round" 
//                       strokeLinejoin="round" 
//                       strokeWidth={1.5} 
//                       d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
//                     />
//                   </svg>
//                   <span className="text-xs font-medium">No results found</span>
//                 </div>
//               </TableCell>
//             </TableRow>
//           )}
//         </TableBody>
//       </Table>
      
//       <style dangerouslySetInnerHTML={{
//             __html: `
//                 @keyframes fadeIn {
//                     from {
//                     opacity: 0;
//                     transform: translateY(8px);
//                     }
//                     to {
//                     opacity: 1;
//                     transform: translateY(0);
//                     }
//                 }
//                 `
//             }} 
//         />
//     </div>
//   )
// }

"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[],
  onRowClick?: (row: TData) => void;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  onRowClick,
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row, index) => (
          <div
            key={row.id}
            onClick={() => onRowClick?.(row.original)}
            className="card-glow group"
            style={{ 
              animation: 'cardFadeIn 0.6s ease-out forwards',
              animationDelay: `${index * 100}ms`,
              opacity: 0
            }}
          >
            <div className="card-content">
              {row.getVisibleCells().map((cell, cellIndex) => (
                <div 
                  key={cell.id}
                  className={cellIndex === 0 ? "text-lg font-semibold text-slate-900 dark:text-white mb-3" : "text-sm text-slate-600 dark:text-slate-400 mb-2"}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <div 
          className="col-span-full flex flex-col items-center justify-center py-20"
          style={{ 
            animation: 'cardFadeIn 0.6s ease-out forwards',
            opacity: 0
          }}
        >
          <svg 
            className="w-16 h-16 text-slate-300 dark:text-slate-600 mb-4" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" 
            />
          </svg>
          <span className="text-slate-500 dark:text-slate-400 font-medium">No results found</span>
        </div>
      )}
      
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes cardFadeIn {
            from {
              opacity: 0;
              transform: translateY(20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          @keyframes glow {
            0%, 100% {
              box-shadow: 0 0 20px rgba(99, 102, 241, 0.3),
                          0 0 40px rgba(99, 102, 241, 0.1),
                          inset 0 0 20px rgba(99, 102, 241, 0.05);
            }
            50% {
              box-shadow: 0 0 30px rgba(99, 102, 241, 0.5),
                          0 0 60px rgba(99, 102, 241, 0.2),
                          inset 0 0 30px rgba(99, 102, 241, 0.1);
            }
          }
          
          .card-glow {
            position: relative;
            background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(249,250,251,0.9) 100%);
            border-radius: 16px;
            padding: 1px;
            cursor: pointer;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow: hidden;
          }
          
          .dark .card-glow {
            background: linear-gradient(135deg, rgba(51,65,85,0.5) 0%, rgba(30,41,59,0.5) 100%);
          }
          
          .card-glow::before {
            content: '';
            position: absolute;
            inset: 0;
            border-radius: 16px;
            padding: 2px;
            background: linear-gradient(135deg, 
              rgba(99, 102, 241, 0.6),
              rgba(139, 92, 246, 0.6),
              rgba(236, 72, 153, 0.6)
            );
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            opacity: 0;
            transition: opacity 0.4s ease;
          }
          
          .card-glow:hover::before {
            opacity: 1;
          }
          
          .card-glow:hover {
            transform: translateY(-8px) scale(1.02);
            animation: glow 2s ease-in-out infinite;
          }
          
          .card-content {
            position: relative;
            background: white;
            border-radius: 15px;
            padding: 24px;
            height: 100%;
            transition: background 0.3s ease;
          }
          
          .dark .card-content {
            background: rgba(15, 23, 42, 0.8);
          }
          
          .card-glow:hover .card-content {
            background: rgba(255, 255, 255, 0.98);
          }
          
          .dark .card-glow:hover .card-content {
            background: rgba(15, 23, 42, 0.95);
          }
        `
      }} />
    </div>
  )
}