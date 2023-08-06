export default function Header({ data }) {
return (
    <div class="row fixed-top">
    <nav class="navbar navbar-dark bg-dark " style={{padding:"20px 20px 20px 20px"}}>
    <div class="container-fluid">
        <a class="navbar-brand" href="/"><h2>DM| My Personal Website</h2></a>     
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="collapsibleNavbar">
            <ul class="navbar-nav">
            <li class="nav-item"><a class="nav-item nav-link" href="#">ABOUT</a></li>
            <li class="nav-item"><a class="nav-item nav-link" href="#Projects">PROJECTS</a></li>
            </ul>
            </div>
    </div>
    </nav>
    </div>
)
}