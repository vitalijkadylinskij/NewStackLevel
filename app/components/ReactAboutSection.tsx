import HireLinks from "./HireLinks";

export default function ReactAboutSection() {
    return (
        <section className="w-full bg-white py-24">
      <div className="mx-auto max-w-[1200px] px-4">
        {/* Intro text */}
        <p className="mb-12 md:mb-20 text-[24px] md:text-[36px] font-bold leading-[1.2] text-black [font-size:clamp(22px,4vw,36px)]">
          If you are looking for a user-friendly and easy-to-use application — react
          native app development is the best option for you. Expand your business
          easily with STACKLEVEL GROUP react development team.
        </p>

        {/* Title */}
        <h2 className="mb-4 md:mb-6 text-[28px] md:text-[36px] font-bold text-black [font-size:clamp(24px,3vw,36px)]">
          What is React?
        </h2>

        {/* Description */}
        <p className="w-full max-w-[1000px] mb-8 md:mb-12 text-[18px] md:text-[21px] leading-[1.2] text-black">
          Do you use Facebook, Instagram, Yahoo or Airbnb? If yes, congratulations —
          you’ve already got acquainted with React JS. To be clear, ReactJS was created
          by Facebook, and it is an open-source mobile application framework. All the
          applications for iOS and Android, created on React are native and
          easy-to-scale.
        </p>
        <h2 className="mb-4 md:mb-6 text-[26px] md:text-[32px] font-bold text-black [font-size:clamp(22px,2.5vw,32px)]">
          Where to use it?
        </h2>

        <p className="mb-4 md:mb-6 max-w-[1000px] text-[18px] md:text-[21px] leading-[1.2] text-black">
          React JS can help your business in many ways.
          We provide all kind of react native app development services:
        </p>

        <ul className="mb-12 md:mb-20 space-y-4 pl-6 text-[16px] md:text-[21px]">
          {[
            "React mobile apps development for iOS And Android",
            "Upgrading existing web applications with React",
            "Integration React JS-plugins into existing solutions",
            "React native web apps development",
            "React JS front-end development",
          ].map((item) => (
            <li
              key={item}
              className="relative text-[16px] md:text-[21px] leading-[1.6] text-black"
            >
              <span className="absolute -left-6 top-[15px] h-1.5 w-1.5 bg-blue-600" />
              {item}
            </li>
          ))}
        </ul>

        {/* Why React */}
        <h2 className="mb-4 md:mb-6 text-[28px] md:text-[36px] font-bold text-black [font-size:clamp(24px,3vw,36px)]">
          Why React?
        </h2>

        <h3 className="mb-4 md:mb-6 text-[24px] md:text-[30px] font-bold text-blue-600 [font-size:clamp(20px,2.5vw,30px)]">
          Saves your time and money
        </h3>

        <p className="w-full mb-12 max-w-[1000px] text-[21px] leading-[1.2] text-black">
          Money and time — there are two most important questions while doing
          business. To save both is almost a miracle. And React native development
          can make it happen! Easy start and fast goals achieved are the reasons
          many companies choose react js development for their mobile applications.
          You can be one step ahead from the competitors if you choose react
          native app development.
        </p>
        <h3 className="mb-4 md:mb-6 text-[22px] md:text-[26px] font-bold text-blue-600 [font-size:clamp(18px,2vw,26px)]">
          Offers cross-platform mobile app development
        </h3>

        <p className="mb-8 md:mb-12 max-w-[1000px] text-[18px] md:text-[21px] leading-[1.2] text-black">
          What if we say that using react native development can allow you to
          create only one code for both Android and iOS and make all apps run
          smoothly? It is real with React JS. Within a short time, you can
          create mobile applications for any kind of business! All you need is
          a talented React Developer (like one of the STACKLEVEL GROUP ones)
          and willing to rock your market.
        </p>

        {/* Benefit 2 */}
        <h3 className="mb-3 md:mb-4 text-[22px] md:text-[26px] font-bold text-blue-600 [font-size:clamp(18px,2vw,26px)]">
          The user-experience is always on top
        </h3>

        <p className="mb-8 md:mb-12 max-w-[1000px] text-[18px] md:text-[21px] leading-[1.2] text-black">
          React Native was created by Facebook for mobile apps. That’s why it
          is the best option if you want your mobile application to be as
          user-friendly as possible. Fast loading speed, lovable interface,
          and simple navigation — that is what makes mobile applications
          created with react native development great. You won’t have to
          choose between quality and functionality — react-native can do both.
        </p>

        {/* Benefit 3 */}
        <h3 className="mb-3 md:mb-4 text-[22px] md:text-[26px] font-bold text-blue-600 [font-size:clamp(18px,2vw,26px)]">
          Simple integration
        </h3>

        <p className="mb-16 md:mb-24 max-w-[1000px] text-[18px] md:text-[21px] leading-[1.2] text-black">
          There is no need to think about how to integrate your react native
          mobile application with third-party services. React native allows
          you to add plugins and APIs (like payment gateways, maps and so on)
          with your mobile app.
        </p>

        {/* What team can do */}
        <h2 className="w-full max-w-[1000px] mb-4 md:mb-6 text-[28px] md:text-[36px] font-bold text-black [font-size:clamp(24px,3vw,36px)]">
          What STACKLEVEL GROUP team can do for your business?
        </h2>

        <p className="w-full max-w-[1000px] text-[18px] md:text-[21px] leading-[1.2] text-black">
          STACKLEVEL GROUP is an experienced software development company. We
          offer a full cycle of react software development services and help
          our clients to scale their business and be one step ahead of the
          competitors. Talented react developers are always doing their best
          to help our clients achieve all their business goals.
        </p>
        <HireLinks />
      </div>
    </section>
    )
}