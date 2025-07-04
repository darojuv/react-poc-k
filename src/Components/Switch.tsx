import { useState } from "react";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";

type ToggleGridSwitchProps = {
  label?: string;
  onToggle?: (checked: boolean) => void;
  checked?: boolean;
  defaultChecked?: boolean;
};

export function ToggleGridSwitch({
  label = "Show Grid",
  onToggle,
  checked,
  defaultChecked = false,
}: ToggleGridSwitchProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = checked !== undefined;
  const value = isControlled ? checked : internalChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setInternalChecked(event.target.checked);
    onToggle && onToggle(event.target.checked);
  };

  return (
    <FormControlLabel
      control={<Switch checked={value} onChange={handleChange} />}
      label={label}
    />
  );
}
