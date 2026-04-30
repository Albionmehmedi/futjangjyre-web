function About() {
  return (
    <div className="flex flex-col text-white justify-center mt-20 md:mt-36 mb-10 md:mb-14">
      <div className="h-64 md:h-80 lg:h-96 bg-[url(/images/Hero_About.png)] bg-center bg-cover brightness-70 flex flex-col justify-center items-center px-4">
        <h1 className="text-xl md:text-2xl mb-4">About Futja Ngjyrë</h1>
        <p className="w-full md:w-2/3 text-center text-sm md:text-base">
          Futja Ngjyre is a cultural organization based in Mitrovica, Kosovo.
          Since 2015 we have been creating public art, organizing festivals,
          workshops, and community programs that activate public spaces and
          support emerging artists. Our work connects youth, artists, and
          communities through street art, cultural production, and creative
          collaboration. design projects that are visually strong and socially
          grounded.
        </p>
      </div>

      <div className="flex flex-col justify-center text-center mt-20 md:mt-36 mb-10 md:mb-14 px-4">
        <h1 className="text-xl md:text-2xl mb-4">Our Space</h1>

        <p className="mb-10 md:mb-14 w-full md:w-2/3 text-center self-center text-sm md:text-base">
          Futja Ngjyre operates from its dedicated creative space in the Fatime
          Xhaka area of Mitrovica. In 2023, we transformed a previously unused
          municipal building into a functional base for our programs and daily
          operations. Spanning approximately 220 m², the space supports
          workshops, design and print work, photo and video production, and
          project coordination. It serves as the preparation site for murals,
          training cycles, media production, and community events connected to
          Nomad Festival, Promaja, and Futja Zanat. While primarily dedicated to
          Futja Ngjyre activities, we collaborate with local NGOs, artists, and
          initiatives whose work aligns with our focus.
        </p>

        <div className="h-64 md:h-96 lg:h-160 bg-[url(/images/Hero_Space.png)] bg-center bg-cover brightness-70 mt-10 md:mt-14"></div>

        <p className="text-sm md:text-base mt-4">
          For collaboration or inquiries regarding use of the space, contact
          info@futjangjyre.com Access is considered based on purpose and
          availability.
        </p>
      </div>
    </div>
  );
}
export default About;
