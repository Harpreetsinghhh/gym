import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";
import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="bg-[#050505] border-t border-border pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="font-display text-4xl text-foreground leading-none">
                THE MUSCLE NATION
              </span>
              <span className="font-condensed text-primary text-sm tracking-[0.3em] uppercase">
                Gym
              </span>
            </div>
            <p className="text-muted-foreground font-sans text-sm leading-relaxed max-w-sm">
              Jalandhar's premier fitness center for serious athletes and everyday warriors. Raw, unapologetic, and relentless.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-4">
              {['About Us', 'Programs', 'Membership Plans', 'Our Trainers', 'Class Schedule'].map((item) => (
                <li key={item}>
                  <a href={`#${item.split(' ')[0].toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors font-condensed tracking-wider uppercase text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-6 text-foreground">Contact Us</h4>
            <ul className="space-y-4 text-sm text-muted-foreground font-sans">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span>2nd Floor, Silver Plaza, SCO-204, Sodal Rd, Opposite To Sunjog Palace, Industrial Area, Jalandhar, Punjab 144008</span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-primary shrink-0" size={18} />
                <span>09781462999</span>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-primary shrink-0" size={18} />
                <span>info@themusclenation.in</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-2xl mb-6 text-foreground">Hours</h4>
            <ul className="space-y-3 text-sm text-muted-foreground font-sans border-l-2 border-primary/30 pl-4">
              <li className="flex justify-between">
                <span>Monday - Saturday</span>
                <span className="text-foreground">6:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between text-primary font-medium">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs font-sans text-center md:text-left">
            &copy; {new Date().getFullYear()} The Muscle Nation Gym. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-muted-foreground font-sans">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}