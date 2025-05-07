"use client";
import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import { Typography, InputAdornment, FormControl, FormHelperText } from "@mui/material";
import { FaPoundSign } from "react-icons/fa";

type Props = {
  amount: number;
  setAmount: (val: number) => void;
  error?: boolean;
};

const MortgageAmountField = ({ amount, setAmount, error }: Props) => {
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
      <FormControl fullWidth error={error}>
      <Input
        required
        fullWidth
        disableUnderline
        value={amount ? amount.toLocaleString() : ''}
        error={error}
        onChange={handleChange}        
        startAdornment={
          <InputAdornment position="start" className={`${error ? 'bg-red-500' : 'bg-slate-300'} p-3 m-0`}>
            <FaPoundSign className={`${error ? 'text-white' : 'text-slate-500'}`} />
          </InputAdornment>
        }
        className="border rounded-md"
        type="text"
        inputMode="numeric"
      />
      {error && <FormHelperText>Please enter a valid amount</FormHelperText>}</FormControl>
    </Box>
  );
};

export default MortgageAmountField;
