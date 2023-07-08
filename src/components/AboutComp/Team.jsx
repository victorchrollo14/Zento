import React from "react";
import person1 from "../../assets/Images/person1.png";
import person2 from "../../assets/Images/person2.png";
import person3 from "../../assets/Images/person3.png";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Pune",
      position: "Co-Founder and CEO",
      image: person1,
      instagram: "https://www.instagram.com/ironman",
      linkedIn: "https://www.linkedin.com/in/ironman",
    },
    {
      name: "Delhi",
      position: "Co-Founder and CTO",
      image: person2,
      instagram: "https://www.instagram.com/captainamerica",
      linkedIn: "https://www.linkedin.com/in/captainamerica",
    },
    {
      name: "Lucknow",
      position: "Co-Founder and CEO",
      image: person3,
      instagram: "https://www.instagram.com/blackwidow",
      linkedIn: "https://www.linkedin.com/in/blackwidow",
    },
  ];

  return (
    <section className="team-section bg-light-green text-drkPurple py-10 md:py-20">
      <h2 className=" text-center font-mont font-bold cap-header px-5 mb-10">
        Meet Our Team <br />
        Avengers Assemble!!!
      </h2>
      <div className="flex flex-wrap justify-center mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card mx-4 my-4 flex flex-col items-left md:w-1/3 "
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg w-full h-auto"
            />
            <h3 className="mt-4 font-mont font-bold text-2xl">{member.name}</h3>
            <p className="text-base font-mont text-black">{member.position}</p>
            <div className="flex -translate-x-2">
              <a
                href={member.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="mr-2 text-blue-500 hover:text-blue-700"
              >
                <svg
                  width={42}
                  height={42}
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_550_14015)">
                    <path
                      d="M21.048 13.898c-3.967 0-7.167 3.15-7.167 7.055s3.2 7.055 7.167 7.055c3.967 0 7.167-3.15 7.167-7.055s-3.2-7.055-7.167-7.055zm0 11.642c-2.564 0-4.66-2.057-4.66-4.587s2.09-4.587 4.66-4.587c2.57 0 4.66 2.057 4.66 4.587s-2.096 4.587-4.66 4.587zm9.132-11.931c0 .915-.748 1.646-1.672 1.646-.93 0-1.671-.737-1.671-1.646 0-.909.748-1.646 1.671-1.646.924 0 1.672.737 1.672 1.646zm4.747 1.67c-.106-2.204-.618-4.157-2.258-5.766-1.634-1.608-3.618-2.112-5.857-2.222-2.308-.13-9.226-.13-11.534 0-2.233.104-4.217.607-5.857 2.216-1.64 1.609-2.146 3.562-2.258 5.766-.131 2.272-.131 9.082 0 11.353.106 2.205.617 4.157 2.258 5.766 1.64 1.609 3.618 2.112 5.857 2.223 2.308.129 9.226.129 11.534 0 2.239-.105 4.223-.608 5.857-2.223 1.634-1.609 2.146-3.561 2.258-5.766.131-2.271.131-9.075 0-11.347zm-2.982 13.785a4.68 4.68 0 01-2.657 2.616c-1.84.718-6.207.553-8.24.553-2.033 0-6.406.16-8.24-.553a4.681 4.681 0 01-2.657-2.616c-.73-1.811-.562-6.11-.562-8.111 0-2.002-.162-6.306.562-8.112a4.681 4.681 0 012.657-2.615c1.84-.719 6.207-.553 8.24-.553 2.034 0 6.406-.16 8.24.553a4.681 4.681 0 012.657 2.615c.73 1.812.562 6.11.562 8.112s.168 6.306-.562 8.111z"
                      fill="#000"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_550_14015">
                      <path
                        fill="#fff"
                        transform="translate(7.07 5.24)"
                        d="M0 0H27.9452V31.4384H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <svg
                  width={42}
                  height={42}
                  viewBox="0 0 42 42"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_550_14019)">
                    <path
                      d="M13.331 33.185V15.509H7.34v17.676h5.991zm-2.995-20.091c2.09 0 3.39-1.357 3.39-3.054-.039-1.734-1.3-3.054-3.35-3.054s-3.39 1.32-3.39 3.054c0 1.697 1.3 3.054 3.311 3.054h.039zm6.311 20.091h5.992v-9.871c0-.529.038-1.056.197-1.434.433-1.055 1.419-2.149 3.074-2.149 2.168 0 3.035 1.621 3.035 3.997v9.457h5.99V23.049c0-5.429-2.955-7.955-6.897-7.955-3.232 0-4.651 1.771-5.44 2.978h.04v-2.564h-5.99c.078 1.66 0 17.677 0 17.677z"
                      fill="#000"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_550_14019">
                      <path
                        fill="#fff"
                        transform="translate(6.986 6.986)"
                        d="M0 0H27.9452V26.1986H0z"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
