import React from 'react';
import { FaMailBulk, FaLinkedin } from 'react-icons/fa';

const Main = () => {
  return (
    <main>
      <section>
        <h1>Shashidhar G</h1>
        <h3>Frontend Dev</h3>
        <p>@gmail.com</p>
      </section>
      <section className="btn">
        <button>
          <FaMailBulk />
          Email
        </button>
        <button>
          <FaLinkedin />
          LinkedIn
        </button>
      </section>
      <section>
        <h3>About</h3>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h3>Interests</h3>
        <p>
          Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
          Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
        </p>
      </section>
    </main>
  );
};

export default Main;
