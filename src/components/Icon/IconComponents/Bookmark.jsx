export const Bookmark = ({ size = 24 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.5 22.0029L12 18.25L5.50002 22.0029C4.83335 22.3878 4 21.9067 4 21.1369V4C4 2.89543 4.89543 2 6 2H18C19.1046 2 20 2.89543 20 4V21.1369C20 21.9067 19.1667 22.3878 18.5 22.0029ZM13 16.518C12.3812 16.1607 11.6188 16.1607 11 16.518L6 19.4048V4H18V19.4048L13 16.518Z"
      />
    </svg>
  );
};
