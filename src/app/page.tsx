import Link from "next/link";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import "./page.css";
import { Button } from "@mui/joy";

function Page() {
  return (
    <div className="bg-[url('moon-bg-image.jpg')] bg-fixed bg-center bg-contain bg-no-repeat flex flex-col min-h-[100dvh] body-color">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <RocketIcon className="h-6 w-6 text-white" />
          <span className="sr-only">Moon Explorers</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link href="#" className="nav-item nav-item" prefetch={false}>
            About
          </Link>
          <Link href="#" className="nav-item nav-item" prefetch={false}>
            Technology
          </Link>
          <Link href="#" className="nav-item" prefetch={false}>
            Testimonials
          </Link>
          <Link href="#" className="nav-item" prefetch={false}>
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="flex items-center justify-center h-[calc(100vh-3.5rem)]  bg-cover bg-center  bg-fixed bg-no-repeat ">
          <div className="container px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="flex flex-grow max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div className="justify-start flex-none w-[354px]">
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-white max-w-[800px]">
                  Explore the Moon
                </h1>
              </div>
              <div className="grow"></div>
              <div className="flex flex-col self-center justify-end flex-none w-60 space-y-4">
                <Link href="#" className="btn-explore" prefetch={false}>
                  About Us
                </Link>
                <Link href="#" className="btn-explore" prefetch={false}>
                  About the Product
                </Link>
                <Link
                  href="/file_browse"
                  className="btn-explore"
                  prefetch={false}
                >
                  Lunar Explorer
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white flex-col flex-none items-center w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">
                  Pushing the Boundaries of Lunar Exploration
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  At Moon Explorers, our mission is to advance the frontiers of
                  lunar exploration and uncover the secrets of our closest
                  celestial neighbor. Through cutting-edge technology and a team
                  of dedicated professionals, we are committed to expanding
                  human presence on the Moon.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-primary">
                  Pioneering Lunar Rovers
                </h3>
                <p className="text-muted-foreground">
                  Our state-of-the-art lunar rovers are designed to navigate the
                  challenging terrain of the Moon, enabling our astronauts to
                  explore and conduct scientific research with unparalleled
                  mobility and efficiency.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-primary">
                  Advanced Life Support Systems
                </h3>
                <p className="text-muted-foreground">
                  Ensuring the safety and well-being of our astronauts is our
                  top priority. Our advanced life support systems provide a
                  sustainable and comfortable environment for our explorers on
                  the lunar surface.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold text-primary">
                  Cutting-Edge Communication
                </h3>
                <p className="text-muted-foreground">
                  Our state-of-the-art communication systems enable real-time
                  data transmission and seamless collaboration between our lunar
                  outpost and mission control, allowing us to effectively
                  coordinate and respond to the challenges of lunar exploration.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white flex-col flex-none items-center w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Latest Technology
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
                  Introducing Our Latest Moon Rover
                </h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Designed to navigate the rugged lunar terrain with ease, our
                  latest moon rover is equipped with advanced sensors,
                  autonomous navigation, and a powerful scientific payload to
                  unlock the secrets of the Moon.
                </p>
              </div>
              <div className="mt-6">
                <Link href="#" className="btn-explore" prefetch={false}>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="text-white flex-col flex-none items-center w-full py-12 md:py-24 lg:py-32">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
                About Product
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from the brave individuals who have joined us on our lunar
                expeditions and experienced the thrill of exploring the Moon
                firsthand.
              </p>
            </div>
            <div className="divide-y rounded-lg border">
              <div className="grid w-full grid-cols-1 items-stretch justify-center divide-x md:grid-cols-2">
                <div className="mx-auto flex w-full items-center justify-center p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      {/* <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar> */}
                      <div>
                        <h4 className="text-lg font-semibold">John Doe</h4>
                        <p className="text-muted-foreground">Lunar Explorer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                      {
                        "Exploring the Moon with Moon Explorers was a\nlife-changing experience. The team's dedication to\ninnovation and safety made me feel confident and\nempowered throughout the mission."
                      }
                    </p>
                  </div>
                </div>
                <div className="mx-auto flex w-full items-center justify-center p-8">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      {/* <Avatar>
                        <AvatarImage src="/placeholder-user.jpg" />
                        <AvatarFallback>JD</AvatarFallback>
                      </Avatar> */}
                      <div>
                        <h4 className="text-lg font-semibold">Jane Smith</h4>
                        <p className="text-muted-foreground">Lunar Explorer</p>
                      </div>
                    </div>
                    <p className="text-muted-foreground">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia asperiores molestiae laboriosam nam consequatur repellat iure explicabo reiciendis, repudiandae adipisci libero unde esse quo. Ipsum soluta corrupti delectus quaerat magni ad, officiis illum ex natus! Quos, officia molestias! Aut consequatur possimus dicta at!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          2024 Moon Explorers. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  );
}

function RocketIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

export default Page;
