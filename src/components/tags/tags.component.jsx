import "./tags.styles.scss";

const Tags = ({ tags }) => (
  <p className="tags">
    {tags.map((tag, idx) => (
      <span key={idx}>{tag}</span>
    ))}
  </p>
);

export default Tags;
