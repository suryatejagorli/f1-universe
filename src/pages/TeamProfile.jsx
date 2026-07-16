import { useParams } from "react-router-dom";
import teams from "../data/teamsData";
import "../styles/TeamProfile.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getTeamCareerStats } from "../services/teamApi";

import {
    MapPin,
    User,
    Wrench,
    CarFront
} from "lucide-react";

function TeamProfile() {

    const { teamId } = useParams();

const team = teams.find(team => team.id === teamId);

const [selectedImage, setSelectedImage] = useState(null);
const [teamStats, setTeamStats] = useState(null);

useEffect(() => {

    const handleKeyDown = (e) => {

        if (e.key === "Escape") {

            setSelectedImage(null);

        }

    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {

        window.removeEventListener("keydown", handleKeyDown);

    };

}, [selectedImage]);

useEffect(() => {
    if (!team) return;

    async function loadTeamStats() {
        try {
            console.log("Loading API stats for:", team.name);

            const stats = await getTeamCareerStats(team.name);

            console.log("Team Stats:", stats);

            setTeamStats(stats);
        } catch (error) {
            console.error("Failed to load team statistics:", error);
        }
    }

    loadTeamStats();

}, [team]);


console.log("URL id:", teamId);
console.log("Teams:", teams);
console.log("Found:", team);

    if (!team) {
        return (
            <h1>Team Not Found</h1>
        );
    }

    return (
        <div className="team-profile">

            <div className="team-header">

    <img
        src={team.logo}
        alt={team.name}
        className="team-logo-large"
    />
    

    <div className="team-title">

        <h1>{team.name}</h1>

        <p className="team-subtitle">
    Formula One Constructor •
    <span className="since-year">
        {" "}Since {team.founded}
    </span>
</p>

    </div>

</div>

           <h2>Statistics</h2>

<div className="team-stats-grid">

    <div className="team-stat-box">
        <h2>{teamStats?.championships ?? "-"}</h2>
        <p>Championships</p>
    </div>

    <div className="team-stat-box">
        <h2>{teamStats?.wins ?? "-"}</h2>
        <p>Wins</p>
    </div>

    <div className="team-stat-box">
        <h2>{teamStats?.podiums ?? "-"}</h2>
        <p>Podiums</p>
    </div>

    <div className="team-stat-box">
        <h2>{teamStats?.poles ?? "-"}</h2>
        <p>Poles</p>
    </div>

    <div className="team-stat-box">
        <h2>{teamStats?.fastestLaps ?? "-"}</h2>
        <p>Fastest Laps</p>
    </div>

</div>

<div className="team-info-section">

    <h2>Team Information</h2>

    <div className="team-info-grid">

        <div className="team-info-card">
    <strong>
        <MapPin size={18} />
        Base
    </strong>
    <p>{team.base}</p>
</div>

<div className="team-info-card">
    <strong>
        <User size={18} />
        Team Principal
    </strong>
    <p>{team.principal}</p>
</div>

<div className="team-info-card">
    <strong>
        <Wrench size={18} />
        Technical Director
    </strong>
    <p>{team.technicalDirector}</p>
</div>

<div className="team-info-card">
    <strong>
        <CarFront size={18} />
        Power Unit
    </strong>
    <p>{team.powerUnit}</p>
</div>

    </div>

</div>

<div className="team-drivers-section">

    <h2>Drivers</h2>

         <div className="drivers-grid">

    {team.drivers.map((driver) => (

        <div className="team-driver-card" key={driver}>

    <h3>{driver}</h3>

    <Link to={`/drivers/${driver.toLowerCase().replace(/\s+/g, "-")}`}>
        <button className="driver-btn">
            View Driver
        </button>
    </Link>

</div>

    ))}

</div>

<div className="team-gallery">

    <h2>Gallery</h2>

    <div className="gallery-scroll">

        {team.gallery.map((image, index) => (

            <img
    key={index}
    src={image}
    alt={`${team.name} ${index + 1}`}
    className="gallery-image"
    onClick={() => setSelectedImage(image)}
/>

        ))}

    </div>

</div>

{selectedImage && (

    <div
        className="image-modal"
        onClick={() => setSelectedImage(null)}
    >

        <button
    className="close-btn"
    onClick={() => setSelectedImage(null)}
>
    ×
</button>

        <img
            src={selectedImage}
            alt="Gallery"
            className="modal-image"
            onClick={(e) => e.stopPropagation()}
        />

    </div>

)}

        </div>

    </div>
);
}
export default TeamProfile;