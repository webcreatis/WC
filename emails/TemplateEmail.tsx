import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

interface TemplateEmailProps {
  magicLink?: string;
  name?: string;
  email: string;
  service?: string;
  message?: string;
}

export const TemplateEmail = ({
  magicLink,
  name,
  email,
  service,
  message,
}: TemplateEmailProps) => (
  <Tailwind
    config={{
      theme: {
        extend: {
          colors: {
            brand: "#007291",
          },
        },
      },
    }}
  >
    <Html>
      <Head />
      <Body className="bg-corail font-sans">
        <Container className="mx-auto px-6 pt-5 pb-12">
          <Img
            src="https://www.webcreatis.re/images/logo.png"
            width={48}
            height={48}
            alt="Webcreatis"
          />

          <Heading className="text-[28px] font-bold mt-12">
            {magicLink
              ? "🪄 Votre lien vers le site de webcreatis"
              : "📩 Vous avez un nouveau message"}
          </Heading>

          {!magicLink && (
            <Section className="my-6">
              {name && (
                <Text className="text-base leading-[26px]">
                  <strong>Name:</strong> {name}
                </Text>
              )}
              <Text className="text-base leading-[26px]">
                <strong>Email:</strong> {email}
              </Text>
              {service && (
                <Text className="text-base leading-[26px]">
                  <strong>Service:</strong> {service}
                </Text>
              )}
              {message && (
                <Text className="text-base leading-[26px]">
                  <strong>Message:</strong>
                  <br />
                  {message}
                </Text>
              )}
            </Section>
          )}
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

// TemplateEmail.PreviewProps = {
//   email: "user@example.com",
//   name: "John Doe",
//   service: "Web Design",
//   message: "I’m interested in your services. Please get back to me.",
// } as TemplateEmailProps;

export default TemplateEmail;
