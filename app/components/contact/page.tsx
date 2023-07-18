export default function Contact() {
    return(
<section id="contact" className=" bg-gray-100">
  <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:ml-40">

        <div className="pt-28 space-y-3">
            <h1 className="text-red-500 font-semibold text-xl">CONTACT</h1>
            <h1 className="font-extrabold text-3xl pb-10">Get in Touch</h1>
            <p className="py-8 max-w-md">
                Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
            </p>
        </div>

    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
      <div className="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" className="space-y-4">
          <div>
            <label className="sr-only">Name</label>
            <input
              className="w-full rounded-lg border-slate-500 p-3 text-sm"
              placeholder="Name"
              type="text"
              id="name"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="sr-only">Email</label>
              <input
                className="w-full rounded-lg border-slate-500 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
              />
            </div>

            <div>
              <label className="sr-only">Phone</label>
              <input
                className="w-full rounded-lg  border-slate-500 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
              />
            </div>
          </div>

          

          <div>
            <label className="sr-only">Message</label>

            <textarea
              className="w-full rounded-lg  border-slate-500 p-3 text-sm"
              placeholder="Message"
              rows="8"
              id="message"
            ></textarea>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="inline-block w-full rounded-lg bg-red-500 px-5 py-3 font-medium text-white sm:w-auto"
            >
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
    )
}









// export default function Contact() {
//     return (
//         <section id="contact">
//             <div>
                // <div classNameName="pt-28 space-y-3 pl-48">
                //     <h1 classNameName="text-red-500 font-semibold text-xl">CONTACT</h1>
                //     <h1 classNameName="font-extrabold text-3xl pb-10">Get in Touch</h1>
                //     <p classNameName="py-8 max-w-md">
                //         Please fill out the form on this section to contact with me. Or call between 9:00 a.m. and 8:00 p.m. ET, Monday through Friday
                //     </p>
                // </div>
//                 <div classNameName="px-36 pt-8 space-y-6 pb-36 pl-48">
//                     <p classNameName="w-2/5 h-12 border border-gray-400 pl-3 py-2">Name</p>
//                     <p classNameName="w-2/5 h-12 border border-gray-400 pl-3 py-2">Email</p>
//                     <p classNameName="w-2/5 h-32 border border-gray-400 pl-3 py-2">Message</p>
//                     <button classNameName="bg-red-500 w-48 h-12 text-white font-semibold">Send Message</button>
//                 </div>
//             </div>
//         </section>
//     )
// }