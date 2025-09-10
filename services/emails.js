import transporter  from "../lib/email.js";

const EnviarMensaje = async (UserEmail, UserName) => {  
    const mailOptions = {
        from: process.env.EMAIL_USER, //lee la direccion de correo desde el archivo .env para usarla en el 
        //transportador que manda los correos
        to: UserEmail,
        subject: "Bienvenido a Maptv",
        html: `
        <h1>Holaa, ${UserName}</h1>
        <p>Bienvenido a Maptv. Gracias por registrarte en nuestra plataforma .</p> `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Email enviado correctamente ");
    }catch (error) {
        console.error("Error al enviar el email");                
    }
};

export default {EnviarMensaje};