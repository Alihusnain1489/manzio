const Page = () => {
  return (
    <section className="grid gap-8 md:grid-cols-2 items-center p-4 md:p-8">
      {/* Image */}
      <div>
        <img
          src="/Group 1315.svg"
          alt="Illustration"
          className="w-full rounded-lg object-cover"
        />
      </div>

      {/* Content */}
      <div>
        <h1 className="mb-4 text-3xl md:text-4xl font-semibold leading-tight">
          Heading
        </h1>
        <p className="text-gray-600 leading-relaxed">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt
          accusantium quas dolorum impedit beatae repudiandae error repellendus
          neque. Reiciendis eum placeat animi minus cupiditate, excepturi
          possimus vel magnam nulla repellat sed officiis nobis error libero
          culpa quos atque voluptate sequi laboriosam esse dolore, nihil fuga
          cum. Atque id laudantium nemo.
        </p>
      </div>
    </section>
  );
};

export default Page;

