import Header from "./Header";
import BackToTopButton from "@/components/backToTopButton";

export default function Layout({ children }) {
  return (
    <>
      <Header/>
      <main>{children}</main>

      <BackToTopButton/>
    </>
  )
}