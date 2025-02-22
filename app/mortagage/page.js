"use client";

import { useState, useEffect } from "react";

export default function MortgageCalculator() {
  const [loanAmount, setLoanAmount] = useState(200000);
  const [interestRate, setInterestRate] = useState(5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  const calculateMortgage = (amount = loanAmount) => {
    const principal = parseFloat(amount);
    const rate = parseFloat(interestRate) / 100 / 12;
    const term = parseFloat(loanTerm) * 12;

    if (rate === 0) {
      setMonthlyPayment((principal / term).toFixed(2));
    } else {
      const monthly =
        (principal * rate * Math.pow(1 + rate, term)) /
        (Math.pow(1 + rate, term) - 1);
      setMonthlyPayment(monthly.toFixed(2));
    }
  };

  useEffect(() => {
    calculateMortgage();
  }, [loanAmount, interestRate, loanTerm]);

  const handleLoanChange = (e) => {
    const amount = e.target.value;
    setLoanAmount(amount);
    calculateMortgage(amount);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-96 p-6 shadow-lg border rounded-lg">
        <div className="space-y-4">
          <h2 className="text-xl font-bold">Mortgage Calculator</h2>
          <input
            type="range"
            min="50000"
            max="1000000"
            step="1000"
            value={loanAmount}
            onChange={handleLoanChange}
            className="w-full"
          />
          <p className="text-center font-semibold">Loan Amount: ${loanAmount}</p>
          <div className="flex justify-between">
            <label className="font-semibold">Interest Rate (%)</label>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-20 p-2 border rounded"
            />
          </div>
          <div className="flex justify-between">
            <label className="font-semibold">Loan Term (years)</label>
            <input
              type="number"
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-20 p-2 border rounded"
            />
          </div>
          <p className="text-lg font-semibold text-center mt-4">
            Monthly Payment: ${monthlyPayment}
          </p>
          <button className="w-full p-2 bg-green-500 text-white rounded mt-4">
            Get Approved
          </button>
        </div>
      </div>
    </div>
  );
}
