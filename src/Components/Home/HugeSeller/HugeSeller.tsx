import { useState } from "react"

export default function HugeSeller(): JSX.Element {
    // const [item, setItem] = useState<string>('');
    // const [price, setPrice] = useState<number>(0);

    const [hugeSeller, setHugeSeller] = useState<{item?: string, price?: number}>({});

    // const setHugeSeller = () => {
    //     setItem("Ice Cream");
    //     setPrice(5);
    // }

    return (
        <div className="huge-seller box">
            <h6>Huge Seller</h6>
            <button onClick={() => setHugeSeller({item: "Ice Cream", price: 5})}>Set Huge Seller</button>
            <button onClick={() => setHugeSeller({ 
                ...hugeSeller, 
                price: hugeSeller.price ? hugeSeller.price + 1 : 0
            })}>Increase Price</button>
            {hugeSeller.item && (
                <div>{hugeSeller.item}, Price: ${hugeSeller.price}</div>
            )}
        </div>
    )
}