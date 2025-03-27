import styled from "@emotion/styled";
import { useState } from "react";

const RadioGroup = styled.div`
  display: flex;
  gap: 12px;
`;

const StyledLabel = styled.label<{ checked: boolean }>`
  padding: 10px 16px;
  border: 2px solid ${({ checked }) => (checked ? "#ffe4c4" : "#ccc")};
  border-radius: 8px;
  background-color: ${({ checked }) => (checked ? "#ffe4c4" : "white")};
  color: #333;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover,
  :focus {
    color: #ccc;
    background-color: #ffefdc;
  }
`;

export const RadioButtonGroup = () => {
  const [selected, setSelected] = useState("easy");
  return (
    <RadioGroup role="radiogroup" aria-label="난이도 선택">
      {["easy", "normal", "hard"].map((level) => (
        <StyledLabel key={level} checked={selected === level}>
          <input type="radio" name="level" value={level} className="a11y-hidden" checked={selected === level} onChange={() => setSelected(level)} />
          {level === "easy" && "쉬움"}
          {level === "normal" && "보통"}
          {level === "hard" && "어려움"}
        </StyledLabel>
      ))}
    </RadioGroup>
  );
};
