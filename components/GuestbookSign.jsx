export default function GuestbookSign({ sign }) {
  return (
    <div className="w-full p-2 bg-gray-800">
      <p>{sign.sender}</p>
      <p>{sign.content}</p>
      <p>{sign.writtenAt}</p>
    </div>
  );
}
