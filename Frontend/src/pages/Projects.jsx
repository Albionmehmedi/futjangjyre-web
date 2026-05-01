import { Link } from "react-router-dom";

function Projects() {
  return (
<div className="flex flex-col justify-center text-white">

  <Link to="/projects/nomad" className="mt-20 md:mt-36 mb-10 md:mb-14 transition duration-300 ease-in-out hover:scale-95">
    <div className="bg-[url(/images/Hero_Nomad.png)] bg-center bg-cover brightness-70 flex flex-col justify-center text-center md:text-end h-64 md:h-80 lg:h-96 p-4">
      <img className="w-1/3 md:w-1/5 lg:w-1/6 self-center" src="/images/Logo_Nomad.png" alt="" />
      <h2 className="text-xl md:text-2xl mt-2">Nomad Festival</h2>
      <h4 className="text-sm md:text-base">Public art & community activation.</h4>
    </div>
  </Link>

  <Link to="/projects/promaja" className="mt-20 md:mt-36 mb-10 md:mb-14 transition duration-300 ease-in-out hover:scale-95">
    <div className="bg-[url(/images/Hero_Promaj.png)] bg-center bg-cover brightness-70 flex flex-col justify-center text-center md:text-end h-64 md:h-80 lg:h-96 p-4">
      <img className="w-1/3 md:w-1/5 lg:w-1/6 self-center" src="/images/Logo_Promaj.png" alt="" />
      <h2 className="text-xl md:text-2xl mt-2">Promaja</h2>
      <h4 className="text-sm md:text-base">Art, heritage & civic engagement.</h4>
    </div>
  </Link>

  <Link to="/projects/zanat" className="mt-20 md:mt-36 mb-10 md:mb-14 transition duration-300 ease-in-out hover:scale-95">
    <div className="bg-[url(/images/Hero_Zanat.png)] bg-center bg-cover brightness-70 flex flex-col justify-center text-center md:text-end h-64 md:h-80 lg:h-96 p-4">
      <img className="w-1/3 md:w-1/5 lg:w-1/6 self-center" src="/images/Logo_Zanat.png" alt="" />
      <h2 className="text-xl md:text-2xl mt-2">Zanat</h2>
      <h4 className="text-sm md:text-base">Creative training & mentorship.</h4>
    </div>
  </Link>

</div>
    
  );
}

export default Projects;
