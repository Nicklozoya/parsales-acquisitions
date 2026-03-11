function ProcessPage() {
  const processSteps = [
    'Tell us about your property',
    'Get a no-obligation cash offer',
    'Pick your closing date and get paid',
  ]

  return (
    <section className="section section-accent">
      <p className="eyebrow">Simple Process</p>
      <h1 className="page-title">How selling your land works</h1>
      <div className="steps">
        {processSteps.map((step, index) => (
          <div className="step" key={step}>
            <span className="step-number">{index + 1}</span>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProcessPage
