import Image from "next/image";

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            How it works
          </h2>
          {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis.
            Suspendisse eget egestas a elementum pulvinar et feugiat blandit at.
            In mi viverra elit nunc.
          </p> */}
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row items-center">
          <div className="sm:w-full w-2/3">
            <Image
              src="/img/woman10.webp"
              width={800}
              height={800}
              alt=""
              className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
          <div className="w-full text-center sm:pl-10 flex flex-col items-center justify-center">
            <p className="font-bold tracking-tight text-gray-900 text-2xl sm:text-3xl mt-10 sm:mt-0">
              Companionship
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              SecondSoul is a text-based conversations platform based on your
              profile
            </p>
          </div>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24 flex flex-col-reverse sm:flex-row items-center">
          <div className="w-full text-center sm:pr-10 flex flex-col items-center justify-center">
            <p className="font-bold tracking-tight text-gray-900 text-2xl sm:text-3xl mt-10 sm:mt-0">
              For Onlyfans creators
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We select top influencers/models and generate their AI version to
              expand their revenue channels
            </p>
          </div>
          <div className="sm:w-full w-2/3">
            <Image
              src="/img/woman4.webp"
              width={800}
              height={800}
              alt=""
              className="w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
