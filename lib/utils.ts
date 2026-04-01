type ClassNameValue = string | false | null | undefined;

export function cn(...classes: ClassNameValue[]): string {
  return classes.filter(Boolean).join(" ");
}
