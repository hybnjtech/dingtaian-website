"use client";

import { useState } from "react";
import { HiCheckCircle } from "react-icons/hi2";

const requiredFields = [
  "姓名",
  "性别",
  "身份证号码",
  "手机号",
  "学历/学位",
  "专业",
  "最高学历",
  "毕业院校",
  "工作单位",
  "职称",
  "职位",
];

const optionalFields = ["电子邮箱", "研究方向", "代表性成果", "申请说明"];

export default function ExpertApplicationForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="rounded bg-safety-green/10 p-8 text-center">
        <HiCheckCircle className="mx-auto mb-4 h-12 w-12 text-safety-green" />
        <p className="font-semibold text-safety-green">申请信息已生成提交记录，研究院将进行资格审核。</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
      className="grid gap-5"
    >
      <div className="grid gap-5 md:grid-cols-2">
        {requiredFields.map((field) => (
          <label key={field} className="block">
            <span className="mb-1.5 block text-sm font-medium text-primary">
              {field} <span className="text-accent">*</span>
            </span>
            <input
              required
              className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </label>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {optionalFields.map((field) => (
          <label key={field} className="block">
            <span className="mb-1.5 block text-sm font-medium text-primary">{field}</span>
            {field.includes("成果") || field.includes("说明") ? (
              <textarea
                rows={4}
                className="w-full resize-none rounded border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
            ) : (
              <input className="w-full rounded border border-gray-200 px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary" />
            )}
          </label>
        ))}
      </div>
      <button
        type="submit"
        className="mt-2 w-full rounded bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-light md:w-auto"
      >
        提交入库申请
      </button>
    </form>
  );
}
