'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10159<T> = T extends (infer U)[]
  ? DeepReadonlyArray10159<U>
  : T extends object
  ? DeepReadonlyObject10159<T>
  : T;

interface DeepReadonlyArray10159<T> extends ReadonlyArray<DeepReadonly10159<T>> {}

type DeepReadonlyObject10159<T> = {
  readonly [P in keyof T]: DeepReadonly10159<T[P]>;
};

type UnionToIntersection10159<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10159<T> = UnionToIntersection10159<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10159<T extends unknown[], V> = [...T, V];

type TuplifyUnion10159<T, L = LastOf10159<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10159<TuplifyUnion10159<Exclude<T, L>>, L>;

type DeepPartial10159<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10159<T[P]> }
  : T;

type Paths10159<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10159<K, Paths10159<T[K], Prev10159[D]>> : never }[keyof T]
  : never;

type Prev10159 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10159<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10159 {
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

type ConfigPaths10159 = Paths10159<NestedConfig10159>;

interface HeavyProps10159 {
  config: DeepPartial10159<NestedConfig10159>;
  path?: ConfigPaths10159;
}

const HeavyComponent10159 = memo(function HeavyComponent10159({ config }: HeavyProps10159) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10159) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10159 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10159: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10159.displayName = 'HeavyComponent10159';
export default HeavyComponent10159;
