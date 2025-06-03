import dynamic from "next/dynamic";
import { Suspense, useEffect } from "react";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import UseCases from "./components/UseCases";
import WhyHONEYPOTGUARD from "./components/WhyHONEYPOTGUARD";
import Footer from "./components/Footer";

const Hero = dynamic(() => import("./components/Hero"), {
  loading: () => <div className="text-center py-10 text-gray-400">Loading Hero...</div>,
  ssr: false,
});
const DynamicLiveDashboard = dynamic(() => import("./components/LiveDashboard"), {
  loading: () => <p className="text-center text-gray-400">HONEYPOT GUARD is preparing your live insights...</p>,
  ssr: false,
});
const DynamicJoinRevolution = dynamic(() => import("./components/JoinRevolution"), {
  loading: () => <p className="text-center text-gray-400">HONEYPOT GUARD is powering up engagement tools...</p>,
  ssr: false,
});
     
import Head from "next/head";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);   

  return (
    <main className="bg-gray-900 text-white overflow-x-hidden relative" aria-label="HONEYPOT GUARD Main Content">
      <Head>
        <title>HONEYPOT GUARD — AI-Powered Solana Yield Insights</title>
        <meta name="description" content="HONEYPOT GUARD helps you unlock data-driven DeFi insights on Solana with real-time dashboards and predictive tools." />
      </Head>
      <div className="absolute inset-0 z-0 opacity-10 animate-pulse bg-gradient-to-br from-fuchsia-500 via-indigo-600 to-blue-500 blur-3xl" />
      <div className="relative z-10">
        <Suspense fallback={<div className="text-center py-10 text-gray-400">Loading Hero...</div>}>
          <Hero />
        </Suspense>
        <div className="border-t border-gray-800" />
        <section id="how-it-works" aria-label="How HONEYPOT GUARD Works" className="scroll-smooth">
          <HowItWorks />
        </section>
        <div className="border-t border-gray-800" />
        <section id="features" aria-label="HONEYPOT GUARD Features" className="scroll-smooth">
          <Features />
        </section>
        <div className="border-t border-gray-800" />
        <section id="use-cases" aria-label="HONEYPOT GUARD Use Cases" className="scroll-smooth">
          <UseCases />
        </section>
        <div className="border-t border-gray-800" />
        <section id="why-HONEYPOT GUARD" aria-label="Why Choose HONEYPOT GUARD" className="scroll-smooth">
          <WhyHONEYPOTGUARD />
        </section>
        <div className="border-t border-gray-800" />
        <Suspense fallback={<p className="text-center text-gray-400">HONEYPOT GUARD is preparing your live insights...</p>}>
          <section id="live-dashboard" aria-label="Live Analytics Dashboard" className="scroll-smooth">
            <DynamicLiveDashboard />
          </section>
        </Suspense>
        <div className="border-t border-gray-800" />
        <Suspense fallback={<p className="text-center text-gray-400">HONEYPOT GUARD is powering up engagement tools...</p>}>
          <section id="join" aria-label="Join the HONEYPOT GUARD Movement" className="scroll-smooth">
            <DynamicJoinRevolution />
          </section>
        </Suspense>
        <Footer />
      </div>
    </main>
  );
}
  