import type { Region } from '../types/region';

type RegionFilterProps = {
  regions: Region[];
  selectedRegionId: number | null;
  disabled?: boolean;
  onSelect: (regionId: number) => void;
};

export function RegionFilter({
  regions,
  selectedRegionId,
  disabled = false,
  onSelect,
}: RegionFilterProps) {
  return (
    <section className="card section">
      <h2>Region</h2>
      <select
        className="input"
        value={selectedRegionId ?? ''}
        onChange={(event) => onSelect(Number(event.target.value))}
        disabled={disabled || regions.length === 0}
      >
        {regions.map((region) => (
          <option key={region.id} value={region.id}>
            {region.name}
          </option>
        ))}
      </select>
    </section>
  );
}
