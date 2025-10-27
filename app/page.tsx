import Image from "next/image";

export default function Home() {
  return <>
    <div className="block" id="about-me">
      <div className="text-center">
        <div className="me" />
      </div>
      <h1>about me</h1>
      I am passionate about programming since early childhood. At 23 years of age, I
      already have several years of working experience in this field. I have gained a
      Bachelor's degree at the Faculty of Information Technology of the Czech
      Technical University with the specialization Artificial Intelligence, and I will
      probably continue studying there for a Master's degree. I have a lot of personal
      projects, many of them having been made for school.
      I have already learned enough about Computer Science to know that I know
      nothing at all, and thus I'm always eager to learn new things, discover new
      technologies, and develop my soft skills. Apart from programming, I also like
      music and am a self-taught piano and guitar user.
      
    </div>
    <div className="block" id="career">
      <h1>career</h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae libero non ligula finibus condimentum quis ut nibh. Quisque sagittis auctor ultrices. Donec et dui sagittis, pretium justo vel, imperdiet felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sit amet rutrum sem, id dapibus augue. Quisque elit lorem, molestie non risus non, bibendum placerat lectus. Suspendisse potenti. Nullam eu pharetra sapien, non luctus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet euismod enim, auctor finibus risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus aliquet, velit id eleifend iaculis, mauris quam egestas turpis, eu imperdiet arcu odio ut nisl. Nullam ullamcorper molestie porttitor. Nulla mollis magna pulvinar lorem vulputate semper. Donec risus ligula, venenatis a scelerisque vel, luctus vel quam. 
    </div>
    <div className="block" id="projects">
      <h1>projects</h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae libero non ligula finibus condimentum quis ut nibh. Quisque sagittis auctor ultrices. Donec et dui sagittis, pretium justo vel, imperdiet felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sit amet rutrum sem, id dapibus augue. Quisque elit lorem, molestie non risus non, bibendum placerat lectus. Suspendisse potenti. Nullam eu pharetra sapien, non luctus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet euismod enim, auctor finibus risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus aliquet, velit id eleifend iaculis, mauris quam egestas turpis, eu imperdiet arcu odio ut nisl. Nullam ullamcorper molestie porttitor. Nulla mollis magna pulvinar lorem vulputate semper. Donec risus ligula, venenatis a scelerisque vel, luctus vel quam. 
    </div>
    <div className="block" id="blog">
      <h1>blog</h1>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vitae libero non ligula finibus condimentum quis ut nibh. Quisque sagittis auctor ultrices. Donec et dui sagittis, pretium justo vel, imperdiet felis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent sit amet rutrum sem, id dapibus augue. Quisque elit lorem, molestie non risus non, bibendum placerat lectus. Suspendisse potenti. Nullam eu pharetra sapien, non luctus ipsum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer sit amet euismod enim, auctor finibus risus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus aliquet, velit id eleifend iaculis, mauris quam egestas turpis, eu imperdiet arcu odio ut nisl. Nullam ullamcorper molestie porttitor. Nulla mollis magna pulvinar lorem vulputate semper. Donec risus ligula, venenatis a scelerisque vel, luctus vel quam. 
    </div>
    <div style={{height: "19cm"}}>&nbsp;</div>
  </>;
}

// export default function Home() {
//   return (
//     <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
//       <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
//         <Image
//           className="dark:invert"
//           src="/next.svg"
//           alt="Next.js logo"
//           width={100}
//           height={20}
//           priority
//         />
//         <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
//           <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
//             To get started, edit the page.tsx file.
//           </h1>
//           <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
//             Looking for a starting point or more instructions? Head over to{" "}
//             <a
//               href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Templates
//             </a>{" "}
//             or the{" "}
//             <a
//               href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//               className="font-medium text-zinc-950 dark:text-zinc-50"
//             >
//               Learning
//             </a>{" "}
//             center.
//           </p>
//         </div>
//         <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
//           <a
//             className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
//             href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <Image
//               className="dark:invert"
//               src="/vercel.svg"
//               alt="Vercel logomark"
//               width={16}
//               height={16}
//             />
//             Deploy Now
//           </a>
//           <a
//             className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
//             href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Documentation
//           </a>
//         </div>
//       </main>
//     </div>
//   );
// }
