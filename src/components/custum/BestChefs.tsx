import { AnimatedTestimonials } from "../ui/AnimatedTestimonials";
import GordonRamsay from "../../../public/GordonRamsay.webp"
import Martín from "../../../public/Martín.jpg"
import Alian from "../../../public/Alian.jpg"


export default function BestChefs() {
  const testimonials = [
    {
      quote:
        "Gordon James Ramsay OBE is a British celebrity chef, restaurateur, television presenter, and writer. His restaurant group, Gordon Ramsay Restaurants, was founded in 1997 and has been awarded 17 Michelin stars",
      name: "Gordon Ramsay",
      src: GordonRamsay,
    },
    {
      quote:
        "Alain Ducasse is a French-born Monégasque chef. He operates a number of restaurants including Alain Ducasse at The Dorchester which holds three stars in the Michelin Guide.",
      name: "Alain Ducasse",
      src: Alian ,
    },
    {
      quote:
        "Martín Berasategui Olazábal is a Spanish chef expert in Basque cuisine and owner of an eponymous restaurant in Lasarte-Oria, Spain. Since 2001 it has been awarded three Michelin stars. He holds twelve stars in total, more than any other Spanish chef.",
      name: "Martín Berasategui",
      src: Martín ,
    },
    
  ];
  return (
    <div className="md:mx-28">
<h1 className="text-3xl md:text-5xl md:mt-24 mt-12 text-center font-bold bg-gradient-to-r from-[#9b1b30] via-[#D4AF37] to-[#6B7A4F] text-transparent bg-clip-text">
World&rsquo;s  Best Chefs
</h1>
        <AnimatedTestimonials testimonials={testimonials}  autoplay={true}/>
    </div>
  );
}
