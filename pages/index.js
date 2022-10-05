import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Hi, I'm Temiloluwa. A Frontend Engineer who loves to solve problems! I
          not only have a proven mastery of HTML and CSS, but also have hands-on
          experience working with Javascript(ES6), React.Js, and other juicy CSS
          and React frameworks (e.g, Redux, Next.js, Chakra, Material-UI,
          Tailwind, e.t.c). Up until now, I have built (and collaborated to
          develop) modern, beautifully looking user facing applications and
          frontend architectures across different industries. I also stay
          updated on the latest developments and trends on design patterns and
          useful tools for the frontend stack.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
