import React from "react";

export type GoogleRatingProps = {
  /** note sur 5 (ex: 4.8) */
  rating?: number;
  /** nombre d'avis */
  reviews?: number;
  /** taille du composant (petit, normal, large) */
  size?: "sm" | "md" | "lg";
};

const sizeMap = {
  sm: {
    star: 14,
    text: "text-sm",
    gap: "gap-1",
    px: "px-2 py-1",
  },
  md: {
    star: 18,
    text: "text-base",
    gap: "gap-2",
    px: "px-3 py-2",
  },
  lg: {
    star: 22,
    text: "text-lg",
    gap: "gap-3",
    px: "px-4 py-3",
  },
};

const Star: React.FC<{ filled: boolean; sizePx: number }> = ({
  filled,
  sizePx,
}) => (
  <svg
    width={sizePx}
    height={sizePx}
    viewBox="0 0 24 24"
    fill={filled ? "#FFD700" : "none"}
    stroke={filled ? "#FFD700" : "currentColor"}
    strokeWidth={1.2}
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function GoogleRating({
  rating = 5,
  reviews = 4,
  size = "md",
}: GoogleRatingProps) {
  const cfg = sizeMap[size];

  // clamp rating between 0 and 5
  const r = Math.max(0, Math.min(5, rating));
  const rounded = Math.round(r * 2) / 2; // half-star precision if you want later

  return (
    <div
      className={`flex flex-row items-center justify-center ${cfg.px} rounded-2xl shadow-sm bg-white ${cfg.gap}`}
      role="group"
      aria-label={`Google rating: ${r} out of 5 based on ${reviews} reviews`}
    >
      {/* Google logo */}
      <div className="flex items-center justify-center mb-2">
        <img src="/google.svg" alt="Google logo" className="w-32 h-auto" />
      </div>

      {/* rating & stars */}
      <div className="flex flex-col items-center">
        <div className={`flex items-center ${cfg.gap}`}>
          <span className={`font-semibold ${cfg.text}`}>{r.toFixed(1)}</span>
          <span className={`text-sm text-gray-500`}>/ 5</span>
        </div>

        <div className={`flex items-center pt-0.5 ${cfg.gap}`}>
          {Array.from({ length: 5 }).map((_, i) => {
            const filled = i < Math.round(r);
            return (
              <span
                key={i}
                className={`inline-flex items-center ${cfg.text}`}
                aria-hidden
              >
                <Star filled={filled} sizePx={cfg.star} />
              </span>
            );
          })}
        </div>
        <span className="mt-1 text-xs text-gray-500">{reviews} avis</span>
      </div>
    </div>
  );
}
