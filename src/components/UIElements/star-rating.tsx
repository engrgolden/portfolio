// import { cn } from "../../lib/utils";

export default function StarRating({
  rating = 4.6,
  filledColor = "gold",
  emptyColor = "lightgray",
  size = 24,
  className = "",
}) {
  const totalStars = 5; // Always show 5 stars

  return (
    <div className={"flex " + className}>
      {Array.from({ length: totalStars }).map((_, index) => {
        const fillPercentage = Math.max(0, Math.min(1, rating - index)); // Fractional fill for the star

        return (
          <div
            key={index}
            style={{
              position: "relative",
              width: size,
              height: size,
              display: "inline-block",
            }}
          >
            {/* Empty Star */}
            <svg
              width={size}
              height={size}
              viewBox="0 0 24 24"
              fill={emptyColor}
              style={{ position: "absolute", top: 0, left: 0 }}
            >
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>

            {/* Filled Star */}
            <div
              style={{
                width: `${fillPercentage * 100}%`,
                overflow: "hidden",
                position: "absolute",
                top: 0,
                left: 0,
              }}
            >
              <svg
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill={filledColor}
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
          </div>
        );
      })}
    </div>
  );
}
