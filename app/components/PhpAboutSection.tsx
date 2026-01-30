import HireLinks from "./HireLinks";

export default function PhpAboutSection() {
    return (
      <section className="w-full bg-white py-20">
        <div className="mx-auto max-w-[1200px] px-4 font-formular">
          {/* Hero text */}
          <h1 className="mb-24 font-formular text-[calc(24px+12*((100vw-300px)/1300))] font-bold leading-snug text-black md:text-[36px]">
            Build high-quality web solutions with experienced <br />
            STACKLEVEL GROUP PHP developers.
          </h1>
  
          {/* Section title */}
          <h2 className="mb-8 font-formular text-[calc(24px+12*((100vw-300px)/1300))] font-bold text-black md:text-[28px]">
            What is PHP development?
          </h2>
  
          {/* Description */}
          <p className="max-w-[1000px] font-formular font-medium text-[calc(16px+12*((100vw-300px)/1300))] leading-[1.2] text-black md:text-[18px]">
            PHP, being one of the most popular open-source languages of programming,
            is an essential part of almost every web-based solution. From easy-to-use
            websites to high-loaded applications. STACKLEVEL GROUP PHP developers
            have strong expertise in creating secure, stable and easy-to-scale web
            applications of all kinds to make businesses grow.
          </p>
          <h2 className="text-[calc(24px+12*((100vw-300px)/1300))] font-bold text-black md:text-[32px] py-[50px]">
          Where to use it?
          </h2>

        <p className="w-full max-w-[1000px] mb-8 leading-[1.2] text-black md:text-[calc(16px+5*((100vw-300px)/1300))] font-medium">
           PHP language is perfect for all kinds of web development. We provide all
           kind of php web development services:
        </p>

        <ul className="mb-20 space-y-5 pl-6 text-[16px] md:text-[calc(16px+5*((100vw-300px)/1300))]">
        {[
            "Custom web applications development",
            "All kinds of websites development",
            "Social networking solutions development",
            "E-commerce development",
            "Custom PHP development",
        ].map((item) => (
           <li key={item} className="relative pl-6">
            <span className="absolute left-0 top-3.5 h-1.5 w-1.5 bg-blue-600" />
            {item}
           </li>
        ))}
        </ul>

        <h2 className="mb-12 text-[32px] font-bold text-black md:text-[calc(24px+12*((100vw-300px)/1300))]">
            Why PHP development?
        </h2>

        <h3 className="mb-4 text-[22px] font-semibold text-blue-600 md:text-[calc(20px+10*((100vw-300px)/1300))]">
            Saves your time
        </h3>

        <p className="w-full max-w-[1000px] mb-12 text-[16px] leading-[1.2] text-black md:text-[calc(16px+5*((100vw-300px)/1300))]">
            PHP development allows reusing parts of the code and it was created to
            develop web applications quickly. There is a wide variety of PHP
            frameworks like Symfony or Laravel. Each framework has its own specific
            functionality and provides time-saving development for every business
            need.
        </p>

        <h3 className="mb-4 text-[22px] font-semibold text-blue-600 md:text-[calc(20px+10*((100vw-300px)/1300))]">
            Reduce your costs
        </h3>

        <p className="w-full mb-12 max-w-[1000px] text-[16px] leading-[1.2] text-black md:text-[calc(16px+5*((100vw-300px)/1300))]">
            PHP is an open-source language — it means that using PHP is more
            cost-effective compared to all other technologies used for web
            application development. No additional spendings on downloading additional
            plugins, licensing or expensive web hosting. Affordable and fast-to-
            implement — what can be better for your business?
        </p>
        <h3 className="mb-4 text-[22px] font-semibold text-blue-600 md:text-[calc(20px+10*((100vw-300px)/1300))]">
            Allows to implement many features
        </h3>

    <p className="w-full max-w-[1000px] mb-12 text-[16px] leading-[1.2] text-black md:text-[calc(16px+5*((100vw-300px)/1300))]">
      If your business needs frequent updates, it is important to have a
      development model, which can be updated easily as soon as you need it.
      PHP development makes interactions built without additional development.
      Because of easily decipherable syntax, using PHP development allows you
      to change everything freely and in a short period of time.
    </p>

    {/* Feature 2 */}
    <h3 className="mb-4 text-[22px] font-semibold text-blue-600 md:text-[calc(20px+10*((100vw-300px)/1300))]">
      Secure and stable
    </h3>

    <p className="w-full max-w-[1000px] mb-24 text-[16px] leading-[1.2] text-black md:text-[calc(16px+5*((100vw-300px)/1300))]">
      PHP is used by almost 85% of all web applications. It is used for both
      highly-loaded web solutions and simple websites. PHP language was created
      to cover both problems of stability (we all know how unstable websites
      can affect e-commerce companies) and safety. Choose a talented developer
      from STACKLEVEL GROUP team — and never worry how to protect your web
      application.
    </p>

    {/* Big section title */}
    <h2 className="w-full max-w-[1000px] mb-8 text-[32px] font-bold leading-tight text-black md:text-[calc(24px+12*((100vw-300px)/1300))]">
      What STACKLEVEL GROUP team can do for your business?
    </h2>

    <p className="w-full max-w-[1000px] text-[16px] leading-[1.2] text-black md:text-[calc(16px+5*((100vw-300px)/1300))]">
      STACKLEVEL GROUP is an experienced software development company. We offer
      a full cycle of php web development services and help our clients to scale
      their business and be one step ahead of the competitors. Talented php
      developers are always doing their best to help our clients achieve all
      their business goals.
    </p>
    <HireLinks />
        </div>
      </section>
    );
  }
  