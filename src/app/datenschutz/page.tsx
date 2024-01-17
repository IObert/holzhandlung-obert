import NavUpIcon from "@/components/nav-up-icon";
import { ArrowUpToLineIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Datenschutz() {
  return (
    <div id="top" className="max-w-6/10 my-20 mx-8 md:mx-40">
      <h1 className="text-2xl mb-12">Datenschutzerklärung</h1>

      <p>
        Wir freuen uns sehr über Ihr Interesse an unserem Unternehmen.
        Datenschutz hat einen besonders hohen Stellenwert für die
        Geschäftsleitung der Holzhandlung Heidi Obert. Eine Nutzung der
        Internetseiten der Holzhandlung Heidi Obert ist grundsätzlich ohne jede
        Angabe personenbezogener Daten möglich. Sofern eine betroffene Person
        besondere Services unseres Unternehmens über unsere Internetseite in
        Anspruch nehmen möchte, könnte jedoch eine Verarbeitung
        personenbezogener Daten erforderlich werden. Ist die Verarbeitung
        personenbezogener Daten erforderlich und besteht für eine solche
        Verarbeitung keine gesetzliche Grundlage, holen wir generell eine
        Einwilligung der betroffenen Person ein.
      </p>

      <p>
        Die Verarbeitung personenbezogener Daten, beispielsweise des Namens, der
        Anschrift, E-Mail-Adresse oder Telefonnummer einer betroffenen Person,
        erfolgt stets im Einklang mit der Datenschutz-Grundverordnung und in
        Übereinstimmung mit den für die Holzhandlung Heidi Obert geltenden
        landesspezifischen Datenschutzbestimmungen. Mittels dieser
        Datenschutzerklärung möchte unser Unternehmen die Öffentlichkeit über
        Art, Umfang und Zweck der von uns erhobenen, genutzten und verarbeiteten
        personenbezogenen Daten informieren. Ferner werden betroffene Personen
        mittels dieser Datenschutzerklärung über die ihnen zustehenden Rechte
        aufgeklärt.
      </p>

      <p>
        Die Holzhandlung Heidi Obert hat als für die Verarbeitung
        Verantwortlicher zahlreiche technische und organisatorische Maßnahmen
        umgesetzt, um einen möglichst lückenlosen Schutz der über diese
        Internetseite verarbeiteten personenbezogenen Daten sicherzustellen.
        Dennoch können Internetbasierte Datenübertragungen grundsätzlich
        Sicherheitslücken aufweisen, sodass ein absoluter Schutz nicht
        gewährleistet werden kann. Aus diesem Grund steht es jeder betroffenen
        Person frei, personenbezogene Daten auch auf alternativen Wegen,
        beispielsweise telefonisch, an uns zu übermitteln.
      </p>
      <section id="Begriffsbestimmungen" className="my-6">
        <Link href="#Begriffsbestimmungen">
          <h2 className="text-lg my-4">1 Begriffsbestimmungen</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Die Datenschutzerklärung der Holzhandlung Heidi Obert beruht auf den
            Begrifflichkeiten, die durch den Europäischen Richtlinien- und
            Verordnungsgeber beim Erlass der Datenschutz-Grundverordnung
            (DS-GVO) verwendet wurden. Unsere Datenschutzerklärung soll sowohl
            für die Öffentlichkeit als auch für unsere Kunden und
            Geschäftspartner einfach lesbar und verständlich sein. Um dies zu
            gewährleisten, möchten wir vorab die verwendeten Begrifflichkeiten
            erläutern.
          </li>
          <li>
            Wir verwenden in dieser Datenschutzerklärung unter anderem die
            folgenden Begriffe:
          </li>
        </ol>

        <ol style={{ listStyleType: "lower-latin" }}>
          <li>Personenbezogene Daten</li>
          <p className="my-2">
            Personenbezogene Daten sind alle Informationen, die sich auf eine
            identifizierte oder identifizierbare natürliche Person (im Folgenden
            „betroffene Person“) beziehen. Als identifizierbar wird eine
            natürliche Person angesehen, die direkt oder indirekt, insbesondere
            mittels Zuordnung zu einer Kennung wie einem Namen, zu einer
            Kennnummer, zu Standortdaten, zu einer Online-Kennung oder zu einem
            oder mehreren besonderen Merkmalen, die Ausdruck der physischen,
            physiologischen, genetischen, psychischen, wirtschaftlichen,
            kulturellen oder sozialen Identität dieser natürlichen Person sind,
            identifiziert werden kann.
          </p>
          <li>Betroffene Person</li>
          <p className="my-2">
            Betroffene Person ist jede identifizierte oder identifizierbare
            natürliche Person, deren personenbezogene Daten von dem für die
            Verarbeitung Verantwortlichen verarbeitet werden.
          </p>
          <li>Verarbeitung</li>
          <p className="my-2">
            Verarbeitung ist jeder mit oder ohne Hilfe automatisierter Verfahren
            ausgeführte Vorgang oder jede solche Vorgangsreihe im Zusammenhang
            mit personenbezogenen Daten wie das Erheben, das Erfassen, die
            Organisation, das Ordnen, die Speicherung, die Anpassung oder
            Veränderung, das Auslesen, das Abfragen, die Verwendung, die
            Offenlegung durch Übermittlung, Verbreitung oder eine andere Form
            der Bereitstellung, den Abgleich oder die Verknüpfung, die
            Einschränkung, das Löschen oder die Vernichtung.
          </p>
          <li>Einschränkung der Verarbeitung</li>
          <p className="my-2">
            Einschränkung der Verarbeitung ist die Markierung gespeicherter
            personenbezogener Daten mit dem Ziel, ihre künftige Verarbeitung
            einzuschränken.
          </p>
          <li>Profiling</li>
          <p className="my-2">
            Profiling ist jede Art der automatisierten Verarbeitung
            personenbezogener Daten, die darin besteht, dass diese
            personenbezogenen Daten verwendet werden, um bestimmte persönliche
            Aspekte, die sich auf eine natürliche Person beziehen, zu bewerten,
            insbesondere, um Aspekte bezüglich Arbeitsleistung, wirtschaftlicher
            Lage, Gesundheit, persönlicher Vorlieben, Interessen,
            Zuverlässigkeit, Verhalten, Aufenthaltsort oder Ortswechsel dieser
            natürlichen Person zu analysieren oder vorherzusagen.
          </p>
          <li>Pseudonymisierung</li>
          <p className="my-2">
            Pseudonymisierung ist die Verarbeitung personenbezogener Daten in
            einer Weise, auf welche die personenbezogenen Daten ohne
            Hinzuziehung zusätzlicher Informationen nicht mehr einer
            spezifischen betroffenen Person zugeordnet werden können, sofern
            diese zusätzlichen Informationen gesondert aufbewahrt werden und
            technischen und organisatorischen Maßnahmen unterliegen, die
            gewährleisten, dass die personenbezogenen Daten nicht einer
            identifizierten oder identifizierbaren natürlichen Person zugewiesen
            werden.
          </p>
          <li>Verantwortlicher oder für die Verarbeitung Verantwortlicher</li>
          <p className="my-2">
            Verantwortlicher oder für die Verarbeitung Verantwortlicher ist die
            natürliche oder juristische Person, Behörde, Einrichtung oder andere
            Stelle, die allein oder gemeinsam mit anderen über die Zwecke und
            Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            Sind die Zwecke und Mittel dieser Verarbeitung durch das Unionsrecht
            oder das Recht der Mitgliedstaaten vorgegeben, so kann der
            Verantwortliche beziehungsweise können die bestimmten Kriterien
            seiner Benennung nach dem Unionsrecht oder dem Recht der
            Mitgliedstaaten vorgesehen werden.
          </p>
          <li>Auftragsverarbeiter</li>
          <p className="my-2">
            Auftragsverarbeiter ist eine natürliche oder juristische Person,
            Behörde, Einrichtung oder andere Stelle, die personenbezogene Daten
            im Auftrag des Verantwortlichen verarbeitet.
          </p>
          <li>Empfänger</li>
          <p className="my-2">Empfänger ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle, der personenbezogene Daten offengelegt werden, unabhängig davon, ob es sich bei ihr um einen Dritten handelt oder nicht. Behörden, die im Rahmen eines bestimmten Untersuchungsauftrags nach dem Unionsrecht oder dem Recht der Mitgliedstaaten möglicherweise personenbezogene Daten erhalten, gelten jedoch nicht als Empfänger.</p>
          <li>Dritter</li>
          <p className="my-2">Dritter ist eine natürliche oder juristische Person, Behörde, Einrichtung oder andere Stelle außer der betroffenen Person, dem Verantwortlichen, dem Auftragsverarbeiter und den Personen, die unter der unmittelbaren Verantwortung des Verantwortlichen oder des Auftragsverarbeiters befugt sind, die personenbezogenen Daten zu verarbeiten.</p>
          <li>Einwilligung</li>
          <p className="my-2">Einwilligung ist jede von der betroffenen Person freiwillig für den bestimmten Fall in informierter Weise und unmissverständlich abgegebene Willensbekundung in Form einer Erklärung oder einer sonstigen eindeutigen bestätigenden Handlung, mit der die betroffene Person zu verstehen gibt, dass sie mit der Verarbeitung der sie betreffenden personenbezogenen Daten einverstanden ist.></p>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Anschrift">
        <Link href="#Anschrift">
          <h2 className="text-lg my-4">
            2 Name und Anschrift des für die Verarbeitung Verantwortlichen
          </h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Verantwortlicher im Sinne der Datenschutz-Grundverordnung, sonstiger
            in den Mitgliedstaaten der Europäischen Union geltenden
            Datenschutzgesetze und anderer Bestimmungen mit
            datenschutzrechtlichem Charakter ist die:
          </li>
          <li>
            Holzhandlung Heidi Obert <br />
            Rankach 30 <br />
            77709 Oberwolfach <br />
            Deutschland
            <br />
            Tel.: 07834869640 <br />
            E-Mail: info@holzhandlung-obert.de <br />
            Website: www.holzhandlung-obert.de
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Erfassung">
        <Link href="#Erfassung">
          <h2 className="text-lg my-4">
            3 Erfassung von allgemeinen Daten und Informationen
          </h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Die Internetseite der Holzhandlung Heidi Obert erfasst mit jedem
            Aufruf der Internetseite durch eine betroffene Person oder ein
            automatisiertes System eine Reihe von allgemeinen Daten und
            Informationen. Diese allgemeinen Daten und Informationen werden in
            den Logfiles des Servers gespeichert. Erfasst werden können die (1)
            verwendeten Browsertypen und Versionen, (2) das vom zugreifenden
            System verwendete Betriebssystem, (3) die Internetseite, von welcher
            ein zugreifendes System auf unsere Internetseite gelangt (sogenannte
            Referrer), (4) die Unterwebseiten, welche über ein zugreifendes
            System auf unserer Internetseite angesteuert werden, (5) das Datum
            und die Uhrzeit eines Zugriffs auf die Internetseite, (6) eine
            Internet-Protokoll-Adresse (IP-Adresse), (7) der
            Internet-Service-Provider des zugreifenden Systems und (8) sonstige
            ähnliche Daten und Informationen, die der Gefahrenabwehr im Falle
            von Angriffen auf unsere informationstechnologischen Systeme dienen.
          </li>
          <li>
            Bei der Nutzung dieser allgemeinen Daten und Informationen zieht die
            Holzhandlung Heidi Obert keine Rückschlüsse auf die betroffene
            Person. Diese Informationen werden vielmehr benötigt, um (1) die
            Inhalte unserer Internetseite korrekt auszuliefern, (2) die Inhalte
            unserer Internetseite sowie die Werbung für diese zu optimieren, (3)
            die dauerhafte Funktionsfähigkeit unserer
            informationstechnologischen Systeme und der Technik unserer
            Internetseite zu gewährleisten sowie (4) um Strafverfolgungsbehörden
            im Falle eines Cyberangriffes die zur Strafverfolgung notwendigen
            Informationen bereitzustellen. Diese anonym erhobenen Daten und
            Informationen werden durch die Holzhandlung Heidi Obert daher
            einerseits statistisch und ferner mit dem Ziel ausgewertet, den
            Datenschutz und die Datensicherheit in unserem Unternehmen zu
            erhöhen, um letztlich ein optimales Schutzniveau für die von uns
            verarbeiteten personenbezogenen Daten sicherzustellen. Die anonymen
            Daten der Server-Logfiles werden getrennt von allen durch eine
            betroffene Person angegebenen personenbezogenen Daten gespeichert.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Löschung">
        <Link href="#Löschung">
          <h2 className="text-lg my-4">
            4 Routinemäßige Löschung und Sperrung von personenbezogenen Daten
          </h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Der für die Verarbeitung Verantwortliche verarbeitet und speichert
            personenbezogene Daten der betroffenen Person nur für den Zeitraum,
            der zur Erreichung des Speicherungszwecks erforderlich ist oder
            sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber
            oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften,
            welchen der für die Verarbeitung Verantwortliche unterliegt,
            vorgesehen wurde.
          </li>
          <li>
            Entfällt der Speicherungszweck oder läuft eine vom Europäischen
            Richtlinien- und Verordnungsgeber oder einem anderen zuständigen
            Gesetzgeber vorgeschriebene Speicherfrist ab, werden die
            personenbezogenen Daten routinemäßig und entsprechend den
            gesetzlichen Vorschriften gesperrt oder gelöscht.
          </li>
        </ol>
        <NavUpIcon />
      </section>
      <section id="Rechte">
        <Link href="#Rechte">
          <h2 className="text-lg my-4">5 Rechte der betroffenen Person</h2>
        </Link>
        <ol style={{ listStyleType: "lower-latin" }}>
          <li>Recht auf Bestätigung</li>
          <p className="my-2">
            Jede betroffene Person hat das vom Europäischen Richtlinien- und
            Verordnungsgeber eingeräumte Recht, von dem für die Verarbeitung
            Verantwortlichen eine Bestätigung darüber zu verlangen, ob sie
            betreffende personenbezogene Daten verarbeitet werden. Möchte eine
            betroffene Person dieses Bestätigungsrecht in Anspruch nehmen, kann
            sie sich hierzu jederzeit an einen Mitarbeiter des für die
            Verarbeitung Verantwortlichen wenden.
          </p>
          <li>Recht auf Auskunft</li>
          <p className="my-2">
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte
            Recht, jederzeit von dem für die Verarbeitung Verantwortlichen
            unentgeltliche Auskunft über die zu seiner Person gespeicherten
            personenbezogenen Daten und eine Kopie dieser Auskunft zu erhalten.
            Ferner hat der Europäische Richtlinien- und Verordnungsgeber der
            betroffenen Person Auskunft über folgende Informationen zugestanden:
          </p>
          <p className="my-2">
            die Verarbeitungszwecke die Kategorien personenbezogener Daten, die
            verarbeitet werden die Empfänger oder Kategorien von Empfängern,
            gegenüber denen die personenbezogenen Daten offengelegt worden sind
            oder noch offengelegt werden, insbesondere bei Empfängern in
            Drittländern oder bei internationalen Organisationen falls möglich
            die geplante Dauer, für die die personenbezogenen Daten gespeichert
            werden, oder, falls dies nicht möglich ist, die Kriterien für die
            Festlegung dieser Dauer das Bestehen eines Rechts auf Berichtigung
            oder Löschung der sie betreffenden personenbezogenen Daten oder auf
            Einschränkung der Verarbeitung durch den Verantwortlichen oder eines
            Widerspruchsrechts gegen diese Verarbeitung das Bestehen eines
            Beschwerderechts bei einer Aufsichtsbehörde wenn die
            personenbezogenen Daten nicht bei der betroffenen Person erhoben
            werden: Alle verfügbaren Informationen über die Herkunft der Daten
            das Bestehen einer automatisierten Entscheidungsfindung
            einschließlich Profiling gemäß Artikel 22 Abs.1 und 4 DS-GVO und —
            zumindest in diesen Fällen — aussagekräftige Informationen über die
            involvierte Logik sowie die Tragweite und die angestrebten
            Auswirkungen einer derartigen Verarbeitung für die betroffene Person
          </p>
          <p className="my-2">
            Ferner steht der betroffenen Person ein Auskunftsrecht darüber zu,
            ob personenbezogene Daten an ein Drittland oder an eine
            internationale Organisation übermittelt wurden. Sofern dies der Fall
            ist, so steht der betroffenen Person im Übrigen das Recht zu,
            Auskunft über die geeigneten Garantien im Zusammenhang mit der
            Übermittlung zu erhalten.
          </p>
          <p className="my-2">
            Möchte eine betroffene Person dieses Auskunftsrecht in Anspruch
            nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für
            die Verarbeitung Verantwortlichen wenden.
          </p>

          <li>Recht auf Berichtigung</li>
          <p className="my-2">
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte
            Recht, die unverzügliche Berichtigung sie betreffender unrichtiger
            personenbezogener Daten zu verlangen. Ferner steht der betroffenen
            Person das Recht zu, unter Berücksichtigung der Zwecke der
            Verarbeitung, die Vervollständigung unvollständiger
            personenbezogener Daten — auch mittels einer ergänzenden Erklärung —
            zu verlangen.
          </p>
          <p className="my-2">
            Möchte eine betroffene Person dieses Berichtigungsrecht in Anspruch
            nehmen, kann sie sich hierzu jederzeit an einen Mitarbeiter des für
            die Verarbeitung Verantwortlichen wenden.
          </p>

          <li>Recht auf Löschung (Recht auf Vergessen werden)</li>
          <p className="my-2">
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte
            Recht, von dem Verantwortlichen zu verlangen, dass die sie
            betreffenden personenbezogenen Daten unverzüglich gelöscht werden,
            sofern einer der folgenden Gründe zutrifft und soweit die
            Verarbeitung nicht erforderlich ist:
          </p>
          <p className="my-2">
            Die personenbezogenen Daten wurden für solche Zwecke erhoben oder
            auf sonstige Weise verarbeitet, für welche sie nicht mehr notwendig
            sind. Die betroffene Person widerruft ihre Einwilligung, auf die
            sich die Verarbeitung gemäß Art. 6 Abs. 1 Buchstabe a DS-GVO oder
            Art. 9 Abs. 2 Buchstabe a DS-GVO stützte, und es fehlt an einer
            anderweitigen Rechtsgrundlage für die Verarbeitung. Die betroffene
            Person legt gemäß Art. 21 Abs. 1 DS-GVO Widerspruch gegen die
            Verarbeitung ein, und es liegen keine vorrangigen berechtigten
            Gründe für die Verarbeitung vor, oder die betroffene Person legt
            gemäß Art. 21 Abs. 2 DS-GVO Widerspruch gegen die Verarbeitung ein.
            Die personenbezogenen Daten wurden unrechtmäßig verarbeitet. Die
            Löschung der personenbezogenen Daten ist zur Erfüllung einer
            rechtlichen Verpflichtung nach dem Unionsrecht oder dem Recht der
            Mitgliedstaaten erforderlich, dem der Verantwortliche unterliegt.
            Die personenbezogenen Daten wurden in Bezug auf angebotene Dienste
            der Informationsgesellschaft gemäß Art. 8 Abs. 1 DS-GVO erhoben.
          </p>
          <p className="my-2">
            Sofern einer der oben genannten Gründe zutrifft und eine betroffene
            Person die Löschung von personenbezogenen Daten, die bei der
            Holzhandlung Heidi Obert gespeichert sind, veranlassen möchte, kann
            sie sich hierzu jederzeit an einen Mitarbeiter des für die
            Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der
            Holzhandlung Heidi Obert wird veranlassen, dass dem Löschverlangen
            unverzüglich nachgekommen wird.
          </p>
          <p className="my-2">
            Wurden die personenbezogenen Daten von der Holzhandlung Heidi Obert
            öffentlich gemacht und ist unser Unternehmen als Verantwortlicher
            gemäß Art. 17 Abs. 1 DS-GVO zur Löschung der personenbezogenen Daten
            verpflichtet, so trifft die Holzhandlung Heidi Obert unter
            Berücksichtigung der verfügbaren Technologie und der
            Implementierungskosten angemessene Maßnahmen, auch technischer Art,
            um andere für die Datenverarbeitung Verantwortliche, welche die
            veröffentlichten personenbezogenen Daten verarbeiten, darüber in
            Kenntnis zu setzen, dass die betroffene Person von diesen anderen
            für die Datenverarbeitung Verantwortlichen die Löschung sämtlicher
            Links zu diesen personenbezogenen Daten oder von Kopien oder
            Replikationen dieser personenbezogenen Daten verlangt hat, soweit
            die Verarbeitung nicht erforderlich ist. Der Mitarbeiter der
            Holzhandlung Heidi Obert wird im Einzelfall das Notwendige
            veranlassen.
          </p>

          <li>Recht auf Einschränkung der Verarbeitung</li>
          <p className="my-2">
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte
            Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung
            zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:
          </p>
          <p className="my-2">
            Die Richtigkeit der personenbezogenen Daten wird von der betroffenen
            Person bestritten, und zwar für eine Dauer, die es dem
            Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen
            Daten zu überprüfen. Die Verarbeitung ist unrechtmäßig, die
            betroffene Person lehnt die Löschung der personenbezogenen Daten ab
            und verlangt stattdessen die Einschränkung der Nutzung der
            personenbezogenen Daten. Der Verantwortliche benötigt die
            personenbezogenen Daten für die Zwecke der Verarbeitung nicht
            länger, die betroffene Person benötigt sie jedoch zur
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Die
            betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art.
            21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die
            berechtigten Gründe des Verantwortlichen gegenüber denen der
            betroffenen Person überwiegen.
          </p>
          <p className="my-2">
            Sofern eine der oben genannten Voraussetzungen gegeben ist und eine
            betroffene Person die Einschränkung von personenbezogenen Daten, die
            bei der Holzhandlung Heidi Obert gespeichert sind, verlangen möchte,
            kann sie sich hierzu jederzeit an einen Mitarbeiter des für die
            Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der
            Holzhandlung Heidi Obert wird die Einschränkung der Verarbeitung
            veranlassen.
          </p>

          <li> Recht auf Einschränkung der Verarbeitung</li>
          <p className="my-2">
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte
            Recht, von dem Verantwortlichen die Einschränkung der Verarbeitung
            zu verlangen, wenn eine der folgenden Voraussetzungen gegeben ist:
          </p>
          <p className="my-2">
            Die Richtigkeit der personenbezogenen Daten wird von der betroffenen
            Person bestritten, und zwar für eine Dauer, die es dem
            Verantwortlichen ermöglicht, die Richtigkeit der personenbezogenen
            Daten zu überprüfen. Die Verarbeitung ist unrechtmäßig, die
            betroffene Person lehnt die Löschung der personenbezogenen Daten ab
            und verlangt stattdessen die Einschränkung der Nutzung der
            personenbezogenen Daten. Der Verantwortliche benötigt die
            personenbezogenen Daten für die Zwecke der Verarbeitung nicht
            länger, die betroffene Person benötigt sie jedoch zur
            Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen. Die
            betroffene Person hat Widerspruch gegen die Verarbeitung gem. Art.
            21 Abs. 1 DS-GVO eingelegt und es steht noch nicht fest, ob die
            berechtigten Gründe des Verantwortlichen gegenüber denen der
            betroffenen Person überwiegen.
          </p>
          <p className="my-2">
            Sofern eine der oben genannten Voraussetzungen gegeben ist und eine
            betroffene Person die Einschränkung von personenbezogenen Daten, die
            bei der Holzhandlung Heidi Obert gespeichert sind, verlangen möchte,
            kann sie sich hierzu jederzeit an einen Mitarbeiter des für die
            Verarbeitung Verantwortlichen wenden. Der Mitarbeiter der
            Holzhandlung Heidi Obert wird die Einschränkung der Verarbeitung
            veranlassen.
          </p>
          <li>Recht auf Datenübertragbarkeit</li>
          <p className="my-2">
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte
            Recht, die sie betreffenden personenbezogenen Daten, welche durch
            die betroffene Person einem Verantwortlichen bereitgestellt wurden,
            in einem strukturierten, gängigen und maschinenlesbaren Format zu
            erhalten. Sie hat außerdem das Recht, diese Daten einem anderen
            Verantwortlichen ohne Behinderung durch den Verantwortlichen, dem
            die personenbezogenen Daten bereitgestellt wurden, zu übermitteln,
            sofern die Verarbeitung auf der Einwilligung gemäß Art. 6 Abs. 1
            Buchstabe a DS-GVO oder Art. 9 Abs. 2 Buchstabe a DS-GVO oder auf
            einem Vertrag gemäß Art. 6 Abs. 1 Buchstabe b DS-GVO beruht und die
            Verarbeitung mithilfe automatisierter Verfahren erfolgt, sofern die
            Verarbeitung nicht für die Wahrnehmung einer Aufgabe erforderlich
            ist, die im öffentlichen Interesse liegt oder in Ausübung
            öffentlicher Gewalt erfolgt, welche dem Verantwortlichen übertragen
            wurde.
          </p>
          <p className="my-2">
            Ferner hat die betroffene Person bei der Ausübung ihres Rechts auf
            Datenübertragbarkeit gemäß Art. 20 Abs. 1 DS-GVO das Recht, zu
            erwirken, dass die personenbezogenen Daten direkt von einem
            Verantwortlichen an einen anderen Verantwortlichen übermittelt
            werden, soweit dies technisch machbar ist und sofern hiervon nicht
            die Rechte und Freiheiten anderer Personen beeinträchtigt werden.
          </p>

          <p className="my-2">
            Zur Geltendmachung des Rechts auf Datenübertragbarkeit kann sich die
            betroffene Person jederzeit an einen Mitarbeiter der Holzhandlung
            Heidi Obert wenden.
          </p>

          <li>Recht auf Widerspruch</li>
          <p className="my-2">
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte
            Recht, aus Gründen, die sich aus ihrer besonderen Situation ergeben,
            jederzeit gegen die Verarbeitung sie betreffender personenbezogener
            Daten, die aufgrund von Art. 6 Abs. 1 Buchstaben e oder f DS-GVO
            erfolgt, Widerspruch einzulegen. Dies gilt auch für ein auf diese
            Bestimmungen gestütztes Profiling.
          </p>
          <p className="my-2">
            Die Holzhandlung Heidi Obert verarbeitet die personenbezogenen Daten
            im Falle des Widerspruchs nicht mehr, es sei denn, wir können
            zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die
            den Interessen, Rechten und Freiheiten der betroffenen Person
            überwiegen, oder die Verarbeitung dient der Geltendmachung, Ausübung
            oder Verteidigung von Rechtsansprüchen.
          </p>

          <p className="my-2">
            Verarbeitet die Holzhandlung Heidi Obert personenbezogene Daten, um
            Direktwerbung zu betreiben, so hat die betroffene Person das Recht,
            jederzeit Widerspruch gegen die Verarbeitung der personenbezogenen
            Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch für
            das Profiling, soweit es mit solcher Direktwerbung in Verbindung
            steht. Widerspricht die betroffene Person gegenüber der Holzhandlung
            Heidi Obert der Verarbeitung für Zwecke der Direktwerbung, so wird
            die Holzhandlung Heidi Obert die personenbezogenen Daten nicht mehr
            für diese Zwecke verarbeiten.
          </p>
          <p className="my-2">
            Zudem hat die betroffene Person das Recht, aus Gründen, die sich aus
            ihrer besonderen Situation ergeben, gegen die sie betreffende
            Verarbeitung personenbezogener Daten, die bei der Holzhandlung Heidi
            Obert zu wissenschaftlichen oder historischen Forschungszwecken oder
            zu statistischen Zwecken gemäß Art. 89 Abs. 1 DS-GVO erfolgen,
            Widerspruch einzulegen, es sei denn, eine solche Verarbeitung ist
            zur Erfüllung einer im öffentlichen Interesse liegenden Aufgabe
            erforderlich.
          </p>

          <p className="my-2">
            Zur Ausübung des Rechts auf Widerspruch kann sich die betroffene
            Person direkt jeden Mitarbeiter der Holzhandlung Heidi Obert oder
            einen anderen Mitarbeiter wenden. Der betroffenen Person steht es
            ferner frei, im Zusammenhang mit der Nutzung von Diensten der
            Informationsgesellschaft, ungeachtet der Richtlinie 2002/58/EG, ihr
            Widerspruchsrecht mittels automatisierter Verfahren auszuüben, bei
            denen technische Spezifikationen verwendet werden.
          </p>

          <li>
            Automatisierte Entscheidungen im Einzelfall einschließlich Profiling
          </li>
          <p className="my-2">
            Jede von der Verarbeitung personenbezogener Daten betroffene Person
            hat das vom Europäischen Richtlinien- und Verordnungsgeber gewährte
            Recht, nicht einer ausschließlich auf einer automatisierten
            Verarbeitung — einschließlich Profiling — beruhenden Entscheidung
            unterworfen zu werden, die ihr gegenüber rechtliche Wirkung
            entfaltet oder sie in ähnlicher Weise erheblich beeinträchtigt,
            sofern die Entscheidung (1) nicht für den Abschluss oder die
            Erfüllung eines Vertrags zwischen der betroffenen Person und dem
            Verantwortlichen erforderlich ist, oder (2) aufgrund von
            Rechtsvorschriften der Union oder der Mitgliedstaaten, denen der
            Verantwortliche unterliegt, zulässig ist und diese
            Rechtsvorschriften angemessene Maßnahmen zur Wahrung der Rechte und
            Freiheiten sowie der berechtigten Interessen der betroffenen Person
            enthalten oder (3) mit ausdrücklicher Einwilligung der betroffenen
            Person erfolgt.
          </p>
          <p className="my-2">
            Ist die Entscheidung (1) für den Abschluss oder die Erfüllung eines
            Vertrags zwischen der betroffenen Person und dem Verantwortlichen
            erforderlich oder (2) erfolgt sie mit ausdrücklicher Einwilligung
            der betroffenen Person, trifft die Holzhandlung Heidi Obert
            angemessene Maßnahmen, um die Rechte und Freiheiten sowie die
            berechtigten Interessen der betroffenen Person zu wahren, wozu
            mindestens das Recht auf Erwirkung des Eingreifens einer Person
            seitens des Verantwortlichen, auf Darlegung des eigenen Standpunkts
            und auf Anfechtung der Entscheidung gehört.
          </p>

          <p className="my-2">
            Möchte die betroffene Person Rechte mit Bezug auf automatisierte
            Entscheidungen geltend machen, kann sie sich hierzu jederzeit an
            einen Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
          </p>
          <li>Recht auf Widerruf einer datenschutzrechtlichen Einwilligung</li>
          <p className="my-2">
            Recht auf Widerruf einer datenschutzrechtlichen Einwilligung
          </p>
          <p className="my-2">
            Möchte die betroffene Person ihr Recht auf Widerruf einer
            Einwilligung geltend machen, kann sie sich hierzu jederzeit an einen
            Mitarbeiter des für die Verarbeitung Verantwortlichen wenden.
          </p>
        </ol>
      </section>

      <section id="Rechtsgrundlage">
        <Link href="#Rechtsgrundlage">
          <h2 className="text-lg my-4">6 Rechtsgrundlage der Verarbeitung</h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Art. 6 I lit. a DS-GVO dient unserem Unternehmen als Rechtsgrundlage
            für Verarbeitungsvorgänge, bei denen wir eine Einwilligung für einen
            bestimmten Verarbeitungszweck einholen. Ist die Verarbeitung
            personenbezogener Daten zur Erfüllung eines Vertrags, dessen
            Vertragspartei die betroffene Person ist, erforderlich, wie dies
            beispielsweise bei Verarbeitungsvorgängen der Fall ist, die für eine
            Lieferung von Waren oder die Erbringung einer sonstigen Leistung
            oder Gegenleistung notwendig sind, so beruht die Verarbeitung auf
            Art. 6 I lit. b DS-GVO. Gleiches gilt für solche
            Verarbeitungsvorgänge die zur Durchführung vorvertraglicher
            Maßnahmen erforderlich sind, etwa in Fällen von Anfragen zur unseren
            Produkten oder Leistungen. Unterliegt unser Unternehmen einer
            rechtlichen Verpflichtung durch welche eine Verarbeitung von
            personenbezogenen Daten erforderlich wird, wie beispielsweise zur
            Erfüllung steuerlicher Pflichten, so basiert die Verarbeitung auf
            Art. 6 I lit. c DS-GVO. In seltenen Fällen könnte die Verarbeitung
            von personenbezogenen Daten erforderlich werden, um lebenswichtige
            Interessen der betroffenen Person oder einer anderen natürlichen
            Person zu schützen. Dies wäre beispielsweise der Fall, wenn ein
            Besucher in unserem Betrieb verletzt werden würde und daraufhin sein
            Name, sein Alter, seine Krankenkassendaten oder sonstige
            lebenswichtige Informationen an einen Arzt, ein Krankenhaus oder
            sonstige Dritte weitergegeben werden müssten. Dann würde die
            Verarbeitung auf Art. 6 I lit. d DS-GVO beruhen. Letztlich könnten
            Verarbeitungsvorgänge auf Art. 6 I lit. f DS-GVO beruhen. Auf dieser
            Rechtsgrundlage basieren Verarbeitungsvorgänge, die von keiner der
            vorgenannten Rechtsgrundlagen erfasst werden, wenn die Verarbeitung
            zur Wahrung eines berechtigten Interesses unseres Unternehmens oder
            eines Dritten erforderlich ist, sofern die Interessen, Grundrechte
            und Grundfreiheiten des Betroffenen nicht überwiegen. Solche
            Verarbeitungsvorgänge sind uns insbesondere deshalb gestattet, weil
            sie durch den Europäischen Gesetzgeber besonders erwähnt wurden. Er
            vertrat insoweit die Auffassung, dass ein berechtigtes Interesse
            anzunehmen sein könnte, wenn die betroffene Person ein Kunde des
            Verantwortlichen ist (Erwägungsgrund 47 Satz 2 DS-GVO).
          </li>
        </ol>
      </section>

      <section id="Berechtigte">
        <Link href="#Berechtigte">
          <h2 className="text-lg my-4">
            7 Berechtigte Interessen an der Verarbeitung, die von dem
            Verantwortlichen oder einem Dritten verfolgt werden
          </h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Basiert die Verarbeitung personenbezogener Daten auf Artikel 6 I
            lit. f DS-GVO ist unser berechtigtes Interesse die Durchführung
            unserer Geschäftstätigkeit zugunsten des Wohlergehens all unserer
            Mitarbeiter und unserer Anteilseigner.
          </li>
        </ol>
      </section>

      <section id="Dauer">
        <Link href="#Dauer">
          <h2 className="text-lg my-4">
            8 Dauer, für die die personenbezogenen Daten gespeichert werden
          </h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Das Kriterium für die Dauer der Speicherung von personenbezogenen
            Daten ist die jeweilige gesetzliche Aufbewahrungsfrist. Nach Ablauf
            der Frist werden die entsprechenden Daten routinemäßig gelöscht,
            sofern sie nicht mehr zur Vertragserfüllung oder Vertragsanbahnung
            erforderlich sind.
          </li>
        </ol>
      </section>

      <section id="Vorschriften">
        <Link href="#Vorschriften">
          <h2 className="text-lg my-4">
            9 Gesetzliche oder vertragliche Vorschriften zur Bereitstellung der
            personenbezogenen Daten; Erforderlichkeit für den Vertragsabschluss;
            Verpflichtung der betroffenen Person, die personenbezogenen Daten
            bereitzustellen; mögliche Folgen der Nichtbereitstellung
          </h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Wir klären Sie darüber auf, dass die Bereitstellung
            personenbezogener Daten zum Teil gesetzlich vorgeschrieben ist (z.B.
            Steuervorschriften) oder sich auch aus vertraglichen Regelungen
            (z.B. Angaben zum Vertragspartner) ergeben kann. Mitunter kann es zu
            einem Vertragsschluss erforderlich sein, dass eine betroffene Person
            uns personenbezogene Daten zur Verfügung stellt, die in der Folge
            durch uns verarbeitet werden müssen. Die betroffene Person ist
            beispielsweise verpflichtet uns personenbezogene Daten
            bereitzustellen, wenn unser Unternehmen mit ihr einen Vertrag
            abschließt. Eine Nichtbereitstellung der personenbezogenen Daten
            hätte zur Folge, dass der Vertrag mit dem Betroffenen nicht
            geschlossen werden könnte. Vor einer Bereitstellung
            personenbezogener Daten durch den Betroffenen muss sich der
            Betroffene an einen unserer Mitarbeiter wenden. Unser Mitarbeiter
            klärt den Betroffenen einzelfallbezogen darüber auf, ob die
            Bereitstellung der personenbezogenen Daten gesetzlich oder
            vertraglich vorgeschrieben oder für den Vertragsabschluss
            erforderlich ist, ob eine Verpflichtung besteht, die
            personenbezogenen Daten bereitzustellen, und welche Folgen die
            Nichtbereitstellung der personenbezogenen Daten hätte.
          </li>
        </ol>
      </section>

      <section id="Entscheidungsfindung">
        <Link href="#Entscheidungsfindung">
          <h2 className="text-lg my-4">
            10 Bestehen einer automatisierten Entscheidungsfindung
          </h2>
        </Link>
        <ol start={1} type="1">
          <li>
            Als verantwortungsbewusstes Unternehmen verzichten wir auf eine
            automatische Entscheidungsfindung oder ein Profiling.
          </li>
        </ol>
      </section>

      <br />

      <p className="text-small">
        Diese Datenschutzerklärung wurde durch den
        Datenschutzerklärungs-Generator der DGD Deutsche Gesellschaft für
        Datenschutz GmbH, die als
        <a
          href="https://dg-datenschutz.de/datenschutz-dienstleistungen/externer-datenschutzbeauftragter/"
          rel="nofollow"
        >
          Externer Datenschutzbeauftragter Ingolstadt
        </a>
        tätig ist, in Kooperation mit dem
        <a
          href="https://www.wbs-law.de/it-recht/datenschutzrecht"
          rel="nofollow"
        >
          IT- und Datenschutzrecht Anwalt Christian Solmecke
        </a>
        erstellt.
      </p>
      <br />
    </div>
  );
}
