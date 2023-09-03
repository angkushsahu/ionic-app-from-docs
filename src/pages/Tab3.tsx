import { IonContent, IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { ExploreContainer, Layout } from "../components";

export default function Tab3() {
   return (
      <Layout title="Tab 3">
         <IonContent fullscreen>
            <IonHeader collapse="condense">
               <IonToolbar>
                  <IonTitle size="large">Tab 3</IonTitle>
               </IonToolbar>
            </IonHeader>
            <ExploreContainer name="Tab 3 page" />
         </IonContent>
      </Layout>
   );
}
