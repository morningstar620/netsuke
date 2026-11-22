"use client";

import { useState, type FormEvent, type ReactNode } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { cn } from "@/lib/utils";

type Tab = "book" | "write";

const fieldLabel =
  "mb-[15px] block text-[18px] leading-[18px] font-semibold text-white";
const fieldControl =
  "w-full border-0 border-b border-white/60 bg-transparent px-0 pt-0 pb-3 text-[16px] leading-4 text-white outline-none placeholder:text-[16px] placeholder:leading-4 placeholder:font-normal placeholder:text-white/40 focus:shadow-none user-invalid:border-red-400";

const days = [
  { id: "day-mon", value: "mon", label: "Mon" },
  { id: "day-tue", value: "tue", label: "Tue" },
  { id: "day-wed", value: "wed", label: "Wed" },
  { id: "day-thu", value: "thu", label: "Thu" },
  { id: "day-fri", value: "fri", label: "Fri" },
];

const times = [
  { id: "time-0830", value: "08:30", label: "8:30 AM" },
  { id: "time-0930", value: "09:30", label: "9:30 AM" },
  { id: "time-1030", value: "10:30", label: "10:30 AM" },
  { id: "time-1230", value: "12:30", label: "12:30 PM" },
  { id: "time-1330", value: "13:30", label: "1:30 PM" },
  { id: "time-1430", value: "14:30", label: "2:30 PM" },
  { id: "time-1630", value: "16:30", label: "4:30 PM" },
  { id: "time-1730", value: "17:30", label: "5:30 PM" },
];

const channels = [
  { id: "meet-video", value: "video", label: "Video(Zoom / Meet)" },
  { id: "meet-teams", value: "microsoft", label: "Microsoft Teams" },
  { id: "meet-whatsapp", value: "whatsapp", label: "WhatsApp Call" },
  { id: "meet-phone", value: "phone", label: "Phone Call" },
];

const revenues = [
  { id: "revenue-under-5m", value: "under-5m", label: "$5M" },
  { id: "revenue-5-50m", value: "5-50m", label: "$5-50M" },
  { id: "revenue-50-500m", value: "50-500m", label: "$50-500M" },
  { id: "revenue-500m-plus", value: "500m-plus", label: "$500M+" },
];

function preventSubmit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault();
}

