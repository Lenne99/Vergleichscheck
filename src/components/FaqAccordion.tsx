"use client";
import { useState } from "react";

interface FaqItem {
  q: string;
  a: string;
}

type FaqAccordionProps =
  | { faqs: FaqItem[]; title?: string; question?: never; answer?: never }
  | { faqs?: never; title?: never; question: string; answer: string };

export default function FaqAccordion(props: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  if ('question' in props && props.question) {
    return (
      <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
        <button
          onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
          className="w-full p-5 flex items-start gap-3 hover:bg-slate-50 transition-colors text-left"
        >
          <span className="text-cyan-500 shrink-0 text-lg leading-none pt-0.5 font-bold">
            {openIndex === 0 ? "−" : "+"}
          </span>
          <h3 className="font-bold text-slate-900 flex-1">{props.question}</h3>
        </button>
        {openIndex === 0 && (
          <div className="px-5 pb-5 border-t border-slate-100 bg-slate-50/50">
            <p className="text-sm text-slate-600 leading-relaxed pl-6">{props.answer}</p>
          </div>
        )}
      </div>
    );
  }

  const { faqs = [], title = "Häufige Fragen" } = props;

  return (
    <section>
      <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">{title}</h2>
      <div className="space-y-3">
        {faqs.map((item, i) => (
          <div key={i} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-5 flex items-start gap-3 hover:bg-slate-50 transition-colors text-left"
            >
              <span className="text-cyan-500 shrink-0 text-lg leading-none pt-0.5 font-bold">
                {openIndex === i ? "−" : "+"}
              </span>
              <h3 className="font-bold text-slate-900 flex-1">{item.q}</h3>
            </button>
            {openIndex === i && (
              <div className="px-5 pb-5 border-t border-slate-100 bg-slate-50/50">
                <p className="text-sm text-slate-600 leading-relaxed pl-6">{item.a}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
