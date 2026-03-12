import { Link } from 'react-router-dom'

function TermsPage() {
  return (
    <section className="section">
      <div className="content-card legal-page">
        <h1 className="page-title">Terms & Conditions</h1>
        <p className="legal-updated">Last updated: {new Date().toLocaleDateString('en-US')}</p>

        <h2>Agreement to Terms</h2>
        <p>
          By using this website or contacting ParSales Acquisitions, you agree to these Terms &
          Conditions.
        </p>

        <h2>SMS & Text Messaging Consent</h2>
        <p>
          By providing your mobile phone number and opting in to receive text messages from
          ParSales Acquisitions, you consent to receive SMS messages from us. You may receive
          messages about your property inquiry, status updates, and related communications.
        </p>
        <p>
          <strong>Message frequency:</strong> Message frequency varies. You may receive messages
          when you submit an inquiry, when we have updates about your property, or when you
          request information from us.
        </p>
        <p>
          <strong>Message and data rates may apply.</strong> Check with your carrier for details.
        </p>

        <h2>How to Opt Out</h2>
        <p>
          You may opt out of receiving text messages at any time by replying <strong>STOP</strong> to
          any message. You will receive a confirmation message. For help, reply{' '}
          <strong>HELP</strong>. After opting out, you will no longer receive SMS messages from
          ParSales Acquisitions unless you opt in again.
        </p>

        <h2>Opt-In Methods</h2>
        <p>
          You may opt in to receive SMS messages by: (1) submitting our contact form and
          checking the box to receive text updates; (2) providing your phone number and
          consenting verbally when you call us; or (3) texting a keyword to our number as
          advertised on our website. Consent is required before we send any marketing or
          promotional SMS messages.
        </p>

        <h2>Contact Us</h2>
        <p>
          For questions about these Terms & Conditions, contact us at{' '}
          <a href="mailto:nickl@parsaleacquisitions.com">nickl@parsaleacquisitions.com</a> or
          call <a href="tel:+14045785205">(404) 578-5205</a>.
        </p>

        <p>
          <Link to="/privacy">View our Privacy Policy</Link>
        </p>
      </div>
    </section>
  )
}

export default TermsPage
