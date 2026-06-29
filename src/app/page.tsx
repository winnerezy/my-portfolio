import Image from "next/image";
import Link from "next/link";
import { Cormorant_Garamond } from "next/font/google";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { LiaLinkedinIn } from "react-icons/lia";
import { MdEmail } from "react-icons/md";

const elegantSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const projects = [
  {
    name: "Kron",
    href: "https://kron.winnerx0.dev",
    description:
      "Schedule, run, and monitor HTTP cron jobs with execution history.",
  },
  //   {
  //   name: "Kivia",
  //   href: "https://kivia-observe.vercel.app",
  //   description:
  //     "Drop-in API observability with live traffic, latency, and status code analytics.",
  // },
  {
    name: "Histr",
    href: "https://histr.vercel.app",
    description: "Manage transactions across multiple banks.",
  },
  {
    name: "Envault",
    href: "https://github.com/winnerx0/envault",
    description:
      "Go CLI for backing up environment variables to private GitHub repositories.",
  },
  {
    name: "Silk",
    href: "https://github.com/winnerx0/silk",
    description:
      "Redis-like key-value store with AOF persistence and log compaction.",
  },
  {
    name: "Coil",
    href: "https://github.com/winnerx0/coil",
    description: "Build system powered by Railpack.",
  },
];

const page = () => {
  return (
    <section className="w-full px-4 max-w-3xl pb-20">
      <div
        className={`${elegantSerif.className} flex flex-col gap-4 w-full mt-16`}
      >
        <Image
          src={"/me.jpg"}
          width={50}
          height={50}
          alt="me"
          className="rounded-full"
        />
        <h1 className="text-xl font-bold">Winner</h1>
        <h2 className="text-[clamp(20px,1.3vw,3rem)]">
          Software Engineer | Backend Systems
        </h2>
        <p className="text-gray-400">
          I build backend systems, developer tools, automation workflows, and
          practical AI products.
        </p>
        <p className="text-gray-400">
          I primarily work with Java, TypeScript, and Go, with recent projects
          spanning scheduling, rate limiting, database tooling, CLIs, Telegram
          bots, and local file sharing.
        </p>
        {/* <Link
          download
          href={"/resume.pdf"}
          target="_blank"
          className="text-gray-400 underline"
        >
          Resume
        </Link> */}
        <div className="flex gap-2">
          <Link
            href={"https://www.linkedin.com/in/eromoigbe-agbonikpeya/"}
            target="_blank"
          >
            <LiaLinkedinIn />
          </Link>
          <Link href={"https://x.com/winnerx0"} target="_blank">
            <FaXTwitter />
          </Link>
          <Link href={"https://github.com/winnerx0"} target="_blank">
            <FaGithub />
          </Link>
          <Link href={"mailto:winneragbonikpeya@gmail.com"} target="_blank">
            <MdEmail />
          </Link>
        </div>
        <hr />
      </div>
      <div className="flex flex-col gap-4 w-full mt-16">
        <h1 className="text-xl font-bold">Projects</h1>
        <ul className="text-gray-400 divide-y">
          {projects.map((project) => (
            <li key={project.name} className="py-4">
              <Link
                href={project.href}
                target="_blank"
                className="text-white underline-offset-4 hover:underline transition-all duration-200"
              >
                • {project.name}
              </Link>{" "}
              - {project.description}
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="flex flex-col gap-4 w-full mt-16">
        <h1 className="text-xl font-bold">Work</h1>
        <div>
          <h2 className="text-gray-400">Tredbase June 2025 - Present</h2>
        </div>
        <hr />
        <div>
          <h2 className="text-gray-400">Luminevent June 2025 - July 2025</h2>
        </div>
        <hr />
        <div>
          <h2 className="text-gray-400">TekkTopia Sept 2024 - Jan 2025</h2>
        </div>
        <hr />
      </div> */}
    </section>
  );
};

export default page;
