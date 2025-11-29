import type { JSX } from "react";
import style from "./NotFound.module.css"

export default function NotFound():JSX.Element {

  return (
      <section className={style.notFound}> 
      <h2>Page is not found!</h2>
     </section>
  );}