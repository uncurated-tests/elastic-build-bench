'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10487<T> = T extends (infer U)[]
  ? DeepReadonlyArray10487<U>
  : T extends object
  ? DeepReadonlyObject10487<T>
  : T;

interface DeepReadonlyArray10487<T> extends ReadonlyArray<DeepReadonly10487<T>> {}

type DeepReadonlyObject10487<T> = {
  readonly [P in keyof T]: DeepReadonly10487<T[P]>;
};

type UnionToIntersection10487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10487<T> = UnionToIntersection10487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10487<T extends unknown[], V> = [...T, V];

type TuplifyUnion10487<T, L = LastOf10487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10487<TuplifyUnion10487<Exclude<T, L>>, L>;

type DeepPartial10487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10487<T[P]> }
  : T;

type Paths10487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10487<K, Paths10487<T[K], Prev10487[D]>> : never }[keyof T]
  : never;

type Prev10487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10487 {
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

type ConfigPaths10487 = Paths10487<NestedConfig10487>;

interface HeavyProps10487 {
  config: DeepPartial10487<NestedConfig10487>;
  path?: ConfigPaths10487;
}

const HeavyComponent10487 = memo(function HeavyComponent10487({ config }: HeavyProps10487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10487.displayName = 'HeavyComponent10487';
export default HeavyComponent10487;
