import { useAppDispatch, useAppSelector } from "../states/hooks";
import { decremented, incremented } from "../states/reducer/counter";

export default function About() {
  const count = useAppSelector(state => state.counter.value);
  const dispatch = useAppDispatch();

  return <>
    <h1>关于{ count }</h1>
    <button onClick={() => dispatch(incremented())}>+</button>
    <button onClick={() => dispatch(decremented())}>-</button>
  </>
  
}