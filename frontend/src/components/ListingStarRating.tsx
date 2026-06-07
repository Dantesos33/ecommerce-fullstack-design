import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number; // out of 10
  reviews: number;
}

const StarRating = ({ rating, reviews }: StarRatingProps) => {
  const stars = rating / 2; // convert to out of 5
  return (
    <div className="flex items-center gap-1">
      <div className="flex items-center">
        {[1, 2, 3, 4, 5].map((i) => (
          <span key={i} className="text-amber-400">
            {stars >= i ? (
              <FaStar size={12} />
            ) : stars >= i - 0.5 ? (
              <FaStarHalfAlt size={12} />
            ) : (
              <FaRegStar size={12} />
            )}
          </span>
        ))}
      </div>
      <span className="text-xs text-slate-400">{rating}</span>
      <span className="text-xs text-slate-400">· {reviews} orders</span>
    </div>
  );
};

export default StarRating;
