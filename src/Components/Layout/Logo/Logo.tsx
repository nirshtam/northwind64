import logoImage from "../../../Assets/Images/northwind-logo.jpg";

export default function Logo(): JSX.Element {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="Northwind Logo" width={250} />
    </div>
  )
}