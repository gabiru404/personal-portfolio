function Projects() {
  return (
    <section className="container py-5 text-white">
      <h1 className="fw-bold mb-4">Projetos</h1>

      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="card bg-dark text-white h-100">
            <div className="card-body">
              <h5 className="card-title">Meu Projeto</h5>

              <p className="card-text text-secondary">
                Descrição curta do projeto. O que ele faz e para quem é.
              </p>

              <div className="mb-3">
                <span className="badge bg-secondary me-1">React</span>
                <span className="badge bg-secondary me-1">Node</span>
                <span className="badge bg-secondary">Bootstrap</span>
              </div>

              <a
                href="#"
                className="btn btn-outline-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver projeto
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
