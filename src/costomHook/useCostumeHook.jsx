import { useEffect } from "react";

const useCostumeHook = (props) => {
  useEffect(() => {
    document.title = `count ${props}`;
  }, [props]);
};

export default useCostumeHook;
