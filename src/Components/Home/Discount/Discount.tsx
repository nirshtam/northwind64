import './Discount.css';

export default function Discount() {
  const percent = 10;
  return (
    <div className="discount box">
      <p>Only now, {percent}% discount on all our products!</p>
    </div>
  )
}