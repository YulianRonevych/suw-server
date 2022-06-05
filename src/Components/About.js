import React from "react";

export default function About() {
  return (
    <div className="about">
      <main>
        <section className="auheader">
          <img src={require("../Resources/about.jpg")} id="about" alt="ff" />
          <p id="xx">WE HELP PEOPLE ACROSS THE GLOBE</p>
          <div className="ww">
            Create or help others. Just one simple rule
          </div>
        </section>

        <div className="about-about">
            <div className="about-head">We are fond-raising organization</div>
            <div className="about-par">
            What does that mean? We help people to make their ideas come to life.
            Just post your idea and see of someone is intrested and you may find a sponsor or just get a big amount of donations.
            For those who want to donate we created comfortable list of the most succesful start-ups, so dont waste time and dive into world of ideas.
            </div>
        </div>

        <section>
          <div className="div1">
            <img src={require("../Resources/first.jpg")} id="ss" alt="ff" />
            <div className="ll">
              <p className="tt">SEND DONATION</p>
              <div>
                The easiest way to get started is to send a donation to those in
                need.Also you can create and invest your own project.
              </div>
              <button className="bb">donate</button>
            </div>
          </div>

          <div className="div1">
            <img src={require("../Resources/second.jpg")} id="ss" alt="ff" />
            <div className="ll">
              <p className="tt">GET INVOLVED</p>
              <div>
                Join someone or do it by yourself! We help people all over the
                world and participate in educational programs.
              </div>
              <button className="bb">help</button>
            </div>
          </div>

          <div className="div1">
            <img src={require("../Resources/third.jpg")} id="ss" alt="ff" />
            <div className="ll">
              <p className="tt">CAMPAIGNS</p>
              <div>
                Choose the campaign that resonates with you the most from a wide
                variety of projects we work with.
              </div>
              <button className="bb">start-ups</button>
            </div>
          </div>
        </section>
        <section className="d">
          <img src={require("../Resources/war.jpg")} id="war" alt="" />
          <div>
            <p className="mariupol">Help ukrainian armed forces</p>
            <div className="tm">
              Since this is a page about us,we cannot turn a blind eye to such
              an important problem as the war in Ukraine and we are trying to
              help our country in all possible ways, so if you are not
              indifferent to our problem you can make a sacrifice to the Armed
              Forces of Ukraine.
            </div>
            <button className="don">donate</button>
          </div>
        </section>
      </main>
      <footer></footer>
    </div>
  );
}