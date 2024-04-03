import css from './TransactionHistory.module.css';
export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th className={css.headText}>Type</th>
          <th className={css.headText}>Amount</th>
          <th className={css.headText}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tableBody}>
        {items.map(item => (
          <tr className={css.tableRow} key={item.id}>
            <td className={css.tableText}>{item.type}</td>
            <td className={css.tableText}>{item.amount}</td>
            <td className={css.tableText}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
