import React from "react";

const Home = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col mt-auto mb-auto text-center">
        <section className="w-full">
          <div className="animate-[wiggle_1s_ease-in-out] mx-24 py-6 flex justify-center ">
            <div className="bg-gradient-to-r from-orange-200  w-full h-[20rem] rounded p-2">
              <h1 className="mt-12 text-5xl font-bold py-5">
                Dot By Dot, <span className="text-orange-400">We Grow</span>{" "}
                <br />
                <span className="text-6xl">
                  <span className="text-orange-400">#</span>
                  GrowthInEveryDot
                </span>
              </h1>
            </div>
          </div>
        </section>
        <h1 className="animate-[wiggle_1s_ease-in-out] text-center p-5 mt-4 text-6xl font-bold text-gray-400 ">
          Navigate the{" "}
          <span className="text-orange-200">Digital Frontier </span> with
          HashnDots
          <br />
          <span className="text-3xl">
            your Tech savvy partner in crafting ingenious Digital Marketing and{" "}
            <br />
            Web Development solutions <br />
          </span>
        </h1>
        <p className="text-center text-3xl font-bold">
          so you can focus on doing what you do best – grow your business.
        </p>
        <section className="bg-white w-full mt-12 ">
          <div className="mx-24 py-6 flex items-start gap-4">
            <div className="flex flex-col justify-start bg-slate-50 w-1/3 h-[50vh] p-2 shadow-2xl shadow-slate-500 hover:bg-orange-50">
              <h1 className="mx-4 font-bold text-2xl text-left hover:text-orange-500">
                Social Media Marketing
              </h1>
              <p className="mx-4 text-lg text-left mt-5">
                We manage your complete social media channels that will increase
                your social media presence.
              </p>
              <div className=" mx-8 mt-4 text-left ">
                <ul className="">
                  <li className="custom-list-item">Preparing strategy</li>
                  <li className="custom-list-item">Writing relevant content</li>
                  <li className="custom-list-item">
                    Designing attractive graphics
                  </li>
                  <li className="custom-list-item">
                    Publishing to your channels
                  </li>
                  <li className="custom-list-item">Community management</li>
                  <li className="custom-list-item">Reporting + insights</li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col justify-start bg-slate-50 w-1/3 h-[50vh] p-2 shadow-2xl shadow-slate-500 hover:bg-orange-50">
              <h1 className="mx-4 font-bold text-2xl text-left hover:text-orange-500">
                Digital Ads Management
              </h1>
              <p className="mx-4 text-lg text-left mt-5">
                Targeted social media ads to reach your correct audience &
                increase brand visibility. Serving following platforms:
              </p>
              <div className=" mx-8 mt-4 text-left ">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedin</li>
                <li>Twitter</li>
                <li>Pinterest</li>
                <li>You Tube</li>
              </div>
            </div>
            <div className="flex flex-col justify-start bg-slate-50 w-1/3 h-[50vh] p-2 shadow-2xl shadow-slate-500 hover:bg-orange-50">
              <h1 className="mx-4 font-bold text-2xl text-left hover:text-orange-500">
                Website Handling and Development
              </h1>
              <p className="mx-4 text-lg text-left mt-5">
                We handle your companies website and optimize it with SEO so you
                can top on google search.
              </p>
              <div className=" mx-8 mt-4 text-left ">
                <li>Website Handling</li>
                <li>Designing New Functionalities</li>
                <li>Optimizing SEO</li>
                <li>Resolving Bugs</li>
                <li>Creating Landing Pages</li>
                <li>Chatbot Development</li>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
