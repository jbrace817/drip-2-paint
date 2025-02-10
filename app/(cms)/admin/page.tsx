"use client"; // Ensure this runs on the client side

export default function Admin() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <iframe
        src="/admin/index.html"
        style={{ width: "100%", height: "100%", border: "none" }}
        title="Decap CMS"
      />
    </div>
  );
}
