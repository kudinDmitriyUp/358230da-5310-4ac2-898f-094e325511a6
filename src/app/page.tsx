"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroShowcaseSplitOverlay from '@/components/sections/hero/HeroShowcaseSplitOverlay';
import FeatureCardThirteen from '@/components/sections/feature/FeatureCardThirteen';
import AboutMetric from '@/components/sections/about/AboutMetric';
import TeamCardSeven from '@/components/sections/team/TeamCardSeven';
import TestimonialCardThirteen from '@/components/sections/testimonial/TestimonialCardThirteen';
import FaqBase from '@/components/sections/faq/FaqBase';
import ContactText from '@/components/sections/contact/ContactText';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { Shield, Lock, Eye, Zap } from 'lucide-react';

export default function SecureGuardPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="text-stagger"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="medium"
      sizing="medium"
      background="grid"
      cardStyle="neon-glow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="normal"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Home", id: "home" },
            { name: "Features", id: "features" },
            { name: "Team", id: "team" },
            { name: "Resources", id: "resources" },
            { name: "Contact", id: "contact" }
          ]}
          button={{ text: "Get Started", href: "contact" }}
          brandName="SecureGuard"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroShowcaseSplitOverlay
          title="Enterprise-Grade Cybersecurity Protection"
          description="Comprehensive threat detection and prevention with AI-powered monitoring, 24/7 incident response, and military-grade encryption to protect your organization from evolving threats."
          tags={["Real-Time Detection", "AI-Powered", "24/7 Monitoring", "Enterprise Security"]}
          buttons={[
            { text: "Start Free Trial", href: "contact" },
            { text: "Schedule Demo", href: "contact" }
          ]}
          showcaseImageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972345052-4lw07q0r.jpg"
          showcaseImageAlt="Threat Detection Interface"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972346562-0ahwqodm.jpg"
          imageAlt="Cybersecurity background"
          showDimOverlay={true}
          ariaLabel="Cybersecurity hero section with protection imagery"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardThirteen
          title="Our Security Features"
          description="Comprehensive threat detection and prevention tailored for enterprise environments"
          tag="Protection Stack"
          features={[
            { id: "01", title: "Real-Time Threat Detection", description: "Advanced AI-powered monitoring that identifies and neutralizes threats instantly across your entire network infrastructure." },
            { id: "02", title: "Endpoint Protection", description: "Comprehensive endpoint security with behavioral analysis and zero-trust architecture to prevent unauthorized access." },
            { id: "03", title: "Data Encryption", description: "Military-grade encryption for data at rest and in transit, ensuring compliance with industry standards and regulations." },
            { id: "04", title: "Incident Response", description: "24/7 security operations center with rapid response teams to contain and remediate security incidents." }
          ]}
          gridVariant="uniform-all-items-equal"
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          ariaLabel="Cybersecurity features section"
        />
      </div>

      <div id="metrics" data-section="metrics">
        <AboutMetric
          title="Trusted by enterprise organizations to protect what matters most"
          metrics={[
            { icon: Shield, label: "Threats Blocked Daily", value: "50M+" },
            { icon: Lock, label: "Protected Organizations", value: "5,000+" },
            { icon: Eye, label: "Security Incidents Resolved", value: "99.98%" },
            { icon: Zap, label: "Average Detection Time", value: "<2 seconds" }
          ]}
          useInvertedBackground="noInvert"
          ariaLabel="Security metrics and achievements"
        />
      </div>

      <div id="team" data-section="team">
        <TeamCardSeven
          team={[
            { id: "1", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972348937-xtobyigu.jpg", imageAlt: "Security Expert" },
            { id: "2", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972349968-dlj2gvl7.jpg", imageAlt: "Cybersecurity Professional" },
            { id: "3", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972350710-hb3n5r7s.jpg", imageAlt: "IT Security Engineer" },
            { id: "4", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972351488-bdz379ji.jpg", imageAlt: "Security Architect" },
            { id: "5", imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972352328-mx3nose2.jpg", imageAlt: "Threat Analyst" }
          ]}
          title="Led by industry-leading security experts"
          useInvertedBackground="noInvert"
          ariaLabel="Security team showcase"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardThirteen
          title="Trusted by Enterprise Leaders"
          description="See how organizations protect their critical assets with SecureGuard"
          tag="Client Success"
          testimonials={[
            { id: "1", name: "Sarah Mitchell", handle: "Chief Security Officer", testimonial: "SecureGuard transformed our security posture. Detection times dropped by 90% and our team finally has peace of mind.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972353084-bvze7nmc.jpg" },
            { id: "2", name: "David Chen", handle: "VP Infrastructure", testimonial: "The ease of deployment and comprehensive protection made SecureGuard our go-to choice. Compliance became seamless.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972353859-ddhhilhj.jpg" },
            { id: "3", name: "Emma Rodriguez", handle: "IT Director", testimonial: "Protecting patient data is critical. SecureGuard's encryption and monitoring give us the confidence we need.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972354812-f197eny1.jpg" },
            { id: "4", name: "Michael Zhang", handle: "Security Manager", testimonial: "Real-time threat detection has saved us from multiple breaches. Best investment in security we've made.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972355372-11o1hxch.jpg" },
            { id: "5", name: "Jennifer Hayes", handle: "CTO", testimonial: "Their 24/7 SOC team is exceptional. Incident response times are unmatched in the industry.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972355934-07lbdatx.jpg" },
            { id: "6", name: "Robert Kim", handle: "Security Lead", testimonial: "Outstanding platform. The ROI is clear and the peace of mind for our stakeholders is invaluable.", rating: 5, imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1765972356643-e2dgtt4n.jpg" }
          ]}
          showRating={true}
          textboxLayout="default"
          animationType="slide-up"
          containerStyle="default"
          useInvertedBackground="noInvert"
          ariaLabel="Client testimonials section"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqBase
          title="Security Questions Answered"
          description="Common questions about our cybersecurity solutions and enterprise protection capabilities"
          tag="Security"
          textboxLayout="default"
          useInvertedBackground="noInvert"
          animationType="smooth"
          showCard={true}
          faqs={[
            { id: "1", title: "What makes SecureGuard different from competitors?", content: "SecureGuard combines AI-powered threat detection, human expertise, and 24/7 monitoring to provide enterprise-grade protection. Our average threat detection time is under 2 seconds, significantly faster than industry average. We also offer seamless integration with existing infrastructure." },
            { id: "2", title: "How is data encrypted and protected?", content: "We use military-grade AES-256 encryption for data at rest and TLS 1.3 for data in transit. All encryption keys are managed using HSM (Hardware Security Module) technology. We maintain strict compliance with HIPAA, PCI-DSS, GDPR, and SOC 2 Type II standards." },
            { id: "3", title: "What is your incident response process?", content: "Upon detection of a security incident, our SOC team initiates immediate response protocols. We contain threats within minutes, preserve evidence for forensics, and provide detailed incident reports. Our average resolution time is under 4 hours for critical incidents." },
            { id: "4", title: "Can SecureGuard integrate with our existing tools?", content: "Yes. SecureGuard supports integration with SIEM platforms, ticketing systems, and cloud providers. We provide APIs and pre-built connectors for popular tools like Splunk, ServiceNow, AWS, and Azure." },
            { id: "5", title: "What kind of support do you provide?", content: "Enterprise clients receive dedicated account management, technical support, and strategic security consultations. We offer multiple support tiers including 24/7 emergency response, quarterly security reviews, and customized training for your teams." },
            { id: "6", title: "How do you stay ahead of emerging threats?", content: "Our threat intelligence team monitors global security trends, participates in industry forums, and maintains partnerships with leading security researchers. We release weekly threat updates and conduct continuous testing against new attack vectors." }
          ]}
          ariaLabel="Security FAQ section"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactText
          text="Ready to transform your security posture? Schedule a personalized demo with our security experts today."
          animationType="entrance-slide"
          buttons={[
            { text: "Schedule Demo", href: "contact" },
            { text: "View Pricing", href: "pricing" }
          ]}
          useInvertedBackground="noInvert"
          ariaLabel="Contact and call-to-action section"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="SecureGuard"
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "#features" },
                { label: "Security", href: "#security" },
                { label: "Pricing", href: "#pricing" },
                { label: "Demo", href: "#contact" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "#about" },
                { label: "Team", href: "#team" },
                { label: "Blog", href: "#blog" },
                { label: "Careers", href: "#careers" }
              ]
            },
            {
              title: "Security",
              items: [
                { label: "Compliance", href: "#compliance" },
                { label: "Privacy Policy", href: "#privacy" },
                { label: "Terms of Service", href: "#terms" },
                { label: "Security Report", href: "#report" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Documentation", href: "#docs" },
                { label: "Help Center", href: "#help" },
                { label: "Contact Support", href: "#support" },
                { label: "Status Page", href: "#status" }
              ]
            }
          ]}
          copyrightText="© 2025 SecureGuard. All rights reserved."
          ariaLabel="Site footer"
        />
      </div>
    </ThemeProvider>
  );
}