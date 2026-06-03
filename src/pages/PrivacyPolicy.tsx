import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  {
    title: "Information We Collect",
    content: [
      "Personal identification information (name, email address, phone number, company name) that you voluntarily provide when filling out quote requests, contact forms, or signing up for our services.",
      "Usage data including browser type, device information, IP address, pages visited, and time spent on our website — collected automatically through cookies and analytics tools.",
      "Communications data including emails, messages, and feedback you send to our support and sales teams."
    ]
  },
  {
    title: "How We Use Your Information",
    content: [
      "To respond to your inquiries, provide quotes, and deliver the products and services you request.",
      "To improve our website, products, and customer experience through analytics and feedback analysis.",
      "To send you product updates, promotional materials, and company news — only if you have opted in to receive such communications.",
      "To comply with legal obligations and protect our rights and interests."
    ]
  },
  {
    title: "Data Protection",
    content: [
      "We implement industry-standard security measures including SSL encryption, secure hosting, and access controls to protect your personal data.",
      "Your information is stored securely and is only accessible to authorized personnel who need it to perform their job functions.",
      "We regularly review our security practices and update them to address emerging threats."
    ]
  },
  {
    title: "Sharing Your Information",
    content: [
      "We do not sell, trade, or rent your personal information to third parties for marketing purposes.",
      "We may share data with trusted service providers (shipping, payment processing, analytics) who assist us in operating our business — under strict confidentiality agreements.",
      "We may disclose information when required by law or to protect our legal rights."
    ]
  },
  {
    title: "Cookies & Tracking",
    content: [
      "Our website uses cookies to enhance user experience, analyze site traffic, and understand user behavior.",
      "You can choose to disable cookies through your browser settings, though this may affect certain features of the website.",
      "We use analytics tools like Google Analytics to gather non-personal traffic data."
    ]
  },
  {
    title: "Your Rights",
    content: [
      "You have the right to access, correct, or delete your personal information at any time.",
      "You can opt out of marketing communications by clicking the unsubscribe link in any email or contacting us directly.",
      "You may request a copy of the data we hold about you by emailing info@sonichiveinteractive.com."
    ]
  },
  {
    title: "Data Retention",
    content: [
      "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this policy, or as required by law.",
      "Quote request data is retained for up to 2 years to assist with follow-up and record keeping.",
      "Upon request, we will securely delete your personal data in accordance with applicable regulations."
    ]
  },
  {
    title: "Third-Party Links",
    content: [
      "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites.",
      "We encourage you to review the privacy policies of any third-party sites you visit."
    ]
  },
  {
    title: "Changes to This Policy",
    content: [
      "We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements.",
      "Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically."
    ]
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact us:",
      "Email: info@sonichiveinteractive.com",
      "Phone: +971 52 516 2572 / +971 58 555 0099",
      "Address: Dubai Mall Metro Station Exit 2, Ground Floor, Al Wasl Building - 2, Sheikh Zayed Rd, Dubai"
    ]
  }
];

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16">
        <div className="container mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xs tracking-[0.3em] uppercase text-primary font-mono mb-4"
          >
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl font-display font-bold tracking-tight mb-4"
          >
            Privacy <span className="text-muted-foreground">Policy.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground max-w-2xl leading-relaxed"
          >
            At SonicHive, we respect your privacy and are committed to protecting your personal information.
            This policy explains how we collect, use, and safeguard your data when you interact with our website and services.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xs text-muted-foreground font-mono mt-4"
          >
            Last updated: June 2026
          </motion.p>
        </div>
      </section>

      {/* Content */}
      <section className="pb-32">
        <div className="container mx-auto max-w-3xl">
          <div className="space-y-0">
            {sections.map((section, i) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.05 * i }}
                className="border-t border-border py-10 first:border-t-0"
              >
                <div className="flex items-start gap-6">
                  <span className="text-xs font-mono text-primary/60 shrink-0 mt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-display font-bold mb-4">{section.title}</h2>
                    <ul className="space-y-3">
                      {section.content.map((item, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-3">
                          <span className="w-1 h-1 rounded-full bg-primary/50 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
