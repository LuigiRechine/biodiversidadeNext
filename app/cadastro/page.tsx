"use client"
import { useState } from "react"
import Link from "next/link"

export default function Cadastro() {
  const [form, setForm] = useState<any>({})

  async function handleSubmit(e: any) {
    e.preventDefault()

    await fetch("/api/species", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    })

    alert("Espécie cadastrada!")
  }

  return (
    <>
      <nav>
        <img src="/logo.png" alt="logo" />
        <Link href="/">Início</Link>

        <input type="text" placeholder="Buscar..." />

        <Link href="/cadastro">Adicionar Espécie</Link>
      </nav>

      <main className="form-area">
        <form onSubmit={handleSubmit} className="form-card">

          <h2>Cadastrar Espécie</h2>

          <input placeholder="Nome da espécie"
            onChange={(e) => setForm({...form, nome: e.target.value})} required />

          <input placeholder="Nome científico"
            onChange={(e) => setForm({...form, nomecientifico: e.target.value})} required />

          <input placeholder="Tipo"
            onChange={(e) => setForm({...form, tipo: e.target.value})} required />

          <input placeholder="Porte"
            onChange={(e) => setForm({...form, porte: e.target.value})} required />

          <input placeholder="URL da imagem"
            onChange={(e) => setForm({...form, imageurl: e.target.value})} required />

          <button type="submit">Cadastrar</button>

        </form>
      </main>
    </>
  )
}
