import type { DashboardResponse } from '../types/dashboard';

type TopSpecializationsTableProps = {
  items: DashboardResponse['top_specializations'];
};

export function TopSpecializationsTable({ items }: TopSpecializationsTableProps) {
  return (
    <section className="card">
      <h2>Top Specializations</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Specialization</th>
            <th>Vacancies</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
