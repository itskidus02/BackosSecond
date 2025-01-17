import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
  
  export function AccordionDemo() {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen">
        <h1 className="mb-9 lg:text-4xl text-2xl font-semibold font-poppins text-[#2092CF]">Frequently Asked Questions </h1>
        <Accordion type="single" collapsible className="w-2/4 mx-auto">
          <AccordionItem value="item-1">
            <AccordionTrigger>How long does the registration process take?</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Can I add or remove employees at any time??</AccordionTrigger>
            <AccordionContent>
              Yes. It comes with default styles that match the other components' aesthetic.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Is there a limit to the number of bookings I can receive??</AccordionTrigger>
            <AccordionContent>
            No, there are no limits on the number of bookings you can receive through the platform. Our system is designed to scale to handle your business needs, whether you're a small operation or a large enterprise.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Can I integrate the booking system with my existing website or software??</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    );
  }
  