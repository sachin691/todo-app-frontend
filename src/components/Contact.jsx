import React, { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [sub, setSub] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {};
  return (
    <div className="min-h-screen bg-slate-100 flex flex-col text-center justify-start">
      <section className="w-full">
        <div className="mx-24 py-6 flex justify-center">
          <div className="bg-gradient-to-r from-orange-200  w-full h-[20rem] rounded p-2">
            <h1 className="text-8xl font-bold py-5">
              Contact <span className="orange-400">HashnDots</span> to grow your
              buisness
            </h1>
          </div>
        </div>
      </section>
      <section className="mx-24 px-4 py-4 w-3/4">
        <div className="flex justify-start">
          <h1 className="text-black text-4xl font-bold ">
            <span className="border-b-2 border-orange-500">Be i</span>n touch
            <span className="text-orange-200 font-bold"> With Us</span>
          </h1>
        </div>
        <div className="flex flex-col justify-start mt-4">
          <p className="text-left text-2xl ">
            Social media is your own media channel. Survey speaks that
            customer’s trust on social media is far greater than other media.
            So, it is you who needs to take decision whether to hire experts of
            Social media or amateur.
          </p>{" "}
          <br />
          <p className="text-left text-2xl">
            You can even get FREE COUNSELLING on social media, just put your
            contact details.
          </p>
          <p className="text-left text-2xl text-orange-400">
            We love to talk to you!
          </p>
        </div>
        <div className="mt-4">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="flex flex-row p-5">
              <div className="w-1/2 pr-2">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 text-left"
                  htmlFor="full-name"
                >
                  Full Name
                </label>
                <input
                  className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="name"
                  placeholder="Enter your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-1/2 pr-2">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 text-left"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="flex p-5">
              <div className="w-full pr-2">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 text-left"
                  htmlFor="phone-number"
                >
                  Phone Number
                </label>
                <input
                  className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="number"
                  type="text"
                  placeholder="Enter your phone number"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex p-5">
              <div className="w-full pr-2">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 text-left"
                  htmlFor="subject"
                >
                  Subject
                </label>
                <input
                  className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="subject"
                  type="subject"
                  placeholder="Enter subject for your message"
                  value={sub}
                  onChange={(e) => setSub(e.target.value)}
                />
              </div>
            </div>
            <div className="flex p-5">
              <div className="w-full pr-2">
                <label
                  className="block text-gray-700 text-lg font-bold mb-2 text-left"
                  htmlFor="message"
                >
                  Message
                </label>
                <input
                  className=" w-full shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  type="text"
                  placeholder="Enter your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
            </div>
            <div className="flex p-5 justify-start">
              <button
                className="bg-orange-500 p-2 rounded text-white"
                type="submit"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
