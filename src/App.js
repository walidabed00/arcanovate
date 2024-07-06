import './App.scss';
import home from './images/home.png';
import about from './images/about.png';
import portfolio1 from './images/portfolio1.jpg';
import portfolio2 from './images/portfolio2.jpg';
import portfolio3 from './images/portfolio3.jpg';
import portfolio4 from './images/portfolio4.jpg';
import portfolio5 from './images/portfolio5.jpg';
import portfolio6 from './images/portfolio6.jpg';
import testimonial1 from './images/testimonial1.jpg';
import testimonial2 from './images/testimonial2.jpg';
import testimonial3 from './images/testimonial3.jpg';
import { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import ScrollReveal from 'scrollreveal';

function App() {

    useEffect(() => {
        const menuIcon = document.querySelector('#menu-icon');
        const navbar = document.querySelector('.navbar');
        const sections = document.querySelectorAll('section');
        const navLinks = document.querySelectorAll('header nav a');
        const header = document.querySelector('.header');
        const darkModeIcon = document.querySelector('#darkMode-icon');
    
        const menu = () => {
          menuIcon.classList.toggle('bx-x');
          navbar.classList.toggle('active');
        };
    
        menuIcon.addEventListener('click', menu);
    
        const onScroll = () => {
          let top = window.scrollY;
    
          sections.forEach(sec => {
            let offset = sec.offsetTop - 150;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');
    
            if (top >= offset && top < offset + height) {
              navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
              });
            }
          });
    
          header.classList.toggle('sticky', top > 100);
        };
    
        window.addEventListener('scroll', onScroll);
    
        darkModeIcon.onclick = () => {
          darkModeIcon.classList.toggle('bx-sun');
          document.body.classList.toggle('dark-mode');
        };
    
        ScrollReveal({
          // reset: true,
          distance: '80px',
          duration: 2000,
          delay: 200
        });
    
        ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
        ScrollReveal().reveal('.home-img img, .services-container, .portfolio-box, .testimonial-wrapper, .contact form', { origin: 'bottom' });
        ScrollReveal().reveal('.home-content h1, .about-img img', { origin: 'left' });
        ScrollReveal().reveal('.home-content h3, .home-content p, .about-content', { origin: 'right' });
    
        return () => {
          window.removeEventListener('scroll', onScroll);
          menuIcon.removeEventListener('click', menu);
        };
      }, []);

  return (
    <div className="App">
<div>


<header className="header">
    <a href="#" className="logo">Portfolio.</a>

    <nav className="navbar">
        <a href="#home" className="active">Home</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
    </nav>

    <div className="bx bx-moon" id="darkMode-icon"></div>

    <div className="bx bx-menu" id="menu-icon"></div>
</header>


<section className="home" id="home">
    <div className="home-content">
        <h3>Hello, I am</h3>
        <h1>Walid Abed</h1>
        <p>
            I'm a web developer who loves to create beautiful and functional websites
            for people who want to make a difference in the world.
        </p>
        <p>Currently I'm a student of The Jump Digital School, where I'm learning how to
        create beautiful and functional websites using HTML, CSS, JavaScript, and WordPress.</p>

        <div className="social-media">
            <a href="https://www.facebook.com/walidabed0/" target="_blank"><i className='bx bxl-facebook'></i></a>
            <a href="https://x.com/walidabed00" target="_blank"><i className='bx bxl-twitter'></i></a>
            <a href="https://www.instagram.com/walidabed0/" target="_blank"><i className='bx bxl-instagram-alt'></i></a>
            <a href="https://www.linkedin.com/in/walid-abed/" target="_blank"><i className='bx bxl-linkedin'></i></a>
        </div>

        <a href="#" className="btn">Download CV</a>
    </div>

    <div className="profession-container">
        <div className="profession-box">
            <div className="profession" style={{ '--i': 0 }}>
                <i className='bx bx-code-alt'></i>
                <h3>Web Developer</h3>
            </div>
            <div className="profession" style={{ '--i': 1 }}>
                <i className='bx bx-camera'></i>
                <h3>Mobile Developer</h3>
            </div>
            <div className="profession" style={{ '--i': 2 }}>
                <i className='bx bx-palette'></i>
                <h3>Web Designer</h3>
            </div>

            <div className="circle"></div>
        </div>

        <div className="overlay"></div>
    </div>

    <div className="home-img">
        <img src="images/home.png" alt="" />
    </div>
</section>

<section className="about" id="about">
    <div className="about-img">
        <img src="images/about.png" alt="" />
    </div>

    <div className="about-content">
        <h2 className="heading">About <span>Me</span></h2>
        <h3>
            Hi there, welcome to my website! I'm Walid,
            a passionate web developer who enjoys learning new technologies
            and solving problems with code!
        </h3>
        <p>
            This website is my personal blog where I write about web development
            topics that interest me and inspire me.
        </p>
        <p>
            Thank you for visiting my website and getting to know me better. I hope you
            enjoyed reading my blog posts and
            found
            them useful and informative. If you want to read more of my posts, subscribe
            to my newsletter where I send
            weekly
            updates on web development trends and tips. If you have any feedback or
            suggestions, please let me know. I'd love to hear from you.
        </p>
        <a href="#" className="btn">Read More</a>
    </div>
</section>


<section className="services" id="services">
    <h2 className="heading">My <span>Services</span></h2>

    <div className="services-container">
        <div className="services-box">
            <i className='bx bx-code-alt'></i>
            <h3>Web Development</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
                eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.</p>
            <a href="#" className="btn">Read More</a>
        </div>
        <div className="services-box">
            <i className='bx bxs-paint'></i>
            <h3>Graphic Design</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
                eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.</p>
            <a href="#" className="btn">Read More</a>
        </div>
        <div className="services-box">
            <i className='bx bx-bar-chart-alt'></i>
            <h3>Digital Marketing</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi itaque similique, architecto
                eaque ut quas delectus pariatur nesciunt in eligendi mollitia dicta.</p>
            <a href="#" className="btn">Read More</a>
        </div>
    </div>
</section>


<section className="portfolio" id="portfolio">
    <h2 className="heading">Latest <span>Project</span></h2>

    <div className="portfolio-container">
        <div className="portfolio-box">
            <img src="images/portfolio1.jpg" alt="" />

            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
        </div>
        <div className="portfolio-box">
            <img src="images/portfolio2.jpg" alt="" />

            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
        </div>
        <div className="portfolio-box">
            <img src="images/portfolio3.jpg" alt="" />

            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
        </div>
        <div className="portfolio-box">
            <img src="images/portfolio4.jpg" alt="" />

            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
        </div>
        <div className="portfolio-box">
            <img src="images/portfolio5.jpg" alt="" />

            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
        </div>
        <div className="portfolio-box">
            <img src="images/portfolio6.jpg" alt="" />

            <div className="portfolio-layer">
                <h4>Web Design</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, ipsam est.</p>
                <a href="#"><i className='bx bx-link-external'></i></a>
            </div>
        </div>
    </div>
</section>


<div className="testimonial-container">
    <h2 className="heading">Valuable <span>Testimonial</span></h2>

    <div className="testimonial-wrapper">
        <div className="testimonial-box mySwiper">
            <div className="testimonial-content swiper-wrapper">
                <div className="testimonial-slide swiper-slide">
                    <img src="images/testimonial1.jpg" alt="" />
                    <h3>Jackson Levi</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem dignissimos aliquid
                        iure delectus corrupti impedit, beatae aperiam ad iusto nostrum possimus cum pariatur harum
                        assumenda suscipit a, qui, tempora maxime nulla facere quo ipsum tempore. Atque libero
                        provident ad aut officia pariatur voluptate quaerat delectus nesciunt, sequi eligendi
                        aperiam fugit unde nihil, iste similique illum. Dignissimos enim officia consequuntur
                        dolores.</p>
                </div>
                <div className="testimonial-slide swiper-slide">
                    <img src="images/testimonial2.jpg" alt="" />
                    <h3>Flora Ocean</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem dignissimos aliquid
                        iure delectus corrupti impedit, beatae aperiam ad iusto nostrum possimus cum pariatur harum
                        assumenda suscipit a, qui, tempora maxime nulla facere quo ipsum tempore. Atque libero
                        provident ad aut officia pariatur voluptate quaerat delectus nesciunt, sequi eligendi
                        aperiam fugit unde nihil, iste similique illum. Dignissimos enim officia consequuntur
                        dolores.</p>
                </div>
                <div className="testimonial-slide swiper-slide">
                    <img src="images/testimonial3.jpg" alt="" />
                    <h3>Julian Grayson</h3>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem dignissimos aliquid
                        iure delectus corrupti impedit, beatae aperiam ad iusto nostrum possimus cum pariatur harum
                        assumenda suscipit a, qui, tempora maxime nulla facere quo ipsum tempore. Atque libero
                        provident ad aut officia pariatur voluptate quaerat delectus nesciunt, sequi eligendi
                        aperiam fugit unde nihil, iste similique illum. Dignissimos enim officia consequuntur
                        dolores.</p>
                </div>
            </div>

            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
            <div className="swiper-pagination"></div>
        </div>
    </div>
</div>


<section className="contact" id="contact">
    <h2 className="heading">Contact <span>Me!</span></h2>

    <form action="#">
        <div className="input-box">
            <input type="text" placeholder="Full Name" />
            <input type="email" placeholder="Email Address" />
        </div>
        <div className="input-box">
            <input type="number" placeholder="Mobile Number" />
            <input type="text" placeholder="Email Subject" />
        </div>
        <textarea name="" id="" cols="30" rows="10" placeholder="Your Message"></textarea>
        <input type="submit" value="Send Message" className="btn" />
    </form>
</section>


<footer className="footer">
    <div className="footer-text">
        <p>Copyright &copy; 2023 | All Rights Reserved.</p>
    </div>

    <div className="footer-iconTop">
        <a href="#home"><i className='bx bx-up-arrow-alt'></i></a>
    </div>
</footer>
</div>
    </div>
  );
}

export default App;
