'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10301<T> = T extends (infer U)[]
  ? DeepReadonlyArray10301<U>
  : T extends object
  ? DeepReadonlyObject10301<T>
  : T;

interface DeepReadonlyArray10301<T> extends ReadonlyArray<DeepReadonly10301<T>> {}

type DeepReadonlyObject10301<T> = {
  readonly [P in keyof T]: DeepReadonly10301<T[P]>;
};

type UnionToIntersection10301<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10301<T> = UnionToIntersection10301<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10301<T extends unknown[], V> = [...T, V];

type TuplifyUnion10301<T, L = LastOf10301<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10301<TuplifyUnion10301<Exclude<T, L>>, L>;

type DeepPartial10301<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10301<T[P]> }
  : T;

type Paths10301<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10301<K, Paths10301<T[K], Prev10301[D]>> : never }[keyof T]
  : never;

type Prev10301 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10301<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10301 {
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

type ConfigPaths10301 = Paths10301<NestedConfig10301>;

interface HeavyProps10301 {
  config: DeepPartial10301<NestedConfig10301>;
  path?: ConfigPaths10301;
}

const HeavyComponent10301 = memo(function HeavyComponent10301({ config }: HeavyProps10301) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10301) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10301 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10301: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10301.displayName = 'HeavyComponent10301';
export default HeavyComponent10301;
