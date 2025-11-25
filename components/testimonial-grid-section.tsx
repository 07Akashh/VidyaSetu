import Image from "next/image";

const testimonials = [
  {
    quote:
      "VidyaSetu has simplified our daily operations. Attendance, homework, and communication all happen in one place now.",
    name: "Radhika Sharma",
    company: "Delhi Public School",
    avatar: "/images/avatars/annette-black.png",
    type: "large-teal",
  },
  {
    quote:
      "Integrating VidyaSetu was super smooth. Our staff adapted quickly, and admin work reduced by almost 40%.",
    name: "Anil Verma",
    company: "Sunshine International School",
    avatar: "/images/avatars/dianne-russell.png",
    type: "small-dark",
  },
  {
    quote:
      "The exam and report card modules saved us countless hours. Teachers no longer struggle with manual formatting.",
    name: "Kavita Mehra",
    company: "St. Xavier’s High School",
    avatar: "/images/avatars/cameron-williamson.png",
    type: "small-dark",
  },
  {
    quote:
      "All our student data is finally in one secure place. VidyaSetu made administration highly organized and effortless.",
    name: "Rajesh Kumar",
    company: "DAV Public School",
    avatar: "/images/avatars/robert-fox.png",
    type: "small-dark",
  },
  {
    quote:
      "We started with the free version, but within a week we upgraded. VidyaSetu has become essential for our school.",
    name: "Priya Nair",
    company: "Kendriya Vidyalaya",
    avatar: "/images/avatars/darlene-robertson.png",
    type: "small-dark",
  },
  {
    quote:
      "Parents love the instant updates. Homework, attendance, and announcements reach them in seconds.",
    name: "Manish Gupta",
    company: "Modern School",
    avatar: "/images/avatars/cody-fisher.png",
    type: "small-dark",
  },
  {
    quote:
      "From fee management to analytics, everything feels seamless. VidyaSetu helped us become a fully digital campus.",
    name: "Shalini Patel",
    company: "Ryan International School",
    avatar: "/images/avatars/albert-flores.png",
    type: "large-light",
  },
];

type TestimonialCardProps = {
  quote: string;
  name: string;
  company: string;
  avatar: string;
  type: string;
};

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  name,
  company,
  avatar,
  type,
}) => {
  const isLargeCard = type.startsWith("large");
  const avatarSize = isLargeCard ? 48 : 36;
  const avatarBorderRadius = isLargeCard
    ? "rounded-[41px]"
    : "rounded-[30.75px]";
  const padding = isLargeCard ? "p-6" : "p-[30px]";

  let cardClasses = `flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative ${padding}`;
  let quoteClasses = "";
  let nameClasses = "";
  let companyClasses = "";
  let backgroundElements = null;
  let cardHeight = "";
  const cardWidth = "w-full md:w-[384px]";

  if (type === "large-teal") {
    cardClasses += " bg-primary";
    quoteClasses += " text-primary-foreground text-2xl font-medium leading-8";
    nameClasses += " text-primary-foreground text-base font-normal leading-6";
    companyClasses +=
      " text-primary-foreground/60 text-base font-normal leading-6";
    cardHeight = "h-[502px]";
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/large-card-background.svg')",
          zIndex: 0,
        }}
      />
    );
  } else if (type === "large-light") {
    cardClasses += " bg-[rgba(231,236,235,0.12)]";
    quoteClasses += " text-foreground text-2xl font-medium leading-8";
    nameClasses += " text-foreground text-base font-normal leading-6";
    companyClasses += " text-muted-foreground text-base font-normal leading-6";
    cardHeight = "h-[502px]";
    backgroundElements = (
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: "url('/images/large-card-background.svg')",
          zIndex: 0,
        }}
      />
    );
  } else {
    cardClasses +=
      " bg-card outline outline-1 outline-border outline-offset-[-1px]";
    quoteClasses += " text-foreground/80 text-[17px] font-normal leading-6";
    nameClasses += " text-foreground text-sm font-normal leading-[22px]";
    companyClasses +=
      " text-muted-foreground text-sm font-normal leading-[22px]";
    cardHeight = "h-[244px]";
  }

  return (
    <div className={`${cardClasses} ${cardWidth} ${cardHeight}`}>
      {backgroundElements}
      <div className={`relative z-10 font-normal break-words ${quoteClasses}`}>
        {quote}
      </div>
      <div className="relative z-10 flex justify-start items-center gap-3">
        <Image
          src={avatar || "/placeholder.svg"}
          alt={`${name} avatar`}
          width={avatarSize}
          height={avatarSize}
          className={`w-${avatarSize / 4} h-${
            avatarSize / 4
          } ${avatarBorderRadius}`}
          style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
        />
        <div className="flex flex-col justify-start items-start gap-0.5">
          <div className={nameClasses}>{name}</div>
          <div className={companyClasses}>{company}</div>
        </div>
      </div>
    </div>
  );
};

export function TestimonialGridSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-3xl md:text-4xl lg:text-[40px] font-semibold leading-tight md:leading-tight lg:leading-[40px]">
            Education Management Made Effortless
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-sm lg:text-base font-medium leading-[18.20px] md:leading-relaxed lg:leading-relaxed">
            {
              "Hear how schools run smarter, save time, and improve learning outcomes"
            }
            <br />
            {"with VidyaSetu’s unified and intelligent management platform."}
          </p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 max-w-[1100px] mx-auto">
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[0]} />
          <TestimonialCard {...testimonials[1]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[2]} />
          <TestimonialCard {...testimonials[3]} />
          <TestimonialCard {...testimonials[4]} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start gap-4 md:gap-4 lg:gap-6">
          <TestimonialCard {...testimonials[5]} />
          <TestimonialCard {...testimonials[6]} />
        </div>
      </div>
    </section>
  );
}
