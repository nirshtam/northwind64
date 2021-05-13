import { ReactNode } from 'react';
import './Main.css';

type MainProps = {
  children: ReactNode;
}

export default function Main(props: MainProps): JSX.Element {
  return (
    <main>
      {props.children}
    </main>
  )
}