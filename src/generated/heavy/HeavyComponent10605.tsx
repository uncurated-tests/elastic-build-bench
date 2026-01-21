'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10605<T> = T extends (infer U)[]
  ? DeepReadonlyArray10605<U>
  : T extends object
  ? DeepReadonlyObject10605<T>
  : T;

interface DeepReadonlyArray10605<T> extends ReadonlyArray<DeepReadonly10605<T>> {}

type DeepReadonlyObject10605<T> = {
  readonly [P in keyof T]: DeepReadonly10605<T[P]>;
};

type UnionToIntersection10605<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10605<T> = UnionToIntersection10605<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10605<T extends unknown[], V> = [...T, V];

type TuplifyUnion10605<T, L = LastOf10605<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10605<TuplifyUnion10605<Exclude<T, L>>, L>;

type DeepPartial10605<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10605<T[P]> }
  : T;

type Paths10605<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10605<K, Paths10605<T[K], Prev10605[D]>> : never }[keyof T]
  : never;

type Prev10605 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10605<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10605 {
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

type ConfigPaths10605 = Paths10605<NestedConfig10605>;

interface HeavyProps10605 {
  config: DeepPartial10605<NestedConfig10605>;
  path?: ConfigPaths10605;
}

const HeavyComponent10605 = memo(function HeavyComponent10605({ config }: HeavyProps10605) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10605) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10605 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10605: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10605.displayName = 'HeavyComponent10605';
export default HeavyComponent10605;
