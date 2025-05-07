"use client";
import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Typography, InputAdornment, FormControl, FormHelperText } from "@mui/material";

type Props = {
  term: number;
  interestRate: number;
  setTerm: (val: number) => void;
  setInterestRate: (val: number) => void;
  termError?: boolean;
  rateError?: boolean;
};

const MortgageTermAndAmount = ({ term, interestRate, setTerm, setInterestRate,termError, rateError }: Props) => {
  return (
    <Box className="flex pt-2">
      <Box className="w-full pl-6 flex-1/2">
        <Typography sx={{ mb: 1 }} className="text-slate-500">
          Mortgage Term
        </Typography>
        <FormControl fullWidth error={termError}>
        <Input
          required
          fullWidth
          disableUnderline
          value={term || ""}
          endAdornment={
            <InputAdornment position="end" className="bg-slate-300 p-3 m-0">
              <Typography className="text-slate-500"> years </Typography>
            </InputAdornment>
          }
          className="border border-slate-300 rounded-md pl-2"
          type="number"
          onChange={(e) => setTerm(Number(e.target.value))}
        />
        {termError && <FormHelperText>Please enter a valid term</FormHelperText>}</FormControl>
      </Box>
      <Box className="w-full pr-6 pl-4 flex-1/2">
        <Typography sx={{ mb: 1 }} className="text-slate-500">
          Interest rate
        </Typography>
        <FormControl fullWidth error={rateError}>
        <Input
          required
          fullWidth
          disableUnderline
          value={interestRate || ""}
          endAdornment={
            <InputAdornment position="end" className="bg-slate-300 p-3 m-0">
              <Typography className="text-slate-500"> % </Typography>
            </InputAdornment>
          }
          className="border border-slate-300 rounded-md pl-2"
          type="number"
          onChange={(e) => setInterestRate(Number(e.target.value))}
        />
        {rateError && <FormHelperText>Enter a valid interest rate</FormHelperText>}</FormControl>
      </Box>
    </Box>
  );
};

export default MortgageTermAndAmount;
