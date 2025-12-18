"use client";

import Image from "next/image";

type ReviewCardProps = {
  name: string;
  message: string;
  avatarSrc: string;
  rating: number; // 1-5
};

const ReviewCard: React.FC<ReviewCardProps> = ({
  name,
  message,
  avatarSrc,
  rating,
}) => {
  return (
    <div className="w-full h-full rounded-2xl bg-white px-5 py-6 shadow-md sm:px-8 sm:py-7 md:px-10 md:py-8 flex flex-col">
      {/* Top row: avatar + name + stars */}
      <div className="flex items-center gap-4 sm:gap-5">
        {/* Avatar */}
        <div className="relative h-16 w-16 overflow-hidden rounded-full sm:h-20 sm:w-20">
          <Image
            src={avatarSrc}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 4rem, (max-width: 768px) 5rem, 6rem"
          />
        </div>

        {/* Name + stars */}
        <div className="flex flex-col">
          <span className="text-base font-semibold text-gray-900 sm:text-lg md:text-xl">
            {name}
          </span>

          <div className="mt-1 flex items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={`h-4 w-4 fill-current sm:h-5 sm:w-5 ${
                  i < rating ? "text-[#FF9900]" : "text-gray-300"
                }`}
              >
                <path d="M10 1.5 12.59 7l5.41.46-4.14 3.6 1.26 5.29L10 13.9l-5.12 2.45L6.14 11 2 7.46 7.41 7 10 1.5z" />
              </svg>
            ))}
          </div>
        </div>
      </div>

      {/* Message */}
      <p
        className=" mt-5 text-sm leading-relaxed text-[#6D6E70]
          sm:mt-6 sm:text-base md:text-md
          flex-1
          overflow-hidden
          line-clamp-4 sm:line-clamp-5"
      >
        {message}
      </p>
    </div>
  );
};

export default ReviewCard;
