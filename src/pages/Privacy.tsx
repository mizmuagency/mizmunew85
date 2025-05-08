import React from 'react';
import { Link } from 'react-router-dom';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

const Privacy = () => {
  return (
    <div className="min-h-screen text-black relative overflow-hidden bg-white flex flex-col">
      <div className="relative z-20 flex-1 flex flex-col">
        {/* Logo */}
        <div className="fixed top-safe-top left-safe-left z-50 p-4 xs:p-6 sm:p-8">
          <Link 
            to="/" 
            className="text-fluid-xl font-montreal font-bold tracking-tight hover:opacity-70 transition-opacity touch-target"
          >
            mizmu
          </Link>
        </div>

        <Menu />

        <main className="flex-1 flex flex-col">
          <div className="container mx-auto px-4 md:px-8 pt-32 xs:pt-36 sm:pt-40 pb-12 md:pb-20 flex-1">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-4xl font-light mb-8">Datenschutzrichtlinie</h1>
              
              <div className="space-y-8">
                <section>
                  <h2 className="text-2xl font-light mb-4">Einführung</h2>
                  <p className="text-gray-600">
                    Bei mizmu respektieren wir Ihre Privatsphäre und verpflichten uns zum Schutz Ihrer persönlichen Daten. In dieser
                    Datenschutzrichtlinie wird erläutert, wie wir Ihre Daten erfassen, verwenden und weitergeben, wenn Sie unsere
                    Website besuchen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">Datenerfassung</h2>
                  <p className="text-gray-600">
                    Wir erfassen verschiedene Arten von Informationen im Zusammenhang mit den von uns bereitgestellten Diensten,
                    darunter: persönliche Identifikationsinformationen (Name, E-Mail-Adresse, Telefonnummer usw.), Nutzungsdaten
                    (Ihre Interaktionen mit unserer Website), technische Daten (IP-Adresse, Browsertyp und -version).
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">Verwendung von Daten</h2>
                  <p className="text-gray-600">
                    Wir verwenden Ihre Daten, um: unsere Dienste bereitzustellen, zu betreiben und zu warten, unsere Website zu
                    verbessern und zu personalisieren, mit Ihnen zu kommunizieren, die Nutzung und Trends zu überwachen und zu
                    analysieren, um die Benutzererfahrung zu verbessern.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">Datenaustausch und Offenlegung</h2>
                  <p className="text-gray-600">
                    Wir verkaufen oder geben Ihre persönlichen Daten nicht an Dritte weiter, ausser um das Gesetz einzuhalten, unsere
                    Rechte zu schützen oder Ihnen die Dienste bereitzustellen.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">Benutzerrechte</h2>
                  <p className="text-gray-600">
                    Sie haben das Recht, auf Ihre personenbezogenen Daten zuzugreifen, diese zu korrigieren oder zu löschen. Sie
                    können der Verarbeitung Ihrer Daten auch widersprechen oder diese einschränken. Um diese Rechte auszuüben,
                    kontaktieren Sie uns bitte unter hello@mizmu.ch.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">Cookie-Richtlinie</h2>
                  <p className="text-gray-600">
                    mizmu verwendet Cookies, um Ihr Surferlebnis zu verbessern und personalisierte Dienste bereitzustellen. Durch
                    die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäss dieser Richtlinie zu.
                  </p>
                </section>

                <section>
                  <h2 className="text-2xl font-light mb-4">Geschäftsbedingungen</h2>
                  <div className="space-y-4">
                    <h3 className="text-xl font-light">Einführung</h3>
                    <p className="text-gray-600">
                      Willkommen bei mizmu. Diese Allgemeinen Geschäftsbedingungen regeln Ihre Nutzung unserer Website,
                      zugänglich unter https://mizmu.ch. Durch den Zugriff auf oder die Nutzung unserer Website erklären Sie sich mit
                      diesen Bedingungen einverstanden. Wenn Sie mit einem Teil dieser Bedingungen nicht einverstanden sind, nutzen
                      Sie unsere Website bitte nicht.
                    </p>

                    <h3 className="text-xl font-light">Verantwortlichkeiten des Benutzers</h3>
                    <p className="text-gray-600">
                      Von den Benutzern wird erwartet, dass sie mizmu verantwortungsbewusst nutzen. Sie erklären sich damit
                      einverstanden, unsere Website nicht in einer Weise zu nutzen, die der Website schaden könnte, ihre Verfügbarkeit
                      oder Zugänglichkeit beeinträchtigt oder für rechtswidrige, illegale, betrügerische oder schädliche Zwecke oder
                      Aktivitäten dient.
                    </p>

                    <h3 className="text-xl font-light">Geistige Eigentumsrechte</h3>
                    <p className="text-gray-600">
                      Sofern nicht anders angegeben, besitzen mizmu und seine Lizenzgeber die geistigen Eigentumsrechte für alle
                      Materialien auf mizmu. Sie können über mizmu für Ihren persönlichen Gebrauch darauf zugreifen, es ist Ihnen
                      jedoch nicht gestattet, Material von unserer Website erneut zu veröffentlichen, zu verkaufen, zu vermieten oder
                      eine Unterlizenz zu erteilen.
                    </p>

                    <h3 className="text-xl font-light">Haftungsbeschränkungen</h3>
                    <p className="text-gray-600">
                      mizmu haftet nicht für indirekte, zufällige, besondere, Folge- oder Strafschäden oder für entgangene Gewinne
                      oder Einnahmen, unabhängig davon, ob sie direkt oder indirekt entstehen, oder für Daten-, Nutzungs-,
                      Firmenwert- oder andere immaterielle Verluste, die aus Ihrer Nutzung der Website resultieren.
                    </p>

                    <h3 className="text-xl font-light">Geltendes Recht</h3>
                    <p className="text-gray-600">
                      Diese Allgemeinen Geschäftsbedingungen unterliegen dem Recht der Schweiz. Alle Streitigkeiten, die sich aus
                      oder im Zusammenhang mit diesen Bedingungen ergeben, unterliegen der ausschliesslichen Zuständigkeit der
                      Gerichte der Schweiz.
                    </p>

                    <h3 className="text-xl font-light">Cookie-Richtlinie</h3>
                    <p className="text-gray-600">
                      mizmu verwendet Cookies, um Ihr Surferlebnis zu verbessern und personalisierte Dienste bereitzustellen. Durch
                      die Nutzung unserer Website stimmen Sie der Verwendung von Cookies gemäss dieser Richtlinie zu.
                    </p>
                  </div>
                </section>
              </div>
            </div>
          </div>

          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Privacy;