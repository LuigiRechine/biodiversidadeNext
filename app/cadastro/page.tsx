"use client"
import { useState } from "react"
import Link from "next/link"
import Swal from "sweetalert2"
import { useRouter } from "next/navigation"

export default function Cadastro() {
  const [form, setForm] = useState<any>({})
  const router = useRouter()

  async function handleSubmit(e: any) {
    e.preventDefault()

    // loading bonito
    Swal.fire({
      title: "Cadastrando...",
      text: "Aguarde um momento",
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading()
      }
    })

    try {
      const res = await fetch("/api/species", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      })

      if (!res.ok) {
        throw new Error("Erro ao cadastrar")
      }

      // sucesso
      Swal.fire({
        title: "Sucesso!",
        text: "Espécie cadastrada 🌱",
        icon: "success",
        timer: 2000,
        showConfirmButton: false
      }).then(() => {
        router.push("/")
      })

    } catch (error) {
      // erro
      Swal.fire({
        title: "Erro!",
        text: "Não foi possível cadastrar a espécie 😢",
        icon: "error",
        confirmButtonText: "Tentar novamente"
      })
    }
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

          <input
            placeholder="Nome da espécie"
            onChange={(e) => setForm({ ...form, nome: e.target.value })}
            required
          />

          <input
            placeholder="Nome científico"
            onChange={(e) => setForm({ ...form, nomecientifico: e.target.value })}
            required
          />

          <input
            placeholder="Tipo"
            onChange={(e) => setForm({ ...form, tipo: e.target.value })}
            required
          />

          <input
            placeholder="Porte"
            onChange={(e) => setForm({ ...form, porte: e.target.value })}
            required
          />

          <input
            placeholder="URL da imagem"
            onChange={(e) => setForm({ ...form, imageurl: e.target.value })}
            required
          />

          <button type="submit">Cadastrar</button>

        </form>
      </main>
    </>
  )
}
