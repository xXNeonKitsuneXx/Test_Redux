import { useAppSelector } from "./app/store";

export default function DisplayLogs() {
  const status = useAppSelector((state) => state.logger.status);

  const logs = useAppSelector((state) => state.logger.logs);

  return status ? (
    <ul>
      {logs.map((log, index) => (
        <li key={index}>{log}</li>
      ))}
    </ul>
  ) : null;
}
