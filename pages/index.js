import "@ionic/react/css/core.css";
import { IonPage, IonApp, IonContent, IonHeader, IonToolbar,IonTitle,  IonButtons,
  IonButton,
  IonIcon, } from "@ionic/react/";
import FeedCard from "./card";
import { useState } from 'react';
import { notificationsOutline } from 'ionicons/icons';

const Home = () => {

  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Feed</IonTitle>
          
          {/* <IonButton onClick={() => setShowNotifications(true)}>
              <IonIcon icon={notificationsOutline} />
            </IonButton> */}
        </IonToolbar>
      </IonHeader>
     
      <IonContent className="ion-padding" fullscreen>
      <FeedCard />
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Feed</IonTitle>
          </IonToolbar>
        </IonHeader>
       
         
      
      </IonContent>
    </IonPage>
  );
};

export default Home;
