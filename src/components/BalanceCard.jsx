import { DEMO_USER } from "../data/bank";
import BankLogo from "./BankLogo";

function BalanceCard() {
  const formatMoney = (amount) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(amount);
  };

  return (
    <div className="bg-gradient-to-br from-green-600 to-indigo-700 rounded-2xl p-5 sm:p-7 md:p-8 text-white shadow-lg">

      <div className="flex items-start justify-between gap-4">

        <div>
          <p className="text-blue-100 text-sm">
            Available Balance
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 break-all">
            {formatMoney(DEMO_USER.balance)}
          </h2>
        </div>

        <div className="hidden sm:block">
          <BankLogo />
        </div>

      </div>

      <div className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

        <div>
          <p className="text-blue-100 text-xs sm:text-sm">
            Account Holder
          </p>

          <p className="font-semibold mt-1">
            {DEMO_USER.name}
          </p>
        </div>

        <div>
          <p className="text-blue-100 text-xs sm:text-sm">
            Account Number
          </p>

          <p className="font-semibold mt-1">
            **** **** {DEMO_USER.accountNumber}
          </p>
        </div>

      </div>
    </div>
  );
}

export default BalanceCard;
