export function formatNumber(value: number): string {
  return new Intl.NumberFormat('ru-RU').format(value);
}

export function formatRub(value: number): string {
  return `${formatNumber(value)} ₽`;
}

export function formatPercent(value: number): string {
  return `${new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 1 }).format(value)} %`;
}

export function formatPeople(value: number): string {
  return `${formatNumber(value)} чел`;
}
