import { Card } from "@/components/ui/card"
import { Github, Linkedin, Mail } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Manhattan Coffee House",
    category: "Desenvolvimento",
    image: "/desktop.png",
    link:"",

  },
  {
    id: 2,
    title: "WebSite ONG IBML",
    category: "Desenvolvimento",
    image: "/tela.png",
    link:"https://ibml.vercel.app/",
  },
  {
    id: 3,
    title: "Pagina Inicial CRM",
    category: "Desenvolvimento",
    image: "/telaInicial.png",
    link:"",
  },
  {
    id: 4,
    title: "Portal do Cliente CRM",
    category: "Desenvolvimento",
    image: "/portalCli.png",
  },
  {
    id: 5,
    title: "Cliente Flow",
    category: "Desenvolvimento",
    image: "/ClientFlow_Banner.png",
        link:"https://github.com/Projeto-ClientFlow/ClientFlow",

  },
  {
    id: 6,
    title: "Pesquisa de Satisfacao",
    category: "Desenvolvimento",
    image: "/pesquisa.png",
    link:"https://pesquisa-satisfacao-assistencia-tec.vercel.app/",

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
          Com foco em desenvolvimento web, aplico minhas habilidades em projetos reais, unindo boas práticas, aprendizado contínuo e soluções funcionais
          </p>

          {/* Social Links */}
          <div className="flex gap-4 pt-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
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
                
                <button><a href={project.link} target="_blank" rel="noopener noreferrer" className="text-black-500 hover:underline">Ver projeto</a></button>
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

