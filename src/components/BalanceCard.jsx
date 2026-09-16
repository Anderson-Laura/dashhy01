// import { DEMO_USER } from "../data/bank";
// import BankLogo from "./BankLogo";

// function BalanceCard() {
//   const formatMoney = (amount) => {
//     return new Intl.NumberFormat("en-US", {
//       style: "currency",
//       currency: "USD",
//     }).format(amount);
//   };

//   return (
//     <div className="bg-gradient-to-br from-red-600 to-indigo-700 rounded-2xl p-5 sm:p-7 md:p-8 text-white shadow-lg">

//       <div className="flex items-start justify-between gap-4">

//         <div>
//           <p className="text-blue-100 text-sm">
//             Available Balance
//           </p>

//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2 break-all">
//             {formatMoney(DEMO_USER.balance)}
//           </h2>
//         </div>

//         <div className="hidden sm:block">
//           <BankLogo />
//         </div>

//       </div>

//       <div className="mt-7 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">

//         <div>
//           <p className="text-blue-100 text-xs sm:text-sm">
//             Account Holder
//           </p>

//           <p className="font-semibold mt-1">
//             {DEMO_USER.name}
//           </p>
//         </div>

//         <div>
//           <p className="text-blue-100 text-xs sm:text-sm">
//             Account Number
//           </p>

//           <p className="font-semibold mt-1">
//             **** **** {DEMO_USER.accountNumber}
//           </p>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default BalanceCard;



import { DEMO_USER } from "../data/bank";
import BankLogo from "./BankLogo";

function BalanceCard() {
  const formatMoney = (amount) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(amount);
  };

  return (
    <div className="space-y-5">
      {/* Main Balance Card */}
      <div className="bg-gradient-to-br from-red-600 to-indigo-700 rounded-2xl p-5 sm:p-7 md:p-8 text-white shadow-lg">
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

      {/* Savings & Deposit */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Savings */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                Savings
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                {formatMoney(DEMO_USER.savings)}
              </h3>
            </div>

            {/* <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center text-2xl">
              💰
            </div> */}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Your current savings balance
          </p>

          {/* <button className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition">
            Add to Savings
          </button> */}
        </div>

        {/* Deposit */}
        <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-md border border-gray-100">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">
                Deposit
              </p>

              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-2">
                {formatMoney(DEMO_USER.deposit)}
              </h3>
            </div>

            {/* <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl">
              🏦
            </div> */}
          </div>

          <p className="text-sm text-gray-500 mt-4">
            Recent deposit amount
          </p>

          {/* <button className="w-full mt-5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition">
            Make a Deposit
          </button> */}
        </div>
      </div>
    </div>
  );
}

export default BalanceCard;
