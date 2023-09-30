
const TokenListModal = ({  isOpen, toggleModal, tokens, modalSelectToken }) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center py-8">
          <div className="h-[calc(0.8_*_100vh)] bg-stone-900 border-0 p-8 border rounded-md transition overflow-y-scroll">
            <div className="flex justify-end mb-4">
              <button onClick={toggleModal}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
</svg>
              </button>

            </div>
              <table className="table">
                  <thead>
                      <tr>
                      <th></th>
                      <th> Name </th>
                      <th> Symbol </th>
                      </tr>
                  </thead>
                  <tbody>
                    {tokens && tokens.map((token, index) => (
                        <tr key={index} className="hover" onClick={() => modalSelectToken(token.symbol)}>
                            <th> <img src={token.logoURI} alt="Avatar" className="w-6 h-6 rounded-full" /></th>
                            <td>{token.name}</td>
                            <td>{token.symbol}</td>
                        </tr>
                    ))}
                  </tbody>
              </table>
          </div>
        </div>
      )}
    </>
  );
}

export default TokenListModal