import InputText from "./input-text";
import SearchIcon from "../assets/icons/search.svg?react";
import React from "react";
import { debounce } from "../helpers/utils";

export default function PhotoSearch() {
  const [inputValue, setInputValue] = React.useState("");

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSetValue = React.useCallback(
    debounce((value: string) => {
      setInputValue(value);
    }, 300),
    [],
  );

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setInputValue(value);
    debouncedSetValue(value);
  }

  return (
    <InputText
      icon={SearchIcon}
      placeholder="Buscar fotos..."
      className="flex-1"
      value={inputValue}
      onChange={handleInputChange}
    />
  );
}
