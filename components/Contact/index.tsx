import Link from "next/link";
import ClipboardCopyTooltip from "../ClipboardCopy";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative pt-24 pb-20 px-4 lg:px-10"
    >
      <div className="mx-auto max-w-7xl lg:px-8">
        <h1
          className="pb-8 text-4xl tracking-tight text-center font-extrabold tracking-tight text-slate-50 md:text-5xl">
          Available for opportunities
        </h1>
        <div className="flex flex-col md:flex-row mt-5 mx-auto max-w-prose text-xl text-slate-200">
          <div className="mx-4 mt-2">
            Have an exciting project you need help with?
            Send me an email or contact me via instant message!
          </div>
          <div className="mx-4 mt-2">
            <div className="mb-2">
              <ClipboardCopyTooltip text="Click to copy!" copiedText="Copied!" textToCopy="leander.hoedt@gmail">
                <span className="underline hover:text-cyan-400">leander.hoedt@gmail.com</span>
              </ClipboardCopyTooltip>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/leander-hoedt-49506294/">
                <span className="hover:text-cyan-400 hover:underline">
                  LinkedIn
                </span>
              </a>
            </div>
            <div>
              <a href="https://github.com/leanderhoedt">
                <span className="hover:text-cyan-400 hover:underline">Github</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Contact;
