"use client";

import { differenceInDays, isSameDay, isWithinInterval } from "date-fns";

import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "../context/ReservationContext";
import { useEffect, useState } from "react";

function isAlreadyBooked(range, datesArr) {
  return (
    range?.from &&
    range?.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({ settings, cabin, bookedDates }) {
  const { range, setRange, resetRange } = useReservation();

  const displayRange = isAlreadyBooked(range, bookedDates)
    ? resetRange()
    : range;

  const { regularPrice, discount } = cabin;
  const numNights = differenceInDays(displayRange?.to, range?.from);
  const cabinPrice = numNights * (regularPrice - discount);

  // SETTINGS
  const { minBookingLength, maxBookingLength } = settings;

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col justify-between gap-10 md:gap-0">
      <DayPicker
        className="pt-12 place-self-center"
        styles={
          !isMobile
            ? {
                months: { width: "30rem" },
                day: { width: "32px", height: "32px" },
                day_button: { width: "30px", height: "30px" },
              }
            : ""
        }
        mode="range"
        onSelect={setRange}
        selected={displayRange}
        min={minBookingLength + 1}
        max={maxBookingLength}
        startMonth={new Date()}
        hidden={{ before: new Date() }}
        endMonth={new Date(new Date().getFullYear(), 5 * 12)}
        captionLayout="dropdown"
        hideNavigation
        numberOfMonths={isMobile ? 1 : 2}
        disabled={[{ before: new Date() }, ...bookedDates]}
      />

      <div className="flex flex-wrap justify-center items-center gap-2 md:gap-0 md:justify-between p-2 md:px-8 bg-accent-500 text-primary-800">
        <div className="flex items-baseline gap-2 md:gap-6">
          <p className="flex gap-2 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-lg  md:text-2xl">${regularPrice}</span>
            )}
            <span>/night</span>
          </p>
          {numNights ? (
            <>
              <p className="bg-accent-600 px-3 py-2 text-base md:text-2xl">
                <span>&times;</span> <span>{numNights}</span>
              </p>
              <p>
                <span className="text-sm md:text-lg font-bold uppercase">
                  Total
                </span>{" "}
                <span className="text-lg md:text-2xl font-semibold">
                  ${cabinPrice}
                </span>
              </p>
            </>
          ) : null}
        </div>

        {range?.from || range?.to ? (
          <button
            className="border border-primary-800 py-2 px-4 text-sm font-semibold cursor-pointer"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}

export default DateSelector;
