const GreetingCard = ({ message, sender }) => {
  return (
    <div>
      <p>Message: {message}</p>
      <p>Sender: {sender}</p>
    </div>
  )
}

export default GreetingCard
