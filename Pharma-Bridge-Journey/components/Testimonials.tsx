
import React from 'react';

const testimonials = [
  {
    quote: "PharmaBridge guided me end-to-end, giving me the confidence I needed to succeed in my U.S. licensure journey.",
    name: "Nana Ama",
    location: "Ghana"
  },
  {
    quote: "With their support, I passed both TOEFL and completed my ECE evaluation successfully on the first attempt.",
    name: "Isaac",
    location: "Ghana"
  },
  {
    quote: "Their expert guidance on NABP applications and FPGEE preparation made all the difference in my success.",
    name: "Chinedu",
    location: "Nigeria"
  },
  {
    quote: "The timely support with ECE submission and Prometric scheduling saved me months of potential delays.",
    name: "Aisha",
    location: "Nigeria"
  },
  {
    quote: "Thanks to their FPGEE coaching, I'm now confidently preparing for the NAPLEX with a solid foundation.",
    name: "Arjun",
    location: "India"
  },
  {
    quote: "The structured strategy and mentorship provided clarity and direction throughout my licensure journey.",
    name: "Amina",
    location: "Egypt"
  }
];

const TestimonialCard = ({ quote, name, location }: { quote: string, name: string, location: string }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md relative quote-mark">
      <p className="text-gray-600 mb-6 pl-4">{quote}</p>
      <div className="flex items-center">
        <div className="w-2 h-2 rounded-full bg-pharma-blue mr-2"></div>
        <span className="font-medium">{name}</span>
        <span className="mx-1">,</span>
        <span className="text-gray-500">{location}</span>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section id="testimonials" className="section-padding bg-pharma-gray">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Our Clients Say</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              quote={testimonial.quote}
              name={testimonial.name}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
