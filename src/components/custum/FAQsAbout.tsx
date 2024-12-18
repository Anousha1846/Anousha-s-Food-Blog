import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQsAbout = () => {
  return (
    <div className="container mx-auto py-20 px-6 md:px-12">
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-[#9b1b30] via-[#D4AF37] to-[#6B7A4F] text-transparent bg-clip-text mb-12">
        Frequently Asked Questions
      </h2>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg font-medium text-darkBrown hover:text-deepRed transition-colors">
            How do I navigate the website?
          </AccordionTrigger>
          <AccordionContent className="text-base text-mutedOlive">
            Our website has a user-friendly interface with a simple menu for easy navigation. You can find recipes, blogs, and tips through the top navigation bar.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg font-medium text-darkBrown hover:text-deepRed transition-colors">
            Do you offer vegan recipes?
          </AccordionTrigger>
          <AccordionContent className="text-base text-mutedOlive">
            Yes, we offer a wide range of vegetarian and vegan recipes. You can filter recipes based on your dietary preferences using our search feature.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg font-medium text-darkBrown hover:text-deepRed transition-colors">
            How often do you update the blog?
          </AccordionTrigger>
          <AccordionContent className="text-base text-mutedOlive">
            We update our blog regularly with new recipes, tips, and food-related content. Be sure to check back often for fresh ideas!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-4">
          <AccordionTrigger className="text-lg font-medium text-darkBrown hover:text-deepRed transition-colors">
            How can I contact you?
          </AccordionTrigger>
          <AccordionContent className="text-base text-mutedOlive">
            You can contact us through our contact page or email us directly at info@anoushafoodblog.com.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-5">
          <AccordionTrigger className="text-lg font-medium text-darkBrown hover:text-deepRed transition-colors">
            Are the recipes available for free?
          </AccordionTrigger>
          <AccordionContent className="text-base text-mutedOlive">
            Yes, all recipes on Anousha Food Blog are free to access and try at home!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-6">
          <AccordionTrigger className="text-lg font-medium text-darkBrown hover:text-deepRed transition-colors">
            Can I contribute a recipe to your blog?
          </AccordionTrigger>
          <AccordionContent className="text-base text-mutedOlive">
            Absolutely! We welcome guest posts and contributions. Please reach out to us with your recipe idea.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FAQsAbout;
