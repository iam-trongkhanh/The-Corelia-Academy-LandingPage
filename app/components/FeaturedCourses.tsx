import Image from "next/image";

interface Course {
  title: string;
  instructor: string;
  rating: string;
  reviews: string;
  imageUrl: string;
  imageAlt: string;
}

const courses: Course[] = [
  {
    title: "Blockchain Fundamentals",
    instructor: "John Doe",
    rating: "4.8",
    reviews: "1,234",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBwWB07Hsg4-tYMARbqYGLNCkybyaVLIIn_uDYw8e3fSin71XELPrZgr0t113Vg5DuKceKiuutmCifbwTE6Vq5yth_ktXx3nm-Sqg1dXP4idGpnJEeKnigE4Y6pnFGI9ABkzYSabkOvz5jGendvHP-Iyz6O3ek2KRnZ5rze29vNFe4G63nYinh_5TsaEkp62U6Znu5AwNuMbQviAAuh6u-yPoTDqAbFAljULPf2yV51uVMQdOPXtp4_jEl4Ytz0NdYk5RZjNr8wYi8",
    imageAlt: "Abstract blue and purple digital network pattern",
  },
  {
    title: "Smart Contract Development",
    instructor: "Jane Smith",
    rating: "4.9",
    reviews: "987",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDwj-StgmefoKiouI0WJFPYLvdhAKCqLfBlfEAkhDvHnSDxg9Ih3kA58k-wMxEeQvVKDNOcid4UqJcNGCYkJr7B73qakJnJv9Ge9IkbjEwQZLynMasgUuMuOcdUXMraAuD_lTYqnv9O3iIiQ2BWDJYLpoi77NfCyrvptWyfNKiaB2-3W3GM6UwT-cXyY8urBIAs4iz78Adl7hStVjRFquFYc44BBpiizIlhF_ydkXdL-z6JDr0ho70Fn0AN13Q7IAvL-t4cWws7TtY",
    imageAlt: "Code on a dark computer screen",
  },
  {
    title: "Advanced DeFi Strategies",
    instructor: "Alex Ray",
    rating: "4.7",
    reviews: "765",
    imageUrl:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCrWgKxyHF0CHl2dC6MjOUH1yPH8nZBPWL_txrJNSwft7KiizGCndLiz4stx6-xePcCSZCzJGW03xnOrMrii6Dgd2RrsL--iahy6NJZ3kdTDPzU-8MeOJYD8sy4PIaZ3h9s7ynWhZwdxDYJ8kNg3Z9Y8Oi1703KSZQoxM0m_ourboJ8CBkqxu1fB6NZWfsKaBbmK0VsA7yPac8TuQU-tFzEK4OnJuZEyMziwh_0RA9R69p187i2zLhidnyAggmQq4Nrqt2AG4Awkqg",
    imageAlt: "Glowing digital currency symbols floating in a dark space",
  },
];

export default function FeaturedCourses() {
  return (
    <section id="courses" aria-labelledby="courses-heading">
      <h2
        id="courses-heading"
        className="text-slate-900 dark:text-white text-3xl font-bold leading-tight tracking-tight px-4 pb-6"
      >
        Featured Courses
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
        {courses.map((course, index) => (
          <article key={index} className="flex flex-col gap-3 pb-3 group">
            <div className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-xl overflow-hidden shadow-sm">
              <div className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105 relative">
                <Image
                  src={course.imageUrl}
                  alt={course.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            </div>
            <div>
              <h3 className="text-slate-900 dark:text-white text-lg font-bold leading-normal">
                {course.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                {course.instructor}
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">
                {course.rating} Stars ({course.reviews})
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
