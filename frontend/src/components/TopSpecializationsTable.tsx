import type { DashboardResponse } from '../types/dashboard';
import { formatPeople } from '../app/format';

type TopSpecializationsTableProps = {
  items: DashboardResponse['top_specializations'];
};

export function TopSpecializationsTable({ items }: TopSpecializationsTableProps) {
  return (
    <section className="card section">
      <h2>Top Specializations</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Specialization</th>
            <th>Спрос</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{formatPeople(item.count)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
