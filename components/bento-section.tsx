import AIInsightsDashboardPreview from "./bento/AIInsightsDashboardPreview";
import AIAttendancePreview from "./bento/AIAttendancePreview";
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration";
import TeacherCommandCenterIllustration from "./bento/TeacherCommandCenterIllustration";
import EasyDeployment from "./bento/easy-deployment";
import AITeachingAssistantPreview from "./bento/AITeachingAssistantPreview";
import SmartDashboardGrid from "./bento/SmartDashboardGrid";
import SchoolEcosystemSuitePreview from "./bento/SchoolEcosystemSuitePreview";
import InstitutionControlPanelIllustration from "./bento/InstitutionControlPanelIllustration";
import CommunicationHubIllustration from "./bento/CommunicationHubIllustration";

type BentoCardProps = {
  title: string;
  description: string;
  Component: React.ComponentType;
};

const BentoCard = ({ title, description, Component }: BentoCardProps) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-lg font-normal leading-7">
          {title} <br />
          <span className="text-muted-foreground">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-72 relative -mt-0.5 z-10">
      <Component />
    </div>
  </div>
);

export function BentoSection() {
  const cards = [
    {
      title: "Smart Dashboard",
      description: "Your entire academic life, beautifully organized.",
      Component: SmartDashboardGrid,
    },
    // {
    //   title: "AI Attendance Hub",
    //   description: "Fast, accurate, and secure attendance every day.",
    //   Component: AIAttendancePreview,
    // },
    {
      title: "Learning & Exams Suite",
      description: "Study, practice, and take exams — all in one place.",
      Component: OneClickIntegrationsIllustration,
    },
    {
      title: "Teacher Command Center",
      description: "Everything you need to manage your classes effortlessly.",
      Component: TeacherCommandCenterIllustration,
    },
    // {
    //   title: "AI Teaching Assistant",
    //   description: "Smarter tools that save time and boost efficiency.",
    //   Component: AITeachingAssistantPreview,
    // },
    {
      title: "Communication Hub",
      description: "Seamless connection with parents, students, and school.",
      Component: CommunicationHubIllustration,
    },
    {
      title: "Institution Control Panel",
      description: "Complete oversight of students, staff, and operations.",
      Component: InstitutionControlPanelIllustration,
    },
    // {
    //   title: "AI Insights Dashboard",
    //   description: "Predictive analytics to make smarter decisions.",
    //   Component: AIInsightsDashboardPreview,
    // },
    {
      title: "School Ecosystem Suite",
      description: "Transport, hostel, finance, library — everything unified.",
      Component: SchoolEcosystemSuitePreview,
    },
  ];

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[755px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Smarter Schools. Stronger Futures.
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              From classrooms to administration, unify your entire institution
              with smart automation and predictive insights.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
