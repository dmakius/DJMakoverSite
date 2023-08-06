import background from "./img/headshot.jpg";
import ReactTextRotator from "react-text-rotator";
export default function MainBody({ data }) {
    const content = [
        {
          text: "Software Engineer",
          animation: "fade"
        },
        {
            text: "Video Game Geveloper",
            animation: "fade"
        },
        {
            text: "UX Artist",
            animation: "fade"
        }
    ]
    return (
        <div>
                <div class="row" style={{marginTop: "100px"}}>
                    <div class="col-md-12" style={{background: `url(${background}) right bottom no-repeat`, 
                    backgroundSize: "contain", padding:"110px 0 100px 0", height:"auto",
                    backgroundColor: "#EDECE7"}}>
                        <h1 class="animated fadeInDown">
                            <span style={{opacity:"0.5"}}><span style={{color:"#4365e0",opacity:"0.5"}}>Dani</span>el<br/></span>
                            <span style={{opacity:"0.5"}}>Mak<span style={{color:"#00ccff"}}>over</span></span>
                        </h1>
                        <h3 class="animated fadeInUp delay-05s" style={{opacity:"0.5", marginLeft:"10px"}}>
                            <span class="rotate">
                                <ReactTextRotator content={content} time={5000} startDelay={2000}/> 
                            </span>
                        </h3>
                    </div>       
                </div>

                <div class="row">
                <div class="container intro text-center section-padding color-bg" id="about">
                    <div class="col-md-12">
                        <h1 class="arrow"><span>about me</span></h1>
                        <p>
                            I am a Software developer based in Boston. I have over 5 years of professional experience and a Masters Degree in Computer Science.
                            I enjoy building full stack applications for both Mobile and Web platforms. I have also built a number of 2D video games in Javascript. 
                            When I am not coding on a project I am painting, sketching, traveling, and taking care of stray cats.
                        </p>
                    </div>
            </div>
            </div>
        </div>
    )
}