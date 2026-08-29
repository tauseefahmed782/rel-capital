import Link from "next/link";

const CtaBand = () => {
  return (
    <section className="bg-[#122745] px-[20px] text-white">
      <div className="mx-auto flex min-h-[219px] w-full max-w-[1120px] flex-col items-center justify-center py-[48px] text-center sm:min-h-[300px] sm:py-[82px] lg:min-h-[356px] lg:py-[90px]">
        <h2 className="max-w-[330px] text-[23px] font-medium leading-[29px] tracking-normal sm:max-w-[640px] sm:text-[32px] sm:leading-[38px] lg:max-w-[760px] lg:text-[40px] lg:leading-[48px]">
          Every strong structure starts with a conversation.
        </h2>

        <Link
          href="/contact"
          className="mt-[16px] inline-flex min-h-[52px] items-center justify-center rounded-[40px] bg-[#e8611a] px-[16px]  text-center text-[14px] font-medium leading-none text-white transition-opacity hover:opacity-90 sm:mt-[28px] sm:min-h-[49px] sm:px-[30px] sm:text-[16px]"
        >
          Start a Conversation
        </Link>
      </div>
    </section>
  );
};

export default CtaBand;
