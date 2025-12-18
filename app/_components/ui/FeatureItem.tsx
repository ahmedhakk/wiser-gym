export default function FeatureItem({ text }: { text: string }) {
  return (
    <div className="max-w-md bg-[#00000052] text-white rounded p-3 mb-1 md:p-4 md:mb-4">
      <p className="text-sm md:text-base">{text}</p>
    </div>
  );
}
