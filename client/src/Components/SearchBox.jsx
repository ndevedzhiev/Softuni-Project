export default function SearchBox () {
    return (
        <div className="search-container" data-search-box="">
  <div className="input-wrapper">
    <input
      type="search"
      name="search"
      aria-label="search"
      placeholder="Search here..."
      className="search-field"
    />
    <button
      className="search-submit"
      aria-label="submit search"
      data-search-toggler=""
    >
      <ion-icon name="search-outline" />
    </button>
    <button
      className="search-close"
      aria-label="close search"
      data-search-toggler=""
    />
  </div>
</div>
    )
}