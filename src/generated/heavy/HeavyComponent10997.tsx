'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10997<T> = T extends (infer U)[]
  ? DeepReadonlyArray10997<U>
  : T extends object
  ? DeepReadonlyObject10997<T>
  : T;

interface DeepReadonlyArray10997<T> extends ReadonlyArray<DeepReadonly10997<T>> {}

type DeepReadonlyObject10997<T> = {
  readonly [P in keyof T]: DeepReadonly10997<T[P]>;
};

type UnionToIntersection10997<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10997<T> = UnionToIntersection10997<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10997<T extends unknown[], V> = [...T, V];

type TuplifyUnion10997<T, L = LastOf10997<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10997<TuplifyUnion10997<Exclude<T, L>>, L>;

type DeepPartial10997<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10997<T[P]> }
  : T;

type Paths10997<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10997<K, Paths10997<T[K], Prev10997[D]>> : never }[keyof T]
  : never;

type Prev10997 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10997<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10997 {
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

type ConfigPaths10997 = Paths10997<NestedConfig10997>;

interface HeavyProps10997 {
  config: DeepPartial10997<NestedConfig10997>;
  path?: ConfigPaths10997;
}

const HeavyComponent10997 = memo(function HeavyComponent10997({ config }: HeavyProps10997) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10997) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10997 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10997: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10997.displayName = 'HeavyComponent10997';
export default HeavyComponent10997;
