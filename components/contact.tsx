"use client";
import React from "react";
import SectionHeader from "./section-header";
import { useSectionInView } from "@/lib/hooks/sectionInView";
import { motion } from "framer-motion";
import SubmitBtn from "./buttons/submit-btn";
import { sendEmail } from "@/actions/sendEmail";
import toast from "react-hot-toast";

function Contact() {
  const { ref } = useSectionInView({ threshold: 0.3, sectionName: "Contact" });

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="scroll-mt-28 mb-20 sm:mb-28 w-[min(100%,38rem)]"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeader>Contact me!</SectionHeader>
      <p className="-mt-5 text-center">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:anasbilal1122786@gmail.com">
          anasbilal1122786@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col"
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          formData.set("senderEmail", "");
          formData.set("message", "");

          if (error) {
            toast.error(error);
            return;
          }
          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all dark:opacity-80 dark:focus:opacity-100 dark:focus:text-gray-950 dark:outline-none dark:placeholder:text-gray-800"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all dark:opacity-80 dark:focus:opacity-100 dark:outline-none dark:focus:text-gray-950 dark:placeholder:text-gray-800"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}

export default Contact;
