export const Map = () => {
  return (
    <div className="container w-[1440px] max-w-4/5 mx-auto">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6153807.198079304!2d64.60772225502818!3d41.13913909330703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2ecb1c947f50fb4f%3A0x69963b41383648dc!2sGo%20Travel%20Company!5e0!3m2!1sen!2s!4v1716266630241!5m2!1sen!2s"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="w-full rounded-t-3xl"
      ></iframe>
    </div>
  )
}
