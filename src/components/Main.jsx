import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
  BsGithub,
} from "react-icons/bs";
import { TypeAnimation } from "react-type-animation";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover object-left scale-x-[-1]"
        src="https://lh3.googleusercontent.com/pw/ADCreHeYlU5ymH2haLP_9YpW5tyKKo0DJUM2hyRuWIDvjXrKKtul5rztPPCRfdu1laROslTNwbtUxZNvLyCR2Qu-imnGQqF4_WKvcs9KfG1nYa0O9OWzLyimek-DqYR38njp6V-5F3umsdcYYlmk-i4BgiBunhLutxefmYoqg5vKrDxlDyvllFd5tfOGxpJZPgTnyWa_mCM2KH6UYXLaNcIgrfmeQvqf_CLkgn3ie2WS2gQPKZAMKsb4KQ73u-4gxeGPH4-jVSUNob6XY_yux0lzZK-6Ls5qOHFshiQfLQXuBk1bqmHkuCdCQ2Dy7Gz7YKbhyjvWCDmyg9Okg5uZPHQdFQBqTjIqANLl4vz52NzY_OjedKnLYVG2pMgxAFi0VioUxeY_Na7DFjtslF5COesrGvhEUthFe3rAdenOIBsikY13omJEomR7ZwzTQoMz3BnjK4pNbV89gW_PoRy0tid3OEdKFsclzBVoPH6t160rE83R68a2zgE68LZ2lrEVL9qM8uC0YOZ9vxaieH75ijUj5Wy7FXXXi-AP34Do56QG9JL7R3U7sUa8zeOa9wx0RQgWAXQshAkHcL-Rls9m_GH9DyrKBwRZsWsFhVIC9g6HEpxOEGCJywL1zilIJnIfYSHBDit7jmjRqLzSa5o8MXW7hMBUxZ61G4mPrp3FCF4VIZuJ5Y3obhJmMC_c5VhBX7TQ9JuRiFBm-ekC4B-g3KL50xWp1Gx28dk94jQL8YVnFvba2YiXylXgArQ_g1oS7Sgy2ErNgyocSu8HdO0MI-qsFOdcRF7R9y9B8xSrKI2kMkBePPoxPgkb4vFPSlDvMVYak6cCr3bZr88PkovSkAzKH9QBiC5W-NtRVpEJORM1v_GYIJCBkAbCJGwrmdKnlYPTm5r88s9t-P677Po-U8TXKgGLRRZvN_Gc31mkrl5VYSgX_kHoH17Gep3BxLtXtw=w1440-h810-s-no-gm?authuser=0"
        alt="main-bg"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm Saurabh Kumar
          </h1>
          <h2 className="pt-4 font-bold text-gray-900">
            Javacript / Angular / React / Node Developer
          </h2>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer",
                2000, // wait 1s before replacing "Mice" with "Hamsters"
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
              ]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                display: "inline-block",
                paddingLeft: "5px",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://facebook.com/saurabh2406"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsFacebook size={20} className="cursor-pointer" />
            </a>
            <a
            href="https://github.com/saurabhkumarsoni"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={20} className="cursor-pointer" />
            </a>
            <a
            href="https://www.linkedin.com/in/saurabh24692/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsLinkedin size={20} className="cursor-pointer" />
            </a>
            
            <BsTwitter size={20} className="cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
