import * as React from "react";
import Layout from "../components/layout.js";
import "./about.css";
import GetPageSize from "../components/getPageSize";
import Description from "../components/Description.js";

const AboutPage = () => {
  return (
    <Layout style="about">
      <Description title="test" date="7.7.2021" />
      <main>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?
        </p>
        <p>{GetPageSize()}</p>
        <p>Offener Brief für flutschende Ligaturen finden</p>
        <p>or one who avoids a pain that produces no resultant</p>
        <p className="blocks">
          or one who avoids a pain that produces no resultant
        </p>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness. No one
          rejects, dislikes, or avoids pleasure itself, because it is pleasure,
          but because those who do not know how to pursue pleasure rationally
          encounter consequences that are extremely painful. Nor again is there
          anyone who loves or pursues or desires to obtain pain of itself,
          because it is pain, but because occasionally circumstances occur in
          which toil and pain can procure him some great pleasure. To take a
          trivial example, which of us ever undertakes laborious physical
          exercise, except to obtain some advantage from it? But who has any
          right to find fault with a man who chooses to enjoy a pleasure that
          has no annoying consequences, or one who avoids a pain that produces
          no resultant pleasure?
        </p>
        <p>
          ....v....1....v....2....v....3....v....4....v....5....v....6....v....7....
          <span className="blocks">|</span>
        </p>
        <p className="blocks">
          ....v....1....v....2....v....3....v....4....v....5....v....6....v....7....|
        </p>
      </main>
    </Layout>
  );
};

export default AboutPage;
