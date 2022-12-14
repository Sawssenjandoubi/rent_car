import React from "react";
import './FAQ.css'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";

export default function FAQ() {
  return (
    <MDBContainer className=" blocFac mt-5" style={{maxWidth: '1000px',textAlign:'justify'}}>
      <MDBAccordion alwaysOpen initialActive={1}>
        <MDBAccordionItem collapseId={1} headerTitle="Comment réserver une voiture de location?">
          <strong>Avec Nous, il est très simple de réserver une voiture de location </strong> Il vous
           suffit de lancer une recherche pour les dates de votre choix, de repérer une offre et une 
           agence qui vous conviennent, de cliquer sur le site du fournisseur, puis de suivre les 
           instructions sur la page. Le jour-même, il vous faudra apporter des documents pour 
           récupérer la voiture, par exemple votre permis de conduire et un mode de paiement 
           (en général, une carte de crédit). Veuillez noter que vous aurez très probablement 
           besoin de présenter une deuxième pièce d’identité, comme un passeport ou une carte 
           d’identité. Une fois le contrat de location signé auprès de l’agence, vous pourrez 
           récupérer les clés et prendre la route. Avant de partir, n’oubliez pas d’inspecter 
           la voiture, de repérer d’éventuels dommages causés par les précédents conducteurs et 
           de les signaler
           à l’agence. Cela vous évitera d’être tenu pour responsable lorsque vous rendrez le véhicule.
          .
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={2} headerTitle="Quelle sont les différentes étapes pour louer une voiture ?">
        Sélectionnez les dates souhaitées, choisissez la catégorie de véhicule qui vous convient, vérifiez les détails de l’offre puis finalisez la réservation.

.
        </MDBAccordionItem>
        <MDBAccordionItem collapseId={3} headerTitle="Quel est le kilomètrage autorisé pour une location de voiture">
        Selon l’agence de location et le contrat spécifié lors de la réservation, il peut exister 
        des limites de kilométrage. Certaines agences précisent un maximum de kilomètres pour la durée de la location, d’autres l’expriment par jour, mais cela 
        revient au même puisque c’est le nombre total de kilomètres qui sera pris en compte à la fin.
        </MDBAccordionItem>
      </MDBAccordion>
    </MDBContainer>
  );
}