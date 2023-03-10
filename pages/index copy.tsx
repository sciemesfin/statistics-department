import Carousel from "@/components/carousel/carousel";
import Image from "next/image";
import Link from "next/link";

/* eslint-disable @next/next/no-img-element */
export default function Index() {
  const images = [
    "/images/i1.jpeg",
    "/images/i2.jpeg",
    "/images/i3.jpeg",
    "/images/i4.webp",
  ];

  const items = [
    {
      title: "The 50 th Anniversary",
      subtitle: `The 50th Anniversary of the Department of Statistics, Addis Ababa University, several Scientists are expected to attend the event.`,
      img: "",
      href: "conference",
    },
    {
      title: "Three type of Programs",
      subtitle: `Programs currently offered by the Department of Statistics. Bachelor of Science, Master of Science, and Doctor of Philosophy.`,
      img: "",
      href: "/programs",
    },
    {
      title: "25+ Academic Staff",
      subtitle: `Dr. Bedilu Alamirie is the Chairman of the Department of Statistics. Other staffcs are Adjunct staff, echnical staff, Support staff.`,
      img: "",
      href: "/staff",
    },
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl">
        <div className="w-full py-10">
          <div className="md:flex md:space-x-10 items-center justify-between">
            <div className="md:w-1/2 px-3 md:px-0">
              <h2 className="text-3xl font-semibold text-gray-800 md:text-4xl">
                Department of{" "}
                <span className="text-indigo-600">Statistics</span>
              </h2>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                We are proud to have been providing high-quality statistical
                education to students for the past 50 years.
              </p>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Our department offers comprehensive programs for students at
                every level of study, from B.Sc to M.Sc and PhD. Whether you are
                just beginning your statistical journey or are looking to
                further your knowledge in this field, our experienced faculty
                and cutting-edge curriculum will provide you with the tools and
                skills needed to excel in the ever-evolving world of statistics
              </p>
              <div className="flex justify-center lg:justify-start mt-6">
                <Link
                  className="px-4 py-3 bg-gray-900 text-gray-200 text-xs font-semibold rounded hover:bg-gray-800"
                  href="/contact"
                >
                  Get Started
                </Link>
                <Link
                  className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-xs font-semibold rounded hover:bg-gray-400"
                  href="/about"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden ml-auto md:block w-1/2">
              <Carousel items={images} activeItemId={0} />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50">
        <div className="max-w-7xl mx-auto py-10">
          <div className="md:flex md:space-x-10 justify-between px-3 md:px-0">
            {items.map((x, i) => (
              <Link href={x.href} key={i} className="p-3 md:p-0">
                <div className="max-w-sm cursor-pointer bg-white h-full rounded-xl overflow-hidden shadow-xl border border-gray-100 hover:border-gray-300 hover:bg-gray-300">
                  <div className="p-10">
                    <div className="font-bold text-xl mb-2">{x.title}</div>
                    <p className="text-gray-700 text-base">
                      {x.subtitle}
                      <span className="pl-2 text-blue-600">Read more</span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto py-12 max-w-7xl">
          <div className="md:flex items-center md:space-x-10">
            <div className="w-full md:w-1/2">
              <Image
                src="/images/about.webp"
                alt="active image"
                className="h-full max-h-[400px] w-full object-contain"
                height={300}
                width={400}
              />
            </div>
            <div className="w-full md:w-1/2 p-3 md:p-0">
              <h1 className="text-3xl py-3 font-extrabold">About us</h1>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker inclu
              </p>
              <p className="mt-2 text-sm text-gray-500 md:text-base">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker inclu
              </p>
              <div className="pt-3">
                <Link href="/about" className="text-blue-600 ">
                  Learn more ...
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
