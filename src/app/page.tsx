import Head from 'next/head';
import './styles.css';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Sarah's Creative Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="header bg-pink-200 py-4">
        <div className="container text-center">
        </div>
      </header>

      <nav className="bg-white py-4 shadow-md">
        <div className="container flex justify-between items-center">
          <h2 className="text-xl font-bold">Sarah Creative</h2>
          <ul className="flex space-x-6">
            <li>About</li>
            <li>Work</li>
            <li>Blog</li>
            <li>Contact</li>
            {/* <li>Shop</li> */}
          </ul>
          <div>
            {/* <span className="font-bold">🛒</span> */}
          </div>
        </div>
      </nav>

      <main className="container mt-10">
        <section className="text-center mb-16  mb-1">
          <img  class="background" src="https://i.pinimg.com/564x/ef/86/d8/ef86d83e08e6086f4f13a6ef6eeb9765.jpg" alt="Sarah" className="mx-auto rounded-full w-40 h-40 object-cover" />
          <h2 className="text-3xl font-bold">Hey, I'm Sarah!</h2>
          <p className="text-xl mt-4">Creating meaningful connections through engaging content</p>
          <button className="btn mt-4">Let's Work Together</button>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold">Marketing Services</h3>
          <p className="text-lg mt-4">Cozy up with another cup of coffee and learn more about how you, your team, or organization can go from being the industry influencer with real strategies and customized content.</p>
          <div class="services" className="flex justify-around mt-10" >
            <div className="service">
              <img src="https://i.pinimg.com/564x/c8/fd/02/c8fd02845ea0aaaea98008d0766e9e0f.jpg" alt="Consulting" className="mx-auto w-16 h-16 object-cover" />
              <h4 className="text-xl font-bold mt-4">Consulting</h4>
              <button className="btn mt-2">Learn More</button>
            </div>
            <div className="service">
              <img src="https://i.pinimg.com/564x/4b/90/ae/4b90ae61f7f5ac88dc1ef24e20ffca74.jpg" alt="Content Creation" className="mx-auto w-16 h-16 object-cover" />
              <h4 className="text-xl font-bold mt-4">Content Creation</h4>
              <button className="btn mt-2">Let's Do It</button>
            </div>
            <div className="service">
              <img src="https://i.pinimg.com/564x/99/8e/77/998e77e378dddad503d39d878bda759e.jpg" alt="Copywriting" className="mx-auto w-16 h-16 object-cover" />
              <h4 className="text-xl font-bold mt-4">Copywriting</h4>
              <button className="btn mt-2">I'm In</button>
            </div>
          </div>
        </section>

        <section className="text-center mb-16">
          <h3 className="text-2xl font-bold">What They're Saying</h3>
          <p className="text-lg mt-4">"I chose Sarah because of her expertise and creativity with social media. Since starting I have experienced great relationships that progress without me needing to get too involved. Sarah is a spitting of amazing attitude with superior talent!"</p>
          <p className="mt-4">- Kim, JAN-PRO of Charlotte</p>
        </section>

        <section class="footer" className="text-center mb-16">
          <img class="background" src="https://i.pinimg.com/originals/b6/52/e7/b652e73698a9e7749989134db6d504a5.jpg" alt="Polaroid" className="mx-auto w-40 h-40 object-cover" />

          <div>

                      <h3 className="text-2xl font-bold mt-4">So Nice to Meet You</h3>
          <p className="text-lg mt-4">I'm Sarah, the girl behind Sarah Creative Services. I'm fueled by my passion for helping others achieve intentional, creative, and engaging content. I'm here to help you with strategies tailored to your needs.</p>
          <button className="btn mt-4">Let's Be Friends</button>
          </div>

        </section>
      </main>
    </div>
  );
}
