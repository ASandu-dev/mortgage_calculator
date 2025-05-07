"use client";
import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Typography, InputAdornment } from "@mui/material";

type Props = {
  term: number;
  interestRate: number;
  setTerm: (val: number) => void;
  setInterestRate: (val: number) => void;
};

const MortgageTermAndAmount = ({ term, interestRate, setTerm, setInterestRate }: Props) => {
  return (
    <Box className="flex pt-2">
      <Box className="w-full pl-6 flex-1/2">
        <Typography sx={{ mb: 1 }} className="text-slate-500">
          Mortgage Term
        </Typography>
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
      </Box>
      <Box className="w-full pr-6 pl-4 flex-1/2">
        <Typography sx={{ mb: 1 }} className="text-slate-500">
          Interest rate
        </Typography>
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
      </Box>
    </Box>
  );
};

export default MortgageTermAndAmount;
