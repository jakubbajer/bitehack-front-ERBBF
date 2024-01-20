import classNames from "classnames";
import css from "./ProgressCircle.module.css";

type ProgressCircleProps = {
  progress: number;
  label?: string;
  width?: number;
};

export const ProgressCircle = ({
  progress,
  label,
  width,
}: ProgressCircleProps) => {
  const strokeWidth = 6;
  const radius = 100 / 2 - strokeWidth * 2;
  const circumference = radius * 2 * Math.PI;
  const offset = circumference - (progress / 100) * circumference;
  return (
    <div className="relative">
      <svg
        aria-label={label}
        aria-valuemax={100}
        aria-valuemin={0}
        aria-valuenow={progress}
        height={width}
        role="progressbar"
        width={width}
        viewBox="0 0 100 100"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <Circle cx="50" cy="50" r={radius} strokeWidth={strokeWidth} />
        <FilledCircle
          cx="50"
          cy="50"
          data-testid="progress-bar-bar"
          r={radius}
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={offset}
          strokeWidth={strokeWidth}
        />
      </svg>
      <Text data-testid="progress-bar-text">{progress}%</Text>
    </div>
  );
};

const Circle = (props) => <circle {...props} className={css.circle}></circle>;

const FilledCircle = (props) => (
  <circle {...props} className={classNames(css.circle, css.filled)}></circle>
);

const Text = (props) => <div {...props} className={css.text}></div>;
