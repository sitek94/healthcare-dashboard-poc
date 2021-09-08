import faker from "faker";

export default function Footer() {
  return (
    <footer style={{ textAlign: "center", borderTop: "2px solid white" }}>
      <p>
        {new Date().getFullYear()} &copy; {faker.company.companyName()}
      </p>
    </footer>
  );
}
