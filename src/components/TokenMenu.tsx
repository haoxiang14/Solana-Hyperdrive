import React, { useEffect, useState } from "react";

const TokenMenu: React.FC = () => {
    
    return(
    <div className="bg-gray-800 p-4">
        <div className="flex justify-center mb-4">
            <button
            className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
            >
            Strict List
            </button>
            <button
            className="px-4 py-2 bg-green-500 text-white rounded"
            >
            All List
            </button>
        </div>

        <div className="max-h-40 overflow-y-auto">
            <ul className="text-white">
            </ul>
        </div>
    </div>
    );
};

export default TokenMenu;