import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="nav">
      <img src="/logo.png" />
      <Link href="/">Início</Link>
      <Link href="/cadastro">Adicionar Espécie</Link>
    </nav>
  )
}
