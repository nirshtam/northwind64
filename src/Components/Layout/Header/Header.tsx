import Logo from '../Logo/Logo';
import './Header.css';

export default function Header(): JSX.Element {
  return (
    <header>
      <Logo />
      <h1>Northwind Website</h1>
    </header>
  )
}