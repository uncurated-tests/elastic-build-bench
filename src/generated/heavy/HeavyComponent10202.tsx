'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10202<T> = T extends (infer U)[]
  ? DeepReadonlyArray10202<U>
  : T extends object
  ? DeepReadonlyObject10202<T>
  : T;

interface DeepReadonlyArray10202<T> extends ReadonlyArray<DeepReadonly10202<T>> {}

type DeepReadonlyObject10202<T> = {
  readonly [P in keyof T]: DeepReadonly10202<T[P]>;
};

type UnionToIntersection10202<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10202<T> = UnionToIntersection10202<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10202<T extends unknown[], V> = [...T, V];

type TuplifyUnion10202<T, L = LastOf10202<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10202<TuplifyUnion10202<Exclude<T, L>>, L>;

type DeepPartial10202<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10202<T[P]> }
  : T;

type Paths10202<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10202<K, Paths10202<T[K], Prev10202[D]>> : never }[keyof T]
  : never;

type Prev10202 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10202<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10202 {
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

type ConfigPaths10202 = Paths10202<NestedConfig10202>;

interface HeavyProps10202 {
  config: DeepPartial10202<NestedConfig10202>;
  path?: ConfigPaths10202;
}

const HeavyComponent10202 = memo(function HeavyComponent10202({ config }: HeavyProps10202) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10202) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10202 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10202: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10202.displayName = 'HeavyComponent10202';
export default HeavyComponent10202;
