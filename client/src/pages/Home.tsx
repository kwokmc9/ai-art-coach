/* Studio Field Notes: editorial asymmetry, cream paper, ink green, clay orange, tactile studio cues. */
import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  CircleDot,
  Clock3,
  Hammer,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Palette,
  PenTool,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe0NEVKpL8CF9sayROozVH7mvE3laXc2FEN3WHOTSym7EZf1g/viewform?usp=publish-editor";

const processSteps = [
  {
    number: "01",
    title: "Tell us your practice",
    body: "Share the materials, techniques and stories that sit behind your work.",
    icon: PenTool,
  },
  {
    number: "02",
    title: "We read for the right fit",
    body: "We look at experience, teaching style, formats and where you can host.",
    icon: BookOpen,
  },
  {
    number: "03",
    title: "Make room for a new learner",
    body: "If a relevant enquiry comes in, we reach out with context—not a cold lead.",
    icon: Sparkles,
  },
];

const craftAreas = [
  { label: "Ceramics", detail: "Clay · glaze · handbuilding", icon: CircleDot },
  { label: "Wood & carving", detail: "Joinery · relief · tools", icon: Hammer },
  { label: "Jewellery", detail: "Metal · wax · adornment", icon: Sparkles },
  { label: "Textile & fibre", detail: "Thread · stitch · surface", icon: Palette },
];

