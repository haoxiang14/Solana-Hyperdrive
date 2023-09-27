import React, { useState } from "react";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css"



interface Props {
    title: string;
}

const AlphaBlock = (props: Props) => {
    const { title } = props;

    return (
        // <div className="my-4 mx-6 rounded-2xl p-4 flex flex-col bg-gray-800 h-[170px]">
        //     <div className="mb-2 flex items-center justify-between">
        //         <h2 className="flex items-center overflow-hidden text-lg font-semibold text-gray-200">
        //             {title}
        //         </h2>
        //         <div className="flex gap-1">
        //             <button id="navBtnPrev-newPools" className="inline-flex items-center border border-transparent font-medium shadow-sm focus:outline-none text-sm rounded-full p-1 pointer-events-none bg-gray-600/30 text-gray-500 hover:bg-gray-600/30 hover:text-gray-500" aria-label="Prev">
        //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="" width="14" height="14">
        //                     <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd"></path>
        //                 </svg>
        //             </button>
        //             <button id="navBtnNext-newPools" className="inline-flex items-center border border-transparent font-medium shadow-sm focus:outline-none text-sm rounded-full p-1 bg-violet-600/60 text-violet-200 hover:bg-violet-600/70 hover:text-violet-200" aria-label="Next">
        //                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="rotate-180" width="14" height="14">
        //                     <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd"></path>
        //                 </svg>
        //             </button>
        //         </div>
        //     </div>
        //     <div className="flex flex-col justify-between">
        //         <div className="keen-slider">
        //             <div className="keen-slider__slide lazy__slide" style={{ minWidth: '311px', maxWidth: '311px', transform: 'translate3d(0px, 0px, 0px)' }}>
        //                 <table className="mb-2 w-full text-sm text-gray-400">
        //                     <p> 1.    USDC/USDT     +0.4% </p>
        //                     <p> Test </p>
        //                     <p> Test </p>
        //                 </table>
        //             </div>
        //             <div className="keen-slider__slide lazy__slide" style={{ minWidth: '311px', maxWidth: '311px', transform: 'translate3d(0px, 0px, 0px)' }}>
        //                 <table className="mb-2 w-full text-sm text-gray-400">
        //                     {/* ... Table content ... */}
        //                 </table>
        //             </div>
        //         </div>
        //         <div className="flex justify-center gap-2">
        //             <button aria-label="Slide 1" className="bg-violet-600 h-2 w-2 rounded-full"></button>
        //             <button aria-label="Slide 2" className="bg-gray-600 h-2 w-2 rounded-full"></button>
        //         </div>

        //     </div>
        // </div>
        <div className="my-4 mx-6 rounded-2xl p-4 flex flex-col bg-gray-800 h-[170px]">
            <div className="flex flex-col justify-between flex-grow">
                <div className="mb-2 flex items-center justify-between">
                    <h2 className="flex items-center overflow-hidden text-lg font-semibold text-gray-200">
                        {title}
                    </h2>
                    <div className="flex gap-1">
                        <button  id="navBtnPrev" className="inline-flex items-center border border-transparent font-medium shadow-sm focus:outline-none text-sm rounded-full p-1 pointer-events-none bg-gray-600/30 text-gray-500 hover:bg-gray-600/30 hover:text-gray-500" aria-label="Prev">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="" width="14" height="14">
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                        <button  id="navBtnNext" className="inline-flex items-center border border-transparent font-medium shadow-sm focus:outline-none text-sm rounded-full p-1 bg-violet-600/60 text-violet-200 hover:bg-violet-600/70 hover:text-violet-200" aria-label="Next">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" className="rotate-180" width="14" height="14">
                                <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div className="keen-slider flex-grow">
                    <div className="keen-slider__slide lazy__slide" style={{ minWidth: '311px', maxWidth: '311px', transform: 'translate3d(0px, 0px, 0px)' }}>
                        <table className="mb-2 w-full text-sm text-gray-400">
                            <p>1.    USDC/USDT     +0.4%</p>
                            <p>Test</p>
                            <p>Test</p>
                        </table>
                    </div>
                    <div className="keen-slider__slide lazy__slide" style={{ minWidth: '311px', maxWidth: '311px', transform: 'translate3d(0px, 0px, 0px)' }}>
                        <table className="mb-2 w-full text-sm text-gray-400">
                            {/* ... Table content ... */}
                        </table>
                    </div>
                </div>
                <div className="flex justify-center gap-2">
                    <button aria-label="Slide 1" className="bg-violet-600 h-2 w-2 rounded-full"></button>
                    <button aria-label="Slide 2" className="bg-gray-600 h-2 w-2 rounded-full"></button>
                </div>
            </div>
        </div>


    );
}

export default AlphaBlock;