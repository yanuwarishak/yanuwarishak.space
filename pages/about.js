import Container from "@/components/container/Container";

import TopTracks from "@/components/spotify/TopTracks";

export default function About() {
  return (
    <Container title="About – Yanuwar Ishak">
      <div className="absolute top-0 left-0 ">
        <h1 className="p-6 font-semibold text-lg md:hidden">About</h1>
      </div>
      {/* About me section */}
      <section className="flex flex-col mb-8">
        <h1 className="text-5xl font-bold mb-8">About Me</h1>
        <div className="prose text-gray-300">
          <p>
            Helloo my name is <b>Yanuwar</b>. I'm a Web developer mainly focused
            on Front-end Development. My journey as a web developer started in
            early 2018 back when I was at college. I've leaned several
            programming language like PHP (Laravel) and Node.js (Express) while
            as for Front-end I've learned several frameworks like jQuery, React.
            I found that Front-end Developer suits me better in overall. It acts
            as the middle road of my interest between coding, UI/UX Design and
            Designing in general. I put my information related to my work on
            LinkedIn, you can visit it{" "}
            <a
              href="https://linkedin.com/in/yanuwar-ishak/"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>{" "}
            if you want to know more about it.
          </p>
          <p>
            <b>
              <i> Scio me nihil scire. </i>
              <br />
            </b>
            This quote was coined by Socrates which roughly translates to{" "}
            <b>
              <i> I know that I know nothing, </i>
            </b>
            and I love this quote. As a developer I believe that learning is a
            lifetime process. Technology moves fast and things that relevant a
            year ago might not be as relevant as it is today. With the emerge of
            web3.0 I feel like it's a mandatory for people that works as
            developer to always eager for learning new thing.
          </p>
          <p>
            I like spending time playing games, watching videos, learning new
            things and listening to music, I put my monthly top tracks down
            below, you can check out my{" "}
            <a
              href="https://open.spotify.com/user/212rshe3omsf3edodvt4rqb7q?si=fc30f52cbc2d443d"
              target="_blank"
              rel="noopener noreferrer"
            >
              Spotify
            </a>{" "}
            if we happened to have a similar music taste.
          </p>
        </div>
      </section>
      {/* Spotify Section */}
      <section className="mb-8 w-full">
        <div className="flex flex-col">
          <h1 className="text-3xl font-semibold text-gray-200 mb-1">Spotify</h1>
          <h1 className="text-2xl text-gray-200">Monthly Top Tracks</h1>
          <p className="my-2 text-gray-400">
            These musics has been living in my headset recently
          </p>
          <TopTracks />
        </div>
      </section>
    </Container>
  );
}
