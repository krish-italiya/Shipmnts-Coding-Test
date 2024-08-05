import { useState } from "react";
import { DataType, mockData } from "../data";
import { CiFilter } from "react-icons/ci";
import { Box, Modal, TextField, Typography } from "@mui/material";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const Table = () => {
  const [dummyData, setDummyData] = useState<DataType[]>(mockData);
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("number");
  const [modalTitle, setModalTitle] = useState("");
  const numerics = ["id", "age", "salary", "projectsCompleted"];
  const strings = ["name", "role", "department"];
  const handleOpen = (attr: string) => {
    console.log("Opened Column: ", attr);
    if (numerics.includes(attr)) {
      setModalType("number");
    } else if (strings.includes(attr)) {
      setModalType("string");
    } else if (attr === "isActive") {
      setModalType("boolean");
    } else if (attr === "accessLevel") {
      setModalType("enum");
    } else if (attr === "hireDate") {
      setModalType("date");
    } else if (attr === "lastLogin") {
      setModalType("timestamp");
    }
    setModalTitle(attr);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  const columns: string[] = [
    "id",
    "name",
    "age",
    "role",
    "hireDate",
    "isActive",
    "salary",
    "department",
    "projectsCompleted",
    "lastLogin",
    "accessLevel",
  ];
  return (
    <>
      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead className="">
          <tr key="header">
            {columns.map((col, id) => (
              <th
                key={id}
                scope="col"
                className="bg-gray-800 p-5 text-start text-xs font-medium text-white-500 uppercase dark:text-neutral-500 cursor-pointer"
              >
                <div className="flex items-center justify-center gap-3">
                  <span>{col}</span>
                  <span onClick={() => handleOpen(col)}>
                    <CiFilter className="text-xl hover:text-gray-200" />
                  </span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        {dummyData.map((data, index) => (
          <tbody key={data.id} className="">
            <tr
              key={data.id}
              className="hover:bg-gray-900 dark:hover:bg-neutral-400 cursor-pointer"
            >
              {columns.map((col, id) => (
                <td
                  key={`${data.id}_${id}`}
                  className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-950"
                >
                  {String(data[col as keyof DataType])}
                </td>
              ))}
            </tr>
          </tbody>
        ))}
      </table>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {modalType === "number" && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Apply {modalTitle} Filters
              </Typography>
              <TextField
                id="outlined-number"
                label="Value equals to"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                label="Values less than"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                label="Values less than or equal to"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                label="Values greater than"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                id="outlined-number"
                label="Values greater than or equals to"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </>
          )}
          {modalType === "string" && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Apply {modalTitle} Filters
              </Typography>
            </>
          )}
          {modalType === "boolean" && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Apply {modalTitle} Filters
              </Typography>
            </>
          )}
          {modalType === "enum" && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Apply {modalTitle} Filters
              </Typography>
            </>
          )}
          {modalType === "date" && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Apply {modalTitle} Filters
              </Typography>
            </>
          )}
          {modalType === "timestamp" && (
            <>
              <Typography id="modal-modal-title" variant="h6" component="h2">
                Apply {modalTitle} Filters
              </Typography>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
};

export default Table;
