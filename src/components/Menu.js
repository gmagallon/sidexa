import { observer } from "mobx-react-lite"

export const Menu = observer(({store}) => {
  return (
    <div className="Menu">
      {store.genders.map(gender => (
        <div
          key={gender.id}
          className={`Menu-gender ${store.currentGender && store.currentGender.id === gender.id ? 'selected' : ''}`}
          onClick={() => store.changeGender(gender)}>
            {gender.name}
        </div>
      ))}
    </div>
  )
})