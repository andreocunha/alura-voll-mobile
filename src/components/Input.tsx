import { Input as InputNative, FormControl, Icon } from "native-base";

interface InputProps {
  label?: string;
  placeholder: string;
  errorMessage?: string;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
}

export function Input ({ 
  label, 
  placeholder, 
  errorMessage, 
  secureTextEntry = false
} : InputProps) : JSX.Element {
  return (
    <FormControl mt={3}>
      {label && <FormControl.Label>{label}</FormControl.Label>}
      <InputNative
        placeholder={placeholder}
        size="lg"
        w="100%"
        borderRadius="lg"
        bgColor="gray.100"
        secureTextEntry={secureTextEntry}
        shadow={3}
      />
      <FormControl.ErrorMessage leftIcon={<Icon size="xs" name="warning-outline" />}>
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  );
};