"use client";

import React, { useRef } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import { sendEmail } from "../api/send/route";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";

export default function Contact() {
  //const { ref } = useSectionInView("Contact");
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <motion.section
      id="contact"
      //ref={ref}
      className="mb-20 mt-10 sm:mb-28 w-[min(100%,38rem)] text-center mx-auto "
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact us</SectionHeading>

      <p className="text-gray-700 -mt-6 ">
        Please contact us directly at{" "}
        <a className="underline" href="mailto:info@jvrtours.co.ke">
          info@jvrtours.co.ke
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        ref={formRef}
        action={async (formData) => {
          const { data, error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
          formRef.current?.reset();
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
          aria-label="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          aria-label="Your message"
          maxLength={5000}
        />
        <SubmitBtn />
      </form>
    </motion.section>
  );
}
