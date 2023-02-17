
export const Container = ({technologies, linkGithub, image, linkInternet, children}) => {
  return (
    <div href="" className="card" style={{ background: `url(${image})`}}>
          <div className="project-info">
            <div className="project-bio">
              <h3>{children}</h3>
              <p>{technologies}</p>
            </div>

            <div className="project-link">
                {
                  linkInternet ? 
                    <> 
                      <a href={linkInternet} target="_blank" rel="noreferrer">
                      <i className="fas fa-globe"></i
                      ></a>
                    </>
                    : linkGithub ?  
                    <>
                      <a href={linkGithub} target="_blank" rel="noreferrer">
                      <i className="fab fa-github"></i>
                      </a>
                    </>
                    : linkInternet && linkGithub ?
                    <>
                      <a href={linkGithub} target="_blank" rel="noreferrer">
                      <i className="fab fa-github"></i>
                      </a>
                      <a href={linkInternet} target="_blank" rel="noreferrer">
                      <i className="fas fa-globe"></i
                      ></a>
                    </>
                    : <a href="https://armandotech.github.io/Portfolio-React/">#</a>
                }
            </div>
          </div>
        </div>
  )
}
