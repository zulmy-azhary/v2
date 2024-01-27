import { Text } from "@/components/atoms";

const HeroStatus: React.FC = () => {
  return (
    <div className="ml-auto w-fit translate-x-3 -translate-y-5 md:ml-0 md:w-full md:translate-x-0 xl:-translate-x-6">
      <div className="border border-gray bg-bgColor px-3 py-2 md:px-5 lg:px-3 xl:px-5">
        <Text
          itemList
          fontWeight="font-normal"
          className="relative z-10 text-xs tracking-wide before:bg-green-400 md:text-base lg:text-sm xl:text-base"
        >
          Mistakes are proof that you&apos;re trying.
        </Text>
      </div>
      <Text fontWeight="font-normal" className="ml-auto w-fit bg-bgColor py-1 text-xs text-gray md:text-sm">
        Makassar, Indonesia
      </Text>
    </div>
  );
};

export default HeroStatus;
