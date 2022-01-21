import { useAppSelector } from "../states/hooks";

export default function About() {
  const count = useAppSelector(state => state.counter.value);

  return <h1>关于{ count }</h1>
}