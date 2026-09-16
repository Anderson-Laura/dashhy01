import { transactions } from "../data/transactions";

function TransactionHistory() {
  const formatMoney = (amount) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">

      <div className="p-5 sm:p-6 border-b border-slate-200">
        <h2 className="text-lg sm:text-xl font-bold text-slate-900">
          Transaction History
        </h2>

        <p className="text-slate-500 text-sm mt-1">
          Your recent account activity
        </p>
      </div>

      <div className="divide-y divide-slate-100">

        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="p-4 sm:p-5 flex items-center justify-between gap-3"
          >

            {/* Transaction */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">

              <div
                className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full flex items-center justify-center font-bold shrink-0 ${
                  transaction.type === "credit"
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {transaction.type === "credit" ? "+" : "-"}
              </div>

              <div className="min-w-0">
                <p className="font-semibold text-slate-800 text-sm sm:text-base truncate">
                  {transaction.name}
                </p>

                <p className="text-xs sm:text-sm text-slate-400">
                  {transaction.date}
                </p>
              </div>

            </div>

            {/* Amount */}
            <p
              className={`font-bold text-xs sm:text-sm md:text-base whitespace-nowrap ${
                transaction.type === "credit"
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {transaction.type === "credit" ? "+" : "-"}
              {formatMoney(transaction.amount)}
            </p>

          </div>
        ))}

      </div>
    </div>
  );
}

export default TransactionHistory;
