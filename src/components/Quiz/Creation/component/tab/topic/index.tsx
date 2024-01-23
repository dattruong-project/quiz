import { MasterForm, dictionary } from "dynamic-builder-form";
import { topicFormId } from "../../../constants";
import { topicSchema } from "./schema";
import { useTopic } from "../../../../../../context/topic/TopicContext";

const TopicTab = () => {
   const topicContext = useTopic();

   const onSubmitTopic = (values: any) => topicContext.addTopic(values);
    
   return  <>
      <MasterForm formId={topicFormId} schema={topicSchema} onSubmit={onSubmitTopic} dictionary={dictionary} />
   </>
}

export default TopicTab;