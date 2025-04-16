import { useState } from "react";
import TopicsList from "../components/TopicsList";
import VocabularyList from "../components/VocabularyList";

type ViewType = "topics" | "vocabulary" | "tests"

interface ViewTypeButtonProps {
  viewType: ViewType
  selectedViewType: ViewType
  handleViewType: (view: ViewType) => void
}

const ViewTypeButton = ({viewType, selectedViewType, handleViewType}: ViewTypeButtonProps) => {
  const es = {
    topics: "Temas",
    vocabulary: "Vocabulario",
    tests: "Pruebas"
  }
  return (
    <button
          className='px-2 py-1 bg-stone-900 hover:bg-stone-950 disabled:bg-stone-700 border border-stone-600 rounded-full text-stone-400 text-sm duration-300'
          onClick={() => handleViewType(viewType)}
          disabled={selectedViewType === viewType ? true : false}
        >
          {es[viewType]}
    </button>
  )
}


export default function ViewLayout() {
  const [viewType, setViewType] = useState<ViewType>("topics")

  return (
    <div>
      <div className='flex gap-4 mb-6'>
        <ViewTypeButton viewType="topics" selectedViewType={viewType} handleViewType={setViewType}/>
        <ViewTypeButton viewType="vocabulary" selectedViewType={viewType} handleViewType={setViewType}/>
        <ViewTypeButton viewType="tests" selectedViewType={viewType} handleViewType={setViewType}/>
      </div>
      {
        viewType === "topics"
        ? <TopicsList />
        : viewType === "vocabulary"
        ? <VocabularyList />
        : <p>Tests</p>
      }
    </div>
  )
}