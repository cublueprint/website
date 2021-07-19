import './NavBar.css'
//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_navbar_shrink_scroll
function NavBar(){
    window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

    return(
        <div id="navbar">
            <a href="#default" id="logo">Blueprint</a>
            <div id="navbar-right">
                <a class="active" href="#home">Home</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div>
        </div>

    )

}
export default NavBar