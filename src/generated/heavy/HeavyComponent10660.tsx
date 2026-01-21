'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10660<T> = T extends (infer U)[]
  ? DeepReadonlyArray10660<U>
  : T extends object
  ? DeepReadonlyObject10660<T>
  : T;

interface DeepReadonlyArray10660<T> extends ReadonlyArray<DeepReadonly10660<T>> {}

type DeepReadonlyObject10660<T> = {
  readonly [P in keyof T]: DeepReadonly10660<T[P]>;
};

type UnionToIntersection10660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10660<T> = UnionToIntersection10660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10660<T extends unknown[], V> = [...T, V];

type TuplifyUnion10660<T, L = LastOf10660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10660<TuplifyUnion10660<Exclude<T, L>>, L>;

type DeepPartial10660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10660<T[P]> }
  : T;

type Paths10660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10660<K, Paths10660<T[K], Prev10660[D]>> : never }[keyof T]
  : never;

type Prev10660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10660 {
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

type ConfigPaths10660 = Paths10660<NestedConfig10660>;

interface HeavyProps10660 {
  config: DeepPartial10660<NestedConfig10660>;
  path?: ConfigPaths10660;
}

const HeavyComponent10660 = memo(function HeavyComponent10660({ config }: HeavyProps10660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10660.displayName = 'HeavyComponent10660';
export default HeavyComponent10660;
