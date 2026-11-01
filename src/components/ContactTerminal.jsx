import React, { useState } from 'react';
import { 
  Mail, 
  Linkedin, 
  Github, 
  Send, 
  Copy, 
  Check, 
  ShieldAlert, 
  ArrowUpRight, 
  Terminal, 
  Radio, 
  Sparkles, 
  AlertCircle,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function ContactTerminal() {
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    subject: '', 
    message: '' 
  });
  const [formErrors, setFormErrors] = useState({});
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPayload, setCopiedPayload] = useState(false);
  const [dispatched, setDispatched] = useState(false);

  // Authentic email placeholder/configured address
  const emailAddress = 'mayank.sharma@newtonschool.co';

  // Social profile links (actual / clearly editable placeholders)
  const socialProfiles = [
    {
      name: 'GITHUB',
      handle: 'mayanksharma',
      url: 'https://github.com/mayanksharma',
      icon: Github,
      tag: 'SOURCE REPOSITORY',
      isPlaceholder: false
    },
    {
      name: 'LINKEDIN',
      handle: 'mayanksharma',
      url: 'https://linkedin.com/in/mayanksharma',
      icon: Linkedin,
      tag: 'PROFESSIONAL NETWORK',
      isPlaceholder: false
    }
  ];

  // Quick footer navigation links
  const footerNavLinks = [
    { id: 'hero', label: 'THE LAB' },
    { id: 'about', label: 'DOSSIER' },
    { id: 'projects', label: 'EXPERIMENTS' },
    { id: 'skills', label: 'THE FORMULA' },
    { id: 'creative', label: 'CREATIVE LAB' },
    { id: 'contact', label: 'TRANSMIT' }
  ];

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = 'Operator name is required';
    if (!formData.email.trim()) {
      errors.email = 'Callsign / email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Enter a valid email address';
    }
    if (!formData.subject.trim()) errors.subject = 'Subject specification is required';
    if (!formData.message.trim()) errors.message = 'Transmission content cannot be blank';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormErrors({});
    setDispatched(true);

    // Honest mailto fallback: Launches user's email client directly with prefilled parameters
    const mailtoSubject = encodeURIComponent(`[LAB TRANSMISSION] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Operator Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Transmission:\n${formData.message}`
    );
    window.location.href = `mailto:${emailAddress}?subject=${mailtoSubject}&body=${mailtoBody}`;
  };

  const handleCopyTransmissionPayload = () => {
    const payload = 
      `TO: ${emailAddress}\n` +
      `OPERATOR: ${formData.name} <${formData.email}>\n` +
      `SUBJECT: ${formData.subject}\n\n` +
      `MESSAGE:\n${formData.message}`;
    navigator.clipboard.writeText(payload);
    setCopiedPayload(true);
    setTimeout(() => setCopiedPayload(false), 2000);
  };

  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
      {/* Top Terminal Status Banner: Connection Established */}
      <div className="mb-10 max-w-5xl mx-auto">
        <div className="p-3 bg-lab-charcoal/80 border border-lab-border rounded-sm flex flex-wrap items-center justify-between gap-3 text-xs font-mono backdrop-blur-md">
          <div className="flex items-center gap-2.5 text-lab-toxic font-bold">
            <Radio size={15} className="animate-pulse" />
            <span className="tracking-widest uppercase">CONNECTION ESTABLISHED // AWAITING TRANSMISSION</span>
          </div>
          <div className="flex items-center gap-4 text-lab-muted text-[11px]">
            <span>NODE: NST-TERMINAL-01</span>
            <span className="text-lab-green font-semibold">STATUS: READY</span>
          </div>
        </div>
      </div>

      {/* Section Header Strip */}
      <div className="mb-14 border-b border-lab-border/70 pb-6 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-3 mb-3 font-mono text-xs text-lab-toxic">
          <span className="w-8 h-[1px] bg-lab-toxic" />
          <span>COMMUNICATION CONSOLE // SECTION 06</span>
          <span className="w-8 h-[1px] bg-lab-toxic" />
        </div>
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-cinematic uppercase tracking-tight text-white leading-none">
          TRANSMIT <span className="text-lab-green glow-text">// ESTABLISH CONNECTION</span>
        </h2>
        <h3 className="text-xl sm:text-2xl font-cinematic text-lab-sand uppercase tracking-wider mt-3">
          HAVE AN IDEA? LET&apos;S EXPERIMENT.
        </h3>
        <p className="text-sm sm:text-base font-sans text-gray-300 mt-3 max-w-xl mx-auto leading-relaxed font-light">
          Open to collaborative technology ventures, creative 3D web development, and AI/ML experiments. Transmit a signal directly to the lab or reach out through my verified channels.
        </p>
      </div>

      {/* Main Communication Console Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Left Column: Direct Mailbox & Social Channels (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Direct Channel Card */}
          <div className="bg-lab-card/90 border border-lab-border hover:border-lab-green/60 p-6 rounded-sm backdrop-blur-md space-y-4 transition-all">
            <div className="flex items-center justify-between text-xs font-mono">
              <span className="text-lab-sand uppercase font-bold">// SECURE EMAIL CHANNEL</span>
              <button
                onClick={handleCopyEmail}
                className="text-lab-toxic hover:text-white flex items-center gap-1.5 transition-colors cursor-pointer text-[11px]"
                title="Copy email to clipboard"
              >
                {copiedEmail ? <Check size={13} /> : <Copy size={13} />}
                <span>{copiedEmail ? 'COPIED' : 'COPY'}</span>
              </button>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="p-3 bg-lab-charcoal border border-lab-border rounded text-lab-green">
                <Mail size={22} />
              </div>
              <div className="overflow-hidden">
                <a
                  href={`mailto:${emailAddress}`}
                  className="text-base font-mono text-white hover:text-lab-toxic transition-colors truncate block font-medium"
                >
                  {emailAddress}
                </a>
                <span className="text-[11px] font-mono text-lab-muted">
                  Direct Laboratory Mailbox
                </span>
              </div>
            </div>
          </div>

          {/* Social Profiles Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {socialProfiles.map((profile) => {
              const ProfileIcon = profile.icon;
              return (
                <a
                  key={profile.name}
                  href={profile.url}
                  target="_blank"
                  rel="noreferrer"
                  className="p-5 bg-lab-card/90 border border-lab-border hover:border-lab-toxic rounded-sm transition-all group flex flex-col justify-between backdrop-blur-md hover:shadow-glow-sm"
                >
                  <div className="flex items-center justify-between text-lab-muted group-hover:text-lab-toxic mb-3">
                    <ProfileIcon size={22} />
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                  <div>
                    <span className="text-sm font-cinematic uppercase tracking-wider text-white block">
                      {profile.name}
                    </span>
                    <span className="text-[10px] font-mono text-lab-sand">
                      @{profile.handle}
                    </span>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Authentication & Identity Verification Card */}
          <div className="p-5 bg-lab-charcoal/60 border border-lab-border rounded-sm text-xs font-mono text-lab-muted space-y-2 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-lab-toxic font-bold">
              <ShieldAlert size={15} />
              <span>AUTHENTIC IDENTITY PROTOCOL</span>
            </div>
            <p className="text-[11px] text-gray-300 leading-relaxed font-light">
              Mayank Sharma &bull; Newton School of Technology &bull; B.Tech CSE (AI &amp; ML). All communications are reviewed personally with technical discretion.
            </p>
          </div>
        </div>

        {/* Right Column: Interactive Terminal Contact Form (7 cols) */}
        <div className="lg:col-span-7 bg-lab-card/90 border border-lab-border rounded-sm p-6 sm:p-8 backdrop-blur-md relative overflow-hidden">
          {/* Subtle Scanning Edge Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-lab-green to-transparent" />

          {dispatched ? (
            /* Post-Dispatch Confirmation & Mailto Fallback Explanation */
            <div className="py-8 flex flex-col items-center justify-center text-center space-y-4 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-lab-green/20 border border-lab-green flex items-center justify-center text-lab-toxic shadow-glow-green">
                <Check size={32} />
              </div>

              <h4 className="text-3xl font-cinematic uppercase tracking-wider text-white">
                TRANSMISSION PREPARED
              </h4>

              <p className="text-sm font-sans text-gray-300 max-w-md leading-relaxed font-light">
                Your transmission has been formatted. Since this static portfolio runs without an intrusive third-party tracker, your default mail client has been opened to dispatch directly to <strong className="text-white">{emailAddress}</strong>.
              </p>

              {/* Formatted Transmission Payload Box */}
              <div className="w-full text-left bg-lab-black p-4 border border-lab-border rounded text-xs font-mono space-y-1.5 my-2">
                <div className="text-lab-sand font-bold text-[10px] uppercase border-b border-lab-border/40 pb-1">
                  // FORMATTED DISPATCH PAYLOAD:
                </div>
                <div className="text-lab-muted"><strong className="text-white">FROM:</strong> {formData.name} &lt;{formData.email}&gt;</div>
                <div className="text-lab-muted"><strong className="text-white">SUBJECT:</strong> {formData.subject}</div>
                <div className="text-lab-green pt-1 whitespace-pre-wrap"><strong className="text-white">MESSAGE:</strong> {formData.message}</div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <button
                  onClick={handleCopyTransmissionPayload}
                  className="px-5 py-2.5 bg-lab-charcoal hover:bg-lab-card border border-lab-border hover:border-lab-toxic text-xs font-mono text-white transition-colors cursor-pointer flex items-center gap-2"
                >
                  {copiedPayload ? <Check size={14} className="text-lab-toxic" /> : <Copy size={14} />}
                  <span>{copiedPayload ? 'PAYLOAD COPIED' : 'COPY TRANSMISSION TEXT'}</span>
                </button>

                <button
                  onClick={() => {
                    setDispatched(false);
                    setFormData({ name: '', email: '', subject: '', message: '' });
                  }}
                  className="px-5 py-2.5 bg-lab-green hover:bg-lab-toxic text-lab-black font-cinematic text-lg uppercase tracking-wider transition-colors cursor-pointer"
                >
                  NEW TRANSMISSION
                </button>
              </div>

              <p className="text-[10px] font-mono text-lab-muted/80 pt-2">
                Note: To route messages via an API or webhook (EmailJS / Formspree), you can bind your endpoint in this component.
              </p>
            </div>
          ) : (
            /* Terminal Contact Input Form */
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              <div className="flex items-center justify-between border-b border-lab-border/40 pb-3 text-xs font-mono">
                <div className="flex items-center gap-2 text-white font-bold">
                  <Terminal size={15} className="text-lab-green" />
                  <span>TRANSMIT DISPATCH CONSOLE</span>
                </div>
                <span className="text-lab-toxic text-[10px]">ENCRYPTED TLS // DIRECT</span>
              </div>

              {/* Operator Name & Email Fields */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono text-lab-sand block font-medium">
                    NAME *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (formErrors.name) setFormErrors({ ...formErrors, name: null });
                    }}
                    placeholder="e.g. Walter White"
                    className={`w-full p-3 bg-lab-black border ${
                      formErrors.name ? 'border-red-500' : 'border-lab-border focus:border-lab-green'
                    } rounded-sm text-xs font-mono text-white focus:outline-none transition-colors`}
                  />
                  {formErrors.name && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} /> {formErrors.name}
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-lab-sand block font-medium">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (formErrors.email) setFormErrors({ ...formErrors, email: null });
                    }}
                    placeholder="e.g. operator@laboratory.com"
                    className={`w-full p-3 bg-lab-black border ${
                      formErrors.email ? 'border-red-500' : 'border-lab-border focus:border-lab-green'
                    } rounded-sm text-xs font-mono text-white focus:outline-none transition-colors`}
                  />
                  {formErrors.email && (
                    <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                      <AlertCircle size={10} /> {formErrors.email}
                    </span>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-lab-sand block font-medium">
                  SUBJECT *
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => {
                    setFormData({ ...formData, subject: e.target.value });
                    if (formErrors.subject) setFormErrors({ ...formErrors, subject: null });
                  }}
                  placeholder="e.g. Collaborative 3D Web Exploration / AI Query"
                  className={`w-full p-3 bg-lab-black border ${
                    formErrors.subject ? 'border-red-500' : 'border-lab-border focus:border-lab-green'
                  } rounded-sm text-xs font-mono text-white focus:outline-none transition-colors`}
                />
                {formErrors.subject && (
                  <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                    <AlertCircle size={10} /> {formErrors.subject}
                  </span>
                )}
              </div>

              {/* Message Field */}
              <div className="space-y-1">
                <label className="text-xs font-mono text-lab-sand block font-medium">
                  MESSAGE *
                </label>
                <textarea
                  rows={4}
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (formErrors.message) setFormErrors({ ...formErrors, message: null });
                  }}
                  placeholder="Outline your experiment, idea, project inquiry or collaboration..."
                  className={`w-full p-3 bg-lab-black border ${
                    formErrors.message ? 'border-red-500' : 'border-lab-border focus:border-lab-green'
                  } rounded-sm text-xs font-mono text-white focus:outline-none transition-colors resize-none`}
                />
                {formErrors.message && (
                  <span className="text-[10px] font-mono text-red-400 flex items-center gap-1">
                    <AlertCircle size={10} /> {formErrors.message}
                  </span>
                )}
              </div>

              {/* Send Message Button */}
              <button
                type="submit"
                className="w-full py-4 bg-lab-green hover:bg-lab-toxic text-lab-black font-cinematic text-xl tracking-widest uppercase transition-all duration-300 shadow-glow-green flex items-center justify-center gap-3 cursor-pointer active:scale-95 mt-2"
              >
                <Send size={18} />
                <span>SEND MESSAGE // DISPATCH</span>
              </button>

              <div className="flex items-center justify-between text-[10px] font-mono text-lab-muted/80 pt-1">
                <span>Dispatches via direct mail client fallback</span>
                <span className="text-lab-green">NO SPAM // DIRECT CONTACT</span>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Clean Portfolio Footer */}
      <footer className="mt-28 pt-12 border-t border-lab-border/50 text-center space-y-6">
        {/* Periodic Brand Monogram */}
        <div className="flex items-center justify-center gap-2">
          <div className="w-8 h-9 bg-lab-charcoal border border-lab-green rounded-sm flex flex-col justify-between p-1 shadow-glow-sm">
            <span className="text-[7px] font-mono text-lab-muted leading-none">24</span>
            <span className="text-sm font-cinematic text-lab-green leading-none font-bold">Ma</span>
            <span className="text-[5px] font-mono text-lab-sand uppercase leading-none">Mayank</span>
          </div>
          <div className="w-8 h-9 bg-lab-charcoal border border-lab-toxic rounded-sm flex flex-col justify-between p-1 shadow-glow-sm">
            <span className="text-[7px] font-mono text-lab-muted leading-none">52</span>
            <span className="text-sm font-cinematic text-lab-toxic leading-none font-bold">Sh</span>
            <span className="text-[5px] font-mono text-lab-sand uppercase leading-none">Sharma</span>
          </div>
        </div>

        {/* Quick Portfolio Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-6 text-xs font-mono" aria-label="Footer Navigation">
          {footerNavLinks.map(link => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-lab-muted hover:text-lab-toxic transition-colors cursor-pointer uppercase tracking-wider"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Developer Attribution & Academic Institution */}
        <div className="space-y-1 text-xs font-mono text-lab-muted">
          <p className="text-white font-medium">
            MAYANK SHARMA &bull; <span className="text-lab-sand">MAYANK®</span>
          </p>
          <p className="text-[11px] text-lab-muted">
            B.Tech Computer Science Engineering &bull; Artificial Intelligence &amp; Machine Learning
          </p>
          <p className="text-[10px] text-lab-toxic font-medium">
            Newton School of Technology
          </p>
        </div>

        {/* Copyright Notice */}
        <div className="pt-2 text-[10px] font-mono text-lab-muted/60 tracking-widest border-t border-lab-border/30 max-w-md mx-auto">
          &copy; {new Date().getFullYear()} MAYANK® &bull; BREAKING BAD 3D PORTFOLIO EXPERIENCE &bull; 99.1% CHEMICAL PURITY
        </div>
      </footer>
    </section>
  );
}
