"use client";

import Head from 'next/head';
import { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import './styles.css';

export default function Home() {
  useEffect(() => {
    const splide = new Splide('.splide');
    const bar = document.querySelector('.my-slider-progress-bar');

    splide.on('mounted move', () => {
      const end = splide.Components.Controller.getEnd() + 1;
      const rate = Math.min((splide.index + 1) / end, 1);
      bar.style.width = `${100 * rate}%`;
    });

    splide.mount();
  }, []);

  return (
    <div>
      <Head>
        <title>Sarah's Creative Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header bg-pink-200 py-4">
        <div className="container text-center"></div>
      </header>

      <nav className="bg-white py-4 shadow-md">
        <div className="container flex justify-between items-center">
          <h2 className="text-xl font-bold">Sarah's Creative Services</h2>
          <ul className="flex space-x-6">
            <li>About</li>
            <li>Work</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>🛒</li>
          </ul>
        </div>
      </nav>

      <main className="container mt-10">
        <section className="text-center mb-16 mb-1">
          <div className="pre-back">
            <img
              className="background mx-auto w-40 h-40 object-cover"
              src="https://i.pinimg.com/564x/ef/86/d8/ef86d83e08e6086f4f13a6ef6eeb9765.jpg"
              alt="Sarah"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold">Hey, I'm Sarah!</h2>
            <p className="text-xl mt-4">
              I create meaningful connections through engaging content
            </p>
            <button className="btn mt-4">Let's Work Together!</button>
          </div>
        </section>

        <section id="pre-services" className="text-center mb-16">
          <h3 className="text-2xl font-bold">Marketing Services</h3>
          <p className="text-lg mt-4">
            Cozy up with another cup of coffee and learn more about how you,
            your team, or organization can go from being the industry influencer
            with real strategies and customized content with me.
          </p>
          <div className="services flex justify-around mt-10">
            <div className="service">
              <img src="https://i.ibb.co/mFJh9V9/Screenshot-2024-06-25-010806.png" />
              <h4 className="text-xl mt-4">Consulting</h4>
              <button className="btn mt-2">Learn More</button>
            </div>
            <div className="service">
              <img
                src="https://i.pinimg.com/564x/4b/90/ae/4b90ae61f7f5ac88dc1ef24e20ffca74.jpg"
                alt="Content Creation"
                className="mx-auto w-16 h-16 object-cover"
              />
              <h4 className="text-xl mt-4">Content Creation</h4>
              <button className="btn mt-2">Let's Do It</button>
            </div>
            <div className="service">
              <img
                src="https://i.pinimg.com/564x/99/8e/77/998e77e378dddad503d39d878bda759e.jpg"
                alt="Copywriting"
                className="mx-auto w-16 h-16 object-cover"
              />
              <h4 className="text-xl mt-4">Copywriting</h4>
              <button className="btn mt-2">I'm In</button>
            </div>
          </div>
        </section>


        <section className="text-center mb-26">
          <h3 className="text-2xl font-bold">What They're Saying</h3>
        
        <section className="text-center mb-26">
          <div className="splide">
            <div className="splide__track">
              <ul className="splide__list">
                
                <li className="splide__slide">
                <p className="text-lg mt-4">
            "I chose Sarah because of her expertise and creativity with social
            media. Since starting I have experienced great improvements!"
          </p>
          <p className="mt-4">- Kim, JAN-PRO of Charlotte</p>
          </li>


                <li className="splide__slide">
                  
                <p className="text-lg mt-4">
    "Sarah's content strategies have transformed our online presence. Her unique approach and dedication have been a game changer for our business."
  </p>
  <p className="mt-4">- John, ABC Marketing</p>

                </li>

                <li className="splide__slide">
                  
                <p className="text-lg mt-4">
    "Working with Sarah has been a pleasure. Her insights into content creation and marketing have helped us engage more effectively with our audience."
  </p>
  <p className="mt-4">- Lisa, XYZ Solutions</p>

                </li>

              </ul>
            </div>
            <div className="my-slider-progress">
              <div className="my-slider-progress-bar"></div>
            </div>
          </div>
        </section>






        </section>

        <section className="footer text-center mb-16">
          <img
            className="background mx-auto w-40 h-40 object-cover"
            src="https://i.pinimg.com/originals/b6/52/e7/b652e73698a9e7749989134db6d504a5.jpg"
            alt="Polaroid"/>
          <div>
            <h3 className="text-2xl font-bold mt-4">So Nice to Meet You</h3>
            <p className="text-lg mt-4">
              I'm Sarah, the girl behind Sarah Creative Services. I'm fueled by
              my passion for helping others achieve intentional, creative, and
              engaging content. I'm here to help you with strategies tailored to
              your needs.
            </p>
            <button className="btn mt-4">Let's Be Friends</button>
          </div>
        </section>


      </main>
    </div>
  );
}
