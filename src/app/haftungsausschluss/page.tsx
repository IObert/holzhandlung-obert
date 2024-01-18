import NavUpIcon from "@/components/nav-up-icon";
import { ArrowUpToLineIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Haftungsausschluss() {
  return (
    <div id="top" className="max-w-xs md:max-w-xl mx-auto">
      <h1 className="text-2xl mb-12">Disclaimer - Rechtliche Hinweise</h1>

      <section id="Haftungsbeschränkung" className="my-6">
        <Link href="#Haftungsbeschränkung">
          <h2 className="text-lg my-4">1 Haftungsbeschränkung</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt
            erstellt. Der Anbieter übernimmt jedoch keine Gewähr für die
            Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
            Inhalte. Die Nutzung der Inhalte der Website erfolgt auf eigene
            Gefahr des Nutzers. Namentlich gekennzeichnete Beiträge geben die
            Meinung des jeweiligen Autors und nicht immer die Meinung des
            Anbieters wieder. Mit der reinen Nutzung der Website des Anbieters
            kommt keinerlei Vertragsverhältnis zwischen dem Nutzer und dem
            Anbieter zustande.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Externe">
        <Link href="#Externe">
          <h2 className="text-lg my-4">2 Externe Links</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Diese Website enthält Verknüpfungen zu Websites Dritter (&quot;externe
            Links&quot;). Diese Websites unterliegen der Haftung der jeweiligen
            Betreiber. Der Anbieter hat bei der erstmaligen Verknüpfung der
            externen Links die fremden Inhalte daraufhin überprüft, ob etwaige
            Rechtsverstöße bestehen. Zu dem Zeitpunkt waren keine Rechtsverstöße
            ersichtlich. Der Anbieter hat keinerlei Einfluss auf die aktuelle
            und zukünftige Gestaltung und auf die Inhalte der verknüpften
            Seiten. Das Setzen von externen Links bedeutet nicht, dass sich der
            Anbieter die hinter dem Verweis oder Link liegenden Inhalte zu Eigen
            macht. Eine ständige Kontrolle dieser externen Links ist für den
            Anbieter ohne konkrete Hinweise auf Rechtsverstöße nicht zumutbar.
            Bei Kenntnis von Rechtsverstößen werden jedoch derartige externe
            Links unverzüglich gelöscht.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Schutzrechte">
        <Link href="#Schutzrechte">
          <h2 className="text-lg my-4">3 Urheber- und Leistungsschutzrechte</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Die auf dieser Website veröffentlichten Inhalte unterliegen dem
            deutschen Urheber- und Leistungsschutzrecht. Jede vom deutschen
            Urheber- und Leistungsschutzrecht nicht zugelassene Verwertung
            bedarf der vorherigen schriftlichen Zustimmung des Anbieters oder
            jeweiligen Rechteinhabers. Dies gilt insbesondere für
            Vervielfältigung, Bearbeitung, Übersetzung, Einspeicherung,
            Verarbeitung bzw. Wiedergabe von Inhalten in Datenbanken oder
            anderen elektronischen Medien und Systemen. Inhalte und Rechte
            Dritter sind dabei als solche gekennzeichnet. Die unerlaubte
            Vervielfältigung oder Weitergabe einzelner Inhalte oder kompletter
            Seiten ist nicht gestattet und strafbar. Lediglich die Herstellung
            von Kopien und Downloads für den persönlichen, privaten und nicht
            kommerziellen Gebrauch ist erlaubt.
          </li>
          <li>
            Die Darstellung dieser Website in fremden Frames ist nur mit
            schriftlicher Erlaubnis zulässig.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Nutzungsbedingungen">
        <Link href="#Nutzungsbedingungen">
          <h2 className="text-lg my-4">4 Besondere Nutzungsbedingungen</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Soweit besondere Bedingungen für einzelne Nutzungen dieser Website
            von den vorgenannten Nummern 1. bis 4. abweichen, wird an
            entsprechender Stelle ausdrücklich darauf hingewiesen. In diesem
            Falle gelten im jeweiligen Einzelfall die besonderen
            Nutzungsbedingungen.
          </li>
        </ol>
        <NavUpIcon />
      </section>

      <br />
      <span className="text-small">Stand: 1. Januar 2024</span>
      <br />
    </div>
  );
}
