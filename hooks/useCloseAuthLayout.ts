import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/redux/store";
import { close } from "@/app/redux/features/auth-slice";

export function useCloseAuthLayout() {
  const dispatch = useDispatch<AppDispatch>();
  const closeLayout = () => dispatch(close());

  useEffect(() => {
    const handleEcs = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLayout();
      }
    };
    window.addEventListener("keydown", handleEcs);
    return () => {
      window.removeEventListener("keydown", handleEcs);
    };
  }, []);
  return closeLayout;
}
