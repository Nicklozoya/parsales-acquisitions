import { Link } from 'react-router-dom'

function HomePage() {
  const serviceHighlights = [
    {
      title: 'Fast, Fair Offers',
      description:
        'Share a few property details and receive a straightforward cash offer without pressure.',
    },
    {
      title: 'No Repairs Needed',
      description:
        'Sell your land as-is. No cleanup, no upgrades, and no hidden listing expenses.',
    },
    {
      title: 'Flexible Closing',
      description:
        'Choose a timeline that works for you. We can close quickly or work around your schedule.',
    },
  ]

  const faqItems = [
    {
      question: 'Do I need to pay any fees or commissions?',
      answer:
        'No. ParSales Acquisitions buys directly from sellers, so there are no agent fees or commissions.',
    },
    {
      question: 'How quickly can we close?',
      answer:
        'In many cases we can close in as little as 7-21 days, depending on title and county processing.',
    },
    {
      question: 'What types of land do you buy?',
      answer:
        'We focus on vacant and undeveloped lots, inherited parcels, and investment land in growth markets.',
    },
  ]

  return (
    <>
      <section className="hero">
        <p className="eyebrow">Sell Land With Confidence</p>
        <h1>We help landowners sell quickly, simply, and stress-free.</h1>
        <p className="hero-copy">
          ParSales Acquisitions works directly with property owners to buy land for cash.
          No listings, no repairs, and no waiting months for the right buyer.
        </p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/contact">
            Request a Cash Offer
          </Link>
          <a className="btn btn-outline" href="tel:+14045785205">
            Call Us Today
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <p className="stat-value">7-21 Days</p>
            <p className="stat-label">Typical Closing Window</p>
          </div>
          <div>
            <p className="stat-value">No Commissions</p>
            <p className="stat-label">Direct-to-seller offers</p>
          </div>
          <div>
            <p className="stat-value">As-Is Purchases</p>
            <p className="stat-label">No repairs or cleanup needed</p>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>Why owners choose ParSales Acquisitions</h2>
        <div className="grid">
          {serviceHighlights.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <h2>Frequently asked questions</h2>
        <div className="faq-list">
          {faqItems.map((faq) => (
            <details className="faq-item" key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  )
}

export default HomePage
