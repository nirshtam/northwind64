import './Desserts.css';

export default function Desserts() {
  const items: { id: number; name: string; }[] = [
    { id: 1, name: "Ice Cream" },
    { id: 2, name: "Chuclate Cake" },
    { id: 3, name: "Malabi" }
  ];
  console.log(items);

  return (
    <div className="desserts box">
      <h2>Our Deserts:</h2>
      <p className="items">
        {items.map(item => <span key={item.id}>{item.name}</span>)}
      </p>
    </div>
  )
}