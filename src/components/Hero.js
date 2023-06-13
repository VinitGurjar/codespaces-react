import "./Styles/Hero.css"
function Hero(props){
return(
    <>
    <div className={props.cName}>
        <img alt="hero-img" src={props.heroImg}/>
    </div>
    <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
    </div>
    </>
)
}

export default Hero;