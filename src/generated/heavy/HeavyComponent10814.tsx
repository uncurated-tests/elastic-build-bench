'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10814<T> = T extends (infer U)[]
  ? DeepReadonlyArray10814<U>
  : T extends object
  ? DeepReadonlyObject10814<T>
  : T;

interface DeepReadonlyArray10814<T> extends ReadonlyArray<DeepReadonly10814<T>> {}

type DeepReadonlyObject10814<T> = {
  readonly [P in keyof T]: DeepReadonly10814<T[P]>;
};

type UnionToIntersection10814<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10814<T> = UnionToIntersection10814<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10814<T extends unknown[], V> = [...T, V];

type TuplifyUnion10814<T, L = LastOf10814<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10814<TuplifyUnion10814<Exclude<T, L>>, L>;

type DeepPartial10814<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10814<T[P]> }
  : T;

type Paths10814<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10814<K, Paths10814<T[K], Prev10814[D]>> : never }[keyof T]
  : never;

type Prev10814 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10814<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10814 {
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

type ConfigPaths10814 = Paths10814<NestedConfig10814>;

interface HeavyProps10814 {
  config: DeepPartial10814<NestedConfig10814>;
  path?: ConfigPaths10814;
}

const HeavyComponent10814 = memo(function HeavyComponent10814({ config }: HeavyProps10814) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10814) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10814 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10814: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10814.displayName = 'HeavyComponent10814';
export default HeavyComponent10814;
