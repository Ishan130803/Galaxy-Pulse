type PageProps = {};

function Page({}: PageProps) {
  return (
    <div className="flex flex-col h-screen w-screen">
      <div className="justify-center shrink-0 bg-blue-100">
        {" "}
        This is a header
      </div>
      <div className="justify-center grow bg-red-400  overflow-scroll flex flex-col">
        <div className="h-4/5 shrink-0 bg-indigo-500">
          Helloajkljklasjdkfjkljlklknasdf
        </div>
        <div className="grow text-6xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit hic
          commodi repellendus quidem, accusantium exercitationem saepe, vero
          impedit qui vitae quis quaerat inventore odit modi quos dolorem
          eligendi eum? Minima, doloribus pariatur?Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sit hic commodi repellendus quidem,
          accusantium exercitationem saepe, vero impedit qui vitae quis quaerat
          inventore odit modi quos dolorem eligendi eum? Minima, doloribus
          pariatur?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit
          hic commodi repellendus quidem, accusantium exercitationem saepe, vero
          impedit qui vitae quis quaerat inventore odit modi quos dolorem
          eligendi eum? Minima, doloribus pariatur?Lorem ipsum dolor, sit amet
          consectetur adipisicing elit. Sit hic commodi repellendus quidem,
          accusantium exercitationem saepe, vero impedit qui vitae quis quaerat
          inventore odit modi quos dolorem eligendi eum? Minima, doloribus
          pariatur?
        </div>
      </div>
      <div className="justify-center shrink-0 bg-green-300">
        {" "}
        This is a footer
      </div>
    </div>
  );
}

export default Page;
