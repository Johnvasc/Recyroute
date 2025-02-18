import {
    Accordion,
    AccordionItem,
    AccordionHeader,
    AccordionTrigger,
    AccordionTitleText,
    AccordionContent,
    AccordionContentText,
    AccordionIcon,
  } from "@/components/ui/accordion";
  
  import { ChevronUpIcon, ChevronDownIcon } from "@/components/ui/icon";
  import { Divider } from "./ui/divider";
  
  type DropdownProps = {
    title: string[];
    content: string[]; // Supondo que o conteúdo seja texto. Ajuste se necessário.
  };
  
  export function Dropdown({ title, content }: DropdownProps) {
    return (
      <Accordion
        size="md"
        variant="filled"
        type="single"
        isCollapsible={true}
        isDisabled={false}
        className="m-5 w-[90%] border border-outline-200"
      >
        {title.map((item, index) => (
          <div key={index}>
            <AccordionItem value={`item-${index}`}>
              <AccordionHeader>
                <AccordionTrigger>
                  {({ isExpanded }) => (
                    <>
                      <AccordionTitleText>{item}</AccordionTitleText>
                      {isExpanded ? (
                        <AccordionIcon as={ChevronUpIcon} className="ml-3" />
                      ) : (
                        <AccordionIcon as={ChevronDownIcon} className="ml-3" />
                      )}
                    </>
                  )}
                </AccordionTrigger>
              </AccordionHeader>
              <AccordionContent>
                <AccordionContentText>{content[index]}</AccordionContentText>
              </AccordionContent>
            </AccordionItem>
            {index < title.length - 1 && <Divider />}
          </div>
        ))}
      </Accordion>
    );
  }
  