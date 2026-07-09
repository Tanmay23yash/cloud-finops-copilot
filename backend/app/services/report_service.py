from reportlab.platypus import SimpleDocTemplate, Paragraph
from reportlab.lib.styles import getSampleStyleSheet

from app.services.summary_service import get_summary


def generate_report():

    summary = get_summary()

    styles = getSampleStyleSheet()

    doc = SimpleDocTemplate("reports/weekly_report.pdf")

    story = []

    story.append(Paragraph("<b>Cloud FinOps Weekly Report</b>", styles["Title"]))

    story.append(Paragraph(f"Total Spend : ${summary['totalSpend']}", styles["BodyText"]))

    story.append(Paragraph(f"Potential Savings : ${summary['potentialSavings']}", styles["BodyText"]))

    story.append(Paragraph(f"Active Alerts : {summary['activeAlerts']}", styles["BodyText"]))

    doc.build(story)

    return "reports/weekly_report.pdf"