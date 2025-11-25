import Image from "next/image";

export function DashboardPreview() {
  return (
    <div className="max-w-[calc(100vw-32px)] sm:max-w-[calc(100vw-80px)] md:max-w-[calc(100vw-120px)] lg:max-w-[calc(100vw-180px)] xl:max-w-[calc(100vw-280px)] mx-auto z-0 w-full">
      <div className="bg-primary-light/50 rounded-2xl p-2 shadow-2xl">
        <Image
          src="/images/dashboard-preview.png"
          alt="Dashboard preview"
          width={1160}
          height={700}
          className="w-full h-full lg:h-[650px] object-cover object-top rounded-xl shadow-lg"
        />
      </div>
    </div>
  );
}
