
import React from 'react';

const teamMembers = [
  {
    name: "Dr. Benjamin Appau",
    title: "Co-Founder  | U.S. Licensed Pharmacist | Global Pharmacy Mentor",
    bio: `
Dr. Benjamin Appau is a U.S.-licensed pharmacist originally trained in Ghana. He successfully transitioned through the FPGEE, TOEFL, NAPLEX, and U.S. licensure pathway — and now helps others do the same.

Background:
• PharmD from KNUST
• Passed FPGEE, TOEFL, NAPLEX, and U.S. state licensure
• Experienced in hospital & retail pharmacy in the U.S.
• Focuses on roadmap clarity, test-taking strategy, and real-world prep

Mentorship Style:
Benjamin is direct, encouraging, and strategic. He believes in smart prep, realistic timelines, and keeping clients motivated with actionable steps.

Why He Does It:
“There’s no reason to walk this road alone. I’ve been there — and I’m here now to shorten the path for others who want to build their career in the U.S.”
    `,
    image: "/Benji.jpg"
  },
  {
    name: "Dr. Claudia Serwaa Agyei Marfo",
    title: "Co-Founder | U.S. Licensed Pharmacist | Global Pharmacy Mentor",
    bio: `
Dr. Claudia is a foreign-trained pharmacist with firsthand experience navigating the complex journey toward becoming a licensed pharmacist in the United States. As a current FPGEE candidate and a passionate educator, Claudia brings deep empathy and practical insight to international pharmacists aiming to take the same path.

Background:
• PharmD-equivalent degree from KNUST, Ghana
• TOEFL completed | FPGEE eligible | U.S. pre-anesthesiologist preparation
• Passionate about mentoring and simplifying licensing hurdles
• Leads the FPGEE strategy, study coaching, and resource development at PharmaBridge

Mentorship Style:
Claudia is organized, thorough, and deeply committed to clarity. Her structured coaching methods are built to reduce confusion and guide clients from step one — even if they’ve never heard of ECE or NABP before.

Why She Does It:
“I want every foreign-trained pharmacist to feel like their dream is possible — because it is. I’ve lived it, I know the fear and the questions. Now, I help you cross that bridge with confidence.”
      `,
    image: "/Claudiaa.jpg"
  }
];

const AboutCard = ({ name, title, bio, image }: { name: string, title: string, bio: string, image: string }) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-md">
      <div className="md:flex items-start">
        <div className="flex md:shrink-0">
          <img className="flex h-48 w-full object-contain md:h-full md:w-48" src={image} alt={name}/>
        </div>
        <div className="p-8">
          <h3 className="text-xl font-semibold mb-1">{name}</h3>
          <p className="text-pharma-blue mb-3">{title}</p>
          <pre className="font-sans text-gray-600 text-wrap">{bio}</pre>
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
        
        <div className="grid md:grid-cols-1 gap-8">
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
