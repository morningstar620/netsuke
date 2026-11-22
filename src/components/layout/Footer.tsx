import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";

const linkClass =
  "mt-2.5 inline-block max-w-[260px] text-[20px] leading-[30px] font-normal wrap-break-word text-copy normal-case transition-colors duration-200 hover:text-deep";

export function Footer() {
  return (
    <footer id="cstm_footer" className="bg-white pt-[60px] pb-[30px] max-nav:pt-10">
      <Container>
        <div className="min-[1400px]:grid min-[1400px]:grid-cols-12 min-[1400px]:items-start">
          <div className="min-[1400px]:col-span-4 max-nav:text-center">
            <Image
              src="/images/logo.png"
              alt="NetsukeAI"
              width={221}
              height={37}
              className="mb-5 h-[37px] w-auto max-w-full max-nav:mx-auto"
            />
            <p className="m-0 max-w-[70%] max-nav:mb-[30px] max-nav:max-w-full">
              By application only · Limited partnerships each year
            </p>
          </div>
          <div className="min-[1400px]:col-span-8">
            <ul className="m-0 flex list-none flex-wrap p-0 min-[1400px]:justify-end max-nav:justify-between max-tablet:flex-col max-tablet:items-center">
              <li className="ml-5 flex items-start gap-2.5 max-nav:m-0 max-nav:mb-[30px] max-tablet:w-full max-tablet:flex-col max-tablet:items-center max-tablet:text-center">
                <span className="inline-flex size-[45px] shrink-0 items-center justify-center rounded-pill bg-brand-gradient text-white">
                  <MapPin aria-hidden="true" className="size-5" />
                </span>
                <div className="max-tablet:w-full">
                  <h5 className="m-0 text-[20px] leading-5 font-medium text-black normal-case">
                    Address
                  </h5>
                  <p className={linkClass}>
                    Mega Hills, Madhapur, Hyderabad - 500081, India
                  </p>
                </div>
              </li>
              <li className="ml-5 flex items-start gap-2.5 max-nav:m-0 max-nav:mb-[30px] max-tablet:w-full max-tablet:flex-col max-tablet:items-center max-tablet:text-center">
                <span className="inline-flex size-[45px] shrink-0 items-center justify-center rounded-pill bg-brand-gradient text-white">
                  <LinkedInMark />
                </span>
                <div className="max-tablet:w-full">
                  <h5 className="m-0 text-[20px] leading-5 font-medium text-black normal-case">
                    Linkedin
                  </h5>
                  <a
                    href="https://www.linkedin.com/company/netsuke-ai/"
                    className={linkClass}
                  >
                    https://www.linkedin.com/company/netsuke-ai/
                  </a>
                </div>
              </li>
              <li className="ml-5 flex items-start gap-2.5 max-nav:m-0 max-nav:mb-[30px] max-tablet:w-full max-tablet:flex-col max-tablet:items-center max-tablet:text-center">
                <span className="inline-flex size-[45px] shrink-0 items-center justify-center rounded-pill bg-brand-gradient text-white">
                  <Mail aria-hidden="true" className="size-5" />
                </span>
                <div className="max-tablet:w-full">
                  <h5 className="m-0 text-[20px] leading-5 font-medium text-black normal-case">
                    Email
                  </h5>
                  <a href="mailto:contact@netsukeai.com" className={linkClass}>
                    contact@netsukeai.com
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5 flex items-center justify-between border-t border-[rgb(92_103_127/50%)] pt-5 max-nav:flex-wrap max-nav:justify-center">
          <p className="m-0 max-nav:m-2.5">
            Copyright © 2026 NetsukeAI, Inc. All Rights Reserved
          </p>
          <ul className="m-0 flex list-none p-0">
            <li>
              <span className="ml-5 text-[20px] leading-5 font-medium text-copy">
                Services
              </span>
            </li>
            <li>
              <span className="ml-5 text-[20px] leading-5 font-medium text-copy">
                Privacy Policy
              </span>
            </li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}

function LinkedInMark() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5 fill-current">
      <path d="M4.98 3.5C4.98 4.88 3.88 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM8.5 8.5h3.8v2.1h.05c.53-1 1.84-2.1 3.78-2.1 4.04 0 4.79 2.66 4.79 6.12V24h-4v-7.64c0-1.82-.03-4.16-2.54-4.16-2.54 0-2.93 1.98-2.93 4.03V24h-4V8.5z" />
    </svg>
  );
}
