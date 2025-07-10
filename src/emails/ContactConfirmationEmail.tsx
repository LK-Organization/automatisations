// src/emails/ContactConfirmationEmail.tsx
import {
  Html,
  Body,
  Container,
  Heading,
  Text,
  Hr,
  Section,
  Img,
  Row,
  Column,
  Link,
} from "@react-email/components";
import * as React from "react";

interface ContactConfirmationEmailProps {
  name: string;
}

export const ContactConfirmationEmail = ({
  name,
}: ContactConfirmationEmailProps) => (
  <Html>
    <Body
      className="flex flex-col items-center"
      style={{ backgroundColor: "#fff", fontFamily: "sans-serif" }}
    >
      <Container style={{ padding: "20px" }}>
        <Heading>Merci pour votre message, {name} !</Heading>
        <Text>
          Nous avons bien reçu votre demande. Un membre de notre équipe vous
          contactera dans les plus brefs délais.
        </Text>
        <Hr />
        <Text>— L’équipe de automatisons.fr</Text>
        <table className="w-full flex justify-center mx-auto">
          <tr className="w-full mx-auto">
            <td align="center">
              <Img
                alt="React Email logo"
                height="100"
                src="https://www.automatisons.fr/logo.png"
              />
            </td>
          </tr>
          <tr className="w-full mx-auto">
            <td align="center">
              <Text className="my-[8px] font-semibold text-[16px] text-gray-900 leading-[24px]">
                AUTOMATISONS AGENCY
              </Text>
              <Text className="mt-[4px] mb-0 text-[16px] text-gray-500 leading-[24px]">
                Automatisez votre succès avec l'IA
              </Text>
            </td>
          </tr>
          <tr>
            <td align="center">
              <Row className="table-cell h-[44px] w-[56px] align-bottom">
                <Column className="pr-[8px]">
                  <Link href="https://www.facebook.com/people/Automatisons/61577856784226/">
                    <Img
                      alt="Facebook"
                      height="36"
                      src="https://react.email/static/facebook-logo.png"
                      width="36"
                    />
                  </Link>
                </Column>
                <Column className="pr-[8px]">
                  <Link href="https://x.com/Automatisonsfr">
                    <Img
                      alt="X"
                      height="36"
                      src="https://react.email/static/x-logo.png"
                      width="36"
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="https://www.instagram.com/automatisons.fr/">
                    <Img
                      alt="Instagram"
                      height="36"
                      src="https://react.email/static/instagram-logo.png"
                      width="36"
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="https://www.youtube.com/channel/UCbhcq1KZSTbgCqz2aUNXaTA">
                    <Img
                      alt="youtube"
                      height="36"
                      src="/youtube-logo.png"
                      width="36"
                    />
                  </Link>
                </Column>
              </Row>
            </td>
          </tr>
          <tr>
            <td align="center">
              <Text className="mt-[4px] mb-0 font-semibold text-[16px] text-gray-500 leading-[24px]">
                contact@automatisons.fr | +33 6 48 09 15 11
              </Text>
            </td>
          </tr>
        </table>
      </Container>
    </Body>
  </Html>
);

export default ContactConfirmationEmail;
