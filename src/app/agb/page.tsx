import NavUpIcon from "@/components/nav-up-icon";
import { ArrowUpToLineIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AGB() {
  return (
    <div id="top" className="w-8/10 m-8">
      <h1 className="text-2xl mb-12">Allgemeine Geschäftsbedingungen</h1>

      <section id="Allgemeines" className="my-6">
        <Link href="#Allgemeines">
          <h2 className="text-lg my-4">§ 1 Allgemeines</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Diese Lieferungs- und Zahlungsbedingungen sind Bestandteil aller
            Angebote und Verträge über Lieferungen und Leistungen des Verkäufers
            auch in laufender und künftiger Geschäftsverbindung.
          </li>
          <li>
            Ergänzend gelten - sofern sie unseren Bedingungen nicht
            widersprechen - die Gebräuche im holzwirtschaftlichen Verkehr,
            insbesondere die "Tegernseer Gebräuche" in der jeweils gültigen
            Fasssung mit ihren Anlagen und ihrem Anhang.
          </li>
          <li>
            Abweichende Vereinbarungen und Bedingungen, insbesondere
            Einkaufsbedingungen, sind nur verbindlich, wenn sie vom Verkäufer
            schriftlich bestätigt sind.
          </li>
          <li>
            Kreuzen sich zwei Bestätigungsschreiben, die abweichende
            Bestimmungen erhalten, gilt das des Verkäufers.
          </li>
          <li>
            Der Verkäufer ist berechtigt, im Rahmen der vertraglichen
            Beziehungen die firmen- und personenbezogenen Daten des Käufers zu
            verwerten und zu speichern.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Angebote">
        <Link href="#Angebote">
          <h2 className="text-lg my-4">§ 2 Angebote, Lieferfristen</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Angebote sind freibleibend; Zwischenverkauf bleibt vorbehalten.
          </li>
          <li>
            Vereinbarungen mit Beauftragten bedürfen zu ihrer Gültigkeit der
            schriftlichen Bestätigung.
          </li>
          <li>
            Lieferfristen gelten vorbehalten richtiger sowie rechtzeitiger
            Selbstbelieferung, es sei denn, dass der Verkäufer die unrichtige
            oder verspätete Selbstbelieferung zu vertreten hat oder verbindliche
            Lieferfristen schriftlich zusagt.
          </li>
          <li>
            Verkaufspreise gelten nur dann als Festpreise, wenn sie der
            Verkäufer schriftlich zusagt. Den Verkaufspreisen ist die jeweils
            gültige Mehrwertsteuer hinzuzurechnen. Sofern nicht anders
            vereinbart ist, gelten sie frei verladen Abgangsort der Ware.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Lieferung">
        <Link href="#Lieferung">
          <h2 className="text-lg my-4">§ 3 Lieferung und Gefahrübergang</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Für die Lieferung des Verkäufers ist die Verladestelle
            Erfüllungsort. Bei Anlieferung trägt der Käufer die Gefahr.
            Lieferung erfolgt an die vereinbarte Stelle. Bei geänderter
            Anweisung trägt der Käufer die zusätzlichen Kosten.
          </li>
          <li>
            Lieferung frei Baustelle oder frei Lager bedeutet Anlieferung ohne
            Abladen und unter der Vorraussetzung einer mit schwerem Lastzug
            befahrbaren Anfuhrstraße. Verlässt das Lieferfahrzeug auf Weisung
            des Käufers die befahrbare Anfuhrstraße, so haftet dieser für
            auftretende Schäden. Das Abladen hat unverzüglich und sachgemäß
            durch den Käufer zu erfolgen. Wartezeiten, die vom Käufer zu
            vertreten sind, werden diesem berechnet.
          </li>
          <li>
            Die Nichteinhaltung von Lieferungsterminen und -fristen durch den
            Verkäufer berechtig den Käufer zur Geltendmachung der ihm
            zustehenden Rechte erst, wenn er dem Verkäufer eine angemessene,
            mindestens acht Werktage betragende Nachfrist gesetzt hat.
          </li>
          <li>
            Arbeitskämpfe oder unvorhersehbare außergewöhnliche Ereignisse wie
            hoheitliche Maßnahmen, Verkehrsstörungen usw. befreien den Verkäufer
            für die Dauer ihrer Auswirkungen oder im Falle der Unmöglichkeit
            voll von der Lieferfrist.
          </li>
          <li>
            Bei Leistungsverzug oder einer vom Verkäufer zu vertretenden
            Unmöglichkeit der Leistung kann der Käufer unter angemessener
            Nachfrist vom Vertrag zurücktreten. Im übrigen beschränkt sich der
            Anspruch des Käufers auf den Ersatz nachgewiesener Mehrkosten
            (Deckungskauf). Dieser setzt voraus, dass dem Verkäufer dies unter
            Wahrung einer angemessenen Frist - vom Zeitpunkt des Verzuges oder
            der Unmöglichkeit der Leistung an gerechnet - schriftlich angezeigt
            wird. Dabei sind mindestens drei Vergleichsangebote einzuholen.
            Darüber hinausgehende Schadensersatzansprüche sind ausgeschlossen.
            Bei Vorsatz oder grober Fahrlässigkeit des Verkäufers, eines
            gesetzlichen Vertreters oder Erfüllungsgehilfen beschränken sich die
            Ersatzansprüche auf den im Zeitpunkt des Vertragsabschlusses
            voraussehbaren Schaden.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Zahlung">
        <Link href="#Zahlung">
          <h2 className="text-lg my-4">§ 4 Zahlung</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Die Rechnung wird über jede Sendung gesondert unter dem Datum des
            Versandtages der Ware erteilt. Dies gilt auch für vereinbarte
            Teillieferungen. Vereinbarte Zahlungsfristen beginnen mit diesem
            Tage zu laufen.
          </li>
          <li>
            Geleistete Anzahlungen bei Abschlüssen werden, wenn nicht anders
            vereinbart, auf die einzelnen Teillieferungen anteilig verrechnet.
          </li>
          <li>
            Ist bei laufender Geschäftsverbindung kein besonderes Zahlungsziel
            zur Übung geworden oder vereinbart, so ist der Kaufpreis nach Wahl
            des Käufers entweder innerhalb von 8 Tagen mit 2 % Skonto oder
            innerhalb von 21 Tagen ohne Abzug zu zahlen.
          </li>
          <li>
            Skontogewährung hat zur Voraussetzung, dass das Konto des Käufers
            sonst keine fälligen Rechnungsbeträge aufweist. Skontierfähig ist
            nur der reine Warenwert einschließlich Mehrwertsteuer ohne Fracht
            und Verpackung.
          </li>
          <li>
            Rechnungsregulierung durch Scheck oder Wechsel erfolgt
            zahlungshalber und bedarf der Zustimmung des Verkäufers; Diskont,
            Wechselspesen und Kosten trägt der Käufer, sofern nichts anderes
            vereinbart. Rückwechsel werden grundsätzlich nicht ausgestellt.
            Sollte dies ausnahmsweise in einzelnen Fällen geschehen, die jedoch
            ausdrücklich vereinbart sein müssen, so tritt eine befreiende
            Leistung erst dann ein, wenn der Verkäufer den Kaufpreis erhält und
            gleichzeitig keine weiteren Verbindlichkeiten mehr bestehen.
          </li>
          <li>
            Der Verkäufer ist berechtigt, vom Käufer, der Kaufmann im Sinne des
            Handelsgesetzbuches ist, vom Fälligkeitstage an und vom Käufer, der
            kein Kaufmann ist, ab Verzug Zinsen in Höhe der von ihm selbst zu
            zahlenden Kreditkosten, mindestens aber von 2 % über dem Diskontsatz
            der Deutschen Bundesbank jeweils zuzüglich Mehrwertsteuer, zu
            berechnen; die Geltendmachung weiteren Schadens bleibt vorbehalten.
          </li>
          <li>
            Bei Zahlungsverzug, Scheck- oder Wechselprotest, ist der Verkäufer
            berechtigt, weitere Lieferungen nur gegen Vorauskasse auszuführen,
            alle offenstehenden Rechnungsbeträge sofort fällig zu stellen und
            gegen Rückgabe zahlungshalber hereingenommener Wechsel Barzahlung
            oder Sicherheitsleistung zu verlangen.
          </li>
          <li>
            Die vertraglichen Zahlungstermine sind auch dann einzuhalten, wenn
            sich eine Mängelrüge in einem gemäß § 459 Abs.1 Satz 2 BGB als
            unerheblich zu bezeichnenden Umfange als berechtigt erweist. Im
            übrigen darf der Käufer im Falle einer fristgerechtigt erhobenen,
            berechtigten Mängelrüge fehlerhafter Ware im Sinne von § 459 Abs. 1
            BGB nur den Teil der Kaufsumme vorläufig einbehalten, der dem
            Rechnungsbetrag des ordnungsgemäß gerügten Teils der Lieferung
            entspricht.
          </li>
          <li>
            Die Aufrechnung von Gegenforderungen ist nur insoweit zulässig, als
            es sich um unbestrittene oder rechtskräftig festgestellte
            Forderungen handelt.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Beschaffenheit">
        <Link href="#Beschaffenheit">
          <h2 className="text-lg my-4">§ 5 Beschaffenheit, Gewährleistung</h2>
        </Link>
        Holz ist ein Naturstoff, seine naturgegebenen Eigenschaften,
        Abweichungen und Merkmale sind daher stets zu beachten. Insbesondere hat
        der Käufer seine biologischen, physikalischen und chemischen
        Eigenschaften beim Kauf und der Verwendung zu berücksichtigen.
        Gegebenfalls hat er fachgerechten Rat einzuholen.
        <ol start={1} type="1">
          <li>
            Offensichtliche Mängel sind in jedem Falle unverzüglich, spätestens
            innerhalb von 14 Kalendertagen vom Eingangstag der Ware beim Käufer
            zu rügen. Die Rügefrist verringert sich jedoch bei Verfärbung auf 7
            Kalendertage, es sei denn, es war Lieferung trockener Ware
            vereinbart.
          </li>
          <li>
            Nicht offensichtliche, auch bei oder nach der Verarbeitung sich
            ergebende Mängel sind unverzüglich nach ihrer Entdeckung, spätestens
            innerhalb von 14 Kalendertagen zu rügen. Dies gilt nicht für Rund-
            und Schnittholz. Hier ist eine Mängelrüge auch bei verdeckten
            Mängeln nur innerhalb von 14 Kalendertagen und bei Verfärbungen
            innerhalb von 7 Kalendertagen nach Übergabe der Ware möglich. Die
            Untersuchungspflichten nach § 377 HGB bleiben bestehen.
          </li>
          <li>
            Erfolgt Abnahme durch den Käufer oder seinen Beauftragten, sind
            spätere Beanstandungen ausgeschlossen.
          </li>
          <li>
            Ergänzend gilt, dass zugesicherte Eigenschaften im Sinne von § 459
            Abs.2 des Bürgerlichen Gesetzbuches als Zusicherung ausdrücklich zu
            kennzeichnen sind. Eine Bezugnahme auf DIN-Normen beinhaltet
            grundsätzlich nur die Normgerechtigkeit des Erzeugnisses und
            begründet keine Zusicherung durch den Verkäufer, es sei denn, dass
            eine solche Zusicherung ausdrücklich vereinbart wurde.
          </li>
          <li>
            Übernimmt der Verkäufer auch den Einbau, die Verlegung oder die
            Montage von Bauelementen, so ist die Verdingungsordnung für
            Bauleistungen (VOB), und zwar die Allgemeinen Vertragsbedingungen
            für die Ausführung von Bauleistungen (VOB, Teil B) und die
            Allgemeinen Technischen Vorschriften für Bauleistungen (VOB, Teil
            C), Bestandteil aller Angebote und Verträge über solche
            Bauleistungen.
          </li>
          <li>
            Die Ansprüche des Käufers bei fehlerhafter Lieferung beschränken
            sich auf das Recht zur Nachlieferung fehlerfreier Ware in
            angemessener Frist. Weitergehende Ansprüche, insbesondere
            Schadenersatzansprüche aus positiver Vertragsverletzung, Verschulden
            bei Vertragsverhandlungen und unerlaubter Handlung sind
            ausgeschlossen, es sei denn, sie beruhen auf Vorsatz oder grober
            Fahrlässigkeit des Verkäufers, eines gesetzlichen Vertreters oder
            Erfüllungsgehilfen. Auch in diesen Fällen ist die Haftung auf den im
            Zeitpunkt des Vertragsabschlusses voraussehbaren Schaden begrenzt.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Eigentumsvorbehalte">
        <Link href="#Eigentumsvorbehalte">
          <h2 className="text-lg my-4">§ 6 Eigentumsvorbehalte</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Die gelieferte Ware bleibt bis zur Bezahlung des Kaufpreises und
            Tilgung aller aus der Geschäftsverbindung bestehenden Forderungen
            und der im Zusammenhang mit dem Kaufgegenstand noch entstehenden
            Forderungen als Vorbehaltsware Eigentum des Verkäufers. Die
            Einstellung einzelner Forderungen in eine laufende Rechnung oder die
            Saldoziehung und deren Anerkennung heben den Eigentumsvorbehalt
            nicht auf. Wird im Zusammenhang mit der Bezahlung des Kaufpreises
            durch den Käufer eine wechselmäßige Haftung des Verkäufers
            begründet, so erlischt der Eigentumsvorbehalt nicht vor Erlös des
            Wechsels durch den Käufer als Bezogenem. Bei Zahlungsverzug des
            Käufers ist der Verkäufer zur Rücknahme der Vorbehaltsware nach
            Mahnung berechtigt und der Käufer zur Herausgabe verpflichtet.
          </li>
          <li>
            Wird Vorbehaltsware vom Käufer zu einer neuen beweglichen Sache
            verarbeitet, so erfolgt die Verarbeitung für den Verkäufer, ohne
            dass dieser hieraus verpflichtet wird; die neue Sache wird Eigentum
            des Verkäufers. Bei Verarbeitung zusammen mit nicht dem Verkäufer
            gehörender Ware erwirbt der Verkäufer Miteigentum an der neuen Sache
            nach dem Verhältnis des Wertes der Vorbehaltsware zu der anderen
            Ware zur Zeit der Verarbeitung. Wird Vorbehaltsware mit nicht dem
            Verkäufer gehörenden Ware gemäß §§ 947, 948 des Bürgerlichen
            Gesetzbuches verbunden, vermischt oder vermengt, so wird der
            Verkäufer Miteigentümer entsprechend den gesetzlichen Bestimmungen.
            Erwirbt der Käufer durch Verbindung, Vermischung oder Vermengung
            Alleineigentum, so überträgt er schon jetzt an den Verkäufer
            Miteigentum nach dem Verhältnis des Wertes der Vorbehaltsware zu der
            anderen Ware zur Zeit der Verbindung, Vermischung oder Vermengung.
            Der Käufer hat in diesen Fällen die im Eigentum oder Miteigentum des
            Verkäufers stehenden Sache, die ebenfalls als Vorbehaltsware im
            Sinne der nachfolgenden Bestimmungen gilt, unentgeltlich zu
            verwahren.
          </li>
          <li>
            Wird Vorbehaltsware vom Käufer, allein oder zusammen mit nicht dem
            Verkäufer gehörender Ware, veräußert, so tritt der Käufer schon
            jetzt die aus der Weiterveräußerung entstehenden Forderungen in Höhe
            des Wertes der Vorbehaltsware mit allen Nebenrechten und Rang vor
            dem Rest ab; der Verkäufer nimmt die Abtretung an. Wenn die
            weiterveräußerte Vorbehaltsware im Miteigentum des Verkäufers steht,
            so erstreckt sich die Abtretung der Forderungen auf den Betrag, der
            dem Anteilswert des Verkäufers am Miteigentum entspricht. Abs.1 Satz
            2 gilt entsprechend für den verlängerten Eigentumsvorbehalt; die
            Vorausabtretung gemäß Abs. 3 Satz 1 und 3 erstreckt sich auch auf
            die Saldoforderung.
          </li>
          <li>
            Wird Vorbehaltsware vom Käufer als wesentlicher Bestandteil in das
            Grundstück eines Dritten eingebaut, so tritt der Käufer schon jetzt
            die gegen den Dritten oder den, den es angeht, entstehenden
            Forderungen auf Vergütung in Höhe des Wertes der Vorbehaltsware mit
            allen Nebenrechten einschließlich eines solchen auf Einräumung einer
            Sicherungshypothek, mit Rang vor dem Rest ab; der Verkäufer nimmt
            die Abtretung an. Abs.3 Satz 2 und 3 gelten entsprechend.
          </li>
          <li>
            Wird Vorbehaltsware vom Käufer als wesentlicher Bestandteil in das
            Grundstück des Käufers eingebaut, so tritt der Käufer schon jetzt
            die aus der gewerbsmäßigen Veräußerung des Grundstücks oder von
            Grundstücksrechten, entstehenden Forderungen in Höhe des Wertes der
            Vorbehaltsware mit allen Nebenrechten und mit Rang vor dem Rest ab;
            der Verkäufer nimmt die Abtretung an. Abs. 3 Satz 2 und 3 gelten
            entsprechend.
          </li>
          <li>
            Der Käufer ist zur Weiterveräußerung, zur Verwendung oder zum Einbau
            der Vorbehaltsware nur im üblichen ordnungsgemäßen Geschäftsgang und
            nur mit der Maßgabe berechtigt und ermächtigt, dass die Forderungen
            im Sinne von Abs. 3, 4 und 5 auf den Verkäufer tatsächlich
            übergehen. Zu anderen Verfügungen über die Vorbehaltsware,
            insbesondere Verpfändung oder Sicherungsübereignung, ist der Käufer
            nicht berechtigt.
          </li>
          <li>
            Der Verkäufer ermächtigt den Käufer unter Vorbehalt des Widerrufs
            zur Einbeziehung der gemäß Abs. 3, 4 und 5 abgetretenen Forderungen.
            Der Verkäufer wird von der eigenen Einziehungsbefugnis keinen
            Gebrauch machen, solange der Käufer seien Zahlungsverpflichtungen,
            auch gegenüber Dritten, nachkommt. Auf Verlangen des Verkäufers hat
            der Käufer die Schuldner der abgetretenen Forderungen zu benennen
            und diesen die Abtretung anzuzeigen; der Verkäufer ist ermächtigt,
            den Schuldnern die Abtretung auch selbst anzuzeigen.
          </li>
          <li>
            Über Zwangsvollstreckungsmaßnahmen Dritter in die Vorbehaltsware
            oder in die abgetretenen Forderungen hat der Käufer den Verkäufer
            unverzüglich unter Übergabe der für den Widerspruch notwendigen
            Unterlagen zu unterrichten.
          </li>
          <li>
            Mit Zahlungseinstellungen, Beantragung oder Eröffnung des Konkurses,
            eines gerichtlichen oder außergerichtlichen Vergleichsverfahrens
            erlöschen das Recht zur Weiterveräußerung, zur Verwendung oder zum
            Einbau der Vorbehaltsware und die Ermächtigung zum Einzug der
            abgetretenen Forderungen: bei einem Scheck- oder Wechselprotest
            erlischt die Einzugsermäßigung ebenfalls.
          </li>
          <li>
            Übersteigt der Wert der eingeräumten Sicherheiten die Forderungen um
            mehr als 20 %, so ist der Verkäufer insoweit zur Rückübertragung
            oder Freigabe nach seiner Wahl verpflichtet. Mit Tilgung aller
            Forderungen des Verkäufers aus der Geschäftsverbindung gehen das
            Eigentum an der Vorbehalsware und die abgetretenen Forderungen an
            den Käufer über.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Erfüllungsort">
        <Link href="#Erfüllungsort">
          <h2 className="text-lg my-4">§ 7 Erfüllungsort und Gerichtsstand</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Erfüllungsort für die Zahlung des Kaufpreises sowie für die
            sonstigen Leistungen des Käufers ist stets der Ort der gewerblichen
            Niederlassung des Verkäufers.
          </li>
          <li>
            Gerichtsstand für Vollkaufleute ist der Ort der gewerblichen
            Niederlassung des Verkäufers.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Schlussbestimmungen">
        <Link href="#Schlussbestimmungen">
          <h2 className="text-lg my-4">§ 8 Schlussbestimmungen</h2>
        </Link>
        Sollte eine oder mehrere dieser Bedingungen gegen ein gesetzliches
        Verbot verstoßen oder aus anderen Gründen rechtsunwirksam sein, so wird
        dadurch die Gültigkeit der übrigen Bestimmungen nicht berührt.
        Vertragspartner verpflichten sich für diesen Fall, eine Ersatzregelung
        zu treffen, die dem wirtschaftlichen Zweck der unwirksamen Bestimmung
        möglichst nahe kommt. Anzuwenden ist ausschließlich deutsches Recht
        soweit nicht im Einzelfall ausdrücklich eine abweichende schriftliche
        Vereinbarung getroffen worden ist.
        <NavUpIcon />
      </section>

      <br />
      <span className="text-small">Stand: 1. Januar 2024</span>
      <br />
    </div>
  );
}
