import { card } from "../assets"
import styles, { layout } from "../style"
import Button from "./Button"

const CardDeal: React.FC = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo} >
      <h2 className={styles.heading2}>Find a better ard deal <br className="md:block hidden" /> in few easy steps.</h2>
      <p className={`${styles.paragraph} max-w-[480px] mt-5 `}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nulla aspernatur est? Quis adipisci eaque, neque, cumque optio explicabo enim consectetur quibusdam possimus nostrum ratione fuga blanditiis esse voluptatum eos.</p>

      <Button styles="mt-10" text = "Get Started"/>
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="card" className="w-[100%] h-[100%]" />
    </div>
  </section>
)

export default CardDeal