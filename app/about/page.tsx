import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <main className=" max-w-7xl w-full">
      <section className="relative">
        <Image
          src="/project-1.jpg"
          alt="About Us Banner"
          className="w-full h-64 object-cover"
          width={100}
          height={100}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-bold">About Us</h1>
        </div>
      </section>

      <section className="container mx-auto py-12 px-6">
        {/* Company profile start */}
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Company Profile</h2>
            <p className="text-white-700 leading-relaxed mb-4">
              Great western Engineering and Construction Ltd.. was established
              in May 2009, affiliated to Jinergy Holding Group, located in
              Zhangze New Industrial Park, Changzhi City, Shanxi Province,
              covering an area of 398666 square meters.
            </p>
            <p className="text-grey-700 leading-relaxed">
              At present, the registered capital of the company is 1.9 billion
              yuan, and it has 2 subsidiaries, 2 branches, 4 business divisions
              and 4 auxiliary production workshops. It has a photovoltaic
              integrated capacity of 7GW and serves as the chairman unit of
              Shanxi Photovoltaic Industry Alliance.
            </p>
          </div>
          <div>
            <Image
              src="/project-2.jpg"
              alt="Company Image"
              className="w-full rounded-lg shadow-md"
              width={100}
              height={100}
            />
          </div>
        </div>
        {/* Company profile end */}

        {/* Our vission start */}
        <div className="grid md:grid-cols-2 gap-12 mt-5">
          <div>
            <Image
              src="/project-2.jpg"
              alt="Company Image"
              className="w-full rounded-lg shadow-md"
              width={100}
              height={100}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Vission</h2>
            <p className="text-white-700 leading-relaxed mb-4">
              We are committed to building a sustainable new energy ecosystem
              and contributing to the green and sustainable development of all
              mankind.
            </p>
            <p className="text-grey-700 leading-relaxed">
              We are committed to building a sustainable new energy ecosystem
              and contributing to the green and sustainable development of all
              mankind.
            </p>
          </div>
        </div>
        {/* Our Vission end */}

        {/* Our Mission start */}
        <div className="grid md:grid-cols-2 gap-12 mt-5">
          <div>
            <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
            <p className="text-white-700 leading-relaxed mb-4">
              Leading photovoltaic technology innovation and contributing to
              global sustainable energy development.
            </p>
            <p className="text-grey-700 leading-relaxed">
              Leading photovoltaic technology innovation and contributing to
              global sustainable energy development.
            </p>
          </div>
          <div>
            <Image
              src="/project-3.jpg"
              alt="Company Image"
              className="w-full rounded-lg shadow-md"
              width={100}
              height={100}
            />
          </div>
        </div>
        {/* Our Mission end */}

        <div>
          <h3 className="text-xl font-bold mb-4">Code of Conduct</h3>
          <ul className="list-disc text-left pl-6">
            <li className="mb-2">
              Customer First: Provide personalized solutions.
            </li>
            <li className="mb-2">Win-win Cooperation: Grow with partners.</li>
            <li>Responsibility: Promote sustainable development.</li>
          </ul>
        </div>
      </section>
    </main>
  );
};
export default About;
