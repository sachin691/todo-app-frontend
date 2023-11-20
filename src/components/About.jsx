import React from "react";
import webGif from "../website-parallax-scrolling-design.gif";
const About = () => {
  return (
    <>
      <div className="min-h-screen flex mt-auto mb-auto bg-gray-100">
        <section className=""></section>
        <section className="bg-white w-full">
          <div className="mr-2 py-6 flex justify-center">
            <div className=" w-full min-h-screen rounded">
              <div className=" mt-8">
                <h1 className="text-center text-5xl font-bold pb-5">
                  <span className="border-b-4 border-orange-500 ">
                    About Us
                  </span>
                </h1>
              </div>
              <div className="grid grid-cols-2  rounded-2xl mt-10 animate-[wiggle_1s_ease-in-out] ">
                <div className="px-2 py-2">
                  <img
                    src="https://assets-global.website-files.com/5f22271f4a92a90a8198c6ef/5f580e61444e9cfab4e04276_28%20(1).png"
                    alt="social-media"
                    className="px-2 py-2 object-right"
                  ></img>
                </div>
                <div className="px-2 py-3 mt-10">
                  <h1 className="text-3xl font-bold">
                    <span className="border-b-4 border-orange-500 ">
                      Welcome t
                    </span>
                    o HashnDots
                  </h1>
                  <p className="text-2xl mt-10">
                    We craft digital experiences, tell brand stories, and ignite
                    online success. We are a passionate team of digital
                    enthusiasts, social media mavens, and web wizards dedicated
                    to turning your digital dreams into reality.
                    <br />
                    We are not just another agency. We are your partners in the
                    digital journey. From pixel-perfect websites to social media
                    strategies that resonate, we thrive on transforming ideas
                    into impactful online presences. Our team brings together a
                    blend of creativity, technical expertise, and a touch of
                    magic to every project we undertake.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <img
                  className="h-[20rem] w-[40rem]"
                  src="https://cdn.cleancommit.io/blog/2022/12/web-development-image.png"
                  alt="our-mission"
                ></img>
              </div>
              <div className="grid grid-cols-2  rounded-2xl mt-10 ">
                <div className="px-2 py-3 mt-10 mx-10">
                  <h1 className="text-3xl font-bold">
                    <span className="border-b-4 border-orange-500 ">Our M</span>
                    ission
                  </h1>
                  <p className="text-2xl mt-10">
                    We believe in the power of innovation and the limitless
                    possibilities of the digital realm. Our mission is to
                    empower businesses, big or small, to thrive in the online
                    landscape. Through cutting-edge web development, strategic
                    digital marketing, and engaging social media campaigns, we
                    propel your brand forward in the digital sphere.
                  </p>
                </div>
                <div className="px-2 py-2 mx-10">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREc0KasQp7tKxAuGlNFl-QWF8JE59zoYk84yIH8FfRRBV9Fue7gX0qGjSb-tO96QCM1Ws&usqp=CAU"
                    alt="social-media"
                    className="px-2 py-2 object-right mx-auto w-1/2"
                  ></img>
                </div>
              </div>
              <div className="grid grid-cols-2  rounded-2xl mt-10 ">
                <div className="px-2 py-3 mt-10 mx-10">
                  <h1 className="text-3xl font-bold">
                    <span className="border-b-4 border-orange-500 ">Why C</span>
                    hoose Us
                  </h1>
                  <p className="text-2xl mt-10">
                    Passion Meets Expertise: Our team is fueled by passion and
                    backed by years of experience in the ever-evolving digital
                    landscape. Tailored Solutions: No two businesses are the
                    same, and neither are our solutions. We tailor our services
                    to suit your unique needs and goals. Collaboration is Key:
                    We believe in collaboration and open communication. Your
                    ideas, combined with our expertise, create the perfect
                    synergy for success.
                  </p>
                </div>
                <div className="px-2 py-2 mx-10">
                  <img
                    src={webGif}
                    alt="social-media"
                    className="px-2 py-2 object-right mx-auto w-full rounded-3xl"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
