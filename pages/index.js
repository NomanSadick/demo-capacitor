import "@ionic/react/css/core.css";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonTabButton,
  IonTabs,
  IonTabBar,
  IonBadge
} from "@ionic/react";

import { calendar, personCircle, map, informationCircle, listOutline, settingsOutline } from 'ionicons/icons';

import Image from "next/image";
const Home = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Card</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <div>
            {["Ellipse 1"].map((path) => {
              return (
                <div key={path}>
                  <Image
                    className="rounded-tr-md rounded-tl-md"
                    src={`/${path}.jpg`}
                    alt="pet"
                    width="400"
                    height="200"
                  />
                </div>
              );
            })}
          </div>
          <IonCardHeader>
            <IonCardSubtitle>Destination</IonCardSubtitle>
            <IonCardTitle>Madision </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep 
          </IonCardContent>

          <div className="flex items-center mt-8">
            <div className="flex items-center">
              {["Ellipse 2"].map((path) => {
                return (
                  <div key={path}>
                    <Image
                      className="rounded-tr-md rounded-tl-md"
                      src={`/${path}.png`}
                      alt="pet"
                      width="40"
                      height="40"
                    />
                  </div>
                );
              })}
            </div>
            <div className="ml-4">
              <p>Michell Appleton</p>
            </div>
          </div>
        </IonCard>

        {/*-- Tab bar --*/}

      

        <IonCard>
          <div>
            {["Ellipse 1"].map((path) => {
              return (
                <div key={path}>
                  <Image
                    className="rounded-tr-md rounded-tl-md"
                    src={`/${path}.jpg`}
                    alt="pet"
                    width="400"
                    height="200"
                  />
                </div>
              );
            })}
          </div>
          <IonCardHeader>
            <IonCardSubtitle>Destination</IonCardSubtitle>
            <IonCardTitle>Madision </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            Keep close to Natures heart... and break clear away, once in
            awhile, and climb a mountain or spend a week in the woods. Wash your
            spirit clean.
          </IonCardContent>
        </IonCard>
      </IonContent>
            <div className="flex justify-between">
            <IonTabButton tab="schedule">
        <IonIcon icon={calendar} />
        <IonLabel>Schedule</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="speakers">
        <IonIcon icon={listOutline} />
        <IonLabel>Lists</IonLabel>
      </IonTabButton>

      <IonTabButton tab="map">
        <IonIcon icon={settingsOutline} />
        <IonLabel>Settings</IonLabel>
      </IonTabButton>
            </div>
    </IonPage>
  );
};

export default Home;
