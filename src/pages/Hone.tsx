import { useNavigate } from "react-router-dom"

export default function Home() {
  const navigate = useNavigate();

  return <>
    <h1>首页</h1>
    <button onClick={() => navigate('/about') }>About</button>
  </>
}