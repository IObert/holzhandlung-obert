import Link from "next/link";
import { ArrowUpRight, Trees } from "lucide-react";
import { products, galleryImages, woodTypes } from "@/lib/data";
import Gallery from "@/components/gallery";
import ResponsiveImage, {
  imageWidthAtHeight,
} from "@/components/responsive-image";
import ContactBar from "@/components/contact-bar";

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <ResponsiveImage
          className="hero-photo"
          src="/static/galerie/Regale.webp"
          alt="Bauholz in unserem Holzlager in Oberwolfach"
          fetchPriority="high"
          sizes="(max-width: 700px) 960px, (max-width: 987px) 987px, 100vw"
          maxWidth={1920}
        />
        <div className="hero-shade" />
        <div className="site-width hero-content">
          <h1>Qualität gibt Sicherheit!</h1>
          <div className="hero-copy">
            <p className="hero-lead">
              Wir haben uns auf den Vertrieb von ökologischen Baumaterialien
              spezialisiert.
            </p>
            <p className="hero-support">
              Die Mehrheit unserer Kunden sind Holzbaubetriebe, Dachdeckereien
              und Heimwerker. Erstklassiger Service und innovative Produkte
              machen uns zu einem attraktiven Partner.
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
            <li>Unserem gut sortierten Lager</li>
            <li>Kommissionierung</li>
            <li>Kurzen Lieferzeiten</li>
            <li>Hoher Flexibilität durch einen eigenen Lkw</li>
            <li>Langen Geschäftszeiten</li>
            <li>Überdurchschnittlich guter Erreichbarkeit</li>
          </ul>
        </div>
      </section>
      <section className="catalog-section" id="lieferprogramm">
        <div className="site-width">
          <div className="section-heading">
            <div>
              <h2>Unser Lieferprogramm</h2>
            </div>
            <p>Klicken Sie auf das jeweilige Produkt, um mehr zu erfahren</p>
          </div>
          <div className="product-grid">
            {products.map((product) => (
              <Link
                className="product-tile"
                key={product.id}
                href={`/produkte/${product.id}/`}
              >
                <div className="product-image">
                  <ResponsiveImage
                    src={product.image}
                    alt={product.title}
                    loading="lazy"
                    maxWidth={768}
                    sizes={`(max-width: 700px) max(calc((100vw - 56px) / 2), ${imageWidthAtHeight(product.image, 160)}px), (max-width: 1000px) max(32vw, ${imageWidthAtHeight(product.image, 190)}px), (max-width: 1336px) max(32vw, ${imageWidthAtHeight(product.image, 238)}px), max(400px, ${imageWidthAtHeight(product.image, 238)}px)`}
                  />
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
          <ResponsiveImage
            src="/static/galerie/Weit.webp"
            alt="Unser Holzlager vor dem bewaldeten Hang in Oberwolfach"
            maxWidth={1280}
            sizes="(max-width: 700px) 100vw, (max-width: 1440px) 720px, 50vw"
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
                <ResponsiveImage
                  src={wood.image}
                  alt={`Maserung ${wood.title}`}
                  maxWidth={768}
                  sizes={`(max-width: 700px) max(calc((100vw - 60px) / 2), ${imageWidthAtHeight(wood.image, 205)}px), (max-width: 1000px) max(30vw, ${imageWidthAtHeight(wood.image, 220)}px), max(190px, ${imageWidthAtHeight(wood.image, 200)}px)`}
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
          <ResponsiveImage
            src="/static/holzhandlung-obert.png"
            alt="Holzhandlung Heidi Obert"
            maxWidth={960}
            sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1336px) 40vw, 500px"
            loading="lazy"
          />
        </div>
      </section>
    </div>
  );
}
