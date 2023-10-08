import ContactForm from "../../components/Contact/ContactForm";


const About = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 lg:p-0 my-20 text-justify space-y-3">
            <h2 className="text-4xl text-pink-600 text-center mb-10">About Us</h2>
            <p>Welcome to [Your Company Name], where passion meets expertise in the world of event management.</p>
            <p>Our journey began with a simple idea: to create exceptional, one-of-a-kind experiences that leave a lasting impression. With years of combined experience, our team of dedicated professionals has transformed countless events into unforgettable memories.</p>
            <p>At [Your Company Name], we believe that every event is unique, and it deserves a personalized touch. Whether it's a wedding, a corporate gathering, a milestone celebration, or any other special occasion, we take pride in turning your vision into reality.</p>
            <p>Our commitment to excellence is unwavering. We meticulously plan, design, and execute every detail, ensuring that your event is flawless from start to finish. From selecting the perfect venues and crafting stunning décor to coordinating entertainment and catering, we handle it all so you can relax and savor every moment.</p>
            <p>But what truly sets us apart is our dedication to our clients. We listen to your ideas, understand your needs, and work closely with you to bring your dreams to life. Your satisfaction is our ultimate goal, and we go above and beyond to exceed your expectations.</p>
            <p>Thank you for considering [Your Company Name] as your trusted partner in event management. We look forward to the opportunity to work with you and create magical moments that will be cherished for a lifetime.</p>

            <ContactForm></ContactForm>
        </div>
    );
};

export default About;