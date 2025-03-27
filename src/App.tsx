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

function App() {
  return (
    <>
      <SelectForm>
        <h1>사자성어 연습 게임</h1>
        <RadioButtonGroup />
        <span>
          <label htmlFor="number-of-problem">문제 수</label>
          <input type="number" max={20} min={5} id="number-of-problem" required />
          <p>5부터 20까지의 숫자를 선택해주세요.</p>
        </span>
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
