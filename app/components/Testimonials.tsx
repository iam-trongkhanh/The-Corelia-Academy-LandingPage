import Image from "next/image";

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
  imageAlt: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "The hands-on projects were invaluable. I went from knowing nothing to building my own dApp. Highly recommended!",
    name: "Carlos M.",
    role: "Blockchain Developer",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDR9G0MA2gC2OI5MYkA067BsUed5uQ5HBduO-uoBk9LAMrg7EjwSzTQ0NgiravsXPbjPlEGIo12mvETp_6kHSjfEE6DMDP6Ol7OFgTuBAiHd7yzjxzkGixocYNzcxNiPCl3wtkBB4RC3G2ymASFgZsXwMEm0cb4ckWJLqoT9WrdY1u2xBd8WUzpcAUfQRnjGq_GbaOqlfPu77mXMk5-9yGuE4CvYNoS692wwkd6PdRhxgEYrU9Vh4T3sW7Um-AGVu7DqDzW9b-X4cI",
    imageAlt: "Profile picture of a smiling man",
  },
  {
    quote:
      "The Corelia Academy's curriculum is top-notch. The instructors are experts and explain complex concepts in an easy-to-understand way.",
    name: "Priya S.",
    role: "Product Manager",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBkMPPMPD2J9w3VaT9T2CkMBUNmMJmfdM1Nu0Z9IPOnp4GUVTNxSU2GZBR9GqWmYpe5H2b6aGG04mKjv8wFEZGn4INS2SGgMbThB1wmRX7sypA4OvVgWltKIxWkf9oopYAvIdVOYwGh7mWu7NM5W4Qjt6wHO6xW2HOq4EmfJ7roP-el2vkc7n8138Wo-jXXzP22sTjJqAP0vamlmm1O_vhIHJPmeJ7HP66yJUrIR3aGR7Z4HJS2x9cCtuLvkv29J8mN8w3qx9dZ3iM",
    imageAlt: "Profile picture of a smiling woman",
  },
  {
    quote:
      "The certificate I earned helped me land a new job in the Web3 space. The investment was totally worth it.",
    name: "David L.",
    role: "DeFi Analyst",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAFiHYscHZB-AXGLxJSBF0IUhcADz1DLa8ypNLMzlYMaFg6xJkncpAR-GkYV8BCVEx3uvVIIuu021jiKc4ORKH_GCO2VhQP8bJyDD5Yed3e0xRIsB6WekJP2SAlLGJAeG3MBVFsN9oE9dYN61zgdUouolB9gI9UMOQDNwbgrL5cyxg9FEVb3RSwRl_yu3hx458zNyJihN4o584evSPI-GvKDjHd-uVwIvAyIFis7MD0ei5eLtAu79CM1WOZ4KxkOZw40NgUS7WveRQ",
    imageAlt: "Profile picture of a man with glasses",
  },
];

export default function Testimonials() {
  return (
    <section className="px-4 py-10" aria-labelledby="testimonials-heading">
      <div className="text-center">
        <h2
          id="testimonials-heading"
          className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight"
        >
          What Our Learners Say
        </h2>
        <p className="text-slate-600 dark:text-slate-300 text-base font-normal leading-normal max-w-2xl mx-auto mt-2">
          Thousands of learners have kickstarted their careers in Web3 &amp; AI
          with us.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {testimonials.map((testimonial, index) => (
          <article
            key={index}
            className="flex flex-col gap-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 p-6"
          >
            <blockquote className="text-slate-600 dark:text-slate-300">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="flex items-center gap-3">
              <Image
                src={testimonial.imageUrl}
                alt={testimonial.imageAlt}
                width={40}
                height={40}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-slate-900 dark:text-white font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                  {testimonial.role}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
