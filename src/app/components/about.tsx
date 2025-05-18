"use client";

export default function About() {
  return (
    <section id="about" className="w-full py-16">
      <div className="w-full max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-8">
          <p className="text-[var(--themeColor_3)] text-lg mb-2">
            Get to know more
          </p>
          <h2 className="text-[var(--textColor_2)] text-4xl font-bold mb-4">
            About Me
          </h2>
          <div className="w-1/4 h-1 bg-[var(--themeColor_2)] rounded ml-8"></div>
        </div>

        {/* Content */}
        <div className="text-[var(--textColor_3)] text-lg max-w-3xl mx-auto px-8 text-justify">
          <p className="text-[var(--textColor_2)] text-center mb-4">
            "A passionate coder who also loves to run."
          </p>
          <p>
            {" "}
            I'm a developer who finds joy where tech meets human connection. For
            me, coding isn’t just logic—it’s a creative craft, much like my
            morning trail runs. Fresh air clears my mind and sparks ideas in
            ways a screen never could. <br />
            <br /> When I’m not building or debugging, I’m usually deep in
            conversation with friends—usually about tech, whether it’s a new
            framework, AI trends, or tools we’re geeking out over. Those chats
            often turn into impromptu brainstorming sessions. <br />
            <br /> I’m excited by how technology can solve real problems and
            bring people together. I love digging into tough challenges, but I’m
            just as driven by collaboration, curiosity, and building things that
            matter. <br />
            <br /> At the end of the day, great software isn’t just clean
            code—it’s thoughtful, adaptable, and human. That’s where I feel most
            at home.{" "}
          </p>
        </div>

        <div className="flex justify-end mt-8">
          <div className="w-1/4 h-1 bg-[var(--themeColor_2)] rounded mr-8"></div>
        </div>
      </div>
    </section>
  );
}
