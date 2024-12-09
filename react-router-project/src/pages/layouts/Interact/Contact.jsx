import { Form, useActionData, redirect } from "react-router-dom";

const Contact = () => {
  const data = useActionData();

  return (
    <div className="contact">
      <h2>Contact US</h2>
      <Form method="post" action="/help/contact">
        <label htmlFor="email">
          <span>Your email:</span>
          <input type="text" name="email" id="email" required />
        </label><br />
        <label htmlFor="message">
          <span>Your message:</span>
          <textarea name="message" id="message" required></textarea>
        </label>
        <button id="contact-btn">Submit</button>
        {data && data.error && <p>{data.errror}</p>}
      </Form>
    </div>
  );
};
export default Contact;

export const contactAction = async ({ request }) => {
  console.log(request);

  const data = await request.formData();
  const submission = {
    email: data.get("email"),
    message: data.get("message"),
  };
  console.log(submission);
  // send post request
  if (submission.message.length < 10) {
    return { error: "Message must be over 10 chars long!" };
  }

  // ? redirect the user

  return redirect("/");
};
