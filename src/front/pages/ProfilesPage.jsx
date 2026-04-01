import { useState } from "react";
import { ProfileCard } from "../components/ProfileCard";
import { PinModal } from "../components/PinModal";

// Importar CSS
import "../ProfilesPage.css";

// Importar imágenes desde src
import Cashtor from "../assets/img/Cashtor.jpg";
import CashtorCoins from "../assets/img/cashtor_coins.png"; // ejemplo si quieres otro avatar

export const ProfilesPage = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const profiles = [
    { id: 1, name: "Papá", avatar: Cashtor },
    { id: 2, name: "Dani", avatar: CashtorCoins }
  ];

  return (
    <div className="profiles-container">
      <h1>¿Quién está usando FinQuest?</h1>

      <div className="profiles-grid">
        {profiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            name={profile.name}
            avatar={profile.avatar}
            onClick={() => setSelectedProfile(profile)}
          />
        ))}
      </div>

      {selectedProfile && (
        <PinModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />
      )}
    </div>
  );
};