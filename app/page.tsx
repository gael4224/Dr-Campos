import Navbar from "@/components/navbar";
import Hero from "@/components/sections/hero";
import Presentacion from "@/components/sections/presentacion";
import EspecialidadesDetalle from "@/components/sections/especialidades-detalle";
import TrabajosDelDoctor from "@/components/sections/trabajos-del-doctor";
import About from "@/components/sections/about";
import Services from "@/components/sections/services";
import Opiniones from "@/components/sections/opiniones";
import Portfolio from "@/components/sections/portfolio";
import UbicacionHorarios from "@/components/sections/ubicacion-horarios";
import CallToAction from "@/components/sections/call-to-action";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <div className="min-h-dvh bg-white">
      <Navbar />
      <main>
        <Hero />
        <Presentacion />
        <EspecialidadesDetalle />
        <TrabajosDelDoctor />
        <About />
        <Services />
        <Opiniones />
        <Portfolio />
        <UbicacionHorarios />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}

