import KeyFeaturesContent from "@/ui/KeyFeaturesContent";

export default function KeyFeatures() {
  return (
    <section
      id="KeyFeatures"
      className="relative w-full lg:bg-[#bcbcbc] overflow-hidden"
    >
      <div className="lg:hidden absolute inset-0 bg-[#E60017] z-0"></div>

      <div
        className="hidden lg:block absolute inset-0 bg-[#E60017] z-0"
        style={{
          clipPath: "polygon(0 0, 30% 0, 100% 100%, 0% 100%)",
        }}
      ></div>

      <KeyFeaturesContent />
    </section>
  );
}
