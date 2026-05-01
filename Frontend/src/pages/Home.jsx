import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

function Home() {
  function CountUp({ end, duration = 2, trigger }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!trigger) return;

      let start = 0;
      const increment = end / (duration * 60);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }, [trigger, end, duration]);

    return <span className="text-red-500">{count}+</span>;
  }

  function Stat({ icon, end, label }) {
  const [visible, setVisible] = useState(false);

  return (
    <motion.div
      variants={fadeUp}
      onViewportEnter={() => setVisible(true)}
      transition={{ duration: 0.5 }}
      className="w-1/2 md:w-1/3 flex flex-col justify-center items-center p-4 md:p-4"
    >
      <img
        className="w-12 h-12 md:w-16 md:h-16 lg:w-24 lg:h-24 object-contain p-2 md:p-4"
        src={icon}
        alt=""
      />

      <h2 className="text-lg md:text-xl">
        <CountUp end={end} trigger={visible} /> {label}
      </h2>
    </motion.div>
  );
}

  return (
    
    <div className="flex flex-col justify-center text-white bg-zinc-950 mt-30">
      <Link to="/projects" className="decoration-0  ">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className=" bg-[url(/images/Hero_1.png)] transition duration-300 ease-in-out hover:scale-95   bg-center bg-cover brightness-70 text-center h-64 md:h-80 lg:h-96 font-bold flex flex-col justify-center items-center mt-10 md:mt-14 mb-10 md:mb-14 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-4xl md:text-6xl lg:text-8xl text-transparent [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:3px_white]"
        >
          FUTJA NGJYRË
        </motion.h1>
      </motion.div></Link>
      

      <div className="flex flex-col justify-around p-6 md:p-12 lg:p-16 text-center font-bold text-xl md:text-2xl lg:text-3xl mt-10 md:mt-14 mb-10 md:mb-14 h-auto lg:h-150">
        <h1>SINCE 2015:</h1>

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: { staggerChildren: 0.4 },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          className="flex justify-around flex-wrap"
        >
         
          <motion.div
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.2 },
              },
            }}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.6 }}
            className="flex justify-around flex-wrap"
          >
            <Stat icon="/images/Icon 1.png" end={100} label="Murals" />
            <Stat icon="/images/Icon 2.png" end={3000} label="Youth Engaged" />
            <Stat
              icon="/images/Icon 3.png"
              end={20}
              label="Festivals & Public Events"
            />
            <Stat
              icon="/images/Icon 4.png"
              end={50}
              label="Camps & Workshops"
            />
            <Stat icon="/images/Icon 5.png" end={200} label="Artists Engaged" />
            <Stat icon="/images/Icon 6.png" end={3} label="Cities Activated" />
          </motion.div>
        </motion.div>
      </div>

      <Link to="/about">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="bg-[url(/images/Hero_2.png)] transition duration-300 ease-in-out hover:scale-95  bg-center bg-cover brightness-70 text-center h-64 md:h-80 lg:h-96 font-bold flex flex-col justify-center items-center mt-10 md:mt-14 mb-10 md:mb-14 px-4"
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-8xl text-transparent [-webkit-text-stroke:2px_white] md:[-webkit-text-stroke:3px_white]"
        >
          OUR SPACE
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm md:text-base lg:text-lg mt-2"
        >
          Futja Ngjyre operates from its dedicated creative space in the Fatime
          Xhaka area of Mitrovica.
        </motion.p>
      </motion.div></Link>
      

      
    </div>
  );
}

export default Home;
