'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10165<T> = T extends (infer U)[]
  ? DeepReadonlyArray10165<U>
  : T extends object
  ? DeepReadonlyObject10165<T>
  : T;

interface DeepReadonlyArray10165<T> extends ReadonlyArray<DeepReadonly10165<T>> {}

type DeepReadonlyObject10165<T> = {
  readonly [P in keyof T]: DeepReadonly10165<T[P]>;
};

type UnionToIntersection10165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10165<T> = UnionToIntersection10165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10165<T extends unknown[], V> = [...T, V];

type TuplifyUnion10165<T, L = LastOf10165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10165<TuplifyUnion10165<Exclude<T, L>>, L>;

type DeepPartial10165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10165<T[P]> }
  : T;

type Paths10165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10165<K, Paths10165<T[K], Prev10165[D]>> : never }[keyof T]
  : never;

type Prev10165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10165 {
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

type ConfigPaths10165 = Paths10165<NestedConfig10165>;

interface HeavyProps10165 {
  config: DeepPartial10165<NestedConfig10165>;
  path?: ConfigPaths10165;
}

const HeavyComponent10165 = memo(function HeavyComponent10165({ config }: HeavyProps10165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10165.displayName = 'HeavyComponent10165';
export default HeavyComponent10165;