const navItems = [
  { label: "The idea", href: "#idea" },
  { label: "How it works", href: "#process" },
  { label: "Apply", href: "#apply" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const items = document.querySelectorAll<HTMLElement>(".reveal");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <div className="top-note">
        <span>Studio Field Notes / Open call</span>
        <span>For independent makers & patient teachers</span>
      </div>

      <header className="masthead">
        <a className="brand" href="#top" aria-label="Studio Field Notes home">
          <img className="brand-mark-image" src="/manus-storage/studio-field-notes-mark_e6cf1659.png" alt="" aria-hidden="true" />
          <span className="brand-lockup">
            <strong>Studio</strong>
            <em>Field Notes</em>
          </span>
        </a>

        <nav className={`desktop-nav ${menuOpen ? "mobile-open" : ""}`} aria-label="Primary navigation">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="nav-cta" href="#apply" onClick={closeMenu}>
            Join the desk <ArrowUpRight size={15} strokeWidth={1.8} />
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> Studio note / 01</div>
            <h1>The right creative guide makes room for <i>your</i> way of seeing.</h1>
            <p className="hero-lede">
              A considered starting point for people looking to learn a craft—and for makers ready to share how they work.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#apply">
                Apply as a coach <ArrowRight size={17} />
              </a>
              <a className="text-link" href="#process">
                Read the short version <ArrowDownRight size={16} />
              </a>
            </div>
            <div className="hero-footnote">
              <ShieldCheck size={15} /> No placement promises. Just a clearer way to begin.
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-1">
            <div className="image-frame hero-frame">
              <img
                src="/manus-storage/studio-field-notes-hero_b83cdf06.jpg"
                alt="A sunlit craft table with ceramics, linen and a sketchbook"
              />
              <div className="image-caption">
                <span>Field image / 001</span>
                <span>Make time visible</span>
              </div>
            </div>
            <div className="side-note side-note-top">A place for the<br /><strong>slow & specific</strong></div>
            <div className="side-note side-note-bottom"><span>HK / 2026</span><span>Open to craft</span></div>
          </div>
        </section>

        <section className="manifesto section-pad" id="idea">
          <div className="manifesto-index reveal">02<br /><span>Why this exists</span></div>
          <div className="manifesto-main reveal reveal-delay-1">
            <p className="eyebrow">The idea, in plain language</p>
            <h2>Good teaching is not a performance. It is an invitation to look closer.</h2>
            <div className="manifesto-grid">
              <p>
                We are building a small, thoughtful network of art and craft coaches for adult learners. Not a noisy directory. Not a race to the bottom. A desk where the details of a good fit matter.
              </p>
              <p>
                Your practice might live in a shared studio, at a kitchen table, or in the way you patiently explain a first failed attempt. That is the part we want to understand.
              </p>
            </div>
          </div>
          <div className="stamp reveal reveal-delay-2">
            <span>LOOK</span><span>CLOSER</span><span>MAKE</span>
          </div>
        </section>

        <section className="process section-pad" id="process">
          <div className="section-heading reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> The process / 03</div>
            <h2>Clear steps. A human read.</h2>
            <p>One form, a careful review, and a conversation when the context is right.</p>
          </div>
          <div className="process-list">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <article className={`process-item reveal reveal-delay-${index + 1}`} key={step.number}>
                  <div className="process-number">{step.number}</div>
                  <div className="process-icon"><Icon size={20} strokeWidth={1.5} /></div>
                  <div className="process-copy">
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                  <ArrowUpRight className="process-arrow" size={20} strokeWidth={1.4} />
                </article>
              );
            })}
          </div>
        </section>

        <section className="craft-section section-pad">
          <div className="craft-image reveal">
            <img src="https://images.unsplash.com/photo-1578749556568-bc2c40e68b61?auto=format&fit=crop&w=1200&q=85" alt="Hands shaping a small ceramic vessel" />
            <div className="image-caption light-caption"><span>Hands at work</span><span>Nothing too polished</span></div>
          </div>
          <div className="craft-copy reveal reveal-delay-1">
            <div className="eyebrow">What can be shared / 04</div>
            <h2>Bring the material you know best.</h2>
            <p>We welcome specialists, generous beginners, and makers whose best lessons start with “let’s try it another way.”</p>
            <div className="craft-list">
              {craftAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div className="craft-row" key={area.label}>
                    <Icon size={17} strokeWidth={1.5} />
                    <span><strong>{area.label}</strong><small>{area.detail}</small></span>
                    <ArrowRight size={15} />
                  </div>
                );
              })}
            </div>
            <a className="text-link text-link-dark" href="#apply">See the full application <ArrowRight size={16} /></a>
          </div>
        </section>

        <section className="quote-section section-pad">
          <div className="quote-mark">“</div>
          <blockquote className="reveal">
            The best kind of guidance leaves you with more questions—in the very best way.
          </blockquote>
          <div className="quote-meta reveal reveal-delay-1"><span /> A note from the desk / not a promise</div>
        </section>

        <section className="apply-section section-pad" id="apply">
          <div className="apply-intro reveal">
            <div className="eyebrow"><span className="eyebrow-line" /> Application desk / 05</div>
            <h2>Tell us what you love making.</h2>
            <p>We will read the details, keep your information private, and reach out if a thoughtful next step appears.</p>
            <div className="apply-meta">
              <span><Clock3 size={15} /> 6–8 min</span>
              <span><MapPin size={15} /> Hong Kong & online</span>
            </div>
          </div>
          <div className="form-card reveal reveal-delay-1">
            <div className="form-card-top"><span>Studio Field Notes</span><span>Form / 01</span></div>
            <div className="form-icon"><PenTool size={22} strokeWidth={1.4} /></div>
            <h3>Adult craft coach application</h3>
            <p>Tell us about your practice, the techniques you can teach, and the kind of learner you would like to meet.</p>
            <div className="form-checks">
              <span><Check size={14} /> Your own words</span>
              <span><Check size={14} /> No fixed commitment</span>
              <span><Check size={14} /> Reviewed by a person</span>
            </div>
            <a className="button button-orange" href={GOOGLE_FORM_URL} target="_blank" rel="noreferrer">
              Open the application <ArrowUpRight size={17} />
            </a>
            <p className="privacy-note"><ShieldCheck size={14} /> Your submission is used for initial review and relevant introductions only.</p>
          </div>
        </section>
      </main>

      <footer className="footer section-pad">
        <div className="footer-brand"><img className="brand-mark-image" src="/manus-storage/studio-field-notes-mark_e6cf1659.png" alt="" aria-hidden="true" /><span>Studio<br /><i>Field Notes</i></span></div>
        <div className="footer-copy"><p>A small desk for creative practice, patient teaching, and the next good fit.</p><span>© 2026 Studio Field Notes</span></div>
        <div className="footer-links"><a href="mailto:hello@studiofieldnotes.example"><Mail size={15} /> Email</a><a href="#top"><ArrowUpRight size={15} /> Back to top</a><a href="https://instagram.com" target="_blank" rel="noreferrer"><Instagram size={15} /> Instagram</a></div>
      </footer>
    </div>
  );
}
