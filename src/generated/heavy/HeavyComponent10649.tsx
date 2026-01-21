'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10649<T> = T extends (infer U)[]
  ? DeepReadonlyArray10649<U>
  : T extends object
  ? DeepReadonlyObject10649<T>
  : T;

interface DeepReadonlyArray10649<T> extends ReadonlyArray<DeepReadonly10649<T>> {}

type DeepReadonlyObject10649<T> = {
  readonly [P in keyof T]: DeepReadonly10649<T[P]>;
};

type UnionToIntersection10649<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10649<T> = UnionToIntersection10649<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10649<T extends unknown[], V> = [...T, V];

type TuplifyUnion10649<T, L = LastOf10649<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10649<TuplifyUnion10649<Exclude<T, L>>, L>;

type DeepPartial10649<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10649<T[P]> }
  : T;

type Paths10649<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10649<K, Paths10649<T[K], Prev10649[D]>> : never }[keyof T]
  : never;

type Prev10649 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10649<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10649 {
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

type ConfigPaths10649 = Paths10649<NestedConfig10649>;

interface HeavyProps10649 {
  config: DeepPartial10649<NestedConfig10649>;
  path?: ConfigPaths10649;
}

const HeavyComponent10649 = memo(function HeavyComponent10649({ config }: HeavyProps10649) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10649) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10649 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10649: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10649.displayName = 'HeavyComponent10649';
export default HeavyComponent10649;
