import Hero from "./components/hero";
import Header from "./components/header";
import About from "./components/about";
import Tech from "./components/tech";
import Footer from "./components/footer";
export default function Home() {

  return (
    <main className="overflow-x-hidden overflow-y-hidden [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <Header/>
      <Hero/>
      <About/>
      <Tech/>
      <Footer/>
    </main>
  );
}
