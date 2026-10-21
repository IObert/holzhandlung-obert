import { Mail, Phone } from "lucide-react";
export default function ContactBar() {
  return (
    <div className="contact-links">
      <a href="tel:+497834869640">
        <Phone size={20} />
        <span>07834 / 869640</span>
      </a>
      <a href="mailto:info@holzhandlung-obert.de">
        <Mail size={20} />
        <span>info@holzhandlung-obert.de</span>
      </a>
    </div>
  );
}
