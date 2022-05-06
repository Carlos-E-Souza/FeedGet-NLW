import { MailAdapter, MailData } from "../mailAdapter"
import nodemailer from "nodemailer"

export const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "21e214829f4767",
        pass: "5d99a6dc3d5bef",
    },
})

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: MailData) {
        await transport.sendMail({
            from: "FeedGet <oi@feedget.com>",
            to: "Carlos Eduardo <carlos.e.souza2653@gmail.com>",
            subject,
            html: body,
        })
    }
}
