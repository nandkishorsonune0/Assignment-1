const ONE_MINUTE_MS = 60_000;
const ONE_HOUR_MS = 60 * ONE_MINUTE_MS;
const ONE_DAY_MS = 24 * ONE_HOUR_MS;

type DeliveryEstimate = {
  targetDate: Date;
  dateLabel: string;
};

function pad(value: number): string {
  return value.toString().padStart(2, "0");
}

export function getDeliveryDate(daysFromNow = 10): Date {
  return new Date(Date.now() + daysFromNow * ONE_DAY_MS);
}

export function formatDeliveryDate(date: Date): string {
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

export function formatDeliveryDateTime(date: Date): string {
  const dayPart = formatDeliveryDate(date);
  const hours = date.getHours();
  const mins = pad(date.getMinutes());
  const suffix = hours >= 12 ? "PM" : "AM";
  const normalizedHours = hours % 12 || 12;

  return `${dayPart} at ${normalizedHours}:${mins} ${suffix}`;
}

export function computeDeliveryEstimate(daysFromNow = 7): DeliveryEstimate {
  const targetDate = getDeliveryDate(daysFromNow);

  return {
    targetDate,
    dateLabel: formatDeliveryDateTime(targetDate),
  };
}

export function formatCountdown(targetDate: Date, nowDate = new Date()): string {
  const remaining = Math.max(0, targetDate.getTime() - nowDate.getTime());
  const days = Math.floor(remaining / ONE_DAY_MS);
  const hours = Math.floor((remaining % ONE_DAY_MS) / ONE_HOUR_MS);
  const minutes = Math.floor((remaining % ONE_HOUR_MS) / ONE_MINUTE_MS);

  return `${days}d ${pad(hours)}h ${pad(minutes)}m left`;
}
