'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10245<T> = T extends (infer U)[]
  ? DeepReadonlyArray10245<U>
  : T extends object
  ? DeepReadonlyObject10245<T>
  : T;

interface DeepReadonlyArray10245<T> extends ReadonlyArray<DeepReadonly10245<T>> {}

type DeepReadonlyObject10245<T> = {
  readonly [P in keyof T]: DeepReadonly10245<T[P]>;
};

type UnionToIntersection10245<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10245<T> = UnionToIntersection10245<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10245<T extends unknown[], V> = [...T, V];

type TuplifyUnion10245<T, L = LastOf10245<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10245<TuplifyUnion10245<Exclude<T, L>>, L>;

type DeepPartial10245<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10245<T[P]> }
  : T;

type Paths10245<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10245<K, Paths10245<T[K], Prev10245[D]>> : never }[keyof T]
  : never;

type Prev10245 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10245<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10245 {
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

type ConfigPaths10245 = Paths10245<NestedConfig10245>;

interface HeavyProps10245 {
  config: DeepPartial10245<NestedConfig10245>;
  path?: ConfigPaths10245;
}

const HeavyComponent10245 = memo(function HeavyComponent10245({ config }: HeavyProps10245) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10245) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10245 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10245: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10245.displayName = 'HeavyComponent10245';
export default HeavyComponent10245;
