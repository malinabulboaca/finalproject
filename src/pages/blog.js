import { useParams } from "react-router-dom";
import { useEffect, useRef } from "react";

const Blog = () => {
  const { id } = useParams();

  const articles = useRef([]);

  useEffect(() => {
    if(id){
      window.scrollTo(0, articles.current[id-1].offsetTop);
    }
  }, [id])

  return(
    <section className="blog-articles-wrapper">
      <article ref={ref => articles.current.push(ref)}>
        <h2>Beneficiile mierii de rapiță</h2>
        <hr/>
        <p> blka VBAOHNAOSD AMANCATI MIERE MĂ</p>
      </article>
      <article ref={ref => articles.current.push(ref)}>2</article>
      <article ref={ref => articles.current.push(ref)}>3</article>
    </section>
  )
};

export default Blog;
