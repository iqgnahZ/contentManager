import Newsletter from "@/components/Newsletter";
import Layout from "@/components/Layout";
import ResourceHightlight from "@/components/ResourceHightlight";
import ResourceList from "@/components/ResourceList";
import Footer from "@/components/Footer";
import resources from "./api/resources";


function Home({resources}) {

  return (
    <Layout>
      <ResourceHightlight 
        resources = {resources.slice(0,2)}
      />
      <Newsletter />
      <ResourceList 
        resources = {resources.slice(2)}
      />
      <Footer />
    </Layout>
  );
}

// it is called every time you will visit the page
// function is executed on the server
export async function getServerSideProps() {
  
  const resData = await fetch("http://localhost:3001/api/resources")
  const data = await resData.json()

  return {
    props: {
      resources: data
    }
  }
}

// it is called at the build time, and it is callled only once
// export async function getStaticProps() {
  
//   const resData = await fetch("http://localhost:3000/api/resources")
//   const data = await resData.json()

//   return {
//     props: {
//       resources: data
//     }
//   }
// }

export default Home;
