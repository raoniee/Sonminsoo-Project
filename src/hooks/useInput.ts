import React, { useState } from "react";

const useInput: any = (initialValue = "") => {
  const [value, setValue] = useState(initialValue);

  const handler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return [value, setValue, handler];
};

export default useInput;
