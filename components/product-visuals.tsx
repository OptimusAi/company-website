const Transcript = () => (
  <div className="transcript-lines">
    <p><b>Caller</b> My furnace stopped working this morning.</p>
    <p><b>Optimus</b> I can help collect the details and request a service time.</p>
  </div>
);

export function VoiceVisual({ compact = false }: { compact?: boolean }) {
  return (
    <div className={`demo-window voice-window ${compact ? "compact" : ""}`}>
      <div className="window-bar">
        <span>Simulated call</span>
        <span className="live-pill"><i /> Live</span>
      </div>
      <div className="call-identity">
        <span className="call-icon" aria-hidden="true">⌁</span>
        <div><strong>Incoming service call</strong><small>00:48 · Calgary NW</small></div>
        <span className="signal-bars" aria-hidden="true">▂▄▆▃▅</span>
      </div>
      <Transcript />
      <div className="detail-grid">
        <div><small>Intent</small><strong>Furnace repair</strong></div>
        <div><small>Urgency</small><strong>High</strong></div>
        <div><small>Next step</small><strong>Request created</strong></div>
      </div>
    </div>
  );
}

export function LeadVisual() {
  return (
    <div className="demo-window lead-window">
      <div className="window-bar"><span>Lead workspace</span><span>Sample data</span></div>
      <div className="lead-head">
        <span className="avatar">AM</span>
        <div><strong>Avery Morgan</strong><small>Kitchen renovation · Calgary</small></div>
        <span className="qualified">Qualified</span>
      </div>
      <div className="lead-body">
        <div className="message">We’re hoping to start this fall. The space is about 280 sq. ft.</div>
        <div className="profile-fields">
          <span><small>Timeline</small>Fall 2026</span>
          <span><small>Project</small>Full kitchen</span>
          <span><small>Consultation</small>Thu · 2:30 PM</span>
        </div>
      </div>
      <div className="progress-line"><span /></div>
    </div>
  );
}

export function OfficeVisual() {
  const nodes = ["Understand", "Retrieve", "Prepare", "Approve", "Act"];
  return (
    <div className="demo-window office-window">
      <div className="window-bar"><span>Customer request workflow</span><span>Sample</span></div>
      <div className="workflow-canvas">
        {nodes.map((node, index) => (
          <div className={`workflow-node ${index < 4 ? "complete" : ""}`} key={node}>
            <span>{String(index + 1).padStart(2, "0")}</span><strong>{node}</strong>
          </div>
        ))}
      </div>
      <div className="approval-note"><span>✓</span><div><strong>Human approval received</strong><small>Action is ready to continue</small></div></div>
    </div>
  );
}

export function ArVisual() {
  const rows = [
    ["Northline Projects", "$84,200", "Missing PO", "High"],
    ["Cedar Group", "$61,480", "Payment promised", "Medium"],
    ["Eastfield Energy", "$47,900", "Invoice dispute", "High"],
  ];
  return (
    <div className="demo-window ar-window">
      <div className="window-bar"><span>Receivables overview</span><span>Illustrative data</span></div>
      <div className="metric-row">
        <div><small>Overdue AR</small><strong>$426.8K</strong><span>Sample balance</span></div>
        <div><small>90+ days</small><strong>$96.4K</strong><span>23% of overdue</span></div>
        <div><small>Active blockers</small><strong>18</strong><span>Needs attention</span></div>
      </div>
      <div className="ar-table">
        <div className="table-head"><span>Account</span><span>Balance</span><span>Blocker</span><span>Priority</span></div>
        {rows.map((row) => (
          <div className="table-row" key={row[0]}>
            {row.map((cell, index) => <span key={cell} className={index === 3 ? "priority" : ""}>{cell}</span>)}
          </div>
        ))}
      </div>
    </div>
  );
}

export function AnalystVisual() {
  return (
    <div className="demo-window analyst-window">
      <div className="window-bar"><span>Financial analysis</span><span>Sample data · Q2 2026</span></div>
      <div className="question-chip">Why were operating expenses above budget?</div>
      <div className="analysis-answer">
        <div className="variance-figure"><small>Total variance</small><strong>+$184K</strong><span>8.2% above budget</span></div>
        <div className="variance-bars">
          <div><span>Field operations</span><i style={{ "--bar": "88%" } as React.CSSProperties} /><b>+$92K</b></div>
          <div><span>Contract services</span><i style={{ "--bar": "61%" } as React.CSSProperties} /><b>+$58K</b></div>
          <div><span>Software</span><i style={{ "--bar": "36%" } as React.CSSProperties} /><b>+$34K</b></div>
        </div>
      </div>
      <div className="source-note">Calculated from verified budget and actuals · AI interpretation separated</div>
    </div>
  );
}

export function ProductVisual({ slug }: { slug: string }) {
  if (slug === "voice") return <VoiceVisual />;
  if (slug === "lead") return <LeadVisual />;
  if (slug === "office") return <OfficeVisual />;
  if (slug === "ar") return <ArVisual />;
  return <AnalystVisual />;
}

export function PlatformVisual() {
  return (
    <div className="platform-visual" aria-label="Optimus intelligence platform diagram">
      <div className="platform-source">
        <span>Business data</span><span>Messages</span><span>Documents</span><span>Finance</span>
      </div>
      <div className="platform-core">
        <div className="core-orbit" aria-hidden="true"><i /><i /><i /></div>
        <span>OPTIMUS</span><strong>Intelligence<br />layer</strong>
      </div>
      <div className="platform-agents">
        <span>Voice</span><span>Lead</span><span>Office</span><span>AR</span><span>Analyst</span>
      </div>
    </div>
  );
}
