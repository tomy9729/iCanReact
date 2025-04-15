import "./App.css";
import { use, useState } from "react";
import { Button } from "@/shadcn/ui";

function App() {
    const [hi, setHi] = useState("hello");
    const [count, setCount] = useState(0);
    return (
        <div className="App">
            <select name="" id=""></select>
            <div>{hi}</div>
            <div>{count}</div>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                버튼
            </button>
        </div>
    );
}

export default App;
