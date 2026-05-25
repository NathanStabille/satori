interface IHtmlPreviewProps {
  htmlContent?: string;
}

export const HtmlPreview = ({ htmlContent }: IHtmlPreviewProps) => {
  return (
    <iframe
      srcDoc={htmlContent}
      className="box-border h-full w-full rounded-xl border-none"
      sandbox="allow-scripts allow-same-origin"
      title="HTML Preview"
    />
  );
};
