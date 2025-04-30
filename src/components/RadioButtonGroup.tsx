import styled from "@emotion/styled";
import { useState } from "react";

const RadioGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const StyledLabel = styled.label<{ checked?: boolean }>`
  padding: 10px 16px;
  border: 2px solid ${({ checked, theme }) => (checked ? theme.colors.primary : theme.colors.gray001)};
  border-radius: 8px;
  background-color: ${({ checked, theme }) => (checked ? theme.colors.primary : "white")};
  color: ${({ theme }) => theme.colors.black001};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  :hover,
  :focus {
    color: ${({ theme }) => theme.colors.gray001};
    background-color: ${({ theme }) => theme.colors.primary};
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const levels = ["easy", "normal", "hard", "all"] as const;

// interface RadioButtonProps {
//   level: string;
//   label: string;
// }

// const RadioButton: React.FC<RadioButtonProps> = ({ level, label, ...props }) => {
//   return (
//     <StyledLabel key={label} {...props}>
//       <input type="radio" name="level" value={level} className="a11y-hidden" />
//       {label}
//     </StyledLabel>
//   );
// };
export const RadioButtonGroup = () => {
  const [selected, setSelected] = useState("easy");
  return (
    <RadioGroup role="radiogroup" aria-label="난이도 선택">
      {levels.map((level) => (
        <StyledLabel key={level} checked={selected === level}>
          <input type="radio" name="level" value={level} className="a11y-hidden" checked={selected === level} onChange={() => setSelected(level)} />
          {level === "easy" && "초급"}
          {level === "normal" && "중급"}
          {level === "hard" && "고급"}
          {level === "all" && "혼합"}
        </StyledLabel>
      ))}
    </RadioGroup>
  );
};
