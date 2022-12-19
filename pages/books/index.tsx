import type { InferGetStaticPropsType } from "next";
import Link from "next/link";
import distanceToNow from "../../lib/utils/dateRelative";
import { getAllBooks } from "../../model/Book";
import { ReactElement } from "react";
import { Alert, Container } from "react-bootstrap";
import Heading from "../../components/part/Heading";
import AuthGuard from "../../components/guard/AuthGuard";

export default function BooksPage({
  books,
}: InferGetStaticPropsType<typeof getStaticProps>): ReactElement {
  return (
    <Container>
      <Heading level={1} className="mt-4">
        Tipy na knihy
      </Heading>

      <AuthGuard>
        {books.length > 0 ? (
          books.map((book) => (
            <article key={book.slug} className="mb-10">
              <Link
                as={`/books/${book.slug}`}
                href="/books/[slug]"
                className="text-lg leading-6 font-bold"
              >
                {book.title}
              </Link>
              <p>{book.excerpt}</p>
              {book.date && (
                <div className="text-gray-400">
                  <time>{distanceToNow(new Date(book.date))}</time>
                </div>
              )}
            </article>
          ))
        ) : (
          <div className="pt-4 pb-2 text-center">
            <Alert variant="warning">
              Nejsou k dispozici žádné tipy na knihy.
            </Alert>
          </div>
        )}
      </AuthGuard>
    </Container>
  );
}

export async function getStaticProps() {
  return {
    props: { books: getAllBooks() },
  };
}
