import { BundleListComponent } from "@/components/BundleListComponent";

export default function Home() {
  return (
    <>
      <div className="flex justify-center w-full text-white font-mono text-xl my-5">
        <span>Select from the given bundles to explore</span>
      </div>
      <div className="w-full grow flex justify-center">
        <BundleListComponent className="container max-h-[70vh]"></BundleListComponent>
      </div>
    </>
  );
}
