import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import Container from "../../components/container";
import distanceToNow from "../../lib/dateRelative";
import { getAllBooks } from "../../lib/getBook";

export default function BooksPage({
  allBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Container>
      {allBooks.length ? (
        allBooks.map((book) => (
          <article key={book.slug} className="mb-10">
            <Link
              as={`/books/${book.slug}`}
              href="/books/[slug]"
              className="text-lg leading-6 font-bold"
            >
              {book.title}
            </Link>
            <p>{book.excerpt}</p>
            <div className="text-gray-400">
              <time>{distanceToNow(new Date(book.date))}</time>
            </div>
          </article>
        ))
      ) : (
        <p>Nejsou k dispozici žádné tipy na knihy.</p>
      )}
    </Container>
  );
}

export async function getStaticProps() {
  const allBooks = getAllBooks(["slug", "title", "excerpt", "date"]);

  return {
    props: { allBooks },
  };
}
