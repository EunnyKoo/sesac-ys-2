import "./App.css";
import FuncComponent from "./components/FuncComponent";
import ClassComponent from "./components/ClassComponent";
import FuncPropsEx from "./components/FuncPropsEx";
import Section from "./components/Section";
import ClassPropsEx from "./components/ClassPropsEx";
import FavFoodProps from "./components/FavFoodProps";
import BestSellerProps from "./components/BestSellerProps";
import ClassCompExercise from "./components/ClassCompExercise";

function App() {
  const name = "dan";
  const animal = "cat";
  const a = 5;
  const b = 3;
  return (
    <div>
      {/* <h2>
        제 반려 동물의 이름은 {name}입니다. &nbsp;
        {name}은 {animal}입니다.
      </h2>
      <span>
        {a + b == 8 ? (
          <div>
            <h2>정답입니다</h2>
          </div>
        ) : (
          <div>
            <h2>오답입니다</h2>
          </div>
        )}
      </span>
      <h3>{a > b && `${a}가 ${b}보다 큽니다`}</h3>
      <br />
      <h1 className="title">Hello World</h1>
      아이디: <input /> <br />
      비밀번호: <input /> */}
      {/* <FuncComponent />
      <ClassComponent /> */}
      {/* <FuncPropsEx title="SeSAC" content="hello world" number={5} />
      <FuncPropsEx content="hello world" number={5} />
      <Section title="EUN 영역">
        <div>EUN 영역의 content입니다.</div>
      </Section>
      <Section title="DAN 영역">
        <h4>DAN 영역의 content입니다.</h4>
      </Section>

      <ClassPropsEx title="eun koo world" content="wanna go home" number={9} />
      <ClassPropsEx /> */}

      <FavFoodProps />
      <BestSellerProps
        title="어린왕자"
        author="생택쥐페리"
        price="9,000원"
        type="서양고전문학"
      />

      <ClassCompExercise />
    </div>
  );
}

export default App;
