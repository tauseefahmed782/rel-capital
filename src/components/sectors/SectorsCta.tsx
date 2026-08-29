import Link from "next/link";

export function SectorsCta() {
  return (
    <section className="bg-[#122745] px-[20px] text-center text-white">
      <div className="mx-auto flex min-h-[430px] w-full max-w-[1120px] flex-col items-center justify-center py-[72px] sm:py-[92px] lg:py-[90px]">
        <div>
          <p className="text-[12.5px] font-semibold uppercase leading-none tracking-[2.8px] text-[#e8611a]">
            Adjacent Infrastructure
          </p>
          <p className="mx-auto mt-[18px] max-w-[920px] text-[18px] font-medium leading-[1.45] text-white/92 sm:text-[24px] sm:leading-[1.42]">
            We also structure financing for allied infrastructure — housing,
            urban development, and social infrastructure — where ECA-backed
            models apply.
          </p>
        </div>

        <div className="mt-[74px] sm:mt-[180px]">
          <h2 className="text-[28px] font-medium leading-[1.16] tracking-[-0.5px] sm:text-[40px] sm:leading-[1.18]">
            Have a project in one of these sectors?
          </h2>
          <Link
            href="/contact"
            className="mt-[24px] inline-flex min-h-[40px] items-center justify-center rounded-[40px] bg-[#e8611a] px-[24px] py-[12px] text-[13px] font-medium leading-none text-white transition-opacity hover:opacity-90 sm:mt-[28px] sm:min-h-[45px] sm:px-[28px] sm:text-[14px]"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </section>
  );
}
