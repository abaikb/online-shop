function RecommendedCarousel({
    recommendedBags,
    addToCart,
    addToFavorites,
    removeFromFavorites,
    isItemInFavorites,
  }) {
    return (
      <Carousel
        showThumbs={false}
        showStatus={false}
        showArrows={true}
        centerMode={false}
        infiniteLoop={true}
        emulateTouch={true}
        swipeable={true}
        dynamicHeight={false}
        selectedItem={0}
        renderArrowPrev={(onClickHandler, hasPrev, label) =>
          hasPrev && (
            <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow">
              &#9664;
            </button>
          )
        }
        renderArrowNext={(onClickHandler, hasNext, label) =>
          hasNext && (
            <button type="button" onClick={onClickHandler} title={label} className="carousel-arrow">
              &#9654;
            </button>
          )
        }
      >
        {recommendedBags.map((recommendedBag) => (
          <div key={recommendedBag.id}>
            <BagCard
              bag={recommendedBag}
              addToCart={addToCart}
              addToFavorites={() => addToFavorites(recommendedBag)}
              removeFromFavorites={() => removeFromFavorites(recommendedBag.id)}
              isFavorite={isItemInFavorites(recommendedBag.id)}
            />
          </div>
        ))}
      </Carousel>
    );
  }
  
  export default RecommendedCarousel;
  