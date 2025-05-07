'use client';
import { Box, FormControl, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material';

type MortgageOption = 'Repayment' | 'Interest Only';

type Props = {
  selected: MortgageOption;
  setSelected: React.Dispatch<React.SetStateAction<MortgageOption>>;
};

export default function MortgageTypeSelector({ selected, setSelected }: Props) {
  return (
    <Box className="w-full px-6 mt-4">
      <Typography sx={{ mb: 1 }} className="text-slate-500">
        Mortgage type
      </Typography>
      <FormControl className="w-full text-slate-900">
        <RadioGroup
          name="mortgageType"
          value={selected}
          onChange={(e) => setSelected(e.target.value as MortgageOption)}
        >
          {(['Repayment', 'Interest Only'] as MortgageOption[]).map((option) => (
            <Box
              key={option}
              className={`rounded-md px-4 mb-2 border transition-colors ${
                selected === option
                  ? 'border-[hsl(61,70%,52%)] bg-[hsl(61,70%,95%)]'
                  : 'border-gray-500'
              }`}
            >
              <FormControlLabel
                value={option}
                control={<Radio />}
                label={option.charAt(0).toUpperCase() + option.slice(1)}
                className="w-full"
              />
            </Box>
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}
