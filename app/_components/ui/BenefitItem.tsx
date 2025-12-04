export default function BenefitItem({ text }: { text: string }) {
  return (
    <div className="max-w-md bg-[#00000052] text-white p-3 mb-1 md:p-4 md:mb-4">
      <p className="text-sm md:text-base">{text}</p>
    </div>
  );
}
