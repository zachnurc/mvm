import React, { Component } from 'react';
import $ from 'jquery';
import logo from './logo.svg';
import malcolm from './media/malcolm.jpg';
import naomi from './media/naomi.jpg';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state= {

    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {

    var scrollPos = $(document).scrollTop();
    $('#navbar a').each(function () {
      var currLink = $(this);
      var refElement = $(currLink.attr("href"));
      if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
        $('#navbar a').removeClass("active");
        currLink.addClass("active");
        window.location.hash = 'section' + this.hash;
      }
      else{
        currLink.removeClass("active");
      }
    });
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleWindowSizeChange);

    var h = window.location.hash.replace('section', '');
    h = h.substr(1);
    if (h) {
      var target = h,
      location = target;
      target = $(target);
      if(!(target.offset() == undefined )){
        $('html, body').stop().animate({
          'scrollTop': target.offset().top+2
        }, 1000, 'swing', function () {
          window.location.hash = 'section' + location;
          $(document).on("scroll", this.handleScroll);
        });
      }
    }

    window.addEventListener('scroll', this.handleScroll);

    $('a[href^="#"]').on('click', function (e) {
      e.preventDefault();
      $(document).off("scroll");

      $('a').each(function () {
        $(this).removeClass('active');
      })
      $(this).addClass('active');

      var target = this.hash,
      location = target;
      target = $(target);
      $('html, body').stop().animate({
        'scrollTop': target.offset().top+2
      }, 500, 'swing', function () {
        window.location.hash = 'section' + location;
        $(document).on("scroll", this.handleScroll);
      });
    });

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="#home" className="App-title">
            <h1 >MVM Logistics</h1>
          </a>
          <div id="navbar">
            <a href="#home" >HOME</a>
            <a href="#about" >ABOUT</a>
            <a href="#our-team">THE TEAM</a>
            <a href="#contact" >CONTACT</a>
          </div>
        </header>
        <div id="home" className="section">
          <div className="home-background-img"></div>
          <div className="home-container">
            <h1>Welcome</h1>
            <p>
              From the moment you pick up the phone to our dedicated office team, you can be assured that your vehicle movement requirements are in the hands of the best professional team in the industry.
            </p>
            <p>
              We specialise in the movement of new and pre-owned vehicles for private customers, sole traders, group buyers & franchise dealers, shipping companies and lease companies. We are the experts you can rely on to ensure your vehicle is moved on time and in safe hands to its end destination.
            </p>
            <p>
              Please explore our site to discover how our services can benefit you.
            </p>
          </div>
        </div>
        <div id="about" className="section">
          <div className="section-container">
            <h1>About</h1>
            <p>
              Motor Vehicle Management has been trading since 1989 and transitioned to a Limited company in 2012.
              <br />
              We have experienced strong growth in recent years based soley on word of mouth and the reputation we have built up within the industry.
              <br />
              We are determined to maintain a customer focused business based on integrity, reliability and exceptional service.
            </p>
          </div>
        </div>
        <div id="our-team" className="section">
          <div className="section-container">
            <h1>Meet the team</h1>
            <div className="team-container">
              <h3>Malcolm Nurcombe - Company Director</h3>
              <img className="portrait float-left" src={malcolm} alt={malcolm}/>
              <p>
                Malcolm began his career obtaining experience and qualifications as a motor vehicle technician and during the period 1986-1988 became service manager at BMW Chesterfield. The next step saw a move to the buying department for Pendragon until 1989 when he formed his own company Motor Vehicle Management, trading within the prestige vehicle market place.
                During the last 8 years the rapidly expanding vehicle logistics side of this business has taken over from trading as the main activity. This resulted in the move to become a limited company in 2012. He works alongside 7 office staff and oversees the management of a team of 40 drivers.
              </p>
            </div>
            <div className="team-container">
              <h3>Naomi Gayle</h3>
              <img className="portrait float-right" src={naomi} alt={naomi} />
              <p>
                Naomi obtained her degree at Loughborough University in 1999 and it was during this time she got to know Malcolm, working for him to move trade vehicles on her free study days! Following university she gained experience in the leisure industry running a ski chalet in France with her husband before returning to the UK to start a family. Having raised her four children to school age she returned to work part-time at the MVM office in 2009. When the company directors experienced a personal family crisis in 2010 she stepped up to full time work running the office. As our office manager she coordinates and manages the team, assisting the directors, and is also now involved as a co-director of our sister company MVM Coaches Ltd.
              </p>
            </div>
          </div>
        </div>
        <div id="contact" className="section">
          <div className="section-container">
            <h1>Contact</h1>
            <p>If you would like us to give you a quote for a job please fill out the form below with all the job information.</p>
            <div>
              <form onSubmit={this.handleSubmit} onKeyUp={this.handleFormKeyUp}>
                <div className="col-wide">
                  <div className="col-small no-left-padding">
                    <input
                      ref={(input) => { this.contactName = input; }}
                      className="input-box"
                      name="name"
                      type="text"
                      placeholder="Your Name"
                      value={this.state.myName}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-small">
                    <input
                      ref={(input) => { this.contactEmail = input; }}
                      className="input-box"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </div>
                  <div className="col-small">
                    <input
                      ref={(input) => { this.contactSubject = input; }}
                      className="input-box"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                      value={this.state.subject}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="col-wide">
                  <textarea
                    ref={(input) => { this.contactMessage = input; }}
                    className="input-box"
                    name="message"
                    value={this.state.message}
                    placeholder="From: Postcode, To: Postcode, Date needed by"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-wide margin-top">
                  <div className="col-small">
                    <p>{this.state.submission}</p>
                  </div>
                  <div className="col-small">
                    <input
                      className="input-box"
                      type="Submit"
                      value="Send"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
