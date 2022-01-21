import { useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { decremented, incremented } from "../states/reducer/counter";
import { useAppDispatch, useAppSelector } from "../states/hooks";

export default function Home() {
  const count = useAppSelector(state => state.counter.value);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    console.log('state', count);
  }, [count]);

  return <>
    <h1>首页</h1>
    <div>count: {count}</div>
    <button onClick={() => dispatch(incremented())}>+</button>
    <button onClick={() => dispatch(decremented())}>-</button>

    <hr />
    <button onClick={() => navigate('/about') }>About</button>
  </>
}