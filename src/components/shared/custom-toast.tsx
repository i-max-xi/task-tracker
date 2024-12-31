import toast, { Toast } from "react-hot-toast";

export const showCustomToast = (
  message: string,
  buttonLabel?: string,
  buttonAction?: () => void
) => {
  toast((t: Toast) => (
    <div
      style={{
        border: "1px solid #4CAF50",
        backgroundColor: "#e8f5e9",
        color: "#4CAF50",
        fontSize: "0.875rem",
        borderRadius: "6px",
        padding: "12px 16px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "12px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        minWidth: "300px", // Ensures a consistent size
        maxWidth: "400px",
      }}
    >
      <span
        style={{
          flex: 1,
          fontWeight: 500, // Matches the font weight of native toast
        }}
      >
        {message}
      </span>
      {buttonLabel && buttonAction && (
        <button
          style={{
            padding: "6px 12px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
            fontSize: "0.875rem",
            fontWeight: 600,
          }}
          onClick={() => {
            buttonAction();
            toast.dismiss(t.id); // Dismiss the toast on button click
          }}
        >
          {buttonLabel}
        </button>
      )}
    </div>
  ));
};
