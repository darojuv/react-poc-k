import React from 'react';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

type CustomButtonProps = {
  label: string;
  onClick?: () => void;
  variant?: 'contained' | 'outlined' | 'text';
  color?: 'primary' | 'secondary' | 'error' | 'success' | 'info' | 'warning';
  fullWidth?: boolean;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
};

const CustomButton: React.FC<CustomButtonProps> = ({
  label,
  onClick,
  variant = 'contained',
  color = 'primary',
  fullWidth = false,
  disabled = false,
  loading = false,
  startIcon,
  endIcon,
  type = 'button',
}) => {
  return (
    <Button
      variant={variant}
      color={color}
      fullWidth={fullWidth}
      onClick={onClick}
      disabled={disabled || loading}
      startIcon={startIcon}
      endIcon={endIcon}
      type={type}
    >
      {loading ? <CircularProgress size={20} color="inherit" /> : label}
    </Button>
  );
};

export default CustomButton;
