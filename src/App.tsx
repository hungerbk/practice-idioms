import SelectForm from "@/components/SelectForm";

function App() {
  return (
    <>
      <SelectForm />
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
