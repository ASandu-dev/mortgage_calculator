"use client";
import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {
  result: number;
  resultOverTerm: number;
  resultInterest: number;
  selected: 'Repayment' | 'Interest-only';
};

const MortgageResults = ({
  result,
  resultOverTerm,
  resultInterest,
  // mortgageType,
  selected,
}: Props) => {
  return (
    <Box className="p-6">
      <Typography variant="subtitle2" className="text-slate-400">
        Your monthly repayments
      </Typography>
      <Typography variant="h4" className="text-[#d7da2f]">
        £
        {result.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </Typography>
      <hr className="my-6 border-slate-300" />

      {selected === "Repayment" ? (
        <>
          <Typography variant="subtitle2" className="text-slate-400">
            Total you will repay over the term
          </Typography>
          <Typography variant="h6" className="text-white">
            £
            {resultOverTerm.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Typography>
        </>
      ) : (
        <>
          <Typography variant="subtitle2" className="text-slate-400">
            Total interest youll repay
          </Typography>
          <Typography variant="h6" className="text-white">
            £
            {resultInterest.toLocaleString(undefined, {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default MortgageResults;
