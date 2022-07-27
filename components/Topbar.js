const Topbar = ({ topBarMsg, topBarMsgMobile }) => {
  topBarMsgMobile = !topBarMsgMobile ? topBarMsg : topBarMsgMobile;
  return (
    <div className="bg-black flex items-center justify-center  p-4 md:p-5">
      <p className="text-sm tracking-widest text-white font-medium uppercase">
        <span className="hidden md:block">{topBarMsg}</span>
        <span className="md:hidden">{topBarMsgMobile}</span>
      </p>
    </div>
  );
};

export default Topbar;
