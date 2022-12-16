import React from "react";
import "./style.css";
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import Footerr from "../footer/Footer";
import Sidebar from "../Sidebar/Sidebar";

function Service() {
  return (
    <div>
      <div>
        <marquee bgcolor="grey" loop="-1" scrollamount="5" width="100%">
          Jusqu'à <span style={{ color: "red" }}>-20%</span> du mardi au jeudi{" "}
        </marquee>

        <img
          className="service"
          src="https://www.kayak.fr/c/wp-content/uploads/sites/202/2020/09/1-booking-header-1-1536x787.jpg"
          alt="voiture"
          style={{ width: "100%", height: "400px" }}
        ></img>
      </div>
      <div>
        <h1
          className="title"
          style={{ padding: "25px 50px 75px", margin: "auto" }}
        >
          Comment louer une voiture
        </h1>
      </div>

      <div className="all-parag" style={{ textAlign: "justify" }}>
        <div className="first-parag">
          <p>
            Avec nous louer une voiture prend moins de 10 minutes si vous savez
            de quels documents vous avez besoin et ce que vous
            cherchez.Découvrez comment louer une voiture et trouver une bonne
            affaire.
          </p>
        </div>
        <div className="second-parag">
          <div className="first-faq">
            <ul>
              <li>
                <a href="#document">Documents pour une location</a>
              </li>
              <li>
                <a href="#comment-louer">Location </a>
              </li>
              <li>
                <a href="#rendre-voiture">Rendre une voiture</a>{" "}
              </li>
            </ul>
          </div>
          <div className="second-faq">
            <ul>
              <li>
                <a href="#choisir-voiture">Quelle voiture choisir</a>{" "}
              </li>
              <li>
                <a href="#recuperer-voiture"> Récupérer une voiture</a>
              </li>
              <li>
                <a href="#Faq">FAQ</a>
              </li>
            </ul>
          </div>
        </div>
        <div id="comment-louer">
          <h2>Comment louer une voiture ?</h2>
          <p>
            Vous avez donc décidé de louer une voiture. Vous vous préparez pour
            un long voyage en voiture avec votre famille, vous atterrissez dans
            une ville pour un court voyage d’affaires ou vous cherchez
            simplement une voiture pour déplacer des meubles. Quelle que soit la
            raison pour laquelle vous louez une voiture, il est bon de vous
            familiariser avec le processus afin de profiter d’une offre
            exceptionnelle. Au moins, vous devriez être en mesure de savoir
            quels documents il vous faut pour louer une voiture, comment obtenir
            une location de voiture bon marché, comment se passent la
            réservation et les paiements, comment marchent les différents types
            d’assurances et comment fonctionnent la prise en charge et la
            restitution du véhicule. Une fois que vous savez ce que vous
            cherchez, vous pouvez louer la voiture idéale pour votre voyage en
            moins de 10 minutes.
          </p>
        </div>
        <div>
          <img
            className="img-fluid rounded"
            src="https://www.kayak.fr/c/wp-content/uploads/sites/202/2020/09/2-booking-1920x1312-1-e1609930911118-768x519.jpg"
            alt="voiture"
            width={"95%"}
          ></img>
        </div>
        <div>
          <img
            className="img-fluid rounded"
            src="https://www.kayak.fr/c/wp-content/uploads/sites/202/2020/09/theme_travel_gettyimages-698025966-1-1-768x525.jpg"
            alt="voiture"
            width={"95%"}
          ></img>
        </div>
        <div id="document">
          <h1>De quoi avez-vous besoin pour louer une voiture ?</h1>
          <p>
            Pour louer une voiture, vous devrez fournir un moyen de paiement et
            des documents valides, être dans la tranche d’âge légale locale pour
            pouvoir louer un véhicule et fournir une attestation d’assurance
            garantissant que vous êtes couvert à tout moment.
          </p>
          <hr style={{ color: "#192024" }}></hr>
          <div className="foire_aux_question">
            <MDBContainer
              className=" blocFac mt-5"
              style={{ maxWidth: "1000px" }}
            >
              <MDBAccordion alwaysOpen initialActive={1}>
                <MDBAccordionItem
                  collapseId={1}
                  headerTitle="Documents pour louer une voiture"
                >
                  Pour pouvoir louer une voiture en Tunisie, vous aurez besoin
                  des documents suivants : Permis de conduire en cours de
                  validité Pièce d’identité : carte nationale d’identité ou
                  passeport en cours de validité Justificatif de domicile : avis
                  d’imposition ou facture d’eau/électricité/gaz Si vous comptez
                  louer une voiture et vous rendre à l’étranger, assurez-vous de
                  vous munir des documents suivants avant de voyager : Permis de
                  conduire en cours de validité Permis de conduire international
                  (si vous conduisez dans un pays hors UE) Passeport comme pièce
                  d’identité
                </MDBAccordionItem>
                <MDBAccordionItem
                  collapseId={2}
                  headerTitle="Paiement et dépot de garantie"
                >
                  La plupart des agences de location de voitures exigent une
                  carte de crédit pour le paiement car elles préfèrent demander
                  un dépôt de garantie lorsque vous récupérez la voiture, somme
                  qui vous sera restituée au moment de rendre le véhicule si
                  aucun dommage n’est constaté. Certaines sociétés de location
                  de voitures peuvent accepter les cartes de débit, mais dans ce
                  cas, vous devez vous assurer de disposer des fonds appropriés
                  pour couvrir l’intégralité des frais de location. Veuillez
                  lire l’article sur la location de voitures sans carte de
                  crédit pour plus d’informations.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle="Age minimal">
                  Vous devez être âgé d’au moins 21 ans pour pouvoir louer une
                  voiture en Tunisie et être en possession d’un permis de
                  conduire depuis au moins 1 an. Pour certains véhicules
                  utilitaires, l’âge minimum est de 25 ans, avec 3 ans
                  d’ancienneté concernant le permis de conduire. Si l’âge
                  minimal est fixé à 21 ans dans la plupart des pays européens,
                  certains autorisent la location de voitures à partir de 18
                  ans, notamment l’Allemagne, l’Autriche et la Suède. Veuillez
                  lire en intégralité l’article sur les restrictions d’âge pour
                  la location de voitures dans les différents pays pour plus
                  d’informations.
                </MDBAccordionItem>
                <MDBAccordionItem collapseId={2} headerTitle="Assurance">
                  En général, les contrats d’assurance des loueurs de voitures
                  prévoient simplement une assurance Responsabilité Civile (RC),
                  pour réparer les dommages causés aux autres avec la voiture de
                  location. À quoi s’ajoutent parfois le vol, la tentative de
                  vol, l’incendie, les dommages causés au véhicule par un tiers.
                  Néanmoins, ces prestations sont assorties de franchises,
                  c’est-à-dire de sommes restant à votre charge quoiqu’il en
                  soit. Vous devez lire attentivement le contrat de location. Si
                  le contrat d’assurance ne vous semble pas suffisant, vous
                  pouvez souscrire des options supplémentaires proposées par le
                  loueur pour couvrir par exemple le vol, le bris de glace, le
                  dépannage, les crevaisons… Si vous êtes déjà conducteur d’une
                  voiture, vous êtes titulaire d’une assurance auto. Avant même
                  de vous rendre chez le loueur, prenez votre contrat
                  d’assurance, ou appelez votre assureur pour vérifier si la
                  location d’un véhicule est prévue au contrat.
                </MDBAccordionItem>
              </MDBAccordion>
            </MDBContainer>
          </div>
        </div>
        <div id="choisir-voiture">
          <h2>Quelle agence de location de voitures choisir ?</h2>
          <p>
            Lorsque vous venez récupérer une voiture de location, il est
            important de regarder au-delà du choix du véhicule lui-même.
            Assurez-vous de faire attention aux suppléments tels que le
            kilométrage illimité, idéal si vous prévoyez un long trajet en
            voiture, ou une politique d’annulation flexible qui vous permettra
            d’avoir l’esprit tranquille en cas de changement de dernière minute.
            La meilleure agence de location de voiture est celle qui propose des
            services adaptés à tous vos besoins. Vérifiez l’assurance qui est
            incluse pour garantir d’être couvert en cas d’accident et, pour
            votre tranquillité d’esprit, lisez les politiques des agences en
            matière de santé et de sécurité liées au COVID-19.
          </p>
        </div>
        <div>
          <img
            className="img-fluid rounded"
            src="https://www.kayak.fr/c/wp-content/uploads/sites/202/2020/09/2-payment-1920x1312-1-e1609931298986-768x525.jpg"
            alt="voiture"
            width={"95%"}
          ></img>
        </div>
      </div>
      <div className="comment-louer" style={{ textAlign: "justify" }}>
        <h2>Comment louer une voiture ?</h2>
        Avec nous vous pouvez effectuer vos recherches parmi des centaines
        d’agences de location de voitures à la fois afin que vous puissiez
        filtrer et comparer tous les résultats pour une destination et des dates
        données. Vous pouvez étudier les différentes offres et comparer les prix
        sur un seul site sans avoir à ouvrir de nombreux onglets et à naviguer
        pendant des heures. Voici comment trouver une location de voiture bon
        marché :
        <img
          className="img-fluid rounded"
          src="https://www.kayak.fr/c/wp-content/uploads/sites/202/2020/09/3-booking-image-e1609931654849.jpg"
          alt=""
        ></img>
      </div>
      <div className="all-parag" style={{ textAlign: "justify" }}>
        <div>
          <hr></hr>
          <h4>1. Sélectionnez vos dates</h4>
          <p>
            La première chose à faire et de choisir vos dates de prise en charge
            et de restitution. C’est plutôt évident mais essayez d’être le plus
            précis possible concernant les heures d’arrivée et de départ car
            cela affecte le prix et la disponibilité des voitures de location.
            Vous pouvez également choisir entre « même lieu de retour » et «
            autre lieu de retour », de façon à louer une voiture pour un voyage
            et la restituer à votre destination finale.
          </p>
        </div>
        <div>
          <hr></hr>
          <h4>2. Appliquez des filtres</h4>
          <p>
            Filtrez par catégorie de véhicule si vous savez déjà si vous voulez
            une petite voiture, une berline de taille normale, un SUV, une
            voiture de luxe, etc. KAYAK a simplifié les termes du filtre pour
            qu’il ne s’applique qu’aux petites, moyennes, grandes, SUV, voitures
            de luxe et pick-up afin d’éviter toute confusion avec les termes de
            l’industrie. Cependant, si vous voulez en savoir plus sur les types
            de véhicules de location,
          </p>
        </div>
        <div>
          <hr></hr>
          <h4>3. Regardez les offres</h4>
          <p>
            Lorsque vous êtes prêt à réserver un itinéraire particulier,
            sélectionnez « Voir l’offre » pour continuer. Selon l’offre, vous
            pouvez terminer la réservation sur le site KAYAK ou être redirigé
            vers le site de l’agence de location de voitures. Le prix sera le
            même dans les deux cas mais vous devez parfois prendre en compte
            cette petite étape supplémentaire.
          </p>
        </div>
        <div>
          <hr></hr>
          <h4>4. Terminez votre réservation</h4>
          <p>
            Quand c’est le moment de terminer votre réservation, vous pourrez
            vérifier à nouveau les détails de votre offre et ajouter des
            suppléments, le cas échéant. Enfin, n’oubliez pas que vous réservez
            une catégorie de véhicule, mais le modèle exact qui vous sera
            attribué dépend des disponibilités.
          </p>
        </div>

        <div>
          <h2>Trouver une voiture</h2>
          <img
            className="img-fluid rounded"
            src="https://www.kayak.fr/c/wp-content/uploads/sites/202/2020/09/6-booking-1-e1609932557187-768x521.jpg"
            alt=""
          ></img>
        </div>
        <div id="recuperer-voiture">
          <h2>Prise en charge de la voiture de location</h2>
          <p>
            Lorsque vous êtes prêt à récupérer votre voiture de location,
            n’oubliez pas de vous munir d’un permis de conduire valide, des
            permis de conduire additionnels requis et d’une deuxième pièce
            d’identité. Présentez le moyen de paiement que vous avez déjà
            utilisé si vous avez réglé en ligne ou le moyen de paiement avec
            lequel vous souhaitez payer sur place. Lisez toujours les conditions
            générales et vérifiez une dernière fois que tout est correct avant
            de payer. L’agence de location vous fournira un bref rapport sur
            l’état du véhicule mais prenez des photos avant de partir pour plus
            de sécurité quant aux petites bosses ou éraflures que vous avez pu
            constater sur la voiture.
          </p>
        </div>
        <div id="rendre-voiture">
          <h2>Restitution de la voiture de location</h2>
          <p>
            Lorsque vous déposez votre voiture de location, assurez-vous d’avoir
            suffisamment de temps pour la rendre pendant votre période de
            location. Nous avons énuméré ci-dessous certains des facteurs les
            plus importants à prendre en compte lors de la restitution de votre
            véhicule, mais veillez à lire attentivement votre contrat de
            location : Planifiez votre itinéraire à l’avance pour être sûr
            d’arriver à l’heure ou même un peu plus tôt. Choisissez la
            station-service la plus proche du lieu de restitution pour faire le
            plein en cours de route. Une fois arrivé, prenez des photos de la
            voiture à l’intérieur et à l’extérieur, au cas où vous décideriez de
            contester les éventuels frais de dommages. Vérifiez tous les
            compartiments et assurez-vous d’avoir récupéré toutes vos affaires
            personnelles. Assurez-vous de laisser la voiture dans le même état
            que celui dans lequel vous l’avez prise. Si vous rendez la voiture
            sale, l’agence de location peut vous facturer des frais
            supplémentaires pour faire nettoyer la voiture selon des normes
            professionnelles.
          </p>
        </div>
        <div>
          <img
            className="img-fluid rounded"
            src="https://www.kayak.fr/c/wp-content/uploads/sites/202/2020/09/4-booking-1920x1312-1-e1609932829992-768x520.jpg"
            alt=""
          ></img>
        </div>
      </div>

      <Footerr />
    </div>
  );
}

export default Service;
