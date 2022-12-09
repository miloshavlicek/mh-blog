type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container(props: ContainerProps) {
  return (
    <div className={"container max-w-2xl m-auto px-4 " + props.className}>
      {props.children}
    </div>
  );
}
