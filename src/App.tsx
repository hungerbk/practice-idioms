function App() {
  return (
    <>
      <form action="">
        <h1>사자성어 연습 게임</h1>
        <ul>
          <li>
            <label htmlFor="easy">초급</label>
            <input type="radio" name="level" id="easy" value="easy" required />
          </li>
          <li>
            <label htmlFor="normal">중급</label>
            <input type="radio" name="level" id="normal" value="normal" />
          </li>
          <li>
            <label htmlFor="hard">고급</label>
            <input type="radio" name="level" id="hard" value="hard" />
          </li>
        </ul>
        <span>
          <label htmlFor="number-of-problem">문제 수</label>
          <input type="number" max={20} min={5} id="number-of-problem" required />
          <p>5부터 20까지의 숫자를 선택해주세요.</p>
        </span>
        <button type="submit">시작</button>
      </form>

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
