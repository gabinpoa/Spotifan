import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  return (
    <>
      <nav>Spotifan</nav>
      <main>
        <h1>Logo</h1>
        <div className="texts">
          <h3>Descubra seu arstista mais tocado</h3>
          <p>
            Veja quem é o seu artista mais tocado e compartilhe com seus amigos
          </p>
        </div>
        <button type="button">Entrar com Spotify</button>
      </main>
    </>
  );
}
