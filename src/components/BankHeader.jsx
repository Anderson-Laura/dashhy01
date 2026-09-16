import { BANK_INFO } from "../data/bank";
import BankLogo from "./BankLogo";

function BankHeader({ onLogout }) {
  return (
    <header className="bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between gap-4">

          {/* Bank Logo + Name */}
          <div className="flex items-center gap-3 min-w-0">
            <BankLogo />

            <div className="min-w-0">
              <h1 className="font-bold text-base sm:text-xl truncate">
                {BANK_INFO.name}
              </h1>

              <p className="text-xs text-slate-400 hidden sm:block">
                Online Banking
              </p>
            </div>
          </div>

          {/* Logout */}
          <button
            onClick={onLogout}
            className="shrink-0 px-3 sm:px-5 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition"
          >
            Logout
          </button>

        </div>
      </div>
    </header>
  );
}

export default BankHeader;
