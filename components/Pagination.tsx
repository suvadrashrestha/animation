"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  limit: number;
  setPage: (page: number) => void;
  setLimit: (limit: number) => void;
}

const Pagination = ({
  currentPage,
  totalPages,
  limit,
  setPage,
  setLimit,
}: PaginationProps) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
      {/* Limit Selector */}
      <div className="flex items-center gap-2">
        <span className="text-sm">Rows per page:</span>
        <select
          value={limit}
          onChange={(e) => {
            setLimit(Number(e.target.value));
            setPage(1); // reset to page 1
          }}
          className="border rounded px-2 py-1"
        >
          {[2, 5, 10, 20, 50].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <button
          onClick={() => setPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 border cursor-pointer rounded disabled:opacity-50"
        >
          Prev
        </button>

        {pages.map((page) => (
          <button
            key={page}
            onClick={() => setPage(page)}
            className={`px-3 py-1 transition-all ease-in cursor-pointer border rounded ${
              currentPage === page ? "bg-[#1DA077] text-white" : "bg-white"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => setPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 border cursor-pointer rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
