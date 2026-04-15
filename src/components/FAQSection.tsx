import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What screen sizes are available for your interactive displays?",
    answer: "We offer a comprehensive range of sizes from 55\" to 98\" to suit any space, from huddle rooms to large conference halls and classrooms. Our team can help you determine the optimal size based on your room dimensions and viewing distance requirements."
  },
  {
    question: "Do your smartboards work with existing video conferencing software?",
    answer: "Yes, our displays are fully compatible with all major video conferencing platforms including Zoom, Microsoft Teams, Google Meet, Webex, and more. They integrate seamlessly with your existing workflow without requiring additional software."
  },
  {
    question: "What warranty and support options do you provide?",
    answer: "All our products come with a standard 1-year warranty covering parts and labor. We also offer extended warranty options, along with 24/7 technical support and on-site service for enterprise customers."
  },
  {
    question: "Can multiple users interact with the display simultaneously?",
    answer: "Absolutely! Our displays support up to 40-point infrared touch with zero latency, allowing 5–6 people to write simultaneously. Multiple participants can draw, annotate, and interact with content at the same time."
  },
  {
    question: "What is the installation process like?",
    answer: "We provide comprehensive installation services including site assessment, professional mounting, cable management, and full system configuration. Our certified technicians ensure your display is set up correctly and train your team on usage."
  },
  {
    question: "Do you offer leasing or financing options?",
    answer: "Yes, we offer flexible financing and leasing programs to help organizations of all sizes access our technology. Contact our sales team to discuss payment plans tailored to your budget and requirements."
  }
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4 block">
            Support
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Find answers to common questions about our products and services
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6 data-[state=open]:glow-sm"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:text-primary transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
