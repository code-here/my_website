import "./link-container.styles.scss";

const LinkContainer = ({ links }) => (
  <div className="link_container">
    {links.map(({ link, icon_as_component, name }) =>
      link ? (
        <a href={link} target="_blank" rel="noreferrer">
          {icon_as_component} {name}
        </a>
      ) : (
        ""
      )
    )}
  </div>
);

export default LinkContainer;
