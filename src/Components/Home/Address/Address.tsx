import css from './Address.module.css';

export default function Address(): JSX.Element {
    const dynamicStyling = {
        backgroundColor: Math.random() > 0.5 ? "red" : "blue",
        color: Math.random() > 0.5 ? "green" : "yellow",
    }

    return (
        <div className={css.address + " box"} style={dynamicStyling}>
            <p>Our address is: Hamasger 26, Tel Aviv</p>
        </div>
    )
}