import './top-banner.css'

const TopBanner = ({ title }) => {
    return (
        <div className="top-banner">
            <h1>{title}</h1>
            <img src="./img/waves.svg" alt="waves" />
        </div>
    );
};

export default TopBanner;