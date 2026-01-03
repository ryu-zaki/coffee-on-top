

const PageMarker: React.FC<{ sectionCategory: string }> = ({ sectionCategory }) => {

    return (
        <div className="bg-orange-light font-semibold text-orange px-8 py-1 rounded-full xl:py-2">
            <p>{sectionCategory}</p>
        </div>
    )
}

export default PageMarker; 