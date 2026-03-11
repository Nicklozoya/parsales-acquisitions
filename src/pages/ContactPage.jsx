import { Link } from 'react-router-dom'

function ContactPage() {
  return (
    <section className="section contact" id="contact">
      <p className="eyebrow">Contact Us</p>
      <h1 className="page-title">Get your no-obligation land offer</h1>
      <p>
        Share your details and our team will follow up quickly. You can also reach us
        directly at{' '}
        <a href="mailto:offers@parsalesacquisitions.com">offers@parsalesacquisitions.com</a> or
        call <a href="tel:+14045785205">(404) 578-5205</a>.
      </p>
      <form
        className="contact-form"
        action="mailto:offers@parsalesacquisitions.com"
        method="post"
        encType="text/plain"
      >
        <label>
          Full Name
          <input type="text" name="name" required />
        </label>
        <label>
          Email
          <input type="email" name="email" required />
        </label>
        <label>
          Phone
          <input type="tel" name="phone" />
        </label>
        <label>
          Property County & State
          <input type="text" name="location" required />
        </label>
        <label>
          Additional Notes
          <textarea name="notes" rows="4" />
        </label>
        <div className="form-opt-in">
          <label className="checkbox-label">
            <input type="checkbox" name="sms_optin" />
            <span>
              I agree to receive text messages from ParSales Acquisitions about my property
              inquiry. Message frequency varies. Message and data rates may apply. Reply STOP to
              unsubscribe and HELP for assistance. <Link to="/terms">Terms & Conditions</Link>{' '}
              · <Link to="/privacy">Privacy Policy</Link>
            </span>
          </label>
        </div>
        <button className="btn btn-primary" type="submit">
          Send My Property Details
        </button>
      </form>
    </section>
  )
}

export default ContactPage
