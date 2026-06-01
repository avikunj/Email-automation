# Email Automation

## How to automate gmail to send emails on behalf of you

### Ordered

1. Create a google sheet at https://docs.google.com/spreadsheets/u/0/ with columns as Name, Email, Position, Company, Status.
2. Search "Hiring for React Developers" on linkedin
    1. Add a filter of posts.
    2. Add a new filter of posts by last 24 hr.
    3. List down all the emails, role and company names in the google sheet.
    4. Repeat this process every night so that by morning at 10:30am, 40-50 emails are sent to the hiring managers automatically. It can save upto 40 minutes daily which can be utilised in other productive work.
3. Open google sheet and click on Extensions > AppScripts.
4. Upload your resume in google drive and copy id after uploading.
5. Create a new file named as resume-sender.gs and paste the code.
6. Create html templates and paste the code.
7. In the AppScripts left menu click on Triggers.
8. Add a trigger to run the resume-sender.gs to run every day between 10-11am.
9. If you want to run it manually then open AppScripts, click on resume-sender.gs and click on Run on the toolbar.
10. Update the resume-sender.gs with resume drive id.
11. Update html templates to add your email, name, phone in the footer as well as subject line.
12. (Optional) Record a 3 minute video of yours and upload it on youtube. Then paste its link in all the html templates to bring more visibility to hiring teams.

### Note:

Please use your email in records of google sheet and press run to test all the scenario.
