"use client";

"use client";

const CommentItem = ({ comment }) => {
    const { targetUsername, content, authorUsername, isCircleMember } = comment;
  
    return (
      <div className="flex mb-4">
        {/* Left Color Indicator */}
        <div
          className={`w-2 h-auto ${
            isCircleMember ? "bg-blue-300" : "bg-orange-300"
          } rounded-tl-lg rounded-bl-lg`}
        ></div>
  
        {/* Comment Content */}
        <div className="bg-white flex-grow shadow rounded-lg p-4">
          {/* Target Username */}
          <p className="font-semibold mb-2">
            @{targetUsername}
            <span className="ml-2 text-gray-700">{content}</span>
          </p>
  
          {/* Author Username */}
          <div className="text-sm text-gray-500 flex justify-between items-center mt-2">
            <span>by @{authorUsername}</span>
            <button className="text-blue-500 hover:underline">답글</button>
          </div>
        </div>
      </div>
    );
  };


const CommentList = ({ comments }) => {
    return (
      <div className="space-y-4">
        {comments.map((comment, index) => (
          <CommentItem key={index} comment={comment} />
        ))}
      </div>
    );
  };
  
  export default CommentList;
