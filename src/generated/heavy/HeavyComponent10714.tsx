'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10714<T> = T extends (infer U)[]
  ? DeepReadonlyArray10714<U>
  : T extends object
  ? DeepReadonlyObject10714<T>
  : T;

interface DeepReadonlyArray10714<T> extends ReadonlyArray<DeepReadonly10714<T>> {}

type DeepReadonlyObject10714<T> = {
  readonly [P in keyof T]: DeepReadonly10714<T[P]>;
};

type UnionToIntersection10714<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10714<T> = UnionToIntersection10714<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10714<T extends unknown[], V> = [...T, V];

type TuplifyUnion10714<T, L = LastOf10714<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10714<TuplifyUnion10714<Exclude<T, L>>, L>;

type DeepPartial10714<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10714<T[P]> }
  : T;

type Paths10714<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10714<K, Paths10714<T[K], Prev10714[D]>> : never }[keyof T]
  : never;

type Prev10714 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10714<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10714 {
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

type ConfigPaths10714 = Paths10714<NestedConfig10714>;

interface HeavyProps10714 {
  config: DeepPartial10714<NestedConfig10714>;
  path?: ConfigPaths10714;
}

const HeavyComponent10714 = memo(function HeavyComponent10714({ config }: HeavyProps10714) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10714) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10714 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10714: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10714.displayName = 'HeavyComponent10714';
export default HeavyComponent10714;
