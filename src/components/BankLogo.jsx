import { BANK_INFO } from "../data/bank";

function BankLogo() {
  return (
    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-600 flex items-center justify-center overflow-hidden shrink-0">
      {BANK_INFO.logo ? (
        <img
          src={BANK_INFO.logo}
          alt={`${BANK_INFO.name} logo`}
          className="w-full h-full object-contain"
        />
      ) : (
        <span className="text-white font-bold text-lg">
          {BANK_INFO.shortName}
        </span>
      )}
    </div>
  );
}

export default BankLogo;
