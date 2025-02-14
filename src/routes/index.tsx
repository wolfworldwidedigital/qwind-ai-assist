import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import Hero from "~/components/widgets/Hero";
import Features from "~/components/widgets/Features";
import Steps from "~/components/widgets/Steps";
import FAQs from "~/components/widgets/FAQs";
import Stats from "~/components/widgets/Stats";
import CallToAction from "~/components/widgets/CallToAction";

import { qwikSerialized } from "~/utils/qwikSerialized";

const IconBrandTailwind = qwikSerialized(
  () => import("../components/icons/IconBrandTailwind"),
);
const IconApps = qwikSerialized(() => import("../components/icons/IconApps"));
const IconRocket = qwikSerialized(
  () => import("../components/icons/IconRocket"),
);
const IconBrandGoogle = qwikSerialized(
  () => import("../components/icons/IconBrandGoogle"),
);
const IconBulb = qwikSerialized(() => import("../components/icons/IconBulb"));

import { SITE } from "~/config.mjs";

export default component$(() => {
  return (
    <>
      <Hero />
      <Features
        highlight="Features"
        title="What AI0-Assist means to your company"
        subtitle="One of the key advantages of AI-Assist is its lightning-fast response time. Our software guarantees a maximum reply time of 200 seconds to answer any customer question. In comparison, the average human takes approximately 5 minutes to respond to a customer inquiry. With AI-Assist, your customers will experience prompt and efficient support, leading to higher satisfaction rates."
        items={[
          {
            title: "Response Time",
            description:
              "One of the key advantages of AI-Assist is its lightning-fast response time. Our software guarantees a maximum reply time of 200 seconds to answer any customer question. In comparison, the average human takes approximately 5 minutes to respond to a customer inquiry. With AI-Assist, your customers will experience prompt and efficient support, leading to higher satisfaction rates.",
            icon: IconBrandTailwind,
          },
          {
            title: "Affordable Cost",
            description:
              "Investing in an AI customer assistant can significantly reduce costs compared to traditional customer service personnel. Our custom AI agents are priced at only €0.40 - €0.50 per ticket for automated responses. In contrast, hiring customer service personnel can cost you between €0.75 and €1.00 per ticket. By leveraging AI-Assist, you can save on operational expenses while maintaining excellent customer support.",
            icon: IconApps,
          },
          {
            title: "Multilingual Support",
            description:
              "Our AI software understands every language worldwide. It quickly recognizes the language of the question and responds in the same language, all within 200 seconds.",
          },
          {
            title: "Excellent Custom Replies",
            description:
              "With our AI software, language will no longer be a barrier in providing customer service. AI-Assist understands and responds in every language worldwide, recognizing the language of the customer's question and replying in the same language. This level of multilingual support far surpasses the capabilities of an average human, who can typically speak and understand only 2 to 4 different languages. By utilizing AI-Assist, you can seamlessly scale your business across multiple countries.",
            icon: IconRocket,
          },
          {
            title: "Automated Request Analysis",
            description:
              "Our AI software analyzes your customers' questions and scans for key details such as their name, email, phone number, or order number.",
            icon: IconBrandGoogle,
          },
          {
            title: "Integrated Data Crossing",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sagittis, quam nec venenatis lobortis, mi risus tempus nulla.",
            icon: IconBulb,
          },
        ]}
      />
      <Steps />
      <FAQs
        title="Frequently Asked Questions"
        subtitle="Duis turpis dui, fringilla mattis sem nec, fringilla euismod neque. Morbi tincidunt lacus nec tortor scelerisque pulvinar."
        highlight="FAQs"
        items={[
          {
            title: "What do I need to start?",
            description:
              "Space, the final frontier. These are the voyages of the Starship Enterprise. Its five-year mission: to explore strange new worlds. Many say exploration is part of our destiny, but it’s actually our duty to future generations.",
          },
          {
            title: "How to install the Qwik + Tailwind CSS template?",
            description:
              "Well, the way they make shows is, they make one show. That show's called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they're going to make more shows.",
          },
          {
            title: "What's something that you don't understand?",
            description:
              "A flower in my garden, a mystery in my panties. Heart attack never stopped old Big Bear. I didn't even know we were calling him Big Bear.",
          },
          {
            title: "What's an example of when you changed your mind?",
            description:
              "Michael Knight a young loner on a crusade to champion the cause of the innocent. The helpless. The powerless in a world of criminals who operate above the law. Here he comes Here comes Speed Racer. He's a demon on wheels.",
          },
          {
            title: "What is something that you would like to try again?",
            description:
              "A business big enough that it could be listed on the NASDAQ goes belly up. Disappears! It ceases to exist without me. No, you clearly don't know who you're talking to, so let me clue you in.",
          },
          {
            title:
              "If you could only ask one question to each person you meet, what would that question be?",
            description:
              "This is not about revenge. This is about justice. A lot of things can change in twelve years, Admiral. Well, that's certainly good to know. About four years. I got tired of hearing how young I looked.",
          },
        ]}
      />
      <Stats />
      <CallToAction />
    </>
  );
});

export const head: DocumentHead = {
  title: SITE.title,
  meta: [
    {
      name: "description",
      content: SITE.description,
    },
  ],
};
