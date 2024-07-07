import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const FaqContent = () => {
  return (
    <>
      <div className="faq-area ptb-100">
        <div className="container">
          <h2>FAQs</h2>
          <div className="faq-accordion">
            <Accordion>
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What are Sub-Brokers?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    A sub-broker is an agent who works with a main broker to
                    help clients buy and sell stocks and other securities. They
                    assist investors in making informed decisions and facilitate
                    their trading activities.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How do I become a Sub-Broker?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    To become a sub-broker, you need to register with Swastika.
                    We will guide you through the process, including the
                    required documentation and training.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What are the benefits of becoming a Sub-Broker?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    As a sub-broker, you can earn commissions on the trades you
                    help facilitate, gain access to a wide range of financial
                    products, receive training and support from us, and build
                    your own client base.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What are the requirements to become a Sub-Broker?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    You typically need a minimum educational qualification,
                    basic knowledge of the stock market, and a clean financial
                    and criminal record. Specific requirements may vary
                    depending on the regulatory authority and the main broker.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How much can I earn as a Sub-Broker?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Earnings as a sub-broker depend on the volume of trades you
                    facilitate and the commission structure. Higher trading
                    volumes usually result in higher earnings.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    What kind of support will I get from Safal?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    Safal provides training, marketing materials, trading
                    platforms, and customer support to help you succeed as a
                    sub-broker. They may also offer tools and resources to help
                    you grow your client base.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>

              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    How do I attract clients as a Sub-Broker?
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p>
                    To attract clients, you can network within your community,
                    offer educational seminars, use social media, and provide
                    excellent customer service. Building trust and maintaining
                    good relationships are key to gaining and retaining clients.
                  </p>
                </AccordionItemPanel>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqContent;
