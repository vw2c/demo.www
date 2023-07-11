import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import baIcon from "./assets/备案图标.png"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="body">
      <div className="content">
        <h1>前端技术总结</h1>
        <div>
          <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <h1>Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
      <div className="footer">
        <a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer">
          陕ICP备2023008034号-1
        </a>
        <span className="divider" />
        <a
          href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=61032702000118"
          target="_blank"
          rel="noreferrer"
        >
          <img src={baIcon} className="baIcon" />
          <span>陕公网安备 61032702000118号</span>
        </a>
        <span className="divider" />
        <a href="mailto:jubao@17-forever.com" className="jubao">
          违法违规举报
        </a>
      </div>
    </div>
  )
}

export default App
