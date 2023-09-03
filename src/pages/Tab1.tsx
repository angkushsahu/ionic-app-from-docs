import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { ExploreContainer, Layout } from "../components";

export default function Tab1() {
   return (
      <Layout title="Tab 1">
         <IonContent fullscreen>
            <IonHeader collapse="condense">
               <IonToolbar>
                  <IonTitle size="large">Tab 1</IonTitle>
               </IonToolbar>
            </IonHeader>
            <ExploreContainer name="Tab 1 page" />
         </IonContent>
      </Layout>
   );
}
