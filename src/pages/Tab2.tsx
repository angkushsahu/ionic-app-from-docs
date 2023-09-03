import { camera } from "ionicons/icons";
import { IonContent, IonFab, IonFabButton, IonIcon, IonGrid, IonRow, IonCol, IonImg } from "@ionic/react";
import { usePhotoGallery } from "../hooks/usePhotoGallery";
import { Layout } from "../components";

export default function Tab2() {
   const { photos, takePhoto } = usePhotoGallery();

   return (
      <Layout title="Photo Gallery">
         <IonContent>
            <IonGrid>
               <IonRow>
                  {photos.map((photo) => (
                     <IonCol size="6" key={photo.filepath}>
                        <IonImg src={photo.webviewPath} />
                     </IonCol>
                  ))}
               </IonRow>
            </IonGrid>
            <IonFab vertical="bottom" horizontal="center" slot="fixed">
               <IonFabButton onClick={takePhoto}>
                  <IonIcon icon={camera}></IonIcon>
               </IonFabButton>
            </IonFab>
         </IonContent>
      </Layout>
   );
}
