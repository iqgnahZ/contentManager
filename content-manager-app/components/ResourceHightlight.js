import Link from "next/link"
import Container from "./Container"
import ResourceLable from "./ResourceLable"
import moment from "moment"

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
                      <h2 className="subtitle is-4">
                        {moment(resource.createdAt).format('LLL')}
                        <ResourceLable status={resource.status}/>
                      </h2>
                      <h1 className="title">{resource.title}</h1>
                      <p>{resource.description}</p>
                      <Link href={`/resources/${resource.id}`} legacyBehavior>
                        <a className="button is-light">
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