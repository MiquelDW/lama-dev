import Image from "next/image";

const ContactPage = () => {
  return (
    // Page container
    <div className="pageContainer items-center mmd:flex-col">
      {/* Left section */}
      <div className="imgContainer h-[500px]">
        <Image
          src="/contact.png"
          alt="Contact Image"
          fill
          className="object-contain"
        />
      </div>

      {/* Right section */}
      <div className="flex-1">
        {/* form */}
        <form action="" className="flex flex-col gap-[20px]">
          <input type="text" placeholder="Name and Surname" className="input" />
          <input type="text" placeholder="Email Address" className="input" />
          <input
            type="text"
            placeholder="Phone Number (Optional)"
            className="input"
          />
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Message"
            className="input"
          />
          <button className="blueBtn">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
