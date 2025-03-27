import styled from "@emotion/styled";
import { RadioButtonGroup } from "./components/RadioButtonGroup";

const SelectForm = styled.form`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  background-color: gray;
`;

const SelectSpan = styled.span`
  width: 50%;
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

function App() {
  return (
    <>
      <SelectForm>
        <h1>사자성어 연습 게임</h1>
        <RadioButtonGroup />
        <SelectSpan>
          <label htmlFor="number-of-problem" className="a11y-hidden">
            문제 수
          </label>
          <input type="number" max={20} min={5} id="number-of-problem" placeholder="문제 수를 입력해 주세요" required />
          <p>* 5부터 20까지의 숫자를 입력해주세요.</p>
        </SelectSpan>
        <button type="submit">시작</button>
      </SelectForm>

      <div>
        <span>사자성어 설명</span>
        <ul>
          <li>사자성어1</li>
          <li>사자성어2</li>
          <li>사자성어3</li>
          <li>사자성어4</li>
        </ul>
        <span>
          <label htmlFor="answer">정답 입력</label>
          <input type="text" id="answer" />
          <button type="button">입력</button>
        </span>
      </div>
    </>
  );
}

export default App;
