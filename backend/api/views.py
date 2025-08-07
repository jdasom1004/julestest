import feedparser
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

class NewsFeedAPIView(APIView):
    """
    API view to fetch and return news from a Google News RSS feed using feedparser.
    """
    def get(self, request, *args, **kwargs):
        """
        Handles GET requests to fetch the news feed.
        """
        try:
            feed_url = 'https://news.google.com/rss?hl=ko&gl=KR&ceid=KR:ko'
            parsed_feed = feedparser.parse(feed_url)

            # feedparser puts articles in the 'entries' key
            articles = parsed_feed.entries

            return Response(articles, status=status.HTTP_200_OK)

        except Exception as e:
            # Log the error for debugging purposes
            print(f"Error fetching RSS feed: {e}")

            # Return a user-friendly error message
            return Response(
                {"error": "Failed to retrieve news feed."},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )
