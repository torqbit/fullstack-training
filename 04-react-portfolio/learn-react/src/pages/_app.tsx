import "@/styles/portfolio/global-index.css"
import "@/styles/portfolioEditor/global-edit.css"
import type { AppProps } from "next/app";
import Router, { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <div className={router.pathname === "/edit" ? "edit-styles" : "index-styles"}>
    <Component {...pageProps} />;
    </div>
  )
}
