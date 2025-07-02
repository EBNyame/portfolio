"use client"
import Link from "next/link";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Home() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <main>
      {/* ---------header------------ */}
     <header className={`header flex justify-end items-center transition-opacity duration-300 ${isSidebarOpen ? "opacity-50" : "opacity-100"}`}>
        <div>
          <Link href={"#home"} className="logo ">
            EBNyame
          </Link>
        </div>
        <nav className="navbar">
          <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
            <SheetTrigger className="tablet:hidden">
              <Menu className="menu-icon mr-4" />
            </SheetTrigger>
            <SheetContent className="pt-4 text-3xl">
              <br />
              <br />
              <br />
              <Link href={"#home"} onClick={closeSidebar}>
                Home
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#about"} onClick={closeSidebar}>
                About
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#education"} onClick={closeSidebar}>
                Project
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#skills"} onClick={closeSidebar}>
                Skills
              </Link>
              <br />
              <br />
              <br />
              <Link href={"#contact"} onClick={closeSidebar}>
                Contact
              </Link>
              <br />
            </SheetContent>
          </Sheet>
          <ul className="hidden tablet:flex gap-x-8 text-[1.7rem]">
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#home"}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#about"}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#education"}
              >
                Project
              </Link>
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#skills"}
              >
                Skills
              </Link>{" "}
            </li>
            <li>
              <Link
                className="text-[var(--text-color)] font-bold ml-[3.5rem] transition duration-300 hover:text-[var(--main-color)] 
active:text-[var(--main-color)]"
                href={"#contact"}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/*-------------- home section-------------- */}

      <section className={` bg-cover bg-center transition-opacity duration-300 ${isSidebarOpen ? "opacity-50" : "opacity-100"}`} id="home">
        <div className="home-content">
          <h1>
            Hi, I'm<span> Exodus</span>{" "}
          </h1>
          <div className="text-animated">
            <h3>Backend Developer</h3>
          </div>
          <p>
            I'm a backend developer with a strong focus on building scalable, efficient, and reliable systems using <span style={{color: 'red'}}>Python</span> and <span style={{color: 'green'}}>Golang</span>. At RnT Devs, I work on architecting backend services, designing RESTful and gRPC APIs, and implementing microservices that support both web and mobile platforms.
            My work involves building robust server-side logic, managing databases, and ensuring application performance and security at scale. I'm particularly passionate about writing clean, maintainable code and designing systems that can evolve with growing product demands.
            As I deepen my expertise in backend engineering, I remain committed to solving real-world problems with thoughtful, well-engineered solutions.
          </p>
        
          <div className="btn-box">
            <Link
              href={
                "https://www.linkedin.com/in/exodus-blessed-nyame-715889283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              }
              className="btn" target="_blank"
            >
              Hire me
            </Link>
            <Link
              href={
                "https://wa.me/+233256749988"
              }
              className="btn" target="_blank"
            >
              Let's talk
            </Link>
          </div>
          <div className="flex-space-x-4 home-sci">
            <Link
              href="https://www.linkedin.com/in/exodus-blessed-nyame-715889283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="bx-bx1-linkedin"
            >
              <LinkedInIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
            <Link
              href={"https://github.com/ebnyame"}
              target="_blank"
              className="bx-bx1-github"
            >
              <GitHubIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
            <Link
              href={"https://www.instagram.com/mcjerzy_bl?igsh=bGVza292ZjNpeWhi&utm_source=qr"}
              target="_blank"
              className="bx-bx1-x"
            >
              <InstagramIcon className="icon" sx={{ fontSize: 25 }} />
            </Link>
          </div>
        </div>

        <div className="home-imgHover"></div>
      </section>

      {/* --------------About Section------------- */}

      <section className="about" id="about">
        <h2 className="heading">
          About <span>Me</span>
        </h2>
            
        <div className="about-image relative w-[25rem] h-[25rem] rounded-full flex justify-center items-center">
      <Image
        src="/exodus.jpeg" 
        alt="Profile Image"
        width={225}
        height={225}
        className="Image rounded-full border-[.2rem] border-[var(--main-color)]"
      />
      <span className="circle-spin absolute"></span>
    </div>

        <div className="about-content">
          <h2>Backend Developer</h2>
          <p className="about-para">
            I'm a backend developer specializing in building scalable, reliable, and high-performance systems using <span style={{ color: 'red', fontWeight: 'bold' }}>Python</span> and <span style={{ color: 'green', fontWeight: 'bold' }}>Golang</span>
. I focus on architecting backend services, designing RESTful and gRPC APIs, and implementing microservices that support both web and mobile applications.
            My backend toolkit includes PostgreSQL for robust relational data management and AWS for cloud infrastructure, deployment, and scalability. I regularly work with services like EC2, S3, and RDS to ensure secure and efficient backend operations in production environments.
            With a strong foundation in server-side logic, database optimization, and cloud-based deployment, I take pride in developing clean, maintainable code and backend architectures that are built to last. I'm driven by a problem-solving mindset and a passion for designing systems that can grow with the needs of a product or team.
                      </p>

          <div className="btn-box btns">
            <a href="#about" className="btn">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* -----------------------project section--------------------------- */}

      <section className="education" id="education">
  <h2 className="heading">
    My <span>Projects</span>
  </h2>

  <div className="education-row">
    <div className="education-column">
      <div className="education-box">

        <div className="education-content">
          <div className="content">
            <div className="year">
              <h3>Task Manager API</h3>
            </div>
            <p>
              A RESTful API built with Python (FastAPI) and PostgreSQL. Features user authentication with JWT, CRUD task management, and role-based access control.
              <Link
                href="#"
                className="text-blue-500 hover:underline ml-2"
                target="_blank"
              >
                Read More
              </Link>
            </p>
          </div>
        </div>

        <div className="education-content">
          <div className="content">
            <div className="year">
              <h3>Go Auth Service</h3>
            </div>
            <p>
              A lightweight authentication microservice built with Golang and PostgreSQL. Implements user login, registration, password hashing, and JWT-based sessions.
              <Link
                href="#"
                className="text-blue-500 hover:underline ml-2"
                target="_blank"
              >
                Read More
              </Link>
            </p>
          </div>
        </div>

        <div className="education-content">
          <div className="content">
            <div className="year">
              <h3>File Upload API (AWS S3)</h3>
            </div>
            <p>
              A FastAPI backend service that lets users upload and manage files securely using AWS S3. Supports file size limits, pre-signed URLs, and authentication.
              <Link
                href="#"
                className="text-blue-500 hover:underline ml-2"
                target="_blank"
              >
                Read More
              </Link>
            </p>
          </div>
        </div>

        <div className="education-content">
          <div className="content">
            <div className="year">
              <h3>Real-Time Chat API</h3>
            </div>
            <p>
              Built with Golang and WebSockets, this backend service supports real-time messaging across multiple rooms with user presence tracking and persistent chat history.
              <Link
                href="#"
                className="text-blue-500 hover:underline ml-2"
                target="_blank"
              >
                Read More
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>

    {/* --------------2nd column----------- */}

    <div className="education-column">
      <div className="education-box">

        <div className="education-content">
          <div className="content">
            <div className="year">
              <h3>Expense Tracker API</h3>
            </div>
            <p>
              A backend API developed with Python and PostgreSQL to help users log and categorize their expenses. Includes analytics endpoints for monthly and yearly summaries.
              <Link
                href="#"
                className="text-blue-500 hover:underline ml-2"
                target="_blank"
              >
                Read More
              </Link>
            </p>
          </div>
        </div>

        <div className="education-content">
          <div className="content">
            <div className="year">
              <h3>URL Shortener (Go)</h3>
            </div>
            <p>
              A simple URL shortening service built in Go. Stores short links in PostgreSQL and handles redirect logic, click tracking, and expiration logic.
              <Link
                href="#"
                className="text-blue-500 hover:underline ml-2"
                target="_blank"
              >
                Read More
              </Link>
            </p>
          </div>
        </div>

        <div className="education-content">
          <div className="content">
            <div className="year">
              <h3>Blog API</h3>
            </div>
            <p>
              A backend blog platform with user authentication, post creation, comments, and tagging. Built with FastAPI and PostgreSQL. Supports pagination and search.
              <Link
                href="#"
                className="text-blue-500 hover:underline ml-2"
                target="_blank"
              >
                Read More
              </Link>
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


      {/* -----------------------skill section--------------------------- */}
      <section className="skills" id="skills">
  <h2 className="heading">
    My <span>Skills</span>
  </h2>
  <h3 className="skill-title">Coding Skills</h3>

  <div className="skills-row">
    <div className="skills-column">

      <div className="skills-box">
        <div className="skills-content">
          <div className="progress">
            <h3>
              Python <span>95%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Golang <span>90%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              PostgreSQL <span>85%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              HTML <span>90%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              CSS <span>85%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div>
      </div>

    </div>

    {/* ----------------------2nd Column--------------------------- */}

    <div className="skills-column">
      <div className="skills-box">
        <div className="skills-content">
          <div className="progress">
            <h3>
              AWS (S3, EC2, Lambda) <span>80%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Docker <span>75%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              FastAPI <span>85%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              Microservices Architecture <span>80%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
          <div className="progress">
            <h3>
              RESTful APIs <span>90%</span>
            </h3>
            <div className="bar">
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="contact" id="contact">
        <center></center>
        <h2 className="heading">
          Contact <span>Me!</span>
        </h2>

        <form action="#">
          <div className="input-box">
            <div className="input-field">
              <input type="text" placeholder="Full Name" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Address" required />
              <span className="focus"></span>
            </div>
          </div>

          <div className="input-box">
            <div className="input-field">
              <input type="string" placeholder="Mobile Number" required />
              <span className="focus"></span>
            </div>
            <div className="input-field">
              <input type="text" placeholder="Email Subject" required />
              <span className="focus"></span>
            </div>
          </div>
          <div className="textarea-field">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your Message"
              required
            ></textarea>
            <span className="focus"></span>
          </div>

          <div className="btn-box btns">
            <button type="submit"  className="btn">
              Submit
            </button>
          </div>
        </form>
      </section>

      {/* --------------footer-------------- */}

      <footer className="footer">
        <div className="footer-text">
          <p>Copyright &copy; 2024 by EBNyame | All Right Reserved.</p>
        </div>

        <div className="footer-iconTop">
          <Link href="/" className=" bg-cyan-500 bx-bx1-arrowUpWardIcon">
            <ArrowUpwardIcon className="icon" sx={{ fontSize: 25 }} />
          </Link>
        </div>
      </footer>
    </main>
  );
}
