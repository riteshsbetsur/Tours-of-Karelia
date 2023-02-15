import React from "react";
import style from "./expect.module.css";
import { FaRegEye, FaRegHandPaper } from "react-icons/fa";
import { SlDiamond } from "react-icons/sl";
import { AiOutlineRocket } from 'react-icons/ai';

const Expect = () => {
  return (
    <main id="expect-block">
      <section className={style.secondMain}>
        <article>
          <aside></aside>
          <div className={style.contentBlock}>
            <h3>what to</h3>
            <h1>EXPECT</h1>
            <p className={style.para}>
              This locomotive romance-a trip to Karelia on the retro-train.
              Meeting at Person <br />
              Person as the guests of honornKarelian national costumes.tasting
              cakes,then
              <br /> visit the Marbel Canyon "Ruskeala" and the opportunity to
              engage in extreme
              <br />
              kinds of recreation.visit the rope theme park and boating on the
              lake marbel.{" "}
            </p>

            <div className={style.cardInfoMain}>
              <div className={style.cardInfo}>
                <span>
                  <FaRegEye />
                </span>
                <div>
                  <h2>Personal approach</h2>
                  <p>
                    Our experts will provide you with a guide tour tailoried to
                    your interests and wishes of the group
                  </p>
                </div>
              </div>
              <div className={style.cardInfo}>
                <span>
                  <FaRegHandPaper />
                </span>
                <div>
                  <h2>A huge number of tours</h2>
                  <p>
                    We carry out visits to the most interesting places of
                    keralla and develop exclusions
                  </p>
                </div>
              </div>
              <div className={style.cardInfo}>
                <span>
                  <SlDiamond />
                </span>
                <div>
                  <h2>Unforgettable impressions</h2>
                  <p>
                    We will do everything to make your trip. It has become one
                    of the most vivid impressions in your lives and fill you
                    with energy for new achievements.
                  </p>
                </div>
              </div>
              <div className={style.cardInfo}>
                <span>
                  <AiOutlineRocket className={style.icon} />
                </span>
                <div>
                  <h2>Whatever you want</h2>
                  <p>
                    Exprienced guides,comfortable transfor and knowledge of all
                    the intricacles of route permit to enjoy the whole journey
                  </p>
                </div>
              </div>
            </div>
            <button>BUY TICKETS</button>
          </div>
        </article>
      </section>
    </main>
  );
};

export default Expect;
