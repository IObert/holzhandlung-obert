import Link from "next/link";
import { ArrowUpRight, Trees } from "lucide-react";
import { products, galleryImages, woodTypes } from "@/lib/data";
import Gallery from "@/components/gallery";
import ContactBar from "@/components/contact-bar";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <img
          className="hero-photo"
          src="/static/galerie/Regale.webp"
          alt="Bauholz in unserem Holzlager in Oberwolfach"
          fetchPriority="high"
        />
        <div className="hero-shade" />
        <div className="site-width hero-content">
          <h1>Qualität gibt Sicherheit!</h1>
          <div className="hero-copy">
            <p>
              Wir haben uns auf den Vertrieb von ökologischen Baumaterialien
              spezialisiert.
            </p>
            <p>
              Die Mehrheit unserer Kunden sind Holzbaubetriebe, Dachdeckereien
              und Heimwerker.
            </p>
            <p>
              Erstklassiger Service und innovative Produkte machen uns zu einem
              attraktiven Partner.
            </p>
          </div>
          <div className="hero-actions">
            <Link className="button button-oak" href="#lieferprogramm">
              Unser Lieferprogramm <ArrowUpRight size={19} />
            </Link>
            <Link className="hero-contact" href="#kontakt">
              Persönlich beraten lassen
            </Link>
          </div>
        </div>
      </section>
      <section className="site-width intro-section" id="regional">
        <div>
          <p className="section-kicker">Wir sind für Sie da!</p>
          <h2>Regionaler Kontakt</h2>
        </div>
        <div className="intro-copy">
          <p>
            Zuverlässigkeit, hohe Produktqualität und fachgerechte Beratung sind
            bei uns selbstverständlich.
          </p>
          <p>Darüber hinaus profitieren Sie von:</p>
          <ul className="regional-benefits">
            <li>Unserem gut sortiertem Lager</li>
            <li>Kommissionierung</li>
            <li>Kurzen Lieferzeiten</li>
            <li>Hoher Flexibilität durch eigenen LKW</li>
            <li>Lange Geschäftszeiten</li>
            <li>Überdurchschnittlich gute Erreichbarkeit</li>
          </ul>
        </div>
      </section>
      <section className="catalog-section" id="lieferprogramm">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <h2>Unser Lieferprogramm</h2>
            </div>
            <p>Klicken Sie auf das jeweilige Produkt um mehr zu erfahren</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <Link
                className="product-tile"
                key={product.id}
                href={`/produkte/${product.id}/`}
              >
                <div className="product-image">
                  <img src={product.image} alt={product.title} loading="lazy" />
                </div>
                <div className="product-title">
                  <h3>{product.title}</h3>
                  <ArrowUpRight size={22} />
                </div>
                <p>{product.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="environment-section" id="umwelt">
        <div className="environment-image">
          <img
            src="/static/galerie/Weit.webp"
            alt="Unser Holzlager vor dem bewaldeten Hang in Oberwolfach"
            loading="lazy"
          />
        </div>
        <div className="environment-copy">
          <Trees size={36} strokeWidth={1.2} />
          <p className="section-kicker">Umwelt</p>
          <h2>
            Für einen verantwortungsvollen und ressourcenschonenden Umgang mit
            dem einzigartigen Naturwerkstoff Holz.
          </h2>
        </div>
      </section>
      <section className="site-width wood-section" id="holzarten">
        <div className="section-heading">
          <div>
            <h2>Holzarten</h2>
          </div>
          <p>Wählen Sie eine Holzart aus, um mehr zu erfahren</p>
        </div>
        <div className="wood-grid">
          {woodTypes.map((wood) => (
            <details className="wood-sample" key={wood.title}>
              <summary>
                <img
                  src={wood.image}
                  alt={`Maserung ${wood.title}`}
                  loading="lazy"
                />
                <span>
                  {wood.title}
                  <span className="sample-plus">+</span>
                </span>
              </summary>
              <p>{wood.description}</p>
            </details>
          ))}
        </div>
      </section>
      <section className="gallery-section" id="galerie">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <p className="section-kicker">Unser Lager</p>
              <h2>Galerie</h2>
            </div>
          </div>
          <Gallery images={galleryImages} />
        </div>
      </section>
      <section className="site-width contact-section" id="kontakt">
        <div>
          <p className="section-kicker">Wir freuen uns auf Ihre Anfrage</p>
          <h2>Kontakt</h2>
          <ContactBar />
        </div>
        <div className="contact-logo">
          <img
            src="/static/holzhandlung-obert.png"
            alt="Holzhandlung Heidi Obert"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
