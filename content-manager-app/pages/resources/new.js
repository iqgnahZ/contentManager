import Container from "@/components/Container";
import Layout from "@/components/Layout";
import ResourceForm from "@/components/ResourceForm";
import axios from "axios";
import { useRouter } from "next/router";

const DEFAULT_DATA = {
  title: "",
  description: "",
  link: "",
  priority: "1",
  timeToFinish: ""
}

const ResourceCreate = () => {

  const router = useRouter()

  // const submitForm = () => {
  //   fetch("/api/resources", {
  //     body: JSON.stringify(form),
  //     headers: {"Content-Type": "application/json"},
  //     method: "POST"
  //   })
  // }

  const createResource = formData => {
    axios.post("/api/resources", formData)
      .then(_ => router.push("/"))
      .catch(err => alert(err?.response?.data))
  }

  return (
    <Layout>
      <Container>
        <ResourceForm 
          onFormSubmit={createResource}
        />
      </Container>
    </Layout>
  )
}

export default ResourceCreate