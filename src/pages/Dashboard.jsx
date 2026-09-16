import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { DEMO_USER } from "../data/bank";

import BankHeader from "../components/BankHeader";
import BalanceCard from "../components/BalanceCard";
import TransferCard from "../components/TransferCard";
import TransferModal from "../components/TransferModal";
import TransactionHistory from "../components/TransactionHistory";

function Dashboard() {
  const navigate = useNavigate();

  const [showTransferMessage, setShowTransferMessage] =
    useState(false);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-slate-100">

      {/* Header */}
      <BankHeader onLogout={logout} />

      {/* Main */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">

        {/* Welcome */}
        <div className="mb-6 sm:mb-8">
          <p className="text-slate-500 text-sm">
            Welcome back
          </p>

          <h1 className="text-2xl sm:text-3xl font-bold text-slate-900">
            {DEMO_USER.name}
          </h1>
        </div>

        {/* Balance */}
        <BalanceCard />

        {/* Transfer */}
        <div className="mt-5 sm:mt-6">
          <TransferCard
            onTransfer={() =>
              setShowTransferMessage(true)
            }
          />
        </div>

        {/* Transactions */}
        <div className="mt-5 sm:mt-6">
          <TransactionHistory />
        </div>

      </main>

      {/* Transfer Modal */}
      {showTransferMessage && (
        <TransferModal
          onClose={() =>
            setShowTransferMessage(false)
          }
        />
      )}

    </div>
  );
}

export default Dashboard;
