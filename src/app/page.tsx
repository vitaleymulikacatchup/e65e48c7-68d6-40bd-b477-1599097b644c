"use client"

import { Bell, ChefHat, Crown, Handshake, MessageSquare, Sparkles, Star } from "lucide-react";
import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="pill"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Grandeur Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Experience Luxury Redefined"
          description="Indulge in unparalleled elegance and comfort at our premier hotel destination, where every moment becomes an unforgettable memory."
          tag="5-Star Excellence"
          tagIcon={Star}
          buttons={[
            {
              text: "Reserve Your Stay",
              href: "https://booking.example.com"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Elegant lobby with comfortable sofas, large windows, and natural light enhancing the indoor ambiance."
        />
      </div>

      <div id="about" data-section="about">
        <TextSplitAbout
          title="Our Heritage"
          description={[
            "For over three decades, Grandeur Hotel has been the epitome of sophisticated hospitality, blending timeless elegance with modern luxury.",
            "Our commitment to exceptional service and attention to detail has made us the preferred choice for discerning travelers seeking an extraordinary experience."
          ]}
          buttons={[
            {
              text: "Learn More",
              href: "about"
            }
          ]}
          showBorder={true}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Premium Services"
          description="Discover our world-class amenities and services designed to exceed your expectations"
          tag="Luxury Amenities"
          tagIcon={Crown}
          features={[
            {
              title: "24/7 Concierge Service",
              description: "Our dedicated concierge team is available around the clock to assist with reservations, recommendations, and special requests",
              icon: Bell
            },
            {
              title: "Spa & Wellness Center",
              description: "Rejuvenate your mind and body in our award-winning spa featuring premium treatments and state-of-the-art facilities",
              icon: Sparkles
            },
            {
              title: "Fine Dining Experience",
              description: "Savor exquisite cuisine crafted by our renowned chefs using the finest local and international ingredients",
              icon: ChefHat
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardOne
          title="Guest Experiences"
          description="Hear what our valued guests have to say about their stay with us"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Mitchell",
              role: "CEO, TechCorp",
              company: "Global Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Sarah Mitchell"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Investment Director",
              company: "Capital Partners",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/12885861/pexels-photo-12885861.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Michael Chen"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "Marketing Director",
              company: "Brand Solutions",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8425032/pexels-photo-8425032.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of Emily Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Business Owner",
              company: "Kim Enterprises",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/8555264/pexels-photo-8555264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Portrait of David Kim"
            }
          ]}
        />
      </div>

      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          title="Trusted Hospitality Network"
          description="Proudly part of the world's leading hospitality brands and partnerships"
          tag="Partners"
          tagIcon={Handshake}
          logos={[
            "https://images.pexels.com/photos/1008208/pexels-photo-1008208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/1112680/pexels-photo-1112680.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/16640208/pexels-photo-16640208.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/12720659/pexels-photo-12720659.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reservations"
          title="Ready for Your Perfect Stay?"
          description="Join our exclusive guest list to receive special offers, room upgrades, and insider access to our luxury amenities."
          inputPlaceholder="Enter your email address"
          buttonText="Reserve Now"
          termsText="By signing up, you agree to receive exclusive offers and updates. Unsubscribe anytime."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Grandeur Hotel"
          columns={[
            {
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Dining", href: "dining" },
                { label: "Spa & Wellness", href: "spa" },
                { label: "Events", href: "events" }
              ]
            },
            {
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "careers" },
                { label: "Press", href: "press" },
                { label: "Awards", href: "awards" }
              ]
            },
            {
              items: [
                { label: "Contact", href: "contact" },
                { label: "Reservations", href: "https://booking.example.com" },
                { label: "Concierge", href: "concierge" },
                { label: "Guest Services", href: "services" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}