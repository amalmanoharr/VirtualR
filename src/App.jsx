import Feature from "./components/Feature";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Workflow from "./components/Workflow";

const App = () => {
  return(
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
      <Hero />
        <section id="features">
          <Feature />
        </section>

        <section id="workflow">
          <Workflow />
        </section>
        
        <section id="pricing">
          <Pricing />
        </section>

        <section id="testimonials">
          <Testimonials/>
        </section>

      
      <Footer />
      </div>
      
    </div>
  )
}
export default App;