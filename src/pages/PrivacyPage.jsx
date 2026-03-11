import { Link } from 'react-router-dom'

function PrivacyPage() {
  return (
    <section className="section">
      <div className="content-card legal-page">
        <h1 className="page-title">Privacy Policy</h1>
        <p className="legal-updated">Last updated: {new Date().toLocaleDateString('en-US')}</p>

        <h2>Information We Collect</h2>
        <p>
          ParSales Acquisitions collects information you provide when you contact us, including
          your name, email address, phone number, and property details. We use this information
          to respond to your inquiries and provide offers on land acquisitions.
        </p>

        <h2>How We Use Your Information</h2>
        <p>
          We use the information you provide to communicate with you about your property and
          our services. We do not sell or rent your personal information to third parties.
        </p>

        <h2>Mobile Number & SMS Collection</h2>
        <p>
          When you provide your mobile phone number to ParSales Acquisitions, we may use it to
          send you text messages about your property inquiry, status updates, and related
          communications. We collect mobile numbers only after you have expressly consented to
          receive SMS messages from us.
        </p>
        <p>
          <strong>No mobile information will be shared with third parties/affiliates for
          marketing/promotional purposes.</strong> All the above categories exclude text message
          originator opt-in data and consent; this information will not be shared with any third
          parties.
        </p>

        <h2>Opt-Out</h2>
        <p>
          You may opt out of receiving text messages at any time by replying <strong>STOP</strong> to
          any message. For help, reply <strong>HELP</strong>. Message and data rates may apply.
        </p>

        <h2>Contact Us</h2>
        <p>
          For questions about this Privacy Policy, contact us at{' '}
          <a href="mailto:offers@parsalesacquisitions.com">offers@parsalesacquisitions.com</a> or
          call <a href="tel:+14045785205">(404) 578-5205</a>.
        </p>

        <p>
          <Link to="/terms">View our Terms & Conditions</Link>
        </p>
      </div>
    </section>
  )
}

export default PrivacyPage
