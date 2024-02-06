import "./Hero.css"

const Hero = () => (
    <div className="hero-section">
        <div className="hero-image-container">
            <img src="/hero-img.svg" alt="profile_image" />
        </div>
        <div className="hero-text-container">
            <h1 className="hero-title-txt">Hi, I'm Rabin</h1>
            <p className="hero-post">A Front-End Developer</p>
            <p className="hero-description-txt">High level experience in Front-End, producing quality work</p>
        </div>
        <div className="call-to-action">
            <button>Contact ME</button>
        </div>
    </div>
)

export default Hero