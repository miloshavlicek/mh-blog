import formatDistanceToNowStrict from "date-fns/formatDistanceToNowStrict";

export default function distanceToNow(dateTime: number | Date): string | any {
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
  });
}
