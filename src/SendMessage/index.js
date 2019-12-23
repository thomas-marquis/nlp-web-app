import { connect } from "react-redux";

import SendMessage from "./component";
import { sendMessage } from "./actions";

export const mapDispatchToProps = {
  sendMessage
};

export default connect(null, mapDispatchToProps)(SendMessage);
