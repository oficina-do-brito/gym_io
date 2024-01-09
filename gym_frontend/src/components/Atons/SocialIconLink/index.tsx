export interface ISocialIconLinkprops {
  link: string;
  iconName: string;
}
export const SocialIconLink: React.FC<ISocialIconLinkprops> = ({
  link,
  iconName,
}: ISocialIconLinkprops) => {
  return (
    <a href={link} className="text-white me-4">
      <i className={`bi bi-${iconName} h3`}></i>
    </a>
  );
};
