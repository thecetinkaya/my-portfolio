import React from "react";

const About = () => {
  return (
    <div className="about flex justify-center min-h-screen">
      <div className="container grid-cols-3 mx-auto mt-16">
          <div className="w-full md:w-2/3">
          <div className="text-white flex justify-center text-3xl font-mono mt-4">Hakkımda</div>
            <div className="about-text">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nihil doloribus dolorum veniam maxime
                ipsa consectetur, quisquam recusandae obcaecati laboriosam? Minima sit voluptas aliquam? Doloremque,
                vero. Temporibus eligendi nulla necessitatibus voluptates minima ut, repudiandae quaerat reprehenderit aut
                iste in totam.
              </p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default About;
