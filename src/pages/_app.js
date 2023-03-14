// import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import Layout from "@/components/layout"
import 'bootstrap/dist/css/bootstrap.min.css';

const MyApp = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default appWithTranslation(MyApp)
