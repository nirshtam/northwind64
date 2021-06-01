import './Specials.css';

export default function Specials() {
  const weekDay = getWeekday();
  return (
    <div className="specials box">
      {weekDay === 5 ? <p>Pizza</p> : null}

      {weekDay === 4 && <p>Sushi</p>}

      {weekDay === 3 || <p>Fish</p>}

      {weekDay > 5 && <p>Chamin</p>}
    </div>
  )
}

function getWeekday(): number {
  const now = new Date();
  const dayOfWeek = now.getDay() + 1;
  return dayOfWeek;
}