export function ContactForm() {
  const [tab, setTab] = useState<Tab>("book");

  return (
    <section id="cstm_form" className="section-y bg-black">
      <Container>
        <div className="items-center wide:grid wide:grid-cols-2">
          <div className="text-left max-nav:text-center">
            <SectionLabel tone="inverse" align="start">
              Apply for Partnerships
            </SectionLabel>
            <h2 className="text-white">
              Few partners.
              <br />
              Total commitment.
            </h2>
            <p className="mb-0 w-[90%] text-white/60 max-nav:w-full">
              Tell us about your business and ambition. A founding partner
              reviews every application personally and replies within 1-2
              business days — wherever you are in the world.
            </p>
          </div>

          <div className="rounded-card bg-grey p-[50px] max-nav:mt-10 max-tablet:p-[30px]">
            <div
              role="tablist"
              aria-label="Contact options"
              className="mb-[30px] inline-flex max-w-full overflow-hidden rounded-pill border border-white bg-black"
            >
              <TabButton
                id="contact-tab-book"
                controls="contact-panel-book"
                selected={tab === "book"}
                onSelect={() => setTab("book")}
              >
                Book A Call
              </TabButton>
              <TabButton
                id="contact-tab-write"
                controls="contact-panel-write"
                selected={tab === "write"}
                onSelect={() => setTab("write")}
              >
                Write To Us
              </TabButton>
            </div>

            <div
              id="contact-panel-book"
              role="tabpanel"
              aria-labelledby="contact-tab-book"
              hidden={tab !== "book"}
            >
              <form onSubmit={preventSubmit} noValidate={false}>
                <div className="mb-10">
                  <label htmlFor="book-timezone" className={fieldLabel}>
                    Time zone
                  </label>
                  <div className="relative">
                    <select
                      id="book-timezone"
                      name="timezone"
                      defaultValue=""
                      aria-label="Time zone"
                      className={cn(fieldControl, "appearance-none pr-8")}
                    >
                      <option value="">Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                    <ChevronDown
                      aria-hidden="true"
                      className="pointer-events-none absolute top-1/2 right-0 size-4 -translate-y-1/2 text-white"
                    />
                  </div>
                </div>

                <ChoiceGroup label="Day" name="appointment-day" options={days} />
                <ChoiceGroup label="Time" name="appointment-time" options={times} />
                <ChoiceGroup label="Meet on" name="appointment-channel" options={channels} />

                <div className="mb-10">
                  <label htmlFor="book-email" className={fieldLabel}>
                    Work Email
                  </label>
                  <input
                    id="book-email"
                    name="work_email"
                    type="email"
                    required
                    placeholder="Your Work Email Address"
                    autoComplete="email"
                    className={fieldControl}
                  />
                </div>

                <Button type="submit" variant="light">
                  Pick A Time
                  <ArrowRight aria-hidden="true" className="ml-2.5 size-[18px]" />
                </Button>
              </form>
            </div>

            <div
              id="contact-panel-write"
              role="tabpanel"
              aria-labelledby="contact-tab-write"
              hidden={tab !== "write"}
            >
              <form onSubmit={preventSubmit}>
                <div className="flex flex-wrap justify-between gap-5 max-tablet:gap-0">
                  <TextField
                    id="write-name"
                    name="full_name"
                    label="Full Name"
                    placeholder="Your Full Name"
                    autoComplete="name"
                    required
                  />
                  <TextField
                    id="write-email"
                    name="email"
                    type="email"
                    label="Email Address"
                    placeholder="Your Email Address"
                    autoComplete="email"
                    required
                  />
                </div>
                <div className="flex flex-wrap justify-between gap-5 max-tablet:gap-0">
                  <TextField
                    id="write-phone"
                    name="phone"
                    type="tel"
                    label="Phone"
                    placeholder="Enter Your Phone Number"
                    autoComplete="tel"
                    required
                  />
                  <TextField
                    id="write-company"
                    name="company"
                    label="Company"
                    placeholder="Company Name"
                    autoComplete="organization"
                    required
                  />
                </div>
                <div className="mb-10">
                  <TextField
                    id="write-country"
                    name="country"
                    label="Country"
                    placeholder="Where you're based"
                    autoComplete="country-name"
                    required
                    full
                  />
                  <div className="max-tablet:mb-5">
                    <label htmlFor="write-message" className={fieldLabel}>
                      Message
                    </label>
                    <textarea
                      id="write-message"
                      name="message"
                      rows={3}
                      placeholder="Write Your Message Here..."
                      className={cn(fieldControl, "resize-y")}
                    />
                  </div>
                </div>

                <ChoiceGroup
                  label="Annual Revenue"
                  name="annual-revenue"
                  options={revenues}
                />

                <Button type="submit" variant="light">
                  Submit Application
                  <ArrowRight aria-hidden="true" className="ml-2.5 size-[18px]" />
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

function TabButton({
  id,
  controls,
  selected,
  onSelect,
  children,
}: {
  id: string;
  controls: string;
  selected: boolean;
  onSelect: () => void;
  children: ReactNode;
}) {
  return (
    <button
      id={id}
      type="button"
      role="tab"
      aria-selected={selected}
      aria-controls={controls}
      tabIndex={selected ? 0 : -1}
      onClick={onSelect}
      className={cn(
        "rounded-pill px-10 py-[18px] text-[18px] leading-[18px] font-semibold max-micro:px-5",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-deep",
        selected ? "bg-white text-black" : "bg-transparent text-white",
      )}
    >
      {children}
    </button>
  );
}

function TextField({
  id,
  name,
  label,
  placeholder,
  type = "text",
  autoComplete,
  required,
  full = false,
}: {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  type?: string;
  autoComplete?: string;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <div className={cn("mb-10 max-tablet:mb-5", full ? "w-full" : "w-full tablet:w-[46%]")}>
      <label htmlFor={id} className={fieldLabel}>
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        autoComplete={autoComplete}
        className={fieldControl}
      />
    </div>
  );
}

function ChoiceGroup({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: { id: string; value: string; label: string }[];
}) {
  const labelId = `${name}-label`;

  return (
    <div className="mb-10" role="radiogroup" aria-labelledby={labelId}>
      <p id={labelId} className={fieldLabel}>
        {label}
      </p>
      <div className="flex flex-wrap gap-5">
        {options.map((option) => (
          <div key={option.id} className="relative">
            <input
              id={option.id}
              type="radio"
              name={name}
              value={option.value}
              className="peer absolute opacity-0"
            />
            <label
              htmlFor={option.id}
              className="inline-block cursor-pointer rounded-pill border border-copy px-[15px] py-2 text-[16px] leading-4 font-normal text-white transition-colors duration-300 peer-checked:border-deep peer-checked:bg-white peer-checked:text-deep peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-white"
            >
              {option.label}
            </label>
          </div>
        ))}
      </div>
    </div>
  );
}
