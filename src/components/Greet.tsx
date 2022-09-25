type GreetProps = {
  name: string;
  messageCount?: number;
  isLoggedIn: boolean;
};

const Greet = (props: GreetProps) => {
  const { messageCount = 0 } = props;
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? ` Yoroshiku! ${props.name} sama, you have ${messageCount}
        notifications`
          : `Welcome Guest`}
      </h2>
    </div>
  );
};

export default Greet;
