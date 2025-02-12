import CustomFAQs from "@/components/shared/custom-faq";
import { motion } from "framer-motion";

export const FAQ = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col mt-5 md:mt-10 md:mb-32 mb-20 gap-10 md:gap-20"
    >
      <h2 className="text-center text-black font-bold text-2xl md:text-4xl">
        Frequently Asked Questions
      </h2>
      <CustomFAQs options={faqQuestion} />
    </motion.section>
  );
};

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
