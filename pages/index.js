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
} from "@ionic/react";

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
          <div className="flex justify-between">
          <IonTabButton tab="schedule">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z" />
              <path
                fillRule="evenodd"
                d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>

            <IonLabel>Schedule</IonLabel>
          </IonTabButton>

          <IonTabButton tab="speakers">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 10h16M4 14h16M4 18h16"
              />
            </svg>

            <IonLabel>Lists</IonLabel>
          </IonTabButton>

          <IonTabButton tab="map">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <IonLabel>Settings</IonLabel>
          </IonTabButton>
        </div>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Home;
