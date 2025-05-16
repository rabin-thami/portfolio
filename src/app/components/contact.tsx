import {
  Github,
  Linkedin,
  Mail,
  MessageSquare,
  Phone,
  Send,
  Twitter,
  User,
} from "lucide-react";
export default function Contact() {
  return (
    <div
      className="mt-14 md:min-h-screen md:mt-20 py-5  flex max-w-6xl mx-auto"
      id="contact"
    >
      <div className="relative flex md:h-screen w-full flex-col items-center justify-center ">
        {/* Title */}
        <div className="mb-15">
          <div className="absolute left-0 flex w-full items-center gap-5">
            <h2 className="text-2xl w-fit font-bold">
              <span className="text-primary ">05. </span>
              <span>Get In Touch</span>
            </h2>
            <hr className="h-[2px] w-1/6 border-none bg-primary" />
          </div>
        </div>
        {/* About me Text */}
        <div className="background">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 rounded-lg shadow-lg  overflow-hidden backdrop-blur-sm bg-white/20 dark:bg-white/10 border border-white/30 ">
          {/* Sidebar */}
          <div className="text-white p-8 md:col-span-1 relative">
            {/* Add a centered border line */}
            <div className="absolute right-0 top-1/4 bottom-1/4 w-[1px] bg-white/30 hidden md:block" />

            <h3 className="text-xl font-semibold mb-6">Let's </h3>
            <p className="text-white mb-8">
              I'd love to hear from you. Fill out the form and I'll get back to
              you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <User className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Name</h4>
                  <p className="text-primary text-sm">Rabin Thami</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-primary text-sm">contact@example.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="h-5 w-5 text-primary mr-3 mt-0.5" />
                <div>
                  <h4 className="font-medium">Phone</h4>
                  <p className="text-primary text-sm">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="p-8 md:col-span-2">
            <h3 className="text-xl font-semibold mb-6">Send a Message</h3>
            <form id="contact-form-2" className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <div className="flex items-center text-sm font-medium">
                    <User className="h-4 w-4 mr-2 text-primary dark:text-primary " />{" "}
                    Name
                  </div>
                  <input
                    id="name-2"
                    name="name"
                    placeholder="Your name"
                    required
                    aria-required="true"
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-primary dark:border-primary
                    focus-visible:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center text-sm font-medium">
                    <Mail className="h-4 w-4 mr-2 text-primary" /> Email
                  </div>
                  <input
                    id="email-2"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    required
                    aria-required="true"
                    className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-primary dark:border-primary focus-visible:ring-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm font-medium">
                  <MessageSquare className="h-4 w-4 mr-2 text-primary " />{" "}
                  Subject
                </div>
                <input
                  id="subject-2"
                  name="subject"
                  placeholder="What is this regarding?"
                  className="flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-primary dark:border-primary focus-visible:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <div className="flex items-center text-sm font-medium">
                  <MessageSquare className="h-4 w-4 mr-2 text-primary" />{" "}
                  Message
                </div>
                <textarea
                  id="message-2"
                  name="message"
                  placeholder="Your message"
                  rows={5}
                  required
                  aria-required="true"
                  className="flex min-h-[80px] w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 border-primary dark:border-primary focus-visible:ring-primary"
                />
              </div>

              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 text-primary-foreground h-10 px-4 py-2 w-full bg-primary hover:bg-primary dark:bg-primary dark:hover:bg-primary text-black">
                <Send />
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
