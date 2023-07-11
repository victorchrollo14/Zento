import React from "react";
import person1 from "../../assets/Images/ceo.jpeg";
import person2 from "../../assets/Images/cto.jpg";
import person3 from "../../assets/Images/cmo.png";
import person4 from "../../assets/Images/person1.png";

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
      twitter: "https://twitter.com/_shivam_s__",
      mail: "mailto:shivam@zento.money",
      linkedIn: "https://www.linkedin.com/in/shivam-singh-059158229/",
    },
    {
      name: "Nagpur",
      position: "CMO",
      image: person3,
      twitter: "https://twitter.com/Aaditya_008?t=gQ7vrI8zdZFS4yfv3dvkVg&s=08",
      mail: "mailto:gkosurkar@gmail.com",
      linkedIn: "https://www.linkedin.com/in/gauri-kosurkar-890985209",
    },
    {
      name: "Bangalore",
      position: "dev",
      image: person4,
      twitter: "",
      mail: "mailto:Victor20030214@gmail.com",
      linkedIn: "",
    },
  ];

  return (
    <section className="team-section bg-light-green text-drkPurple py-10 md:py-20">
      <h2 className=" text-center font-mont font-bold cap-header px-5 mb-10">
        Meet Our Team <br />
        Avengers Assemble!!!
      </h2>
      <div className="flex flex-row flex-wrap w-[100vw] justify-center mt-8">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="team-card mx-4 my-4 flex flex-col sm:1/2 items-left md:2/4 "
          >
            <a href={member.linkedIn}>
              <img
                src={member.image}
                alt={member.name}
                className="rounded-[20px]  border-white w-full max-w-[300px] h-auto hover:scale-95 transition-all duration-75 ease-in-out"
              />
            </a>

            <h3 className="mt-4 font-mont font-bold text-2xl">{member.name}</h3>
            <p className="text-base font-mont text-black font-semibold">
              {member.position}
            </p>
            <div className="flex -translate-x-2  items-center w-fit h-[40px]">
              <a
                href={member.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-700"
              >
                <svg
                  width={38}
                  height={20}
                  viewBox="0 0 38 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_799_11905)">
                    <path
                      d="M8.476 35V11.386H.472V35h8.004zm-4-26.84c2.79 0 4.528-1.814 4.528-4.08C8.952 1.763 7.267 0 4.528 0 1.79 0 0 1.763 0 4.08c0 2.266 1.737 4.08 4.423 4.08h.052zM12.905 35h8.004V21.813c0-.706.052-1.411.264-1.916.579-1.41 1.896-2.87 4.107-2.87 2.896 0 4.055 2.165 4.055 5.34V35h8.003V21.46c0-7.254-3.949-10.629-9.215-10.629-4.318 0-6.213 2.367-7.267 3.979h.054v-3.425h-8.004c.105 2.216 0 23.614 0 23.614V35z"
                      fill="#333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_799_11905">
                      <path fill="#fff" d="M0 0H37.3333V35H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a href={member.twitter}>
                <svg
                  width={45}
                  height={20}
                  viewBox="0 0 45 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_799_11907)">
                    <path
                      d="M45 4.262a19.185 19.185 0 01-5.303 1.385c1.907-1.089 3.37-2.812 4.06-4.866a19.055 19.055 0 01-5.863 2.134C36.21 1.206 33.811.138 31.155.138c-5.098 0-9.232 3.938-9.232 8.795 0 .69.082 1.36.239 2.005-7.673-.368-14.476-3.869-19.03-9.19a8.441 8.441 0 00-1.25 4.421c0 3.052 1.63 5.744 4.108 7.321a9.547 9.547 0 01-4.182-1.1v.11c0 4.262 3.182 7.817 7.405 8.625a9.69 9.69 0 01-4.169.15c1.175 3.495 4.584 6.038 8.624 6.11-3.16 2.358-7.14 3.764-11.466 3.764-.745 0-1.48-.041-2.202-.123 4.086 2.496 8.938 3.952 14.152 3.952 16.982 0 26.268-13.402 26.268-25.025 0-.382-.009-.76-.027-1.138A18.297 18.297 0 0045 4.262"
                      fill="#333"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_799_11907">
                      <path fill="#fff" d="M0 0H45V35H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
              <a
                href={member.mail}
                target="_blank"
                rel="noopener noreferrer"
                className="twitter link"
              >
                <svg
                  width={44}
                  height={20}
                  viewBox="0 0 44 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M39.375 0h-35A4.355 4.355 0 00.022 4.375L0 30.625A4.374 4.374 0 004.375 35h35a4.374 4.374 0 004.375-4.375V4.375A4.374 4.374 0 0039.375 0zm0 8.75l-17.5 10.938L4.375 8.75V4.375l17.5 10.938 17.5-10.938V8.75z"
                    fill="#333"
                  />
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
