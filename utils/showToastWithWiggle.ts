import { toast } from "sonner-native";

export const showToastWithWiggle = ({ message, variant }) => {
  const id = toast(message, { variant });
  setTimeout(() => {
    toast.wiggle(id);
  }, 300);
};
