'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10716<T> = T extends (infer U)[]
  ? DeepReadonlyArray10716<U>
  : T extends object
  ? DeepReadonlyObject10716<T>
  : T;

interface DeepReadonlyArray10716<T> extends ReadonlyArray<DeepReadonly10716<T>> {}

type DeepReadonlyObject10716<T> = {
  readonly [P in keyof T]: DeepReadonly10716<T[P]>;
};

type UnionToIntersection10716<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10716<T> = UnionToIntersection10716<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10716<T extends unknown[], V> = [...T, V];

type TuplifyUnion10716<T, L = LastOf10716<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10716<TuplifyUnion10716<Exclude<T, L>>, L>;

type DeepPartial10716<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10716<T[P]> }
  : T;

type Paths10716<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10716<K, Paths10716<T[K], Prev10716[D]>> : never }[keyof T]
  : never;

type Prev10716 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10716<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10716 {
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

type ConfigPaths10716 = Paths10716<NestedConfig10716>;

interface HeavyProps10716 {
  config: DeepPartial10716<NestedConfig10716>;
  path?: ConfigPaths10716;
}

const HeavyComponent10716 = memo(function HeavyComponent10716({ config }: HeavyProps10716) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10716) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10716 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10716: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10716.displayName = 'HeavyComponent10716';
export default HeavyComponent10716;
