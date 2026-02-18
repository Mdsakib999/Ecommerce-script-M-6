import { Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Faq() {
  const faqs = [
    {
      question: "What types of products does Notevia Limited sell?",
      answer:
        "We specialize in premium office and school supplies, including writing instruments, notebooks, desk organizers, art supplies, and corporate gifting solutions. All our products are sourced from top-tier brands.",
    },
    {
      question: "Do you offer bulk purchasing for businesses?",
      answer:
        "Yes, we offer special rates and tailored solutions for corporate bulk orders. Please contact our corporate sales team for a custom quote and catalog.",
    },
    {
      question: "What are your shipping options?",
      answer:
        "We offer standard and express shipping nationwide. Standard delivery takes 3-5 business days, while express delivery ensures you get your supplies within 24-48 hours.",
    },
    {
      question: "Can I return items if I'm not satisfied?",
      answer:
        "Yes, we have a hassle-free 7-day return policy. Items must be unused, in their original packaging, and accompanied by the receipt/invoice to be eligible for a return or exchange.",
    },
    {
      question: "Do you provide custom printing services?",
      answer:
        "Absolutely! We offer custom printing on notebooks, pens, and other office essentials for branding purposes. Contact us to discuss your design needs.",
    },
    {
      question: "How can I track my stationary order?",
      answer:
        "Once your order is dispatched, you'll receive a tracking ID via email and SMS. You can use this ID on our 'Track Order' page to get real-time updates.",
    },
    {
      question: "Are your art supplies suitable for professionals?",
      answer:
        "Yes, we stock a range of professional-grade art supplies catering to artists, architects, and designers, alongside student-grade materials.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const contentRefs = useRef([]);

  useEffect(() => {
    setHeights(contentRefs.current.map((ref) => (ref ? ref.scrollHeight : 0)));
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-10 my-16 max-w-7xl mx-auto">
      <h2 className="text-2xl mb-10 md:text-4xl font-semibold">
        Popular Questions...!
      </h2>
      <div className=" w-full gap-10">
        
        {/* Right side FAQ */}
        <div className=" space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg overflow-hidden shadow-sm"
            >
              <button
                className="w-full cursor-pointer flex justify-between items-center px-4 py-3 bg-gray-100 font-semibold focus:outline-none hover:bg-gray-200 transition-colors"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="px-4 overflow-hidden transition-all duration-500 ease-in-out text-gray-700 text-sm"
                style={{
                  maxHeight:
                    openIndex === index ? `${heights[index]}px` : "0px",
                }}
              >
                <div className="py-3">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
