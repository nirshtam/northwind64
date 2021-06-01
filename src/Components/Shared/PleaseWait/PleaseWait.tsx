import loadingImage from "../../../Assets/Images/loading.gif";

export default function PleaseWait(): JSX.Element {
    return (
        <div className="place-wait-loader">
            <img src={loadingImage} alt="Loading" width="100" />
        </div>
    )
}