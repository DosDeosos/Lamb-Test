import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { post } from "aws-amplify/api";

function App() {
  const [count, setCount] = useState(0);

  async function postTodo() {
    try {
      const restOperation = post({
        apiName: "Test1Lamb",
        path: "/Test",
        options: {
          body: {
            message: "Mow the lawn",
          },
        },
      });
      const response = await restOperation.response;
      console.log("POST call succeeded");
      console.log(response);
    } catch (e) {
      console.log("POST call failed: ", e);
    }
  }

  useEffect(() => {
    postTodo();
  }, []);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
