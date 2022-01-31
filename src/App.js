import './App.css';

function App() {
  return (
    <div className="App">

      {/* -------------- navbar ------------ */}
      <nav className='navv'>
        <input type="checkbox" id="check" />
        <label htmlFor="check" className="checkbtn">
          <i className="fas fa-bars"></i>
        </label>
        <label className="logo">
          <a href="#">VJF</a>
        </label>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Judgements</a></li>
          <li><a href="#">Gallery</a></li>
        </ul>
      </nav>

      {/* ----------------------- sec1 --------------------- */}
      <div className="sec1">

        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">

          {/* <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div> */}

          <div className="carousel-inner">

            <div className="carousel-item active">
              <img src="./images/1.banner/1.jpg" className="d-block w-100 someimg" alt="..." />
              <div className="carousel-caption overlay">
                <h5>Vinayak Justice Fetchers</h5>
                <p>Well established and successful law firm with 35 years of extensive legal work in diverse fields</p>
                <button><a href="">CONTACT US</a></button>
              </div>
            </div>

            <div className="carousel-item">
              <img src="./images/1.banner/2.jpg" className="d-block w-100 someimg" alt="..." />
              <div className="carousel-caption overlay">
                <h5>You Deserve the Best Lawyers</h5>
                <p>A group of enthusiastic & dynamic Advocates & Solicitors</p>
                <button><a href="">CONTACT US</a></button>
              </div>
            </div>

            <div className="carousel-item">
              <img src="./images/1.banner/3.jpg" className="d-block w-100 someimg" alt="..." />
              <div className="carousel-caption overlay">
                <h5>We will Fight for your Right</h5>
                <p>Some representative placeholder content for the third slide.</p>
                <button><a href="">CONTACT US</a></button>
              </div>
            </div>

            <div className="carousel-item">
              <video id="background-video" autoPlay loop muted playsInline>
                <source src="./images/1.banner/video.mp4" type="video/mp4" />
              </video>
              <div className="carousel-caption overlay">
                <h5>Always There to Help You</h5>
                <p>Experienced Court practice, Solid Law practice</p>
                <button><a href="">CONTACT US</a></button>
              </div>
            </div>

          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

      </div>

      {/* ----------------------- sec 2 --------------------- */}
      <div className="sec2">
        <h2>WHAT WE ARE</h2>
        <h1>Seriously Unbelievable Client Service</h1>

        <div className="sec2-inner">

          <div className="sec2-l">
            <h2>WHO WE ARE</h2>
            <h1>We look at the law differently</h1>
            <p>
              By cooperating with over 100 lawyers across the region, our original
              values remain an integral part of our philosophy and approach to
              client work. We are perfectly placed to take you through. <br /> <br />

              Dramatically engage top-line web services vis-a-vis cutting-edge
              deliverables. Proactively envisioned multimedia based expertise
              and cross-media growth strategies. Seamlessly visualize quality
              intellectual capital without superior collaboration and idea-sharing.
              Holistically pontificate installed base portals after maintainable products.
            </p>
            <button><a href="">MORE DETAILS</a></button>
          </div>

          <div className="sec2-r">
            <img src="./images/2.about-us/1.png" alt="" />
          </div>

        </div>

      </div>

      {/* ----------------------- sec 3 --------------------- */}
      <div className="sec3">
        <div className="s3-t">
          <hr />
          <i className="fas fa-landmark"></i>
          <hr />
        </div>
        <h1>Top Quality Services and Legal Advices</h1>
      </div>

      {/* ----------------------- sec 4 --------------------- */}
      <div className="sec4">
        <h2>WHAT WE ARE</h2>
        <h1>Seriously Unbelievable Client Service</h1>
        <p>Lawyers take into consderation local particularities in order to provide the best legal advice.</p>

        <div className="s4-inner">
          <div className="s4-box">
            <i className="fas fa-gavel"></i>
            <h1>Medical</h1>
            <h2>We prevent an occurrence by educating clients</h2>
          </div>
          <div className="s4-box">
            <i className="fas fa-gavel"></i>
            <h1>Corruption</h1>
            <h2>Corruption faces widely dispersed headlines and damage</h2>
          </div>
          <div className="s4-box">
            <i className="fas fa-gavel"></i>
            <h1>Employment</h1>
            <h2>From recruitment, cross-border and immigration issues</h2>
          </div>
          <div className="s4-box">
            <i className="fas fa-gavel"></i>
            <h1>Real Estate</h1>
            <h2>Entire cycle of your complex real estate investment</h2>
          </div>
          <div className="s4-box">
            <i className="fas fa-gavel"></i>
            <h1>Tax</h1>
            <h2>Advise on employment-related taxation and client’s risks</h2>
          </div>
          <div className="s4-box">
            <i className="fas fa-gavel"></i>
            <h1>Corporate</h1>
            <h2>Legal services to multi-national and domestic clients</h2>
          </div>
          <div className="s4-box">
            <i className="fas fa-gavel"></i>
            <h1>Compeitition</h1>
            <h2>Antitrust, competition law compliance and regulation</h2>
          </div>
          <div className="s4-box">
            <i className="fas fa-gavel"></i>
            <h1>Banking</h1>
            <h2>Syndicated loan facilities and financial transactions</h2>
          </div>
        </div>
        <div className="but">
          <button><a href="">MORE DETAILS</a></button>
        </div>

      </div>

      {/* ----------------------- sec 5 --------------------- */}
      <div className="sec5">
        <h2>OUR ARTICLES</h2>
        <h1>Specialising in the art of our storytelling</h1>

        <div className="s5-inner">
          <div className="s5-box">
            <img src="./images/3.articles/1.jpg" alt="" />
            <div className="s5-boxx">
              <i className="fas fa-calendar-week"></i>
              <p>January 31, 2022</p>
            </div>
            <h1>Corruption</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur nostrum pariatur assumenda eum odit laboriosam placeat ducimus provident iure quos commodi, eos corporis dolore quisquam a fugiat sed laudantium.....</h2>
            <button><a href="">READ MORE</a></button>
          </div>

          <div className="s5-box">
            <img src="./images/3.articles/2.jpg" alt="" />
            <div className="s5-boxx">
              <i className="fas fa-calendar-week"></i>
              <p>January 31, 2022</p>
            </div>
            <h1>Corruption</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur nostrum pariatur assumenda eum odit laboriosam placeat ducimus provident iure quos commodi, eos corporis dolore quisquam a fugiat sed laudantium.....</h2>
            <button><a href="">READ MORE</a></button>
          </div>

          <div className="s5-box">
            <img src="./images/3.articles/3.jpg" alt="" />
            <div className="s5-boxx">
              <i className="fas fa-calendar-week"></i>
              <p>January 31, 2022</p>
            </div>
            <h1>Corruption</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur nostrum pariatur assumenda eum odit laboriosam placeat ducimus provident iure quos commodi, eos corporis dolore quisquam a fugiat sed laudantium.....</h2>
            <button><a href="">READ MORE</a></button>
          </div>

          <div className="s5-box">
            <img src="./images/3.articles/1.jpg" alt="" />
            <div className="s5-boxx">
              <i className="fas fa-calendar-week"></i>
              <p>January 31, 2022</p>
            </div>
            <h1>Corruption</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur nostrum pariatur assumenda eum odit laboriosam placeat ducimus provident iure quos commodi, eos corporis dolore quisquam a fugiat sed laudantium.....</h2>
            <button><a href="">READ MORE</a></button>
          </div>

          <div className="s5-box">
            <img src="./images/3.articles/2.jpg" alt="" />
            <div className="s5-boxx">
              <i className="fas fa-calendar-week"></i>
              <p>January 31, 2022</p>
            </div>
            <h1>Corruption</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur nostrum pariatur assumenda eum odit laboriosam placeat ducimus provident iure quos commodi, eos corporis dolore quisquam a fugiat sed laudantium.....</h2>
            <button><a href="">READ MORE</a></button>
          </div>

          <div className="s5-box">
            <img src="./images/3.articles/3.jpg" alt="" />
            <div className="s5-boxx">
              <i className="fas fa-calendar-week"></i>
              <p>January 31, 2022</p>
            </div>
            <h1>Corruption</h1>
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo tenetur nostrum pariatur assumenda eum odit laboriosam placeat ducimus provident iure quos commodi, eos corporis dolore quisquam a fugiat sed laudantium.....</h2>
            <button><a href="">READ MORE</a></button>
          </div>

        </div>
        <button><a href="">READ ALL</a></button>
      </div>

      {/* ----------------------- sec 6 --------------------- */}
      <div className="sec6">
        <h2>TESTIMONIALS</h2>
        <h1>See what our clients say about us!!</h1>
        <div className="wrapper">

          <div className="box">
            <i className="fas fa-quote-left quote"></i>
            <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
            <div className="content">
              <div className="info">
                <div className="name">Vaibhav</div>
                <div className="job">Web Developer</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="./images/4.testimonials/1.jfif" alt="" />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left quote"></i>
            <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
            <div className="content">
              <div className="info">
                <div className="name">Kaustubh</div>
                <div className="job">Software Engineer</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="./images/4.testimonials/2.jfif" alt="" />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left  quote"></i>
            <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
            <div className="content">
              <div className="info">
                <div className="name">Ankush</div>
                <div className="job">Freelancer</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="./images/4.testimonials/3.jfif" alt="" />
              </div>
            </div>
          </div>

          <div className="box">
            <i className="fas fa-quote-left quote"></i>
            <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
            <div className="content">
              <div className="info">
                <div className="name">Vaibhav</div>
                <div className="job">Web Developer</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="./images/4.testimonials/1.jfif" alt="" />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left quote"></i>
            <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
            <div className="content">
              <div className="info">
                <div className="name">Kaustubh</div>
                <div className="job">Software Engineer</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="./images/4.testimonials/2.jfif" alt="" />
              </div>
            </div>
          </div>
          <div className="box">
            <i className="fas fa-quote-left  quote"></i>
            <p>Lorem aliasry ipsum dolor sits ametans, consectetur adipisicing elitits. Expedita reiciendis itaque placeat thuratu, quasi yiuos repellendus repudiandae deleniti ideas fuga molestiae, alias.</p>
            <div className="content">
              <div className="info">
                <div className="name">Ankush</div>
                <div className="job">Freelancer</div>
                <div className="stars">
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="fas fa-star"></i>
                  <i className="far fa-star"></i>
                </div>
              </div>
              <div className="image">
                <img src="./images/4.testimonials/3.jfif" alt="" />
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ----------------------- sec 7 --------------------- */}
      <div className="sec7">
        <h1>Our Clients</h1>
        <h2>Over the years we have built long standing relationship with our clients.
          Following are few of them.
        </h2>

        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>
          </div>
        </div>
        <div className="slider">
          <div className="slide-track">
            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>

            <div className="slide">
              <img src="./images/5.clients/ey.png" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- footer --------------------- */}

      <footer>
        <div className="content">
          <div className="left box">
            <div className="upper">
              <div className="topic">About us</div>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non ut est voluptate dolore deserunt amet ad quas saepe iusto sequi soluta necessitatibus ipsam commodi nobis, sint enim eum deleniti ex.</p>
            </div>
            <div className="lower">
              <div className="topic">Contact us</div>
              <div className="phone">
                <a href="#"><i className="fas fa-phone-volume"></i>+007 9089 6767</a>
              </div>
              <div className="email">
                <a href="#"><i className="fas fa-envelope"></i>abc@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="middle box">
            <div className="topic">Links</div>
            <div><a href="#">About Us</a></div>
            <div><a href="#">Services</a></div>
            <div><a href="#">Team</a></div>
            <div><a href="#">Articles</a></div>
            <div><a href="#">Judgements</a></div>
            <div><a href="#">Gallery</a></div>
          </div>
          <div className="right box">
            <div className="topic">Subscribe us</div>
            <form action="#">
              <input type="text" placeholder="Enter email address" />
              <input type="submit" name="" value="Send" />
              <div className="media-icons">
                <a href="#"><i className="fab fa-facebook-f"></i></a>
                <a href="#"><i className="fab fa-instagram"></i></a>
                <a href="#"><i className="fab fa-twitter"></i></a>
                <a href="#"><i className="fab fa-youtube"></i></a>
                <a href="#"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </form>
          </div>
        </div>
        <div className="bottom">
          <p>Copyright © 2020 <a href="#">VJF</a> All rights reserved</p>
        </div>
      </footer>

    </div>
  );
}

export default App;
