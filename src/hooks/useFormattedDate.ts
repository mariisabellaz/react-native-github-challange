import {useState, useEffect} from 'react';
import {formatDistanceStrict, parseISO} from 'date-fns';
import {ptBR} from 'date-fns/locale';

const useFormattedDate = (isoDateString: string) => {
  const [relativeTime, setRelativeTime] = useState('');

  useEffect(() => {
    if (!isoDateString) {
      setRelativeTime('');
      return;
    }

    try {
      const date = parseISO(isoDateString);
      const formattedDistance = formatDistanceStrict(date, new Date(), {
        addSuffix: true,
        locale: ptBR,
      });
      setRelativeTime(formattedDistance);
    } catch (error) {
      console.error('Invalid date format', error);
      setRelativeTime('');
    }
  }, [isoDateString]);

  return relativeTime;
};

export default useFormattedDate;
