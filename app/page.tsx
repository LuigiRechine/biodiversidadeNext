"use client"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function Home() {
  const [species, setSpecies] = useState<any[]>([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    loadSpecies()
  }, [])

  async function loadSpecies() {
    const res = await fetch("/api/species")
    const data = await res.json()
    setSpecies(data)
  }

  const filtradas = species.filter((s) =>
    s.nome?.toLowerCase().includes(search.toLowerCase()) ||
    s.nomecientifico?.toLowerCase().includes(search.toLowerCase()) ||
    s.tipo?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <>
      <nav>
        <img src="/logo.png" alt="logo" />
        <Link href="/">Início</Link>

        <input
          type="text"
          placeholder="Buscar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Link href="/cadastro">Adicionar Espécie</Link>
      </nav>

      <div className="grid">
        {filtradas.map((s) => (
          <div className="card" key={s.id}>
            <div className="card-img-container">
              <img src={s.imageurl} className="card-image" />
            </div>

            <h3>{s.nome}</h3>
            <p><i>{s.nomecientifico}</i></p>
            <p>Tipo: {s.tipo}</p>
            <p>Porte: {s.porte}</p>
          </div>
        ))}
      </div>
    </>
  )
}
