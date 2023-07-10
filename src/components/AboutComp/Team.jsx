import React from "react";
import person1 from "../../assets/Images/person1.png";
import person2 from "../../assets/Images/person2.png";
import person3 from "../../assets/Images/person3.png";
import { Twitter } from "../../assets/svgs/socials";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Pune",
      position: "Co-Founder and CEO",
      image: person1,
      twitter: "https://twitter.com/Aaditya_008?t=gQ7vrI8zdZFS4yfv3dvkVg&s=08",
      mail: "mailto:aaditya@zento.money",
      linkedIn: "https://www.linkedin.com/in/aaditya-rathod-172a531bb",
    },
    {
      name: "Delhi",
      position: "Co-Founder and CTO",
      image: person2,
      twitter: "https://twitter.com/Aaditya_008?t=gQ7vrI8zdZFS4yfv3dvkVg&s=08",
      mail: "mailto:aaditya@zento.money",
      linkedIn: "https://www.linkedin.com/in/aaditya-rathod-172a531bb",
    },
    {
      name: "Lucknow",
      position: "CMO",
      image: person3,
      twitter: "https://twitter.com/Aaditya_008?t=gQ7vrI8zdZFS4yfv3dvkVg&s=08",
      mail: "mailto:aaditya@zento.money",
      linkedIn: "https://www.linkedin.com/in/aaditya-rathod-172a531bb",
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
            className="team-card mx-4 my-4 flex flex-col items-left md:w-1/4 "
          >
            <img
              src={member.image}
              alt={member.name}
              className="rounded-lg border-white w-full h-auto hover:-translate-x-3 hover:-translate-y-2 shadow-nd transition-all duration-75 ease-in-out"
            />
            <h3 className="mt-4 font-mont font-bold text-2xl">{member.name}</h3>
            <p className="text-base font-mont text-black font-semibold">
              {member.position}
            </p>
            <div className="flex -translate-x-2  gap-2 items-center w-fit">
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="twitter link"
              >
                <svg
                  viewBox="0 0 34 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="fill-gray-950 w-[35px] h-auto"
                >
                  <g clipPath="url(#clip0_381_12481)">
                    <path d="M29.75 9.498a10.87 10.87 0 01-3.005.785c1.08-.617 1.91-1.594 2.3-2.757-1.027.58-2.15.99-3.322 1.21a5.35 5.35 0 00-3.819-1.575c-2.89 0-5.232 2.232-5.232 4.984 0 .39.047.771.136 1.136-4.348-.208-8.203-2.192-10.783-5.208a4.783 4.783 0 00-.709 2.506c0 1.73.924 3.255 2.328 4.149a5.41 5.41 0 01-2.37-.624v.063c0 2.415 1.803 4.43 4.196 4.887-.77.2-1.578.229-2.362.085.665 1.98 2.598 3.421 4.887 3.462a10.832 10.832 0 01-6.497 2.133c-.423 0-.84-.023-1.248-.07a15.347 15.347 0 008.02 2.24c9.622 0 14.884-7.595 14.884-14.18 0-.217-.005-.432-.015-.646a10.37 10.37 0 002.61-2.58z" />
                  </g>
                  <defs>
                    <clipPath id="clip0_381_12481">
                      <path
                        fill="#fff"
                        transform="translate(4.25 7.083)"
                        d="M0 0H25.5V19.8333H0z"
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
                  className="h-[35px] w-auto "
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
              <a href={member.mail}>
                <svg
                  className={`mt-[1px] w-[30px] h-auto fill-gray-950 `}
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.644 4.8h15.9c1.5 0 2.256.708 2.256 2.148v10.104c0 1.428-.756 2.148-2.256 2.148h-15.9c-1.5 0-2.256-.72-2.256-2.148V6.948c0-1.44.756-2.148 2.256-2.148zm7.944 10.32l8.088-6.636c.288-.24.516-.792.156-1.284-.348-.492-.984-.504-1.404-.204l-6.84 4.632L5.76 6.996c-.42-.3-1.056-.288-1.404.204-.36.492-.132 1.044.156 1.284l8.076 6.636z" />
                </svg>{" "}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
