import { jsPDF } from "jspdf";

export const generateExecutiveReport = () => {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(20);
  doc.text("Cloud FinOps Copilot", 20, 20);

  doc.setFontSize(14);
  doc.text("Executive Cost Summary Report", 20, 30);

  doc.setLineWidth(0.5);
  doc.line(20, 35, 190, 35);

  // Summary
  doc.setFontSize(12);

  doc.text("Total Cloud Spend: $12,430", 20, 50);
  doc.text("Estimated Monthly Savings: $2,480", 20, 60);
  doc.text("Active Resources: 128", 20, 70);
  doc.text("Detected Anomalies: 3", 20, 80);

  doc.text("Top Cost Driver: Amazon EC2", 20, 95);
  doc.text("Highest Spending Region: us-east-1", 20, 105);

  // Recommendations
  doc.setFontSize(14);
  doc.text("Top Recommendations", 20, 125);

  doc.setFontSize(12);

  doc.text(
    "• Downsize EC2 instances with CPU usage below 20%",
    25,
    140
  );

  doc.text(
    "• Delete unattached EBS volumes",
    25,
    150
  );

  doc.text(
    "• Move infrequently accessed S3 data to Glacier",
    25,
    160
  );

  // AI Summary
  doc.setFontSize(14);
  doc.text("AI Generated Summary", 20, 180);

  doc.setFontSize(12);

  doc.text(
    "Cloud spending increased primarily due to",
    20,
    195
  );

  doc.text(
    "higher EC2 utilization in us-east-1.",
    20,
    203
  );

  doc.text(
    "Applying all recommendations can save",
    20,
    211
  );

  doc.text(
    "$2,480 per month.",
    20,
    219
  );

  doc.save("Cloud_FinOps_Report.pdf");
};