const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>

      <form>
        <input
          type="text"
          placeholder="Enter your Name"
          className="border border-orange-300"
        />
        <input
          type="text"
          placeholder="Enter your Message"
          className="border border-orange-300"
        />
        <button className="border border-orange-300 rounded-lg">Submit</button>
      </form>
    </div>
  );
};
export default Contact;
