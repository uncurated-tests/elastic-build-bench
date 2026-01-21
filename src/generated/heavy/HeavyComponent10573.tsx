'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10573<T> = T extends (infer U)[]
  ? DeepReadonlyArray10573<U>
  : T extends object
  ? DeepReadonlyObject10573<T>
  : T;

interface DeepReadonlyArray10573<T> extends ReadonlyArray<DeepReadonly10573<T>> {}

type DeepReadonlyObject10573<T> = {
  readonly [P in keyof T]: DeepReadonly10573<T[P]>;
};

type UnionToIntersection10573<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10573<T> = UnionToIntersection10573<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10573<T extends unknown[], V> = [...T, V];

type TuplifyUnion10573<T, L = LastOf10573<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10573<TuplifyUnion10573<Exclude<T, L>>, L>;

type DeepPartial10573<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10573<T[P]> }
  : T;

type Paths10573<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10573<K, Paths10573<T[K], Prev10573[D]>> : never }[keyof T]
  : never;

type Prev10573 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10573<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10573 {
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

type ConfigPaths10573 = Paths10573<NestedConfig10573>;

interface HeavyProps10573 {
  config: DeepPartial10573<NestedConfig10573>;
  path?: ConfigPaths10573;
}

const HeavyComponent10573 = memo(function HeavyComponent10573({ config }: HeavyProps10573) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10573) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10573 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10573: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10573.displayName = 'HeavyComponent10573';
export default HeavyComponent10573;
