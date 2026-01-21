'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10841<T> = T extends (infer U)[]
  ? DeepReadonlyArray10841<U>
  : T extends object
  ? DeepReadonlyObject10841<T>
  : T;

interface DeepReadonlyArray10841<T> extends ReadonlyArray<DeepReadonly10841<T>> {}

type DeepReadonlyObject10841<T> = {
  readonly [P in keyof T]: DeepReadonly10841<T[P]>;
};

type UnionToIntersection10841<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10841<T> = UnionToIntersection10841<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10841<T extends unknown[], V> = [...T, V];

type TuplifyUnion10841<T, L = LastOf10841<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10841<TuplifyUnion10841<Exclude<T, L>>, L>;

type DeepPartial10841<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10841<T[P]> }
  : T;

type Paths10841<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10841<K, Paths10841<T[K], Prev10841[D]>> : never }[keyof T]
  : never;

type Prev10841 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10841<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10841 {
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

type ConfigPaths10841 = Paths10841<NestedConfig10841>;

interface HeavyProps10841 {
  config: DeepPartial10841<NestedConfig10841>;
  path?: ConfigPaths10841;
}

const HeavyComponent10841 = memo(function HeavyComponent10841({ config }: HeavyProps10841) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10841) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10841 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10841: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10841.displayName = 'HeavyComponent10841';
export default HeavyComponent10841;
