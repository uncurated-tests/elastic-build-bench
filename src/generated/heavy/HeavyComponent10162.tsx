'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10162<T> = T extends (infer U)[]
  ? DeepReadonlyArray10162<U>
  : T extends object
  ? DeepReadonlyObject10162<T>
  : T;

interface DeepReadonlyArray10162<T> extends ReadonlyArray<DeepReadonly10162<T>> {}

type DeepReadonlyObject10162<T> = {
  readonly [P in keyof T]: DeepReadonly10162<T[P]>;
};

type UnionToIntersection10162<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10162<T> = UnionToIntersection10162<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10162<T extends unknown[], V> = [...T, V];

type TuplifyUnion10162<T, L = LastOf10162<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10162<TuplifyUnion10162<Exclude<T, L>>, L>;

type DeepPartial10162<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10162<T[P]> }
  : T;

type Paths10162<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10162<K, Paths10162<T[K], Prev10162[D]>> : never }[keyof T]
  : never;

type Prev10162 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10162<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10162 {
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

type ConfigPaths10162 = Paths10162<NestedConfig10162>;

interface HeavyProps10162 {
  config: DeepPartial10162<NestedConfig10162>;
  path?: ConfigPaths10162;
}

const HeavyComponent10162 = memo(function HeavyComponent10162({ config }: HeavyProps10162) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10162) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10162 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10162: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10162.displayName = 'HeavyComponent10162';
export default HeavyComponent10162;
