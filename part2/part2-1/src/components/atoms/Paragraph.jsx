export function Paragraph({ content }) {
  return (
    <p className="content_form-p" key={content.id}>
      Name: {content.name} Tlf: {content.tlf}
    </p>
  )
}
