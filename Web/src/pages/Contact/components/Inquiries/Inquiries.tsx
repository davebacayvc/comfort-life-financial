import { CONTACT_LIST } from "constants/constants";
import "./Inquiries.scss";

const Inquiries = () => {
  return (
    <div className="inquiries">
      <div className="inquiries-get-in-touch">
        <h5>Stay in touch</h5>
        <p>
          Stay in touch and keep up-to-date with all our latest news, events and
          campaigns.
        </p>
      </div>
      <div className="inquiries-contact-list">
        <h5>Contact Points</h5>
        <ul>
          {CONTACT_LIST.map((contact, index) => (
            <li key={index}>
              <span className="contact-list">
                <span className="contact-name">
                  {contact.icon}
                  {contact.NAME}:
                  <span className="contact-value">{contact.VALUE}</span>
                </span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Inquiries;
