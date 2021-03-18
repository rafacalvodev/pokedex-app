import React from 'react';


function Pagination({ prevPage, nextPage }) {
    return (
        <div className="flex justify-center my-7 bg-gray-700 text-gray-50 ">
            <div className="mx-4  bg-blue-500 rounded-md rounded">
                {prevPage ? <button className="p-3 rounded-md font-semibold"  onClick={prevPage}>Previous</button> : <button className="p-3 rounded-md rounded bg-blue-200 text-gray-400 font-semibold" onClick={prevPage} disabled>Previous</button>}
            </div>
            <div className="mx-4 bg-blue-500 rounded-md rounded font-semibold">
                {nextPage ? <button className="px-6 py-3 font-semibold" onClick={nextPage}>Next</button> : <button className="px-6 py-3 bg-blue-200 text-gray-400 font-semibold" onClick={nextPage} disabled>Next</button>}
            </div>
        </div>
    );
}

export default Pagination;