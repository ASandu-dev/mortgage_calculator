'use client'
import { Typography } from '@mui/material';
import { FaCalculator } from 'react-icons/fa';

type Props = {
  onClick: () => void;
  mortgageType: "repayment" | "interest-only";
};

const CustomCalculateButton = ({ onClick, mortgageType }: Props) => {
  return (
    <button 
      onClick={onClick} 
      className='bg-[#d7da2f] hover:bg-[#b4b620] text-slate-700 font-semibold ml-6 px-8 py-3 my-4 rounded-3xl flex items-center gap-2'>
      <FaCalculator className="text-slate-700" />
      {mortgageType === "repayment" ? (
        <Typography>Calculate repayments</Typography>
      ) : (
        <Typography>Calculate total interest</Typography>
      )}
    </button>
  );
};

export default CustomCalculateButton;
