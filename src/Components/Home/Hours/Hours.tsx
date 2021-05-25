import css from './Hours.module.css';

export default function Hours() {
    return (
        <div className={css.hours + " box"}>
            <p className={css.coolText}>
                Opening Hours: 08:00AM - 09:00PM
            </p>
        </div>
    )
}