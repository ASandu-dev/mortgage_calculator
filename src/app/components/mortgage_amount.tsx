"use client";
import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Typography, InputAdornment } from "@mui/material";
import { FaPoundSign } from "react-icons/fa";

type Props = {
  amount: number;
  setAmount: (val: number) => void;
};

const MortgageAmountField = ({ amount, setAmount }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/,/g, "");
    const numberValue = parseFloat(rawValue);
    if (!isNaN(numberValue)) {
      setAmount(numberValue);
    } else {
      setAmount(0);
    }
  };

  return (
    <Box className="w-full px-6 mb-2">
      <Typography sx={{ mb: 1 }} className="text-slate-500">
        Mortgage amount
      </Typography>
      <Input
        required
        fullWidth
        disableUnderline
        value={amount ? amount.toLocaleString() : ""}
        onChange={handleChange}
        startAdornment={
          <InputAdornment position="start" className="bg-slate-300 p-3 m-0">
            <FaPoundSign className="text-slate-500" />
          </InputAdornment>
        }
        className="border border-slate-300 rounded-md"
        type="text"
        inputMode="numeric"
      />
    </Box>
  );
};

export default MortgageAmountField;
