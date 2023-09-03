import { IonHeader, IonPage, IonTitle, IonToolbar } from "@ionic/react";
import { ReactNode } from "react";

export interface LayoutProps {
   title: string;
   children: ReactNode;
}

export default function Layout({ children, title }: LayoutProps) {
   return (
      <IonPage>
         <IonHeader>
            <IonToolbar>
               <IonTitle>{title}</IonTitle>
            </IonToolbar>
         </IonHeader>
         {children}
      </IonPage>
   );
}
