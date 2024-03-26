function DeleteModal({ close, onClick, disabled }) {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="p-8 mx-auto my-auto space-y-4 rounded-lg bg-grey-0">
        <div className="space-y-2">
          <p>This item will be deleted permanently.</p>
          <p>are you sure?</p>
        </div>
        <div className="flex justify-end gap-4">
          <button
            onClick={close}
            className="px-2 py-1 uppercase transition duration-300 border rounded-md text-grey-600 bg-grey-0 min-w-24 border-grey-600 active:scale-[0.98] hover:bg-grey-50"
          >
            Cancel
          </button>
          <button
            className="px-2 py-1 uppercase rounded-md hover:opacity-90 active:scale-[0.98] bg-red-700 text-grey-0 min-w-24 transition duration-300"
            onClick={onClick}
            disabled={disabled}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
