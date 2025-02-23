"use client";

import { useState, useEffect } from "react";
import Footer from "../Components/Footer";
import Link from "next/link";

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

  return (
    <div className="min-h-screen w-full px-4 md:px-8 lg:px-16">
      <div className="flex flex-col items-center justify-center py-32">
        <div className="w-full max-w-6xl bg-green-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-3xl md:text-5xl font-bold text-center">Mortgage Calculator</h2>
          <p className="text-center text-gray-700 mt-2 text-sm md:text-lg">
            Our mortgage calculator includes key factors like homeowners association fees, property taxes, and private mortgage insurance (PMI). Get the whole picture and calculate your total monthly payment.
          </p>

          <div className="my-6">
            <label className="block font-semibold">Loan Amount</label>
            <input
              type="range"
              min="50000"
              max="1000000"
              step="1000"
              value={loanAmount}
              onChange={(e) => setLoanAmount(e.target.value)}
              className="w-full mt-2"
            />
            <p className="text-center text-lg font-semibold mt-2">${loanAmount}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center w-full">
              <label className="font-semibold">Interest Rate (%)</label>
              <input
                type="number"
                value={interestRate}
                onChange={(e) => setInterestRate(e.target.value)}
                className="w-full p-2 border rounded-lg text-center"
              />
            </div>
            <div className="flex flex-col items-center w-full">
              <label className="font-semibold">Loan Term (years)</label>
              <input
                type="number"
                value={loanTerm}
                onChange={(e) => setLoanTerm(e.target.value)}
                className="w-full p-2 border rounded-lg text-center"
              />
            </div>
          </div>

          <div className="flex flex-col items-center mt-6">
            <p className="text-lg font-semibold">Monthly Payment:</p>
            <p className="text-2xl md:text-4xl font-bold text-green-800">${monthlyPayment}</p>
          </div>

          <div className="flex justify-center mt-6">
            <button className="bg-green-800 text-white px-6 py-3 rounded-full text-lg">Get Pre-Approved</button>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-16 lg:px-32">
        <div className="border-t border-gray-400 py-6">
          <h1 className="text-3xl font-semibold">How to calculate monthly mortgage payments?</h1>
          <p className="font-light text-lg">
            Your monthly mortgage payment includes loan principal and interest, property taxes, homeowners insurance, and mortgage insurance (PMI), if applicable...
          </p>
        </div>

        <div className="border-t border-gray-400 py-6">
          <h1 className="text-2xl font-semibold">Formula for calculating monthly mortgage payments</h1>
          <p className="font-light text-lg">
            The easiest way to calculate your mortgage payment is to use a calculator, but for the curious or mathematically inclined, here’s the formula...
          </p>
        </div>

        <div className="flex justify-center my-6">
          <img src="https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-formula.jpg" alt="Formula" className="max-w-full rounded-xl object-cover"/>
        </div>

        <div className="border-t border-gray-400 py-6">
          <h1 className="text-3xl font-semibold">Next steps to buying a house</h1>
          <p className="font-light text-lg">
            There are 8 steps to buying a house and by using this calculator you’ve completed step 2...
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
