'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@trylinky/ui';

const landingPageQuestions = [
  {
    question: 'What is Thynk Tech?',
    answer:
      "Thynktech is a self-service IT platform where businesses can quickly access and manage websites, webshops, hosting, databases, apps, and AI solutions all in one place.",
  },
  {
    question: 'What does off-the-shelf service mean?',
    answer:
      "Off-the-shelf services are ready-made IT solutions that businesses can purchase and use immediately without custom development, such as pre-built websites, apps, templates, hosting packages, or AI tools. They save time and cost by providing standard solutions that work out of the box.",
  },
  {
    question: 'Why do I need Thynk Tech?',
    answer:
      'You need Thynk Tech to get a complete, self-service IT solution for your business whether it’s websites, webshops, hosting, databases, or AI tools allowing you to launch and manage digital services quickly, efficiently, and without the need for an IT team.',
  },
  {
    question: 'Is it free?',
    answer:
      'Thynk Tech is not completely free. The Starter Plan gives small businesses access to basic services like a simple website, limited hosting, and AI tools at an affordable price, while Enterprise features like custom AI models, unlimited products, dedicated hosting, and advanced automation require a paid subscription.',
  },
  {
    question: 'Can I use my own domain?',
    answer:
      "Yes, with Thynk Tech you can use your own custom domain. The Starter Plan allows you to connect a personal domain or use a free subdomain, while Enterprise clients can link multiple domains for full branding and professional online presence.",
  },
];

const pricingQuestions = [
 {
    question: 'What is Thynk Tech?',
    answer:
      "Thynktech is a self-service IT platform where businesses can quickly access and manage websites, webshops, hosting, databases, apps, and AI solutions all in one place.",
  },
  {
    question: 'What does off-the-shelf service mean?',
    answer:
      "Off-the-shelf services are ready-made IT solutions that businesses can purchase and use immediately without custom development, such as pre-built websites, apps, templates, hosting packages, or AI tools. They save time and cost by providing standard solutions that work out of the box.",
  },
  {
    question: 'Why do I need Thynk Tech?',
    answer:
      'You need Thynk Tech to get a complete, self-service IT solution for your business whether it’s websites, webshops, hosting, databases, or AI tools allowing you to launch and manage digital services quickly, efficiently, and without the need for an IT team.',
  },
  {
    question: 'Is it free?',
    answer:
      'Thynk Tech is not completely free. The Starter Plan gives small businesses access to basic services like a simple website, limited hosting, and AI tools at an affordable price, while Enterprise features like custom AI models, unlimited products, dedicated hosting, and advanced automation require a paid subscription.',
  },
  {
    question: 'Can I use my own domain?',
    answer:
      "Yes, with Thynk Tech you can use your own custom domain. The Starter Plan allows you to connect a personal domain or use a free subdomain, while Enterprise clients can link multiple domains for full branding and professional online presence.",
  },
];

const generateFaqJsonLd = (
  faqs: {
    question: string;
    answer: string;
  }[]
) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq, index) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
};

const questionSets: Record<string, typeof landingPageQuestions> = {
  'landing-page': landingPageQuestions,
  pricing: pricingQuestions,
};

export function FrequentlyAskedQuestions({
  questionSet,
}: {
  questionSet: 'landing-page' | 'pricing';
}) {
  const questions = questionSets[questionSet];
  const faqJsonLd = generateFaqJsonLd(questions);

  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        {questions.map((question) => {
          return (
            <AccordionItem key={question.question} value={question.question}>
              <AccordionTrigger className="text-lg font-medium">
                {question.question}
              </AccordionTrigger>
              <AccordionContent className="text-lg text-black/60">
                {question.answer}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
    </>
  );
}
