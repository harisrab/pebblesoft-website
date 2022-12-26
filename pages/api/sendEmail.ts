// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

type Data = {
	msg: string;
};

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	console.log(req.body);
	const {
		firstName,
		lastName,
		businessEmail,
		phoneNumber,
		company,
		country,
		message,
	} = req.body;

	const htmlBody = `
    <p><strong>First Name:</strong> ${firstName}</p>
    <p><strong>Last Name:</strong> ${lastName}</p>
    <p><strong>Business Email:</strong> ${businessEmail}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Country:</strong> ${country}</p>
    <p><strong>Message:</strong> ${message}</p>
    `;

	const msg = {
		to: "haris@pebblesoft.co", // Change to your recipient
		from: "haris@pebblesoft.co", // Change to your verified sender
		subject: firstName + " " + lastName + " Sent a Request on Pebblesoft",
		text: "Nothing",
		html: htmlBody,
	};

	await sgMail
		.send(msg)
		.then(() => {
			console.log("Email sent");
			res.status(200).json({ msg: "success" });
		})
		.catch((error: any) => {
			console.log("There's an error");
			console.error(error);
			// console.log("Error Body ===> ", error.response.body);
			res.status(400).json({ msg: "error" });
		});
}
