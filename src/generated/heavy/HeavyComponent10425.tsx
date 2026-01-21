'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10425<T> = T extends (infer U)[]
  ? DeepReadonlyArray10425<U>
  : T extends object
  ? DeepReadonlyObject10425<T>
  : T;

interface DeepReadonlyArray10425<T> extends ReadonlyArray<DeepReadonly10425<T>> {}

type DeepReadonlyObject10425<T> = {
  readonly [P in keyof T]: DeepReadonly10425<T[P]>;
};

type UnionToIntersection10425<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10425<T> = UnionToIntersection10425<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10425<T extends unknown[], V> = [...T, V];

type TuplifyUnion10425<T, L = LastOf10425<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10425<TuplifyUnion10425<Exclude<T, L>>, L>;

type DeepPartial10425<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10425<T[P]> }
  : T;

type Paths10425<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10425<K, Paths10425<T[K], Prev10425[D]>> : never }[keyof T]
  : never;

type Prev10425 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10425<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10425 {
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

type ConfigPaths10425 = Paths10425<NestedConfig10425>;

interface HeavyProps10425 {
  config: DeepPartial10425<NestedConfig10425>;
  path?: ConfigPaths10425;
}

const HeavyComponent10425 = memo(function HeavyComponent10425({ config }: HeavyProps10425) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10425) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10425 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10425: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10425.displayName = 'HeavyComponent10425';
export default HeavyComponent10425;
