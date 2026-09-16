function TransferCard({ onTransfer }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 sm:p-6">

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5">

        <div className="min-w-0">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900">
            Transfer Funds
          </h2>

          <p className="text-slate-500 text-sm mt-1 max-w-xl">
            Send money from your account to another account.
          </p>
        </div>

        <button
          onClick={onTransfer}
          className="w-full md:w-auto bg-red-600 hover:bg-red-700 active:bg-red-800 text-white px-6 py-3 rounded-lg font-semibold transition shrink-0"
        >
          Transfer Funds
        </button>

      </div>
    </div>
  );
}

export default TransferCard;
