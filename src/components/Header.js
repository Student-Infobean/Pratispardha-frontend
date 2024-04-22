import logo from "../images/logo.jpg";
function Header() {
    return <>
        <div class="container-fliud">

            <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "rgb(238,18,18)" }}>
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-lg-4 col-md-4 col-sm-12 col-12 ms-5" style={{marginRight:"170px"}}>
                            <img src={logo} alt="" width="60px" height="60px" />
                        </div>
                    </div>
                    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse me-auto" id="navbarNavDropdown">
                        <ul class="navbar-nav text-center" style={{ fontSize: "18px",fontWeight:"350"}}>
                            <li class="nav-item dropdown" >
                                <a class="nav-link  text-white px-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Home
                                </a>
                            </li>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link text-white px-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Players
                                    </a>
                                </li>

                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link  text-white px-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Teams
                                    </a>
                                </li>

                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link  text-white px-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Events
                                    </a>
                                </li>
                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link text-white px-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        About
                                    </a>
                                </li>

                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link text-white px-4" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Contact
                                    </a>
                                </li>

                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link  text-white px-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Signin
                                    </a>
                                </li>

                            </ul>
                            <ul class="navbar-nav text-center">
                                <li class="nav-item dropdown">
                                    <a class="nav-link  text-white px-5" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Signup
                                    </a>
                                </li>
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    </>
}
export default Header;