"use client";

import React from "react";
import CountUp from "react-countup";

function CounterStat({ end, suffix = "+", label }) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-end gap-3">
      <h1 className="text-[#14171D] font-medium text-[70px] sm:text-[50px] md:text-[50px] lg:text-[80px] xl:text-[110px] leading-none tracking-tight">
        <CountUp
          start={0}
          end={end}
          duration={2}
          enableScrollSpy
          scrollSpyOnce
          useGrouping={false}
        />
        {suffix}
      </h1>
      <p className="text-[#6C6C6C] text-[16px] sm:text-[18px] lg:text-[22px]  leading-snug">
        {label}
      </p>
    </div>
  );
}

export default CounterStat;
