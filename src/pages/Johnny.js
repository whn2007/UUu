import React from 'react'
import Footer from "../components/Footer";
import "../styles/Johnny.scss";
import Origin from "../assets/origin.png"
import LifeMission from "../assets/lifemission.png"
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitchIcon from "../assets/twitch.png"
import RedditIcon from '@material-ui/icons/Reddit';

function Johnny() {
  return (
    <div className='johnny'>
      <div className='intro'>
        <div className='title'>
          <h1>Lord JayWuzer/</h1>
        </div>
      </div>
      
      <div className='links'>
        <div className='story'>
          <div className='origin'>
            <h2>Origin Story</h2>
            <a href='https://twitter.com/JayWuzer/status/1537534817302028288' target='_blank'>
              <img className='origin-story' src = {Origin}/>
            </a>
          </div>

          <div className='origin'>
            <h2>Life Mission</h2>
            <a href='https://twitter.com/JayWuzer/status/1537575282583818240' target='_blank'>
              <img className='life-mission' src = {LifeMission}/>
            </a>
          </div>
        </div>
      </div>

      <div className='achievements'>
        <h1>Achievements</h1>
        <p>
        • #1 expert in the world on Handshake (HNS) <br/>
        • Achieved 10k organic views on YouTube within 6 days of first video upload<br/>
        • UUu LLC, CEO<br/>
        • Advanced open water diver <br/>
        • Certified mediator <br/>
        • 4.0 final semester at UC Berkeley, Energy Engineering <br/>
        • 1 of 2 successful internal transfers into UC Berkeley's College of Engineering <br/>
        • Eagle scout <br/>
        • High school senior favorite <br/>
        • 1st place intermediate Wushu <br/>
        • ABRSM piano grade 6 <br/>
        </p>
      </div>

      <div className='ongoing'>
        <h1>Ongoing Pursuits</h1>
        <p>
        • ABRSM Grade 8<br/>
        • NBA All-Star Celebrity Basketball Game player<br/>
        • A-List Celebrity Actor<br/>
        • #1 YouTuber<br/>
        • Nobel Prize<br/>
        • Family documentary<br/>
        • .uuu ICANN TLD<br/>
        • #1 hit album<br/>
        • World Peace<br/>
        </p>
      </div>

      <div className='wisdom'>
        <h1>Quotes</h1>
        <div className='wise-tweets'>
          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538602089093353472' target='_blank'>
            <p>"California is the best country in the world." <br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538601385922400256' target='_blank'>
            <p>"Any time your feelings get hurt, it's just an indication that you need to dig a little more to more deeply understand yourself." <br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537502931427110912' target='_blank'>
            <p>"The difference between a medicine and a poison, is dosage." <br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537565381920845824' target='_blank'>
            <p>Only comment on things you have personally experienced. <br/>
            Don't talk sh#t about things you haven't tried yet, that's STOOPID! <br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538595515272556544' target='_blank'>
            <p>Silver bullets exist. <br/>
              We just need a lot of them.
            </p>
          </a>

          <a className='tweet' 
          href='https://twitter.com/JayWuzer/status/1538533999034806272' 
          target='_blank'>
            <p>No one will ever truly fully understand you.
            However, the sum of all your friends 
            CAN fully understand you. 
            That, is the purpose of friends. 
            To be understood. <br/>
            Fully.
            </p>
          </a>

          <a className='tweet' 
          href='https://twitter.com/JayWuzer/status/1538531433328697344' 
          target='_blank'>
            <p>
              I will overcome both Alexander Hamilton and 诸葛亮's legacies, simultaneously.
            </p>
          </a>

          <a className='tweet' 
          href='https://twitter.com/JayWuzer/status/1538524510122483714' 
          target='_blank'>
            <p>
            When people encounter something unknown and new, there are only 3 reactions: <br/>
            1. Fear <br/>
            2. Apathy <br/>
            3. Curiosity <br/>
            To be human is to be curious. Let's all be more human!
            </p>
          </a>

          <a className='tweet' 
          href='https://twitter.com/JayWuzer/status/1538331005148606464' 
          target='_blank'>
            <p>
            The 2 things you must never lack: <br/>
            1. Action <br/>
            2. Faith <br/>
            </p>
          </a>

          <a className='tweet' 
          href='https://twitter.com/JayWuzer/status/1538268696245809152' 
          target='_blank'>
            <p>
              Big dreams, small pockets.
            </p>
          </a>

          <a className='tweet' 
          href='https://twitter.com/JayWuzer/status/1538235756828733440' 
          target='_blank'>
            <p>
            Relationships become stronger after reconciling a big fight. <br/>
            The bigger the fight, the stronger the reconciliation, <br/>
             and the stronger the bond becomes.
            </p>
          </a>

          <a className='tweet' 
          href='https://twitter.com/JayWuzer/status/1538217871515324416' 
          target='_blank'>
            <p>
            Misunderstandings are the MOST tragic situation possible. <br/>
            Just look at Romeo and Juliet. <br/>
            That's why communication is of utmost importance, ALWAYS. 
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537503058267058176' target="_blank">
            <p>"Moderation in everything, including moderation."<br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538202935967944704' target="_blank">
            <p>
            Saving the world begins at the individual level. <br/>
            I will take care of my friends, make sure they are doing what they love
            for the rest of their lives, and then scale up from there.
            By the time I'm 40, I will have scaled up to the entire global population. <br/>
            But first, you.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538219576160161792' target="_blank">
            <p>You must be vulnerable to gain trust. <br/>
            I maximize my vulnerability to maximize trust. <br/>
            Because trust in people is what matters. <br/>
            Faith in people is what matters. <br/>
            Have more faith.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538270289804468224' target="_blank">
            <p>"My favorite animal is the Orca."<br/>
            Probably one of the reasons why I wear black and white all the time LOL. <br/>
            Shout out to @TierZoo!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1536368203554689025' target="_blank">
            <p>My personality: I always want the BEST, #1, top-of-the-line, in everything.
            E,g. I want a synthetic diamond studded platinum necklace because platinum is the BEST metal, and synthetic diamonds are more perfect and stronger than natural ones.
            Just a lil peak into my mind.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1536372865221636097' target="_blank">
            <p>"Your life achievements will be a bullet point in mine!" 
              BAHAHAHAHA this is like the most hilarious quote I've ever come up with!
              But @williamxnguyen and I truly believe it, and that is why we are one of ooooneeeee. <br/>
              STOOPID!
              (again, we're just having fun...)
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1536374061189582850' target="_blank">
            <p>Why I love Twitter: Concision. <br/>
              A favorite quote of mine: "If I had more time, I would've written something shorter."
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1536415764990742529' target="_blank">
            <p>I don't mind talking shit to y'all because life is VERYYY unkind!
              You can't be so fragile if you want to accomplish great things!
              I have sobbed countless times this past week because of the hate I received, but I kept pushing every day because I must.
              I want to be #1!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1536416281049436161' target="_blank">
            <p>We will make it happen, because I always know what I want and how to get it.
              I have proved that with my actions, time and time again. <br/>
              And I ALWAYS deliver!!!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1536421250028818432' target="_blank">
            <p>Remember when I said "despite the fact I only have 1 comma in my bank account, I'm already wealthy as FUCK with love?"
              Believe me now?
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1536518603360546817' target="_blank">
            <p>Anyone is welcome to join UUu! <br/>
              We solve problems, have fun, figure shit out, and get things done! <br/>
              Join us if you want to eliminate your know-do-gap, which will make you 1/1.
              We don't NEED you though, you're just a nice-to-have 😈/
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1536744534293368832' target="_blank">
            <p>"The ends justify the means"...
                As long as the means aren't hurting anyone, I'm a believer in this and will commit to it 100%!
                Zero know-do gap, cause we 1/1, cause we Big Tymin'!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1536795267676008448' target="_blank">
            <p>Y'all think I'm ADHD, I just have SO MUCH FOCUS that I can accomplish anything I want... SIMULTANEOUSLY!
              My hobbies this past year were: <br/>
              1-on-1 basketball training with a 6'7" ex-NCAA basketball player (and he struggles against me) <br/>
              Improv acting (I am #1) <br/>
              Running @NamebaseHQ
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1536832232907649024' target="_blank">
            <p>Timing, is everything. <br/>
              And it is time.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537065986913775616' target="_blank">
            <p>Success by any (ethical) means necessary!!! <br/>
              I always go ALL IN!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537146243914211328' target="_blank">
            <p>The truth will always shine. <br/>
              The truth cannot be stopped. <br/>
              And I am the truth! <br/>
              Shout-out to @riorootmusic for coining that term lol 💯/
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537099497800470528' target="_blank">
            <p>For those wondering what my goal is, I want to become an influencer so I can market my own investments LOL. <br/>
              $HNS <br/>
              @CleanRobotics <br/>
              @AtlasPROfilax <br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537219701448642561' target="_blank">
            <p>Never sacrifice your long-term goals for short-term gains. That's why the @USTreasury has more favorable taxes for long-term capital gains.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537284498659848192' target="_blank">
            <p>Once you fully understand yourself, you will NEVER get your feelings hurt.
              So if you ever find your feelings getting damaged, just dig a little deeper inside yourself to figure out why.
              Once you get to the point where no one can tell you shit you don't know, you will be 1/1.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537494693822353409' target="_blank">
            <p>I respect people who customize their stuff (e.g. custom phone, custom computer background, custom clothing, custom furniture).
              People who customize their lives know what they want, and you must ALWAYS know 2 things: <br/>
              1. What you want. <br/>
              2. How to get it.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537506361415593984' target="_blank">
            <p>Skip 1 day of practice, and only you will notice. <br/>
              Skip 2 days of practice, and only your close friends will notice. <br/>
              Skip 3 days of practice, and the whole world will notice. <br/>
              Never stop practicing, and never stop grinding. <br/>
              "Practice 40 hours a day!" - @TwoSetViolin
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537509677331714049' target="_blank">
            <p>"No such thing as a stupid question" is the stupidest thing I ever heard.
              If you're asking a question about something that has already been answered, you are wasting everyone's time and therefore have asked a stupid question.
              STOOPID!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537552214486421504' target="_blank">
            <p>I totally failed on this one LOL.
                It's HARD to get started!
                Then again, it takes something like 95% of a rocket's fuel to get out of orbit.
                Good luck @SpaceX, you won't need it! 
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537592745677598720' target="_blank">
            <p>Nature vs. Nurture is a stoopid argument.
              Your nature determines your potential, and your nurture determines how close to your potential you can reach.
              Just remember, you have a WAY higher potential than you think!
              So never stop grinding 💪/
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537825233184251905' target="_blank">
            <p>I am never greedy about money.
              But I AM greedy about relationships.
              Because the most important thing in this world, is people.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537827324707495936' target="_blank">
            <p>I have always been a G. <br/>
              G for Genius, son!!!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537825324917870592' target="_blank">
            <p>There is nothing more disrespectful than not delivering on promised funds.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537828755678195714' target="_blank">
            <p>I'm too lazy to keep a diary, but I want to remember my life experiences.
              That's why I love taking pictures.
              Because a picture is worth a thousand words.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537832677461479425' target="_blank">
            <p>I'm not correct 100% of the time, because I'm only a demigod.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537833035608993792' target="_blank">
            <p>Your goal should be to have a net-positive effect on the planet before you die.
              Because if you don't,
              that means, the world would've been better without you.
              And that's just sad.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537834452407111680' target="_blank">
            <p>UUu, CEO. <br/>
              6 letters, bitch! <br/>
              Cause I'm Big Tymin'!!!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537836411184766976' target="_blank">
            <p>People are drawn to confidence, because it indicates you have the answers.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537842683632226304' target="_blank">
            <p>Most things aren't urgent, but I do like things ASAP.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537853455309541376' target="_blank">
            <p>Like is drawn to like.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537892761117921285' target="_blank">
            <p>Data is NOT the most valuable asset. <br/>
              Attention is.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537892845658378242' target="_blank">
            <p>Your life achievements will be bullet points in mine.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1537927140133351425' target="_blank">
            <p>A million dollars is nothing.
              If you made a million dollars a year, you would need to work 1000 years to get to a billion.
              1000 years ago, Christopher Columbus wasn't even in America!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538000963843153920' target="_blank">
            <p>"Revenge is a dish best served cold". <br/>
              I disagree. <br/>
              I like to serve my revenge piping hot. <br/>
              cc @NamebaseHQ @Namecheap
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538015785355948033' target="_blank">
            <p>Sugar is poison.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538064071764811776' target="_blank">
            <p>A person's sense of humor is an indication of their intelligence. <br/>
              And my cofounders, @williamxnguyen, @RunDavidMC, and @pokudi_, are funny as FUCK!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538189318660886528' target="_blank">
            <p>My Chinese name is 吴绿. <br/>
              绿, literally translated, means "green". <br/>
              I was born to "green the world". <br/>
              And I will do it. EZ! <br/>
              Cause I ALWAYS deliver.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538197486040322048' target="_blank">
            <p>Professionalism is STOOPID as FUCK!<br/>
              Why?<br/>
              Because it's all an act.<br/>
              We need more authenticity in this world, and I will make it happen. <br/>
              And I ALWAYS deliver!
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538198740556623872' target="_blank">
            <p>Have more faith in yourself. <br/>
            Have more faith in others. <br/>
            Have more faith.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538199319978708994' target="_blank">
            <p>Do away with contracts. <br/>
            A contract means you do not trust the other party to deliver. <br/>
            Have more faith in others. <br/>
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1538203450671935488' target="_blank">
            <p>Money talks. <br/>
            And I am money LOL! <br/>
            💰/
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1539478331036295168' target="_blank">
            <p>Actions always speak louder than words. <br/>
            It's just too bad that most people are deaf as fuck.
            </p>
          </a>

          <a className='tweet' href='https://twitter.com/JayWuzer/status/1539496909127098368' target="_blank">
            <p>What's the meaning of life? <br/>
              Whatever the fuck you want it to be.
            </p>
          </a>

        </div>
      </div>


      <div className='socials'>
        <h1>Socials</h1>
        <h2>Learn More About the Founder</h2>
        <div className='icons'>
          <a href='https://twitter.com/JayWuzer' target='_blank'> <TwitterIcon/> </a>
          <a href='https://instagram.com/jaywuzer?igshid=YmMyMTA2M2Y=' target='_blank'> <InstagramIcon/> </a>
          <a href='https://www.linkedin.com/in/jaywuzer/' target='_blank'> <LinkedInIcon/> </a>
          <a href='https://www.twitch.tv/jaywuzer' target='_blank'> <img src={TwitchIcon}/> </a>
          <a href='https://www.linkedin.com/in/jaywuzer/' target='_blank'> <RedditIcon/> </a>
          <a href='https://www.youtube.com/channel/UCYmsa4XVlPT7WCoA09YjP0g' target='_blank'> <YouTubeIcon/> </a>
        </div>
      </div>

      <Footer className = "footer"/>
    </div>
  )
}

export default Johnny