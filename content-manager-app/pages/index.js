import Newsletter from "@/components/Newsletter";
import Layout from "@/components/Layout";
import ResourceHightlight from "@/components/ResourceHightlight";
import ResourceList from "@/components/ResourceList";
import Footer from "@/components/Footer";


export default function Home() {

  return (
    <Layout>
      <ResourceHightlight />
      <Newsletter />
      <ResourceList />
      <Footer />
    </Layout>
  );
}
