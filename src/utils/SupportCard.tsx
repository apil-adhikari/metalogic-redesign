import { type ReactNode, useEffect, useState } from "react";
import { motion } from "framer-motion";

export const SupportCard = () => {
  return (
    <div className="flex items-center justify-center bg-neutral-100 px-8 py-24 text-neutral-800">
      <BlockInTextCard
        tag="/ Support"
        text={
          <>
            <strong>Have questions?</strong> We'd love to help! Contact support
            for any issue you may face.
          </>
        }
        examples={[
          "How can Metalogic's custom software development benefit my business?",
          "What industries does Metalogic specialize in?",
          "Does Metalogic offer UI/UX design services?",
          "Can Metalogic assist with mobile app development?",
          "What is Metalogic's approach to web development projects?",
          "Does Metalogic provide training or internship programs?",
          "How does Metalogic ensure quality assurance and testing?",
          "What technologies does Metalogic use for cloud computing services?",
          "Can Metalogic help with blockchain solutions?",
          "What is the process to get a quote from Metalogic?",
        ]}
      />
    </div>
  );
};

const BlockInTextCard = ({
  tag,
  text,
  examples,
}: {
  tag: string;
  text: ReactNode;
  examples: string[];
}) => {
  return (
    <div className="w-full max-w-xl space-y-6">
      <div>
        <p className="mb-1.5 text-sm font-light uppercase">{tag}</p>
        <hr className="border-neutral-700" />
      </div>
      <p className="max-w-lg text-xl leading-relaxed">{text}</p>
      <div>
        <Typewrite examples={examples} />
        <hr className="border-neutral-300" />
      </div>
      <a href="mailto:support@metalogic.com.np">
        <button className="w-full rounded-full border border-neutral-950 py-2 text-sm font-medium transition-colors hover:bg-neutral-950 hover:text-neutral-100 cursor-pointer">
          Contact Support
        </button>
      </a>
    </div>
  );
};

const LETTER_DELAY = 0.025;
const BOX_FADE_DURATION = 0.125;

const FADE_DELAY = 5;
const MAIN_FADE_DURATION = 0.25;

const SWAP_DELAY_IN_MS = 5500;

const Typewrite = ({ examples }: { examples: string[] }) => {
  const [exampleIndex, setExampleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setExampleIndex((pv) => (pv + 1) % examples.length);
    }, SWAP_DELAY_IN_MS);

    return () => clearInterval(intervalId);
  });

  return (
    <p className="mb-2.5 text-sm font-light uppercase">
      <span className="inline-block size-2 bg-neutral-950" />
      <span className="ml-3">
        EXAMPLE:{" "}
        {examples[exampleIndex].split("").map((l, i) => (
          <motion.span
            initial={{
              opacity: 1,
            }}
            animate={{
              opacity: 0,
            }}
            transition={{
              delay: FADE_DELAY,
              duration: MAIN_FADE_DURATION,
              ease: "easeInOut",
            }}
            key={`${exampleIndex}-${i}`}
            className="relative"
          >
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: i * LETTER_DELAY,
                duration: 0,
              }}
            >
              {l}
            </motion.span>
            <motion.span
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: [0, 1, 0],
              }}
              transition={{
                delay: i * LETTER_DELAY,
                times: [0, 0.1, 1],
                duration: BOX_FADE_DURATION,
                ease: "easeInOut",
              }}
              className="absolute bottom-[3px] left-[1px] right-0 top-[3px] bg-neutral-950"
            />
          </motion.span>
        ))}
      </span>
    </p>
  );
};
