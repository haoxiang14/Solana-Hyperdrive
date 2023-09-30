import { useState, useEffect } from "react";
import TokenListModal from "./TokenListModal";

const SwapInterface = ({ selectedTokens, setSelectedTokens }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [tokens, setTokens] = useState([])
    const [token1, setToken1] = useState(null)
    const [token2, setToken2] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const allResponse = await fetch("https://token.jup.ag/all")
                if (!allResponse.ok) {
                    throw new Error('Network response was not ok');
                }
                const responseAll = await allResponse.json();
                setTokens(responseAll);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        console.log('cibai', selectedTokens)
        if (!tokens || selectedTokens.length !== 2) return
        setToken1(tokens.filter((e) => e.symbol.toLowerCase() === selectedTokens[0].toLowerCase())[0])
        setToken2(tokens.filter((e) => e.symbol.toLowerCase() === selectedTokens[1].toLowerCase())[0])
    }, [selectedTokens])

    return (
        <>
        <TokenListModal 
            isOpen={isOpen} 
            toggleModal={() => setIsOpen(false)} 
            tokens={tokens} 
            modalSelectToken={(token) => {
                setSelectedTokens((old) => {
                    let newTokens = [token, old[1] ?? '']
                    if (old.length === 3) newTokens = newTokens.reverse()
                    return newTokens
                })
                setIsOpen(false)
            }} />
    <div className="mt-10 md:mt-20 w-full max-w-md z-10 mx-auto">
        <div className="flex justify-end mb-2">
            <div className="flex flex-row w-full">
            <div>
                <button className="h-fit cursor-pointer border rounded-full p-[calc(0.5rem-1px)] text-v2-lily/80 bg-v2-background border-transparent hover:border fill-white-25 hover:border-v2-primary/50 hover:text-v2-primary focus:outline-1">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_9115_125076)">
                        <path d="M11.6464 4.23513V0.706082L10.4109 1.94156C9.31705 0.741165 7.72888 0 5.99976 0C2.68246 0 -0.000244141 2.6827 -0.000244141 6C-0.000244141 9.3173 2.68178 12 5.99976 12C7.69381 12 9.21117 11.2939 10.3057 10.165L9.31773 9.14128C8.50577 10.0234 7.30536 10.5879 5.99976 10.5879C3.45867 10.5879 1.41192 8.5411 1.41192 6.00002C1.41192 3.45894 3.45867 1.41218 5.99976 1.41218C7.34111 1.41218 8.5759 2.01238 9.42293 2.92954L8.11732 4.23515L11.6464 4.23513Z" fill="currentColor"></path>
                        </g>
                        <defs>
                        <clipPath id="clip0_9115_125076">
                            <rect width="12" height="12" fill="white"></rect>
                        </clipPath>
                        </defs>
                    </svg>
                </button>
            </div>
            <div className="ml-auto flex flex-row space-x-1">
                <div>
                    <button className="h-fit cursor-pointer border px-[calc(0.75rem-1px)] py-[calc(0.5rem-1px)] rounded-full text-v2-lily/80 bg-v2-background border-transparent hover:border fill-white-25 hover:border-v2-primary/50 hover:text-v2-primary focus:outline-1 flex items-center space-x-2">
                        <div className="text-white/35 fill-current">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_10835_148498)">
                                <path d="M1.5 6C1.5 4.34595 2.84591 3 4.5 3V4.5L7.5 2.25L4.5 0V1.5C2.01855 1.5 0 3.51855 0 6C0 8.48145 2.01855 10.5 4.5 10.5H6.75V9H4.5C2.84595 9 1.5 7.6541 1.5 6Z" fill="inherit"></path>
                                <path d="M8.25 1.5H12V3H8.25V1.5Z" fill="inherit"></path>
                                <path d="M8.25 5.25H12V6.75H8.25V5.25Z" fill="inherit"></path>
                                <path d="M8.25 9H12V10.5H8.25V9Z" fill="inherit"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_10835_148498">
                                    <rect width="12" height="12" fill="inherit"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        </div>
                        <span className="flex text-xs leading-none">Auto</span>
                    </button>
                </div>
                <div>
                    <button className="h-fit cursor-pointer border px-[calc(0.75rem-1px)] py-[calc(0.5rem-1px)] rounded-full text-v2-lily/80 bg-v2-background border-transparent hover:border fill-white-25 hover:border-v2-primary/50 hover:text-v2-primary focus:outline-1 flex items-center space-x-0.5 text-xs leading-none">
                        <span>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_10794_148239)">
                                <path d="M10.7997 7.8H10.7156C10.4516 6.768 9.51561 6 8.39961 6C7.28361 6 6.34757 6.768 6.08361 7.8H1.19961C0.863609 7.8 0.599609 8.064 0.599609 8.4C0.599609 8.736 0.863609 9 1.19961 9H6.08361C6.34761 10.032 7.28361 10.8 8.39961 10.8C9.51561 10.8 10.4517 10.032 10.7156 9H10.7997C11.1357 9 11.3997 8.736 11.3997 8.4C11.3997 8.064 11.1357 7.8 10.7997 7.8ZM8.39965 9.6C7.73963 9.6 7.19965 9.06002 7.19965 8.4C7.19965 7.73998 7.73963 7.2 8.39965 7.2C9.05967 7.2 9.59965 7.73998 9.59965 8.4C9.59965 9.06002 9.05967 9.6 8.39965 9.6Z" fill="currentColor"></path>
                                <path d="M1.19961 4.19995H1.28365C1.54765 5.23195 2.48365 5.99995 3.59965 5.99995C4.71565 5.99995 5.65169 5.23195 5.91565 4.19995H10.7997C11.1357 4.19995 11.3997 3.93595 11.3997 3.59995C11.3997 3.26395 11.1357 2.99995 10.7997 2.99995H5.91565C5.65165 1.96795 4.71565 1.19995 3.59965 1.19995C2.48365 1.19995 1.54761 1.96795 1.28365 2.99995H1.19961C0.863609 2.99995 0.599609 3.26395 0.599609 3.59995C0.599609 3.93595 0.863609 4.19995 1.19961 4.19995ZM3.59961 2.39995C4.25963 2.39995 4.79961 2.93993 4.79961 3.59995C4.79961 4.25997 4.25963 4.79995 3.59961 4.79995C2.93959 4.79995 2.39961 4.25997 2.39961 3.59995C2.39961 2.93993 2.93959 2.39995 3.59961 2.39995Z" fill="currentColor"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_10794_148239">
                                    <rect width="12" height="12" fill="currentColor"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        </span>
                        <span>
                        
                        </span>
                    </button>
                </div>
                <div>
                    <button className="h-fit cursor-pointer border rounded-full p-[calc(0.5rem-1px)] text-v2-lily/80 bg-v2-background border-transparent hover:border fill-white-25 hover:border-v2-primary/50 hover:text-v2-primary focus:outline-1 flex items-center space-x-2">
                        <span className="inline-block">
                        <svg width="12" height="12" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.71971 1.2926L6.41471 2.9726C6.11846 3.06573 5.83097 3.18635 5.55971 3.32761L4.14971 2.35761L2.33979 4.16753L3.31479 5.57252C3.17292 5.84439 3.05355 6.13003 2.95979 6.42753L1.27979 6.73252V9.29252L2.95979 9.59751C3.05354 9.89564 3.17729 10.18 3.31979 10.4525L2.33979 11.8575L4.14971 13.6674L5.5547 12.6974C5.82719 12.8399 6.11657 12.9587 6.4147 13.0524L6.71969 14.7324H9.27969L9.58468 13.0524C9.88218 12.9587 10.1678 12.8393 10.4397 12.6974L11.8447 13.6674L13.6546 11.8575L12.6796 10.4525C12.8208 10.1813 12.9415 9.89878 13.0346 9.60252L14.7196 9.29252V6.73252L13.0346 6.42753C12.9415 6.1319 12.8252 5.84815 12.6846 5.57753L13.6546 4.16753L11.8447 2.35761L10.4397 3.32761C10.1678 3.18574 9.88218 3.06636 9.58468 2.9726L9.27969 1.2926H6.71971ZM7.9997 4.9726C9.67842 4.9726 11.0397 6.33385 11.0397 8.0126C11.0397 9.69135 9.67846 11.0526 7.9997 11.0526C6.32095 11.0526 4.95971 9.69135 4.95971 8.0126C4.95971 6.33385 6.32095 4.9726 7.9997 4.9726Z" fill="currentColor"></path>
                        </svg>
                        </span>
                    </button>
                </div>
            </div>
            </div>
        </div>
        <div className="bg-gray-700 dark:bg-v2-background rounded-2xl backdrop-blur-[20px] p-4 shadow-swap2-light dark:shadow-swap2-dark">
            <form>
            <div className="flex-col space-y-2 relative">
                <div className="flex justify-between">
                    <label className="text-sm font-medium text-black/90 dark:text-white">You're paying</label>
                    <div className="flex space-x-2"></div>
                </div>
                <div className="p-4 h-[72px] border border-transparent relative bg-gray-800 dark:bg-v2-background-dark rounded-xl flex flex-col space-y-3 group focus-within:border-v2-primary/50 focus-within:shadow-swap-input-dark">
                    <div className="flex">
                        <div className="flex justify-between items-center group/select">
                        <button type="button" 
                        onClick={() => {
                            setIsOpen(true)
                        }}
                        className="py-2 px-3 h-10 rounded-xl flex space-x-3 items-center bg-gray-700 dark:bg-v2-background border dark:group-hover/select:border-v2-primary/50 dark:group-hover/select:bg-[rgba(199,242,132,0.2)] dark:group-hover/select:shadow-swap-input-dark border-transparent">
                            <div className="w-6 h-6 text-xs flex items-center justify-center rounded-full">
                                <span className="relative">
                                    {token1 && (
                                        <th> <img src={token1.logoURI} alt="Avatar" className="w-6 h-6 rounded-full" /></th>
                                    )}
                                </span>
                            </div>
                            <div className="font-semibold text-sm text-white" translate="no">
                                {token1 && token1.symbol}
                            </div>
                            <div className="text-black/25 dark:text-white/25 group-hover/select:text-[#00D1DF] dark:group-hover/select:text-v2-primary fill-current">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z" fill="inherit"></path>
                                </svg>
                            </div>
                        </button>
                        </div>
                        <span className="flex-1 text-right">
                        <div className="flex flex-col text-right h-full">
                            <input name="fromValue" data-lpignore="true" placeholder="0.00" className="h-full w-full bg-transparent disabled:cursor-not-allowed disabled:opacity-100 disabled:text-black dark:text-white text-right font-semibold dark:placeholder:text-white/25 text-base md:text-xl outline-none" type="text" value=""/>

                            </div>
                        </span>
                    </div>
                </div>
                <div className="relative flex justify-center">
                    <hr className="absolute w-full border-jupiter-input-light dark:border-[rgba(25,35,45,0.35)] top-[calc(50%-1px)] -z-0"/>
                    <div className="inline-block z-10">
                        <button type="button" className="group/flip bg-gray-700 dark:bg-v2-background w-8 h-8 rounded-full cursor-pointer flex flex-col justify-center border-[3px] dark:border-[rgba(25,35,45,0.75)] dark:text-white-25 dark:hover:border-v2-primary dark:hover:shadow-swap-input-dark">
                        <span className="w-full text-white/50 fill-current flex justify-center transition-none group-hover/flip:text-v2-primary/50 dark:group-hover/flip:text-v2-primary">
                            <svg width="21" height="22" viewBox="0 0 21 22" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.51043 7.47998V14.99H7.77043V7.47998L9.66043 9.36998L10.5505 8.47994L7.5859 5.51453C7.3398 5.26925 6.94114 5.26925 6.69504 5.51453L3.73047 8.47994L4.62051 9.36998L6.51043 7.47998Z" fill="currentColor"></path>
                                <path d="M14.4902 14.52V7.01001H13.2302V14.52L11.3402 12.63L10.4502 13.5201L13.4148 16.4855C13.6609 16.7308 14.0595 16.7308 14.3056 16.4855L17.2702 13.5201L16.3802 12.63L14.4902 14.52Z" fill="currentColor"></path>
                            </svg>
                        </span>
                        </button>
                    </div>
                </div>
                <div className="flex justify-between !-mt-0">
                    <label className="text-sm font-medium text-black/90 dark:text-white">To receive</label>
                    <div className="flex"></div>
                </div>
                <div className="p-4 h-[72px] border border-[#EFF0F0] dark:border-0 dark:bg-[rgba(14,19,32,0.3)] rounded-xl flex flex-col space-y-3">
                    <div className="flex">
                        <div className="flex justify-between items-center group/select">
                        <button type="button" 
                        onClick={() => {
                            setSelectedTokens((old)=> [...old.reverse(), 'PLACEHOLDER'])
                            setIsOpen(true)
                        }}
                        className="py-2 px-3 h-10 rounded-xl flex space-x-3 items-center bg-gray-700 dark:bg-v2-background border dark:group-hover/select:border-v2-primary/50 dark:group-hover/select:bg-[rgba(199,242,132,0.2)] dark:group-hover/select:shadow-swap-input-dark border-transparent">
                            <div className="w-6 h-6 text-xs flex items-center justify-center rounded-full">
                                <span className="relative">
                                    {token2 && (
                                        <th> <img src={token2.logoURI} alt="Avatar" className="w-6 h-6 rounded-full" /></th>
                                    )}
                                </span>
                            </div>
                            <div className="font-semibold text-sm text-white" translate="no">
                                {token2 && token2.symbol}
                            </div>
                            <div className="text-black/25 dark:text-white/25 group-hover/select:text-[#00D1DF] dark:group-hover/select:text-v2-primary fill-current">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="inherit" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292893 0.292893C0.683416 -0.097631 1.31658 -0.097631 1.7071 0.292893L4.99999 3.58579L8.29288 0.292893C8.6834 -0.0976311 9.31657 -0.0976311 9.70709 0.292893C10.0976 0.683417 10.0976 1.31658 9.70709 1.70711L5.7071 5.70711C5.31657 6.09763 4.68341 6.09763 4.29289 5.70711L0.292893 1.70711C-0.0976309 1.31658 -0.0976309 0.683417 0.292893 0.292893Z" fill="inherit"></path>
                                </svg>
                            </div>
                        </button>
                        </div>
                        <span className="flex-1 text-right h-10">
                            <div className="flex flex-col text-right h-full">
                                <input name="toValue" data-lpignore="true" placeholder="" className="h-full w-full bg-transparent disabled:cursor-not-allowed disabled:opacity-100 disabled:text-black dark:text-white text-right font-semibold dark:placeholder:text-white/25 text-base md:text-xl outline-none" type="text" value=""/>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
            <div className="!bg-transparent css-1lpgtt2">
                <button className="mt-3 h-full w-full rounded-xl text-white group bg-none bg-[#141519] dark:bg-[#121D28] hover:bg-gradient-to-r from-[rgba(199,242,132,1))] to-[rgba(0,190,240,1)] border border-transparent dark:hover:border dark:hover:border-v2-primary disabled:cursor-not-allowed">
                    <div className="rounded-xl bg-v2-text-gradient dark:bg-[rgba(18,29,40,1)] bg-clip-text text-transparent group-disabled:bg-none group-disabled:text-opacity-25 group-disabled:text-[#CFF3FF] py-5 text-lg font-medium leading-none">
                        <span className="text-white font-bold">
                            Swap
                        </span>
                    </div>
                </button>
            </div>
            </form>
        </div>

    </div>
</>
    );
}



export default SwapInterface;
