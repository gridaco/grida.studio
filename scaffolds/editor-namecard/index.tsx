"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { NC1A } from "@/templates/namecard/NC1A";
import { NC2A } from "@/templates/namecard/NC2A";
import { NameCardData } from "@/templates/namecard/data";

export default function NamecardEditor() {
  const [selected, setSelected] = React.useState<string[]>([]);
  const [data, setData] = React.useState<NameCardData>({
    company: "ACME",
    company_description: "Graphic Design Studio",
    website: "acme.com",
    name: "John Doe",
    email: "john@acme.com",
    title: "Chief Design Officer",
    address: "Wilminton, DE 19808",
    address_1: "Wilminton, DE 19808",
    address_2: "2055 Limestone RD STE 200-C",
    handle: "@acme",
    tel: "+1 (0)123 54 65 76",
  });

  return (
    <div className="flex w-screen h-screen">
      <div className="flex-1">
        <PanelControls data={data} onChange={setData} />
      </div>
      <div className="flex-1 bg-black text-white">
        <PanelPreview data={data} />
      </div>
    </div>
  );
}

const keywords = [
  "Small Text",
  "Big Text",
  "Small Logo",
  "Big Logo",
  "Gradients",
  "Empty",
  "Layout - Table",
  "Layout - Grid",
];

function PanelControls({
  onChange,
  data,
}: {
  onChange: (data: NameCardData) => void;
  data: NameCardData;
}) {
  return (
    <div className="flex flex-col w-full p-10 overflow-y-scroll">
      <div className="h-40" />
      <div className="flex flex-col gap-4">
        <label className="text-sm font-medium">Keywords</label>
        <div className="flex flex-wrap gap-4">
          {keywords.map((keyword) => {
            return (
              <Chip key={keyword}>
                <span>{keyword}</span>
              </Chip>
            );
          })}
        </div>
      </div>
      <div className="my-4">
        <DataInput data={data} onChange={onChange} />
      </div>
    </div>
  );
}

function DataInput({
  data,
  onChange,
}: {
  data: NameCardData;
  onChange: (data: NameCardData) => void;
}) {
  const [company, setCompany] = React.useState(data.company);
  const [company_description, setCompanyDescription] = React.useState(
    data.company_description
  );
  const [name, setName] = React.useState(data.name);
  const [website, setWebsite] = React.useState(data.website);
  const [email, setEmail] = React.useState(data.email);
  const [title, setTitle] = React.useState(data.title);
  const [address, setAddress] = React.useState(data.address);
  const [address_1, setAddress1] = React.useState(data.address_1);
  const [address_2, setAddress2] = React.useState(data.address_2);
  const [handle, setHandle] = React.useState(data.handle);
  const [tel, setTel] = React.useState(data.tel);

  useEffect(() => {
    onChange({
      company,
      company_description,
      website,
      name,
      email,
      title,
      address,
      address_1,
      address_2,
      handle,
      tel,
    });
  }, [
    company,
    company_description,
    name,
    email,
    title,
    address,
    address_1,
    address_2,
    handle,
    tel,
    website,
    onChange,
  ]);

  const input_cls = "w-full px-4 py-2 rounded-sm bg-neutral-200";

  return (
    <div className="flex flex-col gap-4">
      <input
        className={input_cls}
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <input
        className={input_cls}
        placeholder="Website"
        value={website}
        onChange={(e) => {
          setWebsite(e.target.value);
        }}
      />
      <input
        className={input_cls}
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <input
        className={input_cls}
        placeholder="Title"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <input
        className={input_cls}
        placeholder="Company"
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      <input
        className={input_cls}
        placeholder="Company Description"
        value={company_description}
        onChange={(e) => {
          setCompanyDescription(e.target.value);
        }}
      />
      <input
        className={input_cls}
        placeholder="Address"
        value={address}
        onChange={(e) => {
          setAddress(e.target.value);
        }}
      />
      <input
        className={input_cls}
        placeholder="Address 1"
        value={address_1}
        onChange={(e) => {
          setAddress1(e.target.value);
        }}
      />
      <input
        className={input_cls}
        placeholder="Address 2"
        value={address_2}
        onChange={(e) => {
          setAddress2(e.target.value);
        }}
      />
      <input
        className={input_cls}
        placeholder="Handle"
        value={handle}
        onChange={(e) => {
          setHandle(e.target.value);
        }}
      />
      <input
        className={input_cls}
        placeholder="Tel"
        value={tel}
        onChange={(e) => {
          setTel(e.target.value);
        }}
      />
    </div>
  );
}

function Chip({ children }: React.PropsWithChildren<{}>) {
  return (
    <button className="flex items-center justify-center px-4 py-2 rounded-full bg-neutral-200 border border-neutral-400">
      <span>{children}</span>
    </button>
  );
}

const preview = [
  "00001",
  "00002",
  "00003",
  "00004",
  "00005",
  "00006",
  "00007",
  "00008",
  "00009",
  "00010",
  "00011",
  "00012",
];

function PanelPreview({ data }: { data: NameCardData }) {
  const [selection, setSelection] = React.useState<string[]>([]);

  return (
    <div className="py-12 flex w-full h-screen overflow-y-scroll">
      <div className="px-8 flex flex-wrap gap-8">
        <Pin>
          <NC1A data={data} />
        </Pin>
        <Pin>
          <NC2A data={data} />
        </Pin>

        {/* {preview.map((p) => {
          return (
            <Pin
              key={p}
              selected={selection.includes(p)}
              onClick={() => {
                if (selection.includes(p)) {
                  setSelection(selection.filter((s) => s !== p));
                } else {
                  setSelection([...selection, p]);
                }
              }}
            >
              <div className="flex flex-col items-start gap-2 justify-center">
                <Image
                  className="w-80 h-auto rounded-sm select-none pointer-events-none"
                  src={`/templates/namecard/${p}.png`}
                  width={512}
                  height={512}
                  alt={p}
                />
                <div className="text-white p-2">{p}</div>
              </div>
            </Pin>
          );
        })} */}
      </div>
    </div>
  );
}

function Pin({
  children,
  selected,
  ...props
}: React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>> & {
  selected?: boolean;
}) {
  return (
    <div
      data-selected={selected}
      className="relative rounded-sm bg-black overflow-hidden cursor-pointer border-2 border-white/10 data-[selected=true]:border-white/90"
      {...props}
    >
      {children}
    </div>
  );
}
