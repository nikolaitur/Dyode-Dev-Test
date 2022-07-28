const NewsletterForm = () => {
  return (
    <div className="newsletter-section bg-dyode-green pt-4 pb-6 md:py-20">
      <div className="container">
        <div className="section-title flex items-center justify-center gap-2 md:gap-3">
          <img className="w-7 md:w-14" src="/icons/mailbox.svg" alt="mailbox" />
          <span className="font-title text-white text-xl md:text-7xl">
            Sign Up &amp; Stay Connected
          </span>
        </div>
        <div className="section-content mt-3 md:mt-6 flex items-start justify-between flex-wrap">
          <p className="description text-white basis-full md:basis-1/2 text-center md:text-left">
            Sign up for the newsletter and get 20% off! Gain access to exclusive
            offers and be the first to know when new stuff drops!
          </p>
          <form className="basis-full mt-14 md:mt-0 md:basis-1/2 md:pl-12 flex">
            <input
              className="grow pl-4 hidden md:block"
              placeholder="Enter Your Email Address"
            />
            <button
              className="mx-auto md:ml-3 text-sm tracking-widest uppercase text-white bg-dyode-green border border-white flex items-center justify-center"
              type="submit"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NewsletterForm;
