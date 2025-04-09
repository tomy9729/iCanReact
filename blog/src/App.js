import './App.css';
import logo from "./logo.svg"

function App() {
  const postName = "블로그 글 이름"
  function a() {
    return 100
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <h4 style={{ color: "blue", fontSize: "20px" }}>{postName}</h4>
      {a()}
      <img src={logo} />
    </div >
  );
}

export default App;
