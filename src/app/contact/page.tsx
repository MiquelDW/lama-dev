import Image from "next/image";

const ContactPage = () => {
  return (
    // Page container
    <div className="pageContainer">
      {/* Left section */}
      <div className="imgContainer">
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
        <form action="" className="flex flex-col">
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea name="" id="" cols={30} rows={10} placeholder="Message" />
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
