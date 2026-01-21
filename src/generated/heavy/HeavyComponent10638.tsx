'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10638<T> = T extends (infer U)[]
  ? DeepReadonlyArray10638<U>
  : T extends object
  ? DeepReadonlyObject10638<T>
  : T;

interface DeepReadonlyArray10638<T> extends ReadonlyArray<DeepReadonly10638<T>> {}

type DeepReadonlyObject10638<T> = {
  readonly [P in keyof T]: DeepReadonly10638<T[P]>;
};

type UnionToIntersection10638<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10638<T> = UnionToIntersection10638<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10638<T extends unknown[], V> = [...T, V];

type TuplifyUnion10638<T, L = LastOf10638<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10638<TuplifyUnion10638<Exclude<T, L>>, L>;

type DeepPartial10638<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10638<T[P]> }
  : T;

type Paths10638<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10638<K, Paths10638<T[K], Prev10638[D]>> : never }[keyof T]
  : never;

type Prev10638 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10638<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10638 {
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

type ConfigPaths10638 = Paths10638<NestedConfig10638>;

interface HeavyProps10638 {
  config: DeepPartial10638<NestedConfig10638>;
  path?: ConfigPaths10638;
}

const HeavyComponent10638 = memo(function HeavyComponent10638({ config }: HeavyProps10638) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10638) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10638 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10638: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10638.displayName = 'HeavyComponent10638';
export default HeavyComponent10638;
