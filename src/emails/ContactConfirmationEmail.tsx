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
        <Text>— L’équipe de Automatisations.fr</Text>
      </Container>
      <Section className="text-center flex justify-center mx-auto">
        <table className="w-full flex justify-center mx-auto">
          <tr className="w-full mx-auto">
            <td align="center">
              <Img
                alt="React Email logo"
                height="42"
                src="https://www.automatisons.fr/logo.png"
              />
            </td>
          </tr>
          <tr className="w-full mx-auto">
            <td align="center">
              <Text className="my-[8px] font-semibold text-[16px] text-gray-900 leading-[24px]">
                AUTOMATISATIONS AGENCY
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
                  <Link href="#">
                    <Img
                      alt="Facebook"
                      height="36"
                      src="https://react.email/static/facebook-logo.png"
                      width="36"
                    />
                  </Link>
                </Column>
                <Column className="pr-[8px]">
                  <Link href="#">
                    <Img
                      alt="X"
                      height="36"
                      src="https://react.email/static/x-logo.png"
                      width="36"
                    />
                  </Link>
                </Column>
                <Column>
                  <Link href="#">
                    <Img
                      alt="Instagram"
                      height="36"
                      src="https://react.email/static/instagram-logo.png"
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
                contact@automatai.com | +33 1 23 45 67 89
              </Text>
            </td>
          </tr>
        </table>
      </Section>
    </Body>
  </Html>
);

export default ContactConfirmationEmail;
