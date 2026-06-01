function sendJobApplications() {
	const sheet = SpreadsheetApp.openById(
		"PASTE_YOUR_SPREADSHEET_ID",
	).getSheetByName("YOUR_SHEET_NAME");

	const data = sheet.getDataRange().getValues();

	const resumeFile = DriveApp.getFileById(
		"YOUR_RESUME_ID_PRESENT_ON_GOOGLE_DRIVE",
	);

	const resumeBlob = resumeFile.getBlob();

	// Skip header row
	for (let i = 1; i < data.length; i++) {
		const row = data[i];

		const name = row[0];
		const email = row[1];
		const company = row[2];
		const position = row[3];
		const status = row[4];

		// Skip already sent emails
		if (status === "Sent") {
			continue;
		}

		// Email subject
		const name = YOUR_NAME;
		const subject = `Application for ${position} Role | ${name} NAME | Immediate Joiner`;

		const getTemplate = () => {
			switch (position) {
				case "React Developer":
					return "react_template";
				case "MERN Fullstack Developer":
					return "fullstack_template";
				case "Node Js Developer":
					return "backend_template";
				default:
					return "react_template";
			}
		};

		const template = HtmlService.createTemplateFromFile(getTemplate());

		template.name = name;
		template.position = position;
		template.email = email;
		template.company = company;

		const html = template.evaluate().getContent();

		try {
			MailApp.sendEmail({
				to: email,
				subject: subject,
				htmlBody: html,
				attachments: [resumeBlob],
			});

			// Update status
			sheet.getRange(i + 1, 5).setValue("Sent");

			// Optional delay
			Utilities.sleep(2000);
		} catch (err) {
			sheet.getRange(i + 1, 5).setValue("Failed");

			Logger.log(err);
		}
	}
}
