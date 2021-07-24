import ReactMarkdown from "react-markdown";
import gfm from "remark-gfm";

import useFetch from "../../utils/usefetch";

import Spinner from "../spinner/spinner.component";

import "./markdown.styles.scss";

const Markdown = ({ url }) => {
  let [data, error, isLoading] = useFetch(url);

  return (
    <div className="markdown-container">
      {isLoading ? (
        <Spinner />
      ) : error ? (
        console.log(error)
      ) : (
        <ReactMarkdown
          className="markdown"
          remarkPlugins={[gfm]}
          children={data}
        />
      )}
    </div>
  );
};

export default Markdown;
