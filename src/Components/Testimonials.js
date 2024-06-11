import "../css/App.css";

const testimonials = [
  {
    id: 1,
    body: "Caleb was a dream to deal with in the purchase of our home! In a housing market that feels impossible to overcome he walked us through scenarios that made sense and made home ownership a reality. He was patient, reliable, and quick to respond. We don't intend on moving again…ever, but if we do Caleb will be the only call we need to make.",

    name: "Danielle Reay",
  },
  {
    id: 2,
    body: "Caleb is a world of knowledge, not only has he been helpful through the loan process but also renting out our property. He has nothing but your best interest and wants to find the best solution for you and your situation. I would highly suggest Caleb for all your mortgage needs!",

    name: "Tanner Clegg",
  },
  {
    id: 3,
    body: "As a first-time homebuyer, navigating the loan process and choosing the right lender felt overwhelming. Caleb was patient as I looked into all of my options. In the end he was able to get me an amazing deal that no one else was able to come close to. Throughout the process, Caleb kept me informed about each step, and was quick to respond to all my questions and concerns. If you're thinking about buying a home, Caleb is the way to go - seriously, can't recommend him enough!",

    name: "Jaron Hirschi",
  },
  {
    id: 4,
    body: "Caleb did such a great job with our loan. He was very quick to respond and was on top of every step along the way. It also helped that he took the time to know what our priorities were in regards to the loan and worked tirelessly to help it gone done right! I will definitely be working with him again on our next loan!",

    name: "Tanner Norton",
  },
];

export default function Testimonials() {
  return (
    <div className="bg-white pb-16 pt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-[#004e82] mt-2 text-4xl font-bold tracking-tight sm:text-4xl">
            Statements from recent Clients
          </h1>
        </div>
        <div className="mx-auto mt-8 flow-root max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 md:grid-cols-2">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="pt-6 sm:inline-block sm:w-full sm:px-4"
              >
                <figure className="rounded-2xl bg-gray-100 p-8 h-full text-sm leading-6">
                  <blockquote>
                    <p className="italic text-black">{`“${testimonial.body}”`}</p>
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-x-4">
                    <div>
                      <div className="font-bold text-[#004e82]">
                        ~{testimonial.name}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
