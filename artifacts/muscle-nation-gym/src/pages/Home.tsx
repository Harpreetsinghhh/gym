import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Flame, Activity, Users, Clock, ArrowRight, Star, Shield, Zap, MapPin, Phone } from "lucide-react";
import heroBg from "@assets/generated_images/hero-bg.jpg";
import aboutBg from "@assets/generated_images/about-bg.jpg";
import facilitiesBg from "@assets/generated_images/facilities-bg.jpg";
import trainer1 from "@assets/generated_images/trainer-1.jpg";
import trainer2 from "@assets/generated_images/trainer-2.jpg";
import trainer3 from "@assets/generated_images/trainer-3.jpg";
import trainer4 from "@assets/generated_images/trainer-4.jpg";

// Custom hook for scroll animation
const useScrollAnimation = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return { ref, controls };
};

export default function Home() {
  const heroAnim = useScrollAnimation();
  const aboutAnim = useScrollAnimation();
  const programsAnim = useScrollAnimation();
  const statsAnim = useScrollAnimation();
  const plansAnim = useScrollAnimation();
  const trainersAnim = useScrollAnimation();
  const testimonialsAnim = useScrollAnimation();
  const contactAnim = useScrollAnimation();

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-hidden w-full">
      <Navbar />

      {/* HERO SECTION */}
      <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 z-0 scale-105 transform transition-transform duration-[20s] ease-linear hover:scale-110"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-background/80 via-background/60 to-background/95 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-black/40" />

        <div className="container mx-auto relative z-20 px-4 sm:px-6 text-center py-28 md:py-0 md:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-condensed text-primary uppercase tracking-[0.3em] sm:tracking-[0.5em] text-xs sm:text-sm md:text-lg mb-4 font-bold">
              Jalandhar's Premier Fitness Center
            </h2>
            <h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] md:leading-[0.85] mb-6 uppercase break-words">
              Build <span className="text-primary text-glow">Raw</span> <br /> Power
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto font-light px-2">
              Where serious athletes and everyday warriors are forged. Raw, unapologetic, and relentless. Welcome to the industrial training ground.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12" onClick={() => document.getElementById('plans')?.scrollIntoView({ behavior: 'smooth' })}>
                Accept The Challenge
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base md:text-lg px-8 md:px-12 bg-black/40 backdrop-blur-sm" onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                Explore The Forge
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        >
          <span className="font-condensed text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
          <div className="w-[1px] h-10 md:h-12 bg-primary/20 overflow-hidden">
            <motion.div
              animate={{ y: [0, 48, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-full h-1/2 bg-primary"
            />
          </div>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-16 sm:py-24 md:py-32 relative bg-background border-t border-border">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              ref={aboutAnim.ref}
              initial="hidden"
              animate={aboutAnim.controls}
              variants={fadeInUp}
              className="space-y-8 text-center lg:text-left"
            >
              <div>
                <h3 className="font-condensed text-primary uppercase tracking-widest text-lg sm:text-xl mb-2 flex items-center justify-center lg:justify-start gap-3">
                  <Flame className="text-primary" size={24} /> The Forge
                </h3>
                <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-none">
                  Not a retreat.<br />A Battleground.
                </h2>
              </div>
              <div className="space-y-6 font-sans text-muted-foreground text-base sm:text-lg">
                <p>
                  Located in the heart of Jalandhar's industrial district, The Muscle Nation Gym isn't your average polished wellness center. We are a heavy, powerful, and electric environment designed for one thing: results.
                </p>
                <p>
                  Built with dark steel, burning ambition, and relentless energy. When you step through our doors, you leave excuses outside. This is where sweat meets ambition.
                </p>
              </div>
              <ul className="space-y-4 font-condensed uppercase text-base sm:text-lg tracking-wider text-left max-w-md mx-auto lg:mx-0">
                {[
                  "Industrial-grade equipment",
                  "Unapologetic atmosphere",
                  "Elite coaching staff",
                  "Community of warriors"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 border-b border-border pb-4">
                    <span className="text-primary shrink-0"><Check size={20} /></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full max-w-lg mx-auto lg:max-w-none"
            >
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full translate-x-6 translate-y-6 md:translate-x-10 md:translate-y-10" />
              <div className="relative w-full h-full border border-border bg-card overflow-hidden">
                <img
                  src={aboutBg}
                  alt="Heavy dumbbells in gym"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 to-transparent" />

                {/* Overlay stat card */}
                <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 sm:p-6 glass-card border-l-4 border-primary">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-display text-3xl sm:text-4xl text-white">5000+</p>
                      <p className="font-condensed uppercase tracking-widest text-primary text-xs sm:text-sm">Sq Ft of Raw Iron</p>
                    </div>
                    <Flame className="text-primary w-10 h-10 sm:w-12 sm:h-12 opacity-50" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-border bg-[#050505] py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            ref={statsAnim.ref}
            initial="hidden"
            animate={statsAnim.controls}
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:divide-x divide-border"
          >
            {[
              { num: "500+", label: "Active Members" },
              { num: "15+", label: "Expert Trainers" },
              { num: "5+", label: "Years Strong" },
              { num: "24/6", label: "Relentless Grind" }
            ].map((stat, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center px-2 sm:px-4">
                <h3 className="font-display text-3xl sm:text-4xl md:text-6xl text-white mb-2 text-glow">{stat.num}</h3>
                <p className="font-condensed uppercase tracking-widest text-muted-foreground text-xs sm:text-sm md:text-base">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* PROGRAMS SECTION */}
      <section id="programs" className="py-16 sm:py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            ref={programsAnim.ref}
            initial="hidden"
            animate={programsAnim.controls}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
          >
            <h3 className="font-condensed text-primary uppercase tracking-widest text-lg sm:text-xl mb-4">Our Arsenal</h3>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-none">Training Disciplines</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: <Activity size={40} />,
                title: "Strength & Hypertrophy",
                desc: "Heavy iron, progressive overload. Build dense muscle mass and raw physical power using our industrial-grade free weights and plate-loaded machines."
              },
              {
                icon: <Zap size={40} />,
                title: "HIIT & Conditioning",
                desc: "High-octane cardio and metabolic conditioning. Melt fat and build a relentless engine that doesn't quit when it gets hard."
              },
              {
                icon: <Shield size={40} />,
                title: "Functional Combat",
                desc: "Train like a warrior. Agility, mobility, and explosive power movements designed for real-world application and athletic dominance."
              }
            ].map((prog, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
                className="group p-6 sm:p-8 border border-border bg-card/50 hover:bg-card hover:border-primary/50 transition-all duration-300 relative overflow-hidden sm:last:col-span-2 md:last:col-span-1"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/20 transition-colors" />
                <div className="text-primary mb-6">{prog.icon}</div>
                <h4 className="font-display text-2xl sm:text-3xl mb-4 uppercase">{prog.title}</h4>
                <p className="font-sans text-muted-foreground leading-relaxed">
                  {prog.desc}
                </p>
                <div className="mt-8 flex items-center gap-2 text-sm font-condensed uppercase tracking-widest text-primary opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                  Learn More <ArrowRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FACILITIES PARALLAX */}
      <section className="relative min-h-[60vh] py-16 md:py-0 flex items-center overflow-hidden border-y border-border">
        <div
          className="absolute inset-0 bg-fixed md:bg-fixed z-0"
          style={{
            backgroundImage: `url(${facilitiesBg})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
          }}
        />
        <div className="absolute inset-0 z-10 bg-black/70 mix-blend-multiply" />
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />

        <div className="container mx-auto relative z-20 px-4 sm:px-6">
          <div className="max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl mb-6 leading-none">
              Elite Equipment.<br />Zero Compromise.
            </h2>
            <p className="font-sans text-base sm:text-xl text-muted-foreground mb-8">
              Rows of dark steel squat racks. Calibrated plates. Specialty bars for every lift. We source only battle-tested equipment that can withstand serious training.
            </p>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white w-full sm:w-auto">
              View Facility Gallery
            </Button>
          </div>
        </div>
      </section>

      {/* PLANS SECTION */}
      <section id="plans" className="py-16 sm:py-24 md:py-32 relative bg-[#050505]">
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            ref={plansAnim.ref}
            initial="hidden"
            animate={plansAnim.controls}
            variants={fadeInUp}
            className="text-center max-w-3xl mx-auto mb-14 sm:mb-20"
          >
            <h3 className="font-condensed text-primary uppercase tracking-widest text-lg sm:text-xl mb-4">Pay Your Dues</h3>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl leading-none">Membership Plans</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Basic */}
            <Card className="bg-background/50 border-border hover:border-border transition-all flex flex-col">
              <div className="p-6 sm:p-8 pb-0">
                <h4 className="font-condensed uppercase text-xl text-muted-foreground tracking-widest mb-2">Base Camp</h4>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl sm:text-5xl">₹1,499</span>
                  <span className="font-sans text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm font-sans text-muted-foreground mb-8">Essential access for the dedicated lifter.</p>
              </div>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {[
                    "Full gym access during open hours",
                    "Free weight & machine zones",
                    "Locker room access",
                    "1 complimentary assessment"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm">
                      <Check className="text-primary shrink-0 mt-0.5" size={16} />
                      <span className="text-foreground/80">{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 sm:p-8 pt-0 mt-auto">
                <Button className="w-full" variant="outline">Select Plan</Button>
              </div>
            </Card>

            {/* Pro - Highlighted */}
            <Card className="bg-card border-primary relative sm:col-span-2 lg:col-span-1 transform lg:-translate-y-4 shadow-[0_0_30px_rgba(255,69,0,0.15)] flex flex-col z-10 max-w-md mx-auto w-full lg:max-w-none">
              <div className="absolute top-0 inset-x-0 h-1 bg-primary" />
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 uppercase tracking-wider font-condensed">
                Most Popular
              </div>
              <div className="p-6 sm:p-8 pb-0">
                <h4 className="font-condensed uppercase text-xl text-primary tracking-widest mb-2">Warrior</h4>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-5xl sm:text-6xl text-glow">₹2,499</span>
                  <span className="font-sans text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm font-sans text-muted-foreground mb-8">The complete arsenal for serious athletes.</p>
              </div>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {[
                    "Everything in Base Camp",
                    "Access to all group classes",
                    "Advanced metrics tracking app",
                    "Monthly progress consultation",
                    "Guest pass (2x/month)"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm">
                      <Check className="text-primary shrink-0 mt-0.5" size={16} />
                      <span className="text-foreground">{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 sm:p-8 pt-0 mt-auto">
                <Button className="w-full btn-glow text-lg h-14">Join as Warrior</Button>
              </div>
            </Card>

            {/* Elite */}
            <Card className="bg-background/50 border-border hover:border-border transition-all flex flex-col">
              <div className="p-6 sm:p-8 pb-0">
                <h4 className="font-condensed uppercase text-xl text-muted-foreground tracking-widest mb-2">Elite Force</h4>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="font-display text-4xl sm:text-5xl">₹4,999</span>
                  <span className="font-sans text-muted-foreground">/mo</span>
                </div>
                <p className="text-sm font-sans text-muted-foreground mb-8">Maximum coaching and premium recovery.</p>
              </div>
              <CardContent className="flex-grow">
                <ul className="space-y-4">
                  {[
                    "Everything in Warrior",
                    "4x 1-on-1 Personal Training sessions",
                    "Custom nutrition programming",
                    "Unlimited guest passes",
                    "Premium recovery zone access",
                    "Exclusive Muscle Nation gear"
                  ].map((feat, i) => (
                    <li key={i} className="flex items-start gap-3 font-sans text-sm">
                      <Check className="text-primary shrink-0 mt-0.5" size={16} />
                      <span className="text-foreground/80">{feat}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <div className="p-6 sm:p-8 pt-0 mt-auto">
                <Button className="w-full" variant="outline">Select Plan</Button>
              </div>
            </Card>
          </div>

          <p className="text-center text-muted-foreground font-sans text-sm mt-12 max-w-xl mx-auto px-4">
            *All plans require a one-time joining fee of ₹999. Special corporate and student discounts available in-person. Prices inclusive of all taxes.
          </p>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section id="trainers" className="py-16 sm:py-24 md:py-32 relative">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            ref={trainersAnim.ref}
            initial="hidden"
            animate={trainersAnim.controls}
            variants={fadeInUp}
            className="flex flex-col md:flex-row justify-between items-center md:items-end mb-14 sm:mb-16 gap-6 text-center md:text-left"
          >
            <div>
              <h3 className="font-condensed text-primary uppercase tracking-widest text-lg sm:text-xl mb-4">The Commanders</h3>
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-none">Elite Trainers</h2>
            </div>
            <p className="font-sans text-muted-foreground max-w-md">
              They won't coddle you. They will break you down and build you into something stronger. Meet the coaching staff.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {[
              { name: "Vikram Singh", role: "Head Strength Coach", img: trainer1 },
              { name: "Priya Sharma", role: "HIIT & Conditioning", img: trainer2 },
              { name: "Rajiv 'The Tank' Gill", role: "Bodybuilding Specialist", img: trainer3 },
              { name: "Neha Verma", role: "Functional Combat", img: trainer4 }
            ].map((trainer, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden bg-card border border-border"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={trainer.img}
                    alt={trainer.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80" />
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <h4 className="font-display text-base sm:text-2xl uppercase text-white mb-1 leading-tight">{trainer.name}</h4>
                  <p className="font-condensed uppercase tracking-wider text-primary text-xs sm:text-sm">{trainer.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-16 sm:py-24 bg-[#0a0a0a] border-y border-border relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 text-[5rem] sm:text-[8rem] md:text-[14rem] lg:text-[20rem] font-display text-white/5 whitespace-nowrap pointer-events-none select-none">
          NO EXCUSES
        </div>
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: "I've trained in gyms across Punjab. Nothing comes close to the raw energy here. The equipment is flawless and the culture is unmatched. It's a lifter's paradise.",
                name: "Aman D.",
                type: "Powerlifter"
              },
              {
                text: "Six months ago I couldn't do a single pull-up. The trainers here didn't accept 'I can't'. They pushed me past mental barriers I didn't know I had.",
                name: "Kavita R.",
                type: "Warrior Plan"
              },
              {
                text: "It's not a spa. It's loud, it's intense, and it's exactly what you need if you're serious about changing your physique. Best decision I made this year.",
                name: "Gurpreet S.",
                type: "Elite Member"
              }
            ].map((quote, i) => (
              <Card key={i} className="bg-black/50 border-border p-6 sm:p-8 rounded-none md:last:col-span-2 lg:last:col-span-1">
                <div className="flex gap-1 mb-6 text-primary">
                  {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                </div>
                <p className="font-sans text-muted-foreground italic mb-8 leading-relaxed">"{quote.text}"</p>
                <div>
                  <h4 className="font-display text-xl uppercase">{quote.name}</h4>
                  <p className="font-condensed text-primary text-sm uppercase tracking-wider">{quote.type}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT & SCHEDULE */}
      <section id="contact" className="py-0 relative flex flex-col lg:flex-row">
        {/* Left Side: Schedule */}
        <div className="w-full lg:w-1/2 bg-primary text-primary-foreground p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center">
          <h3 className="font-condensed uppercase tracking-widest text-lg sm:text-xl mb-4 text-black/60 font-bold">Hours of Operation</h3>
          <h2 className="font-display text-4xl sm:text-5xl md:text-7xl mb-10 sm:mb-12 text-black leading-none">The Clock<br/>Is Ticking</h2>

          <ul className="space-y-6 font-display text-lg sm:text-2xl md:text-3xl uppercase tracking-wide border-l-4 border-black pl-6 sm:pl-8">
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-black">
              <span>Monday - Saturday</span>
              <span>6:00 AM - 10:00 PM</span>
            </li>
            <li className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-black/50">
              <span>Sunday</span>
              <span>Closed (Recover)</span>
            </li>
          </ul>

          <div className="mt-12 sm:mt-16 flex items-center gap-4 text-black font-condensed text-base sm:text-xl tracking-wider uppercase font-bold">
            <Clock size={28} className="shrink-0" /> No excuses before 6am or after 10pm.
          </div>
        </div>

        {/* Right Side: Map & Info */}
        <div className="w-full lg:w-1/2 bg-card p-8 sm:p-12 md:p-16 lg:p-24 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl mb-10 sm:mb-12 leading-none relative z-10">Find The Forge</h2>

          <div className="space-y-8 relative z-10">
            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-display text-xl sm:text-2xl uppercase mb-2">Location</h4>
                <p className="font-sans text-muted-foreground">
                  2nd Floor, Silver Plaza, SCO-204, Sodal Rd,<br />
                  Opposite To Sunjog Palace, Industrial Area,<br />
                  Jalandhar, Punjab 144008
                </p>
              </div>
            </div>

            <div className="flex gap-4 sm:gap-6">
              <div className="w-12 h-12 bg-secondary flex items-center justify-center text-primary shrink-0">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-display text-xl sm:text-2xl uppercase mb-2">Call Us</h4>
                <p className="font-sans text-muted-foreground text-lg sm:text-xl font-bold text-white">09781462999</p>
              </div>
            </div>
          </div>

          <Button size="lg" className="mt-10 sm:mt-12 w-full sm:w-fit relative z-10 text-base sm:text-lg px-8 py-6 h-auto">
            Get Directions
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}