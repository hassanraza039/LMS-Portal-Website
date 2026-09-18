import { payments } from "../../data/mockData";

export default function Payment() {
  const pending = payments.find((p) => p.status === "Pending");

  return (
    <>
      <div className="breadcrumb">
        <span>Home</span>
        <span>›</span>
        <strong>Payment</strong>
      </div>

      <div className="portal-header">
        <div>
          <h1>Payments</h1>
          <p>Monthly fee history and status</p>
        </div>
      </div>

      {pending && (
        <div
          className="panel"
          style={{ borderColor: "var(--red)", display: "flex", justifyContent: "space-between", alignItems: "center" }}
        >
          <div>
            <h3 className="panel__title" style={{ marginBottom: 4 }}>
              {pending.month} fee is due
            </h3>
            <p style={{ color: "var(--text-soft)", fontSize: 14, margin: 0 }}>
              Amount: Rs. {pending.amount.toLocaleString()}
            </p>
          </div>
          <button
            style={{
              background: "var(--red)",
              color: "#fff",
              border: "none",
              padding: "10px 20px",
              borderRadius: 6,
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Pay Now
          </button>
        </div>
      )}

      <div className="panel">
        <h3 className="panel__title">Payment history</h3>
        <table className="data-table">
          <thead>
            <tr>
              <th>Month</th>
              <th>Amount</th>
              <th>Paid On</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((p) => (
              <tr key={p.id}>
                <td>{p.month}</td>
                <td>Rs. {p.amount.toLocaleString()}</td>
                <td>{p.date}</td>
                <td>
                  <span className={`badge ${p.status === "Paid" ? "badge--green" : "badge--gold"}`}>
                    {p.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
