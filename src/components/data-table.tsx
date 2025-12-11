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

  // Don't render anything if there's no data
  if (!table.getRowModel().rows?.length) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {table.getRowModel().rows.map((row, index) => (
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
      ))}
      
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