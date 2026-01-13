import './Home.css'

export default function Home() {
  return (
    <section className="hero text-white">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <h1 className="fw-bold mb-4">
              Software feito do jeito certo.
            </h1>

            <p className="lead mb-4">
              Sou Gabriel Sousa, desenvolvedor de software especializado em criar
              aplicações modernas, escaláveis e eficientes. Trabalho com soluções
              web completas, da ideia à entrega final.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <a href="#contato" className="btn btn-danger btn-lg px-4">
                Preciso de um projeto
              </a>

              <a href="#projetos" className="btn btn-outline-light btn-lg px-4">
                Ver portfólio
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
