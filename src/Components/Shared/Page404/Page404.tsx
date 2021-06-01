import css from './Page404.module.css';

export default function Page404() {
    return (
        <div className={css.page404}>
            <h2>Ohh no! Page not found.</h2>
            <p>This is our bad, the you are looking for is gone.</p>
        </div>
    )
}