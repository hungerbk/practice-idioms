import { RadioButtonGroup, StyledLabel } from "@/components/RadioButtonGroup";
import styled from "@emotion/styled";

const StyledSelectForm = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  button {
    width: 30%;
    font-size: 18px;
  }
`;

const SubmitButton = StyledLabel.withComponent("button");
const SelectSpan = styled.span`
  width: 30%;
  display: flex;
  flex-flow: column nowrap;
  gap: 0.5rem;

  input {
    width: 100%;
    height: 2.5rem;
    border: 2px solid ${({ theme }) => theme.colors.gray001};
    border-radius: 8px;
    font-size: 18px;
    text-align: center;
  }

  p {
    color: ${({ theme }) => theme.colors.gray002};
    padding-left: 1rem;
  }
`;

function SelectForm() {
  return (
    <StyledSelectForm>
      <h1>사자성어 연습 게임</h1>
      <RadioButtonGroup />
      <SelectSpan>
        <label htmlFor="number-of-problem" className="a11y-hidden">
          문제 수
        </label>
        <input type="number" max={20} min={5} id="number-of-problem" placeholder="문제 수를 입력해 주세요" required />
        <p>* 5부터 20까지의 숫자를 입력해주세요.</p>
      </SelectSpan>
      <SubmitButton type="submit">시작!</SubmitButton>
    </StyledSelectForm>
  );
}

export default SelectForm;
