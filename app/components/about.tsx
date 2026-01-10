export default function About() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center pb-10">
      <div className="text-2xl md:text-5xl text-center archivo-black w-[80vw]">I&apos;m Atharv - a Full Stack Developer crafting fast, scalable, and immersive digital experiences that merge creativity with engineering precision.</div>
      <br></br>
      <div className="text-3xl archivo text-center w-[70vw] mt-10 mb-40">I specialize in developing Saa platforms, AI-driven products, and interactive 3D web experiences using technologies like Next.js, Node.js, and Three.js.</div>
      
      <div className="w-screen grid grid-cols-2 justify-around">
        <div className="text-center text-6xl archivo-black"> 4+</div>
        <div className="text-center text-6xl archivo-black"> 30+</div>
        <div className="text-center text-3xl archivo mt-5"> Years of Experience</div>
        <div className="text-center text-3xl archivo mt-5"> Projects Completed</div>
      </div>
    </div>
  );
}
