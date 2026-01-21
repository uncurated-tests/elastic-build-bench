'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10200<T> = T extends (infer U)[]
  ? DeepReadonlyArray10200<U>
  : T extends object
  ? DeepReadonlyObject10200<T>
  : T;

interface DeepReadonlyArray10200<T> extends ReadonlyArray<DeepReadonly10200<T>> {}

type DeepReadonlyObject10200<T> = {
  readonly [P in keyof T]: DeepReadonly10200<T[P]>;
};

type UnionToIntersection10200<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10200<T> = UnionToIntersection10200<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10200<T extends unknown[], V> = [...T, V];

type TuplifyUnion10200<T, L = LastOf10200<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10200<TuplifyUnion10200<Exclude<T, L>>, L>;

type DeepPartial10200<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10200<T[P]> }
  : T;

type Paths10200<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10200<K, Paths10200<T[K], Prev10200[D]>> : never }[keyof T]
  : never;

type Prev10200 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10200<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10200 {
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

type ConfigPaths10200 = Paths10200<NestedConfig10200>;

interface HeavyProps10200 {
  config: DeepPartial10200<NestedConfig10200>;
  path?: ConfigPaths10200;
}

const HeavyComponent10200 = memo(function HeavyComponent10200({ config }: HeavyProps10200) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10200) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10200 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10200: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10200.displayName = 'HeavyComponent10200';
export default HeavyComponent10200;
