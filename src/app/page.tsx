"use client";
import { Box, Typography } from "@mui/material";
import MortgageTypeSelector from "./components/mortgage_type";
import MortgageAmountField from "./components/mortgage_amount";
import MortgageTermAndAmount from "./components/mortgage_term_amount";
import CustomCalculateButton from "./components/custom_calculate_button";
import MortgageResults from "./components/mortgage_results";
import { useState } from "react";

export default function Home() {
  const [amount, setAmount] = useState(0);
  const [years, setTerm] = useState(0);
  const [rate, setInterestRate] = useState(0);
  const [result, setResult] = useState(0);
  const [resultOverTerm, setResultOT] = useState(0);
  const [resultInterest, setInterest] = useState(0);
  const [setMortgageType] = useState<
    "repayment" | "interest-only"
  >("repayment");
  const [selected, setSelected] = useState<"Repayment" | "Interest Only">(
    "Repayment"
  );

  const handleCalculate = () => {
    const monthlyRate = rate / 100 / 12;
    const numberOfPayments = years * 12;

    if (!amount || !years || !rate) return;

    const monthlyPayment =
      (amount * monthlyRate) /
      (1 - Math.pow(1 + monthlyRate, -numberOfPayments));
    const termPayment = monthlyPayment * 12 * years;
    const termInterest = (termPayment * 5.25) / 100;

    setResult(parseFloat(monthlyPayment.toFixed(2)));
    setResultOT(parseFloat(termPayment.toFixed(2)));
    setInterest(parseFloat(termInterest.toFixed(2)));
  };

  return (
    <Box className="bg-slate-300 w-full h-[100vh] flex justify-center items-center">
      <Box className="flex h-[55vh]">
        <Box className="bg-white w-[550px] h-full rounded-l-2xl pr-[100px]">
          {/* Header */}
          <Box className="flex justify-between items-center px-6 py-4">
            <Typography variant="h5" className="text-slate-900">
              Mortgage Calcualtor
            </Typography>
            <button
              className="text-slate-500 hover:underline"
              onClick={() => {
                setAmount(0);
                setTerm(0);
                setInterestRate(0);
                setResult(0);
                setResultOT(0);
                setInterest(0);
                setMortgageType("repayment");
                setSelected("Repayment");
              }}
            >
              ClearAll
            </button>
          </Box>
          {/* End Header */}
          <MortgageAmountField amount={amount} setAmount={setAmount} />
          <MortgageTermAndAmount
            term={years}
            interestRate={rate}
            setTerm={setTerm}
            setInterestRate={setInterestRate}
          />
          <MortgageTypeSelector selected={selected} setSelected={setSelected} />
          <CustomCalculateButton
            onClick={handleCalculate}
            mortgageType={
              selected === "Repayment" ? "repayment" : "interest-only"
            }
          />
        </Box>
        <Box className="bg-slate-700 w-[450px] h-full rounded-bl-[70px] rounded-r-2xl -ml-[100px] flex flex-col">
          <Box className="flex flex-col justify-between items-start mx-5 px-6 py-4">
            <Typography variant="h6" className="font-bold text-white">
              Your results
            </Typography>
            <Typography variant="subtitle2" className="text-slate-400">
              Your results are shown below based on the information you
              provided. To adjust the results, edit the form and click
              calculate repayments again.
            </Typography>
          </Box>
          <Box className="bg-slate-900 w-92 h-54 mt-4 mx-auto rounded-md border-t-4 border-[#d7da2f]">
            <MortgageResults
              result={result}
              resultOverTerm={resultOverTerm}
              resultInterest={resultInterest}
              mortgageType={
                selected === "Repayment" ? "repayment" : "interest-only"
              }
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
