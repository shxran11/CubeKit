import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-950 to-indigo-800">
      <header className="flex justify-between items-center py-4 px-2 md:px-8">
        <svg
          fill="none"
          height="48"
          viewBox="0 0 147 48"
          width="200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m0 14.5264v18.9473l17.8947-12.2437v-18.94741z"
            fill="#6938ef"
            opacity=".5"
          />
          <path
            d="m0 33.4737v-18.9474l17.8947 12.2438v18.9474z"
            fill="#1570ef"
            opacity=".5"
          />
          <path
            d="m40 14.5263v18.9474l-17.8947-12.2438v-18.94737z"
            fill="#6938ef"
            opacity=".5"
          />
          <path
            d="m40 33.4737v-18.9474l-17.8947 12.2438v18.9474z"
            fill="#1570ef"
            opacity=".5"
          />
          <g fill="#7C00FE">
            <path d="m50 24.2c0-1.7334.375-3.275 1.125-4.625.75-1.3667 1.7917-2.425 3.125-3.175 1.35-.7667 2.875-1.15 4.575-1.15 2.0833 0 3.8667.55 5.35 1.65s2.475 2.6 2.975 4.5h-4.7c-.35-.7334-.85-1.2917-1.5-1.675-.6333-.3834-1.3583-.575-2.175-.575-1.3167 0-2.3833.4583-3.2 1.375-.8167.9166-1.225 2.1416-1.225 3.675 0 1.5333.4083 2.7583 1.225 3.675.8167.9166 1.8833 1.375 3.2 1.375.8167 0 1.5417-.1917 2.175-.575.65-.3834 1.15-.9417 1.5-1.675h4.7c-.5 1.9-1.4917 3.4-2.975 4.5-1.4833 1.0833-3.2667 1.625-5.35 1.625-1.7 0-3.225-.375-4.575-1.125-1.3333-.7667-2.375-1.825-3.125-3.175s-1.125-2.8917-1.125-4.625z" />
            <path d="m83.043 19.05v13.95h-4.275v-1.9c-.4334.6166-1.025 1.1166-1.775 1.5-.7334.3666-1.55.55-2.45.55-1.0667 0-2.0084-.2334-2.825-.7-.8167-.4834-1.45-1.175-1.9-2.075s-.675-1.9584-.675-3.175v-8.15h4.25v7.575c0 .9333.2416 1.6583.725 2.175.4833.5166 1.1333.775 1.95.775.8333 0 1.4916-.2584 1.975-.775.4833-.5167.725-1.2417.725-2.175v-7.575z" />
            <path d="m89.8887 21.025c.4-.65.975-1.175 1.725-1.575s1.6083-.6 2.575-.6c1.15 0 2.1916.2916 3.125.875.9333.5833 1.6666 1.4166 2.2 2.5.5503 1.0833.8253 2.3416.8253 3.775 0 1.4333-.275 2.7-.8253 3.8-.5334 1.0833-1.2667 1.925-2.2 2.525-.9334.5833-1.975.875-3.125.875-.9834 0-1.8417-.1917-2.575-.575-.7334-.4-1.3084-.925-1.725-1.575v1.95h-4.275v-18.5h4.275zm6.1 4.975c0-1.0667-.3-1.9-.9-2.5-.5834-.6167-1.3084-.925-2.175-.925-.85 0-1.575.3083-2.175.925-.5834.6166-.875 1.4583-.875 2.525 0 1.0666.2916 1.9083.875 2.525.6.6166 1.325.925 2.175.925s1.575-.3084 2.175-.925c.6-.6334.9-1.4834.9-2.55z" />
            <path d="m115.231 25.8c0 .4-.025.8166-.075 1.25h-9.675c.067.8666.342 1.5333.825 2 .5.45 1.109.675 1.825.675 1.067 0 1.809-.45 2.225-1.35h4.55c-.233.9166-.658 1.7416-1.275 2.475-.6.7333-1.358 1.3083-2.275 1.725-.916.4166-1.941.625-3.075.625-1.366 0-2.583-.2917-3.65-.875-1.066-.5834-1.9-1.4167-2.5-2.5-.6-1.0834-.9-2.35-.9-3.8s.292-2.7167.875-3.8c.6-1.0834 1.434-1.9167 2.5-2.5 1.067-.5834 2.292-.875 3.675-.875 1.35 0 2.55.2833 3.6.85 1.05.5666 1.867 1.375 2.45 2.425.6 1.05.9 2.275.9 3.675zm-4.375-1.125c0-.7334-.25-1.3167-.75-1.75-.5-.4334-1.125-.65-1.875-.65-.716 0-1.325.2083-1.825.625-.483.4166-.783 1.0083-.9 1.775z" />
            <path d="m125.512 33-4.25-5.85v5.85h-4.275v-18.5h4.275v10.225l4.225-5.675h5.275l-5.8 7 5.85 6.95z" />
            <path d="m134.091 17.6c-.75 0-1.367-.2167-1.85-.65-.467-.45-.7-1-.7-1.65 0-.6667.233-1.2167.7-1.65.483-.45 1.1-.675 1.85-.675.733 0 1.333.225 1.8.675.483.4333.725.9833.725 1.65 0 .65-.242 1.2-.725 1.65-.467.4333-1.067.65-1.8.65zm2.125 1.45v13.95h-4.275v-13.95z" />
            <path d="m146.589 29.375v3.625h-2.175c-1.55 0-2.758-.375-3.625-1.125-.867-.7667-1.3-2.0084-1.3-3.725v-5.55h-1.7v-3.55h1.7v-3.4h4.275v3.4h2.8v3.55h-2.8v5.6c0 .4166.1.7166.3.9.2.1833.533.275 1 .275z" />
          </g>
        </svg>
        <nav className="space-x-4 hidden md:flex flex-row lg:gap-5">
          <a
            href="#features"
            className="text-gray-300 hover:text-blue-500 font-semibold"
          >
            Features
          </a>
          <a
            href="#demo"
            className="text-gray-300 hover:text-blue-500 font-semibold"
          >
            Demo
          </a>
          <a
            href="#pricing"
            className="text-gray-300 hover:text-blue-500 font-semibold"
          >
            Pricing
          </a>
          <a
            href="#cta"
            className="text-gray-300 hover:text-blue-500 font-semibold"
          >
            Get Started
          </a>
        </nav>

        <Link href={"/dashboard"}>
          <Button className="font-bold bg-indigo-400 rounded-full">
            Open CubeKit
          </Button>
        </Link>
      </header>
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-16 md:px-16 md:py-24">
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-2xl lg:text-6xl font-extrabold text-indigo-200">
            REVOLUTIONARIZE LEARNING WITH AI
          </h2>
          <p className="text-gray-200 text-md">
            Generate tailored courses in seconds. Harness the power of AI to
            create courses that match your learning goals, pace, and style.
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:w-1/2">
          <Image
            src="https://www.innovationnewsnetwork.com/wp-content/uploads/2024/02/shutterstockPhonlamai-Photo_1058815598-800x450.jpg"
            alt="AI and Learning"
            className="rounded-lg shadow-lg w-full h-auto"
            quality={90}
            width={1000}
            height={800}
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-4 py-4 md:py-16 md:px-16">
        <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-indigo-200">
          Why Choose CubeKit?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "AI-Powered Customization",
              description:
                "Generate courses tailored to your specific needs with our advanced AI algorithms.",
              icon: "🤖",
            },
            {
              title: "Wide Range of Topics",
              description:
                "Explore courses across various domains, from programming to personal development.",
              icon: "📚",
            },
            {
              title: "User-Friendly Interface",
              description:
                "Create, view, and edit courses with an intuitive and sleek design.",
              icon: "✨",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg shadow-lg bg-indigo-800"
            >
              <div className="text-4xl">{feature.icon}</div>
              <h4 className="mt-4 text-xl font-semibold text-gray-200">
                {feature.title}
              </h4>
              <p className="mt-2 text-indigo-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Video Demo Section */}
      <section
        id="demo"
        className="px-8 py-16 md:px-16 text-center text-indigo-200"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          See CubeKit in Action
        </h3>
        <p className="mb-8 text-lg">
          Discover how CubeKit simplifies course creation in just a few clicks.
        </p>
        <div className="flex justify-center">
          <iframe
            className="rounded-lg shadow-lg"
            width="560"
            height="315"
            src="/sampleVid.mp4"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="px-8 py-16 md:px-16 text-center text-indigo-200"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          What Users Are Saying
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote:
                "CubeKit has transformed how I create courses for my students. It's intuitive and powerful!",
              name: "Jane Doe",
              role: "Educator",
            },
            {
              quote:
                "I saved countless hours creating custom courses. Highly recommend CubeKit!",
              name: "John Smith",
              role: "Freelance Trainer",
            },
            {
              quote:
                "A game-changer for anyone in the e-learning industry. So easy to use!",
              name: "Emily Brown",
              role: "Course Creator",
            },
          ].map((testimonial, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg bg-indigo-700">
              <p className="italic mb-4">“{testimonial.quote}”</p>
              <h4 className="font-semibold text-gray-200">
                {testimonial.name}
              </h4>
              <p className="text-indigo-400">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Plans Section */}
      <section
        id="pricing"
        className="px-8 py-16 md:px-16 text-center text-indigo-200"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Choose Your Plan
        </h3>
        <p className="mb-8 text-lg">
          Flexible plans for every learner and educator.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Free Plan",
              price: "Free",
              features: [
                "Basic Course Creation",
                "Generate upto 5 courses",
                "Community Support",
              ],
            },
            {
              title: "Pro Plan",
              price: "$19/month",
              features: [
                "All Free Plan features, plus:",
                "50 course generations",
                "Priority support",
                "Custom course branding",
              ],
            },
            {
              title: "Enterprise Plan",
              price: "Contact Us",
              features: [
                "All Pro Plan features, plus:",
                "Unlimited course generations",
                "Access to exclusive AI-powered course suggestions",
                "Dedicated Account Manager",
                "SLA-backed priority support",
              ],
            },
          ].map((plan, index) => (
            <div key={index} className="p-6 rounded-lg shadow-lg bg-indigo-800">
              <h4 className="text-xl font-semibold text-gray-200">
                {plan.title}
              </h4>
              <p className="text-2xl font-bold text-indigo-400 mt-4">
                {plan.price}
              </p>
              <ul className="mt-4 text-sm text-indigo-300">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="mt-2">
                    - {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section
        id="faq"
        className="px-8 py-16 md:px-16 text-center text-indigo-200"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Frequently Asked Questions
        </h3>
        <div className="space-y-6">
          {[
            {
              question: "What is CubeKit?",
              answer:
                "CubeKit is an AI-powered platform for creating tailored courses effortlessly.",
            },
            {
              question: "How does CubeKit use AI?",
              answer:
                "Our AI analyzes your input to generate personalized course content that suits your goals and learning style.",
            },
            {
              question: "Is CubeKit free to use?",
              answer:
                "Yes, we offer a free plan, with additional features available in premium tiers.",
            },
          ].map((faq, index) => (
            <div key={index}>
              <h4 className="font-semibold text-indigo-300">{faq.question}</h4>
              <p className="text-indigo-400 mt-2">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section
        id="cta"
        className="px-8 py-16 md:px-16 bg-gradient-to-r from-indigo-500 to-indigo-600 text-white text-center"
      >
        <h3 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Start Your Journey?
        </h3>
        <p className="mb-8 text-lg">
          Join thousands of learners and educators leveraging CubeKit to create
          impactful courses effortlessly.
        </p>
        <a
          href="/sign-up"
          className="bg-white text-blue-600 py-2 px-6 rounded-lg shadow-lg hover:bg-gray-100 transition duration-300"
        >
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <footer className="py-4 text-center shadow-md">
        <p className="text-indigo-200 text-sm">
          © 2024 AI CourseGen. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default HeroSection;
