export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-greeting">Hi, my name is</p>
      <h1 className="hero-name">Mohamed Hasoon.</h1>
      <h2 className="hero-title">I craft intelligent mobile &amp; web apps.</h2>
      <p className="hero-desc">
        I&apos;m a Computer Science student based in Colombo, Sri Lanka, specialising
        in full-stack web development, React Native mobile apps, and applied AI.
        I love turning complex problems into clean, impactful software.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="btn btn-primary">View My Work</a>
        <a href="#contact" className="btn btn-outline">Get In Touch</a>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
      </div>
    </section>
  )
}
