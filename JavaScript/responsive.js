// The querySelector() allows us to find the first element that matches one or more CSS selectors.
// Togle -> switch from one effect or state to another.
burger = document.querySelector('.burger') // Once, burger is clicked, I need navbar, navList and rightNav.
navbar = document.querySelector('.navbar') 
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')

burger.addEventListener('click', ()=>{
    navbar.classList.toggle('h-nav-responsive'); 
    navList.classList.toggle('v-class-responsive');
    rightNav.classList.toggle('v-class-responsive'); 
})

/*
 <nav class="navbar background h-nav-responsive"> <!--Look I used background picture here to render some part of picture in navigation area. And h-nav is for invisible reponsive website navigation-->
        <ul class="nav-list v-class-responsive"> <!--v-class-responsive I used for opacity for responsive web-->
            <div class="logo"><img src="Images/Ramesh.JPG" alt="Frankfurt" height="60" ></div>
            <li><a href="#home"> Home </li>
            <li><a href="#about"> About </li>    
            <li><a href="#languages"> Languages </li>
            <li><a href="#careers"> Careers </li>
            <li><a href="#contact"> Contact </li>
        </ul>
        <div class="rightNav  v-class-responsive"> <!--v-class-responsive I used for opacity for responsive web-->
            <input type="text" name="search" id="search">
            <button class="btn btn-sm">Search</button>
        </div>
        
        <div class="burger"> <!--Created burger for the responsive website-->
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
 </nav>
 */