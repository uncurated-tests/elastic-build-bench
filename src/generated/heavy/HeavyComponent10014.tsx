'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10014<T> = T extends (infer U)[]
  ? DeepReadonlyArray10014<U>
  : T extends object
  ? DeepReadonlyObject10014<T>
  : T;

interface DeepReadonlyArray10014<T> extends ReadonlyArray<DeepReadonly10014<T>> {}

type DeepReadonlyObject10014<T> = {
  readonly [P in keyof T]: DeepReadonly10014<T[P]>;
};

type UnionToIntersection10014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10014<T> = UnionToIntersection10014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10014<T extends unknown[], V> = [...T, V];

type TuplifyUnion10014<T, L = LastOf10014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10014<TuplifyUnion10014<Exclude<T, L>>, L>;

type DeepPartial10014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10014<T[P]> }
  : T;

type Paths10014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10014<K, Paths10014<T[K], Prev10014[D]>> : never }[keyof T]
  : never;

type Prev10014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10014 {
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

type ConfigPaths10014 = Paths10014<NestedConfig10014>;

interface HeavyProps10014 {
  config: DeepPartial10014<NestedConfig10014>;
  path?: ConfigPaths10014;
}

const HeavyComponent10014 = memo(function HeavyComponent10014({ config }: HeavyProps10014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10014.displayName = 'HeavyComponent10014';
export default HeavyComponent10014;
