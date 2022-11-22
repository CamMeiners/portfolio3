import React from 'react';
import './About.css';
import car1 from './pics/cam-car-14.jpg';
import guys from './pics/guys.jpg';
import mustang from './pics/mustang.JPG';
import boys2 from './pics/the boys pics-31.jpg';
function About() {
  return (
    <div className="about">
      <div className="content">
        <div className="story">
          <h1>My Story</h1>
          <p>
            My interest in technology started when I was young, stemming from my
            father's career in electrical engineering. All things tech
            interested me, from wires to screens and everything inbetween. This
            brought an interest in video games, and my first piece of tech that
            I owned was an X-Box 360 when I was 13.
          </p>
          <p>
            I upgraded from my X-Box to a cheap HP laptop when I was 15, and
            used it to continue gaming but also started dabbling in code,
            crypto, and anything else that caught my attention on the web. This
            lead me to continue learning and I eventually built my own gaming
            computer at 17, just in time to attend Mountainland Technical
            College in 2018, earning TestOut certifications in PC building,
            Linux, Security, and Networking.
          </p>
          <p>
            After graduating Mountainland Technical College and Skyridge
            Highschool, I got a job at a local Internet Service Provider called
            Senawave. This was my first real tech related position, and although
            I was just doing low level customer tech support, I fell even more
            in love with the ever expanding world of tech. Once my time at
            Senawave came to an end, I created my own business, Sleep Cycled,
            with the help of my dad and brothers.
          </p>
          <p>
            At Sleep Cycled, I gained management, customer service, sales, and
            charity experience. We worked with bed-in-a-box mattress giants such
            as Purple, Ghost, Nectar, and over a hundred others brands to bring
            affordable, high quality beds to those in need.
          </p>
          <p>
            Once my time at Sleep Cycled ran it's course, I landed an IT
            position at Crumbl Cookies HQ while attending Bloom Institute of
            Technology (formerly known as Lambda School), studying web
            development. During my stay with Crumbl, I worked closely with the
            development team and franchise owners to ensure correctly working
            technology in over 500 franchises across the country.
          </p>
          <p>
            In early 2022, I finished up at BloomTech and took a bit of a career
            change into software development. With the help of a great friend, I
            joined 7 Oaks Group, a contracting company that then sent me out to
            develop for Zerorez carpet cleaning. Being my first developer role,
            I learned from those around me and my programming knowledge has
            increased exponentially. In 8 short months, I was unfortunately let
            go to make room on our team for a DevOps engineer to more suitably
            meet the companies needs.
          </p>
          <p>
            I spend my time outside of work with my border collie, Chief,
            skiing, hanging out with my friends, and working on my 1966 Ford
            Mustang.
          </p>
        </div>
        <div className="pics">
          <img src={car1} alt="" />
          <img src={guys} alt="" />
          <img src={mustang} alt="" />
          <img src={boys2} alt="" />
        </div>
      </div>
    </div>
  );
}
export default About;
