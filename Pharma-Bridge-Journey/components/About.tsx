
import React from 'react';

const teamMembers = [
  {
    name: "Dr. Benjamin Appau",
    title: "Co-Founder & Principal Consultant",
    bio: "Ghanaian & U.S. licensed pharmacist practicing in New Jersey with extensive experience guiding international pharmacists through the licensure process.",
    image: "/benjamin.JPG"
  },
  {
    name: "Dr. Claudia Serwaa Agyei Marfo",
    title: "Co-Founder & TOEFL Specialist",
    bio: "Ghanaian Pharmacist with TOEFL success and FPGEE eligibility. Expert in navigating the complex licensure process for international graduates.",
    image: "/claudia.JPG"
  }
];

const AboutCard = ({ name, title, bio, image }: { name: string, title: string, bio: string, image: string }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={image} alt={name}/>
        </div>
        <div className="p-8">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-pharma-blue mb-3">{title}</p>
          <p className="text-gray-600">{bio}</p>
        </div>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <h2 className="section-title">About Us</h2>
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <p className="text-lg mb-6">
            Founded by pharmacists who've navigated the journey themselves, PharmaBridge Consulting combines lived experience with expert knowledge to guide international pharmacists through every step of the U.S. licensure process.
          </p>
          <p className="text-lg">
            Our mission is to be your trusted companion, bringing empathy, cultural understanding, and proven strategies to pharmacists from Ghana, Nigeria, India, Philippines, Egypt, and beyond.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <AboutCard 
              key={index}
              name={member.name}
              title={member.title}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
