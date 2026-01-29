import React, { useState } from "react";
import {
  FaGithub,
  FaChevronDown,
  FaChevronUp,
  FaTwitter,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

import docs from "./assets/file-02.svg";

import logo from "./assets/aster.png";

import githublogo from "./assets/github.svg";

import heroimg from "./assets/hero.png";

// --- Types ---
interface FAQItem {
  question: string;
  answer: string;
}

// --- Components ---

const Navbar: React.FC = () => (
  <nav className="flex items-center justify-between px-6 py-6 max-w-[1320px] mx-auto w-full">
    <div className="cursor-pointer">
      <img src={logo} alt="Aster" className="h-8 w-auto" />
    </div>
    <div className="hidden md:flex items-center gap-10">
      <a
        href="#"
        className="flex items-center gap-2 heading-text text-xl navbar-item font-semibold"
      >
        <img src={docs} alt="docs-icon" className="h-4 w-auto" />
        Docs
      </a>
      <a
        href="#"
        className="flex items-center gap-2 heading-text text-xl navbar-item  font-semibold"
      >
        <img src={githublogo} alt="github-icon" className="h-4 w-auto" />
        GitHub repo
      </a>
      <button className="heading-text text-xl navbar-item font-semibold">
        Book a demo
      </button>
    </div>
  </nav>
);

const Hero: React.FC = () => (
  <section className="text-left px-6 pt-20 pb-20 max-w-3xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold heading-text tracking-tighter mb-5">
      Aster is the open source AI on-call engineer
    </h1>
    <p className="text-left body-text text-xl max-3xl mb-10 tracking-tight">
      Automates root cause analysis and incident response to slash MTTR, reduce
      alert fatigue and prevent engineer burnout.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
      <button className="bg-black text-xl  navbar-item text-white px-6 py-3 rounded-full font-semibold  w-full sm:w-auto">
        Book a demo
      </button>
      <button className=" text-xl navbar-item border-black bg-[#FDE272] px-6 py-3 rounded-full font-semibold h w-full sm:w-auto">
        Clone GitHub Repo
      </button>
    </div>
  </section>
);

const Heroimg: React.FC = () => (
  <img src={heroimg} className="w-[1320px] mx-auto" />
);

const HowItWorks: React.FC = () => (
  <section className="px-6 py-20 max-w-[600px] mx-auto">
    <div className="inline-block bg-[#FDE272] px-3 py-1 rounded mb-6 body-text text-xl">
      How it works
    </div>
    <div className="space-y-5">
      <div className="flex gap-2">
        <span className="body-text text-xl">1.</span>
        <div>
          <h3 className="text-xl font-bold heading-text mb-2">
            Acknowledge new alert
          </h3>
          <p className="text-xl body-text tracking-tight">
            Aster receives the alert from PagerDuty, Datadog, or your monitoring
            tool
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="body-text text-xl">2.</span>
        <div>
          <h3 className="text-xl font-bold heading-text mb-2">Begin search</h3>
          <p className="text-xl body-text tracking-tight">
            Starts checking GitHub for recent code changes, queries Grafana
            logs, and searches your knowledge graph
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="body-text text-xl">3.</span>
        <div>
          <h3 className="text-xl font-bold heading-text mb-2">
            Connect the dots
          </h3>
          <p className="text-xl body-text tracking-tight">
            Analyzes all available data and generates a root cause hypothesis
            with evidence
          </p>
        </div>
      </div>
      <div className="flex gap-2">
        <span className="body-text text-xl">4.</span>
        <div>
          <h3 className="text-xl font-bold heading-text mb-2">
            Deliver report
          </h3>
          <p className="text-xl body-text tracking-tight">
            By the time you open Slack, Aster has a complete report and
            suggested fix waiting for you
          </p>
        </div>
      </div>
    </div>
  </section>
);

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "How long does it take to set up Aster?",
      answer:
        "Most teams are up and running in under 5 minutes. Just clone the repo, configure your environment variables, run docker compose up, and connect your tools. Our onboarding flow guides you through each integration step-by-step.",
    },
    {
      question: "What integrations does Aster support?",
      answer:
        "Aster currently integrates with PagerDuty, Jira Service Management, Grafana, Datadog, Sentry, GitHub, Slack, Microsoft Teams, Notion, Confluence, and more. We're constantly adding new integrations based on community feedback.",
    },
    {
      question: "Is Aster really free?",
      answer:
        "Yes! Aster Community Edition is 100% free and open source under AGPL 3.0. You can self-host it on your own infrastructure at no cost. We also offer an Enterprise Edition with additional features for larger organizations.",
    },
    {
      question:
        "What's the difference between Community and Enterprise editions?",
      answer:
        "Community Edition includes all core features: incident investigation, knowledge graph, integrations, and Slack/Teams support. Enterprise Edition adds advanced features like SSO, audit logs, custom retention policies, and dedicated support. Check our pricing page for full details.",
    },
    {
      question: "Does Aster send data to any external services?",
      answer:
        "Aster only connects to the LLM provider you configure (like OpenAI's API) to generate hypotheses and analysis. No data is sent to Aster's creators. You have full control over what data leaves your infrastructure.",
    },
  ];

  return (
    <section className="px-6 py-20 max-w-[600px] mx-auto">
      <div className="inline-block bg-[#FDE272] px-3 py-1 rounded mb-6 body-text text-xl">
        Frequently asked questions
      </div>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#FDE272]">
            <button
              className="w-full text-left py-5 flex items-center justify-between group"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <span className="text-xl font-bold heading-text">
                {faq.question}
              </span>
              {openIndex === index ? (
                <FaChevronUp size={20} className="opacity-60" />
              ) : (
                <FaChevronDown size={20} className="opacity-60" />
              )}
            </button>
            {openIndex === index && (
              <div className="pb-5 body-text text-xl leading-relaxed">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const CTA: React.FC = () => (
  <section className="text-left px-6 pt-20 pb-20 max-w-2xl mx-auto">
    <h1 className="text-4xl md:text-6xl font-bold heading-text tracking-tighter mb-5">
      Ready to try Aster?
    </h1>
    <p className="text-left body-text text-xl max-w-[600px] mb-10 tracking-tight">
      Deploy in minutes and start investigating incidents autonomously.
    </p>
    <div className="flex flex-col sm:flex-row items-center justify-start gap-4">
      <button className="bg-black text-xl  navbar-item text-white px-6 py-3 rounded-full font-semibold  w-full sm:w-auto">
        Book a demo
      </button>
      <button className=" text-xl navbar-item border-black bg-[#FDE272] px-6 py-3 rounded-full font-semibold h w-full sm:w-auto">
        Clone GitHub Repo
      </button>
    </div>
  </section>
);

const Footer: React.FC = () => (
  <footer className="bg-[#0A0A0A] text-white/60 py-16 px-6">
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
        <div className="flex items-center gap-6">
          <FaTwitter
            className="cursor-pointer hover:text-white transition-colors"
            size={20}
          />
          <FaLinkedin
            className="cursor-pointer hover:text-white transition-colors"
            size={20}
          />
          <FaFacebook
            className="cursor-pointer hover:text-white transition-colors"
            size={20}
          />
          <FaGithub
            className="cursor-pointer hover:text-white transition-colors"
            size={20}
          />
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-sm">
          <a href="#" className="hover:text-white">
            Documentation
          </a>
          <a href="#" className="hover:text-white">
            Privacy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
          <a href="#" className="hover:text-white">
            Contact
          </a>
        </div>
      </div>
      <div className="text-center text-xs opacity-50">© Worklife 2026</div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen grid-bg relative overflow-x-hidden">
      <Navbar />
      <Hero />
      <Heroimg />
      <HowItWorks />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}
