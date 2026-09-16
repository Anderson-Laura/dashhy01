function TransferModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center px-4 py-6 z-50">

      <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-md w-full shadow-2xl">

        {/* Icon */}
        <div className="w-14 h-14 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-2xl mx-auto mb-5">
          <b>!</b>
        </div>

        {/* Title */}
        <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center">
          Transfer Unavailable
        </h2>

        {/* Message */}
        <p className="text-slate-500 text-sm sm:text-base text-center mt-3 leading-relaxed">
          Dear DAVID LISA, You will have to deposit $20,000 into this account before you can make a perfect transaction.
        </p>

        {/* Close */}
        <button
          onClick={onClose}
          className="w-full bg-red-700 hover:bg-red-800 text-white py-3 rounded-lg font-semibold mt-6 transition"
        >
          Close
        </button>

      </div>
    </div>
  );
}

export default TransferModal;
