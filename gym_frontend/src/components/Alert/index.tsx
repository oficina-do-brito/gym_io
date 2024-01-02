interface Ialertprops {
  message: string;
}
export const Alert: React.FC<Ialertprops> = ({ message }: Ialertprops) => {
  return (
    <div className="alert alert-warning" role="alert">
      {message}
    </div>
  );
};
