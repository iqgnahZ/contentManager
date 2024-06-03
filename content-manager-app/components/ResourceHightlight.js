import Link from "next/link"
import Container from "./Container"

const ResourceHightlight = ({resources}) => {
  return (
   <section className="hero ">
    <div className="hero-body">
      <Container>
        {
          resources.map(resource => {
            return (
              <section key={resource.id} className="section">
                    <div className="content is-medium">
                      <h2 className="subtitle is-4">{resource.createdAt}</h2>
                      <h1 className="title">{resource.title}</h1>
                      <p>{resource.description}</p>
                      <Link href={`/resources/${resource.id}`} legacyBehavior>
                        <a className="button is-link">
                          More
                        </a>
                      </Link>
                    </div>
              </section>
            )
          })
        }
      </Container>
    </div>
  </section>
  )
}

export default ResourceHightlight