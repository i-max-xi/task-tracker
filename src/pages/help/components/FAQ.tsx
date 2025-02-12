import CustomFAQs from "@/components/shared/custom-faq";
import { Icon } from "@iconify/react/dist/iconify.js";
import { useState } from "react";

export const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(
    "Frequently Asked Questions"
  );

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? "" : category);
  };

  return (
    <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center">
      {/* Sidebar - Categories */}
      <div className="w-full lg:w-1/4 p-4">
        <h3 className="text-lg font-bold mb-4">Category</h3>
        <ul className="md:space-y-2 text-sm ">
          {category.map((cat) => (
            <li key={cat.name} className="cursor-pointer">
              <div
                onClick={() => toggleCategory(cat.name)}
                className={`flex justify-between items-center py-2 rounded-lg ${
                  activeCategory === cat.name
                    ? "text-[#FBB603] font-medium"
                    : "text-black"
                }`}
              >
                {cat.name}
                {cat.subcategories.length > 0 && (
                  <Icon
                    icon={
                      activeCategory === cat.name
                        ? "mdi:chevron-down"
                        : "mdi:chevron-right"
                    }
                    fontSize={18}
                  />
                )}
              </div>
              {activeCategory === cat.name && cat.subcategories.length > 0 && (
                <ul className="ml-4 space-y-1 text-gray-600">
                  {cat.subcategories.map((sub) => (
                    <li key={sub} className="py-1 px-2">
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* FAQ Content */}
      <div className="flex flex-col w-full mt-5 md:mt-10 md:mb-32 mb-20 gap-5 md:gap-10">
        <h2 className="text-black font-bold text-2xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <CustomFAQs options={faqQuestion} />
      </div>
    </div>
  );
};

const category = [
  {
    name: "Frequently Asked Questions",
    subcategories: [],
  },
  {
    name: "General",
    subcategories: [],
  },
  {
    name: "Security",
    subcategories: [],
  },
  {
    name: "Payment & Transfer",
    subcategories: [],
  },
  {
    name: "Promotions",
    subcategories: [],
  },
  {
    name: "Unity Savings Account",
    subcategories: [],
  },
  {
    name: "Unity Business Account",
    subcategories: [],
  },
];

const faqQuestion = [
  {
    header: "How can I open a Unity Savings Account?",
    desc: [
      <>
        You can open a Unity Savings Account online through our website or by
        visiting any of our branches. Simply provide a valid ID, proof of
        address, and complete the application form. Once approved, you can start
        enjoying the benefits immediately.
      </>,
    ],
  },
  {
    header: "Who can apply for a Unity Savings Account?",
    desc: [
      <>
        The Unity Savings Account is available to individuals who are at least
        18 years old. Minors can also apply with a parent or guardian as a joint
        account holder. Both residents and non-residents are eligible, subject
        to verification requirements.
      </>,
    ],
  },
  {
    header: "How can I open a Unity Business Account?",
    desc: [
      <>
        To open a Unity Business Account, visit our website or any of our
        branches. You’ll need to provide your business registration documents, a
        valid ID for all signatories, and proof of address. Our team will guide
        you through the application process to ensure a smooth setup.
      </>,
    ],
  },
  {
    header: "How can I apply for a Unity Business Loan (Credit Line)?",
    desc: [
      <>
        You can apply for a Unity Business Loan by submitting an application
        online or visiting a branch. Required documents typically include your
        business registration, financial statements, and proof of income. Our
        credit team will review your application and provide tailored financing
        solutions to suit your business needs.
      </>,
    ],
  },
  {
    header: "How do I contact UnitBank's Customer Service?",
    desc: [
      <>
        You can contact our Customer Service team via phone, email, or live chat
        on our website. Our support team is available 24/7 to assist with any
        inquiries regarding your account, transactions, or general banking
        services.
      </>,
    ],
  },
];
