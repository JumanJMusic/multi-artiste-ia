"use client";
import { useState } from "react";

export default function Home() {
  const [artists, setArtists] = useState([
    {
      name: "Premier Artiste IA",
      bio: "Un compositeur IA qui fusionne les sons synthétiques et les émotions humaines.",
      spotifyUrl: "https://open.spotify.com/embed/playlist/4nYsg4F30FNRvpOmNqzIgt?utm_source=generator",
      socialLinks: {
        youtube: "https://youtube.com",
        tiktok: "https://tiktok.com",
        instagram: "https://instagram.com",
      },
    },
  ]);

  const [newArtist, setNewArtist] = useState({
    name: "",
    bio: "",
    spotifyUrl: "",
    youtube: "",
    tiktok: "",
    instagram: "",
  });

  const addArtist = () => {
    const embedUrl = newArtist.spotifyUrl.replace(
      "https://open.spotify.com/",
      "https://open.spotify.com/embed/"
    );
    const newEntry = {
      name: newArtist.name,
      bio: newArtist.bio,
      spotifyUrl: embedUrl,
      socialLinks: {
        youtube: newArtist.youtube,
        tiktok: newArtist.tiktok,
        instagram: newArtist.instagram,
      },
    };
    setArtists([...artists, newEntry]);
    setNewArtist({ name: "", bio: "", spotifyUrl: "", youtube: "", tiktok: "", instagram: "" });
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">🎶 Plateforme Multi-Artistes IA</h1>

      <div className="mb-10 p-4 border rounded-lg">
        <h2 className="text-xl font-semibold mb-4">➕ Ajouter un nouvel artiste</h2>
        <div className="grid grid-cols-1 gap-4">
          <input
            placeholder="Nom de l'artiste"
            value={newArtist.name}
            onChange={(e) => setNewArtist({ ...newArtist, name: e.target.value })}
          />
          <input
            placeholder="Bio"
            value={newArtist.bio}
            onChange={(e) => setNewArtist({ ...newArtist, bio: e.target.value })}
          />
          <input
            placeholder="URL Spotify"
            value={newArtist.spotifyUrl}
            onChange={(e) => setNewArtist({ ...newArtist, spotifyUrl: e.target.value })}
          />
          <input
            placeholder="YouTube"
            value={newArtist.youtube}
            onChange={(e) => setNewArtist({ ...newArtist, youtube: e.target.value })}
          />
          <input
            placeholder="TikTok"
            value={newArtist.tiktok}
            onChange={(e) => setNewArtist({ ...newArtist, tiktok: e.target.value })}
          />
          <input
            placeholder="Instagram"
            value={newArtist.instagram}
            onChange={(e) => setNewArtist({ ...newArtist, instagram: e.target.value })}
          />
          <button onClick={addArtist}>Ajouter l'artiste</button>
        </div>
      </div>

      {artists.map((artist, index) => (
        <div key={index} className="mb-8 border p-4 rounded">
          <h2 className="text-2xl font-semibold mb-2">{artist.name}</h2>
          <p className="mb-4 text-gray-600">{artist.bio}</p>
          <iframe
            style={{ borderRadius: "12px" }}
            src={artist.spotifyUrl}
            width="100%"
            height="352"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <div className="flex gap-4 mt-4">
            <a href={artist.socialLinks.youtube} target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href={artist.socialLinks.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href={artist.socialLinks.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>
      ))}
    </div>
  );
}
