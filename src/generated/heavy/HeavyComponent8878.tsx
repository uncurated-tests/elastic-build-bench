'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly8878<T> = T extends (infer U)[]
  ? DeepReadonlyArray8878<U>
  : T extends object
  ? DeepReadonlyObject8878<T>
  : T;

interface DeepReadonlyArray8878<T> extends ReadonlyArray<DeepReadonly8878<T>> {}

type DeepReadonlyObject8878<T> = {
  readonly [P in keyof T]: DeepReadonly8878<T[P]>;
};

type UnionToIntersection8878<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf8878<T> = UnionToIntersection8878<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push8878<T extends unknown[], V> = [...T, V];

type TuplifyUnion8878<T, L = LastOf8878<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push8878<TuplifyUnion8878<Exclude<T, L>>, L>;

type DeepPartial8878<T> = T extends object
  ? { [P in keyof T]?: DeepPartial8878<T[P]> }
  : T;

type Paths8878<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join8878<K, Paths8878<T[K], Prev8878[D]>> : never }[keyof T]
  : never;

type Prev8878 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join8878<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig8878 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths8878 = Paths8878<NestedConfig8878>;

interface HeavyProps8878 {
  config: DeepPartial8878<NestedConfig8878>;
  path?: ConfigPaths8878;
}

const HeavyComponent8878 = memo(function HeavyComponent8878({ config }: HeavyProps8878) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 8878) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-8878 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H8878: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent8878.displayName = 'HeavyComponent8878';
export default HeavyComponent8878;
