const servicesData = [
  {
    header: "Lorem Lorem Lorem",
    text: "Aliquam erat volutpat. Fusce sed auctor sapien. Duis id feugiat sem. Maecenas dapibus id purus a laoreet. Maecenas fringilla lacinia aliquet. Mauris viverra rhoncus sem. Mauris a augue nec magna dapibus aliquam. Duis tristique in tortor vel finibus. In hac habitasse platea dictumst. Aliquam hendrerit ante libero, in finibus erat elementum sed. Nulla facilisi.",
  },
  {
    header: "Lorem Lorem Lorem",
    text: "Aliquam erat volutpat. Fusce sed auctor sapien. Duis id feugiat sem. Maecenas dapibus id purus a laoreet. Maecenas fringilla lacinia aliquet. Mauris viverra rhoncus sem. Mauris a augue nec magna dapibus aliquam. Duis tristique in tortor vel finibus. In hac habitasse platea dictumst. Aliquam hendrerit ante libero, in finibus erat elementum sed. Nulla facilisi.",
  },
  {
    header: "Lorem Lorem Lorem",
    text: "Aliquam erat volutpat. Fusce sed auctor sapien. Duis id feugiat sem. Maecenas dapibus id purus a laoreet. Maecenas fringilla lacinia aliquet. Mauris viverra rhoncus sem. Mauris a augue nec magna dapibus aliquam. Duis tristique in tortor vel finibus. In hac habitasse platea dictumst. Aliquam hendrerit ante libero, in finibus erat elementum sed. Nulla facilisi.",
  },
  {
    header: "Lorem Lorem Lorem",
    text: "Aliquam erat volutpat. Fusce sed auctor sapien. Duis id feugiat sem. Maecenas dapibus id purus a laoreet. Maecenas fringilla lacinia aliquet. Mauris viverra rhoncus sem. Mauris a augue nec magna dapibus aliquam. Duis tristique in tortor vel finibus. In hac habitasse platea dictumst. Aliquam hendrerit ante libero, in finibus erat elementum sed. Nulla facilisi.",
  },
  {
    header: "Lorem Lorem Lorem",
    text: "Aliquam erat volutpat. Fusce sed auctor sapien. Duis id feugiat sem. Maecenas dapibus id purus a laoreet. Maecenas fringilla lacinia aliquet. Mauris viverra rhoncus sem. Mauris a augue nec magna dapibus aliquam. Duis tristique in tortor vel finibus. In hac habitasse platea dictumst. Aliquam hendrerit ante libero, in finibus erat elementum sed. Nulla facilisi.",
  },
  {
    header: "Lorem Lorem Lorem",
    text: "Aliquam erat volutpat. Fusce sed auctor sapien. Duis id feugiat sem. Maecenas dapibus id purus a laoreet. Maecenas fringilla lacinia aliquet. Mauris viverra rhoncus sem. Mauris a augue nec magna dapibus aliquam. Duis tristique in tortor vel finibus. In hac habitasse platea dictumst. Aliquam hendrerit ante libero, in finibus erat elementum sed. Nulla facilisi.",
  },
  {
    header: "Lorem Lorem Lorem",
    text: "Aliquam erat volutpat. Fusce sed auctor sapien. Duis id feugiat sem. Maecenas dapibus id purus a laoreet. Maecenas fringilla lacinia aliquet. Mauris viverra rhoncus sem. Mauris a augue nec magna dapibus aliquam. Duis tristique in tortor vel finibus. In hac habitasse platea dictumst. Aliquam hendrerit ante libero, in finibus erat elementum sed. Nulla facilisi.",
  },
  {
    header: "Lorem Lorem Lorem",
    text: "Aliquam erat volutpat. Fusce sed auctor sapien. Duis id feugiat sem. Maecenas dapibus id purus a laoreet. Maecenas fringilla lacinia aliquet. Mauris viverra rhoncus sem. Mauris a augue nec magna dapibus aliquam. Duis tristique in tortor vel finibus. In hac habitasse platea dictumst. Aliquam hendrerit ante libero, in finibus erat elementum sed. Nulla facilisi.",
  },
];

function HomeServices() {
  return (
    <section className="flex flex-col gap-8">
      <header>
        <h2 className="font-medium text-xl text-center ">My Services</h2>
      </header>
      {servicesData.map((servicesData, index) => {
        return (
          <div key={index} className="bg-neutral-600 w-11/12 p-8">
            <h3 className="text-sm font-medium my-2">{servicesData.header}</h3>
            <p className="text-xs text-gray-400">{servicesData.text}</p>
          </div>
        );
      })}
    </section>
  );
}

export default HomeServices;
