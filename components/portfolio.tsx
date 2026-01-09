import { Card } from "@/components/ui/card"
import { Description } from "@radix-ui/react-toast"
import { link } from "fs"
import { Github, Linkedin, Mail } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Manhattan Coffee House",
    category: "Desenvolvimento",
    image: "/desktop.png",
    link:"https://cafeteria-black-iota.vercel.app/",
            repo :"https://github.com/larialv12/Manhattan-Coffee-House",

    Description:"Site de uma cafeteria fictícia, desenvolvido com foco em design responsivo e experiência do usuário.",

  },
  {
    id: 2,
    title: "WebSite ONG IBML",
    category: "Desenvolvimento",
    image: "/tela.png",
    link:"https://ibml.vercel.app/",
            repo :"",

    Description:"Website institucional para a ONG IBML, destacando seus projetos e missão social.",
  },
  {
    id: 3,
    title: "Pagina Inicial CRM",
    category: "Desenvolvimento",
    image: "/telaInicial.png",
    link:"https://1drv.ms/i/c/bd27488a96af19ae/IQDmR6hYgoYhQJ-FI-Q0fZA2AfZ7RSADFvaXTIqS7CXGatc?e=ZF4w2I",
            repo :"https://github.com/larialv12/CRMdemo",

    Description:"Tela de sugestões para a página inicial de um sistema CRM, desenvolvida com foco em usabilidade, organização das informações e melhoria da experiência do usuário.",
  },
  {
    id: 4,
    title: "Portal do Cliente CRM",
    category: "Desenvolvimento",
    image: "/portalCli.png",
    link:"https://1drv.ms/i/c/bd27488a96af19ae/IQBLFlLF4qMZRZNs8eMLAt5YATAyTOsnsRR-KlhiNlLTPyY",
            repo :"https://github.com/larialv12/CRMdemo",

    Description:"Nova versão do Portal do Cliente CRM, desenvolvida para melhorar a usabilidade e facilitar o acesso dos usuários às informações, ocorrências e suporte do sistema.",
  },
  {
    id: 5,
    title: "Cliente Flow",
    category: "Desenvolvimento",
    image: "/ClientFlow_Banner.png",
        link:"https://github.com/Projeto-ClientFlow/ClientFlow",
    repo :"https://github.com/Projeto-ClientFlow/ClientFlow",
    Description:"O projeto ClientFlow é uma aplicação backend desenvolvida em Java com o Spring Framework, contendo integração a um banco de dados SQL. Seu principal objetivo é oferecer uma API CRUD eficiente para a gestão de clientes, categorias e produtos, garantindo um fluxo organizado e estruturado de informações.",

  },
  {
    id: 6,
    title: "Pesquisa de Satisfaçao",
    category: "Desenvolvimento",
    image: "/pesquisa.png",
    link:"https://pesquisa-satisfacao-assistencia-tec.vercel.app/",
     repo :"",
    Description:"Aplicação web desenvolvida para coleta e análise de feedback de clientes, com foco em usabilidade e melhoria contínua dos serviços.",

  },
  {
    id: 7,
    title: "Smart Rh - Sistema de Gestão de Recursos Humanos",
    category: "Desenvolvimento",
    image: "/rh.jpg",
        link:"https://github.com/larialv12/Projeto-SmartRh",
        repo :"https://github.com/larialv12/Projeto-SmartRh",
    Description:"O Smart Rh é um sistema de gestão de recursos humanos desenvolvido em Java com Spring Boot, oferecendo funcionalidades para gerenciamento de funcionários, departamentos e folhas de pagamento.",
  },
]

export function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-24 max-w-4xl">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground text-balance">Larissa Alves</h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Desenvolvedora Web
          </p>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          Com foco em desenvolvimento web, aplico minhas habilidades em projetos reais, unindo boas práticas, aprendizado contínuo e soluções funcionais.
          </p>

         {/* Habilidades */}
<div className="flex flex-wrap gap-2 pt-6">

  <span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
    HTML
  </span>
  <span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
    CSS
  </span>
   <span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
   BootStrap
  </span>
   <span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
   Jquery
  </span>
  <span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
    JavaScript
  </span>
  <span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
    PHP
  </span>
  <span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
    React
  </span>
 <span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
    Next.js
  </span>
  <span className="px-3 py-1 text-sm rounded-full bg-muted text-muted-foreground">
    Java
  </span>
</div>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
           
            <a
              href=":linkedin.com/in/larissa-alves-s"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:larialves200157@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="border-t border-border" />
      </div>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 py-12 md:py-24 max-w-6xl">
        <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-8">Projetos Selecionados</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden border-border hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative aspect-[3/2] overflow-hidden bg-muted">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 space-y-2">
                <p className="text-sm text-muted-foreground">{project.category}</p>
                <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                
                <button><a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black-500 hover:underline">Ver Demo</a></button>
              <p className="text-sm text-muted-foreground">{project.Description}</p>
             { project.repo && (
  <div className="pt-3">
    <a
      href={project.repo}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors"
    >
      <Github className="w-4 h-4" />
      Repositório
    </a>
  </div>
)}
              </div>
   
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="border-t border-border pt-8">
          <p className="text-sm text-muted-foreground text-center">Â© 2026 Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

