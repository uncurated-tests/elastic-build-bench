'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10491<T> = T extends (infer U)[]
  ? DeepReadonlyArray10491<U>
  : T extends object
  ? DeepReadonlyObject10491<T>
  : T;

interface DeepReadonlyArray10491<T> extends ReadonlyArray<DeepReadonly10491<T>> {}

type DeepReadonlyObject10491<T> = {
  readonly [P in keyof T]: DeepReadonly10491<T[P]>;
};

type UnionToIntersection10491<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10491<T> = UnionToIntersection10491<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10491<T extends unknown[], V> = [...T, V];

type TuplifyUnion10491<T, L = LastOf10491<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10491<TuplifyUnion10491<Exclude<T, L>>, L>;

type DeepPartial10491<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10491<T[P]> }
  : T;

type Paths10491<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10491<K, Paths10491<T[K], Prev10491[D]>> : never }[keyof T]
  : never;

type Prev10491 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10491<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10491 {
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

type ConfigPaths10491 = Paths10491<NestedConfig10491>;

interface HeavyProps10491 {
  config: DeepPartial10491<NestedConfig10491>;
  path?: ConfigPaths10491;
}

const HeavyComponent10491 = memo(function HeavyComponent10491({ config }: HeavyProps10491) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10491) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10491 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10491: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10491.displayName = 'HeavyComponent10491';
export default HeavyComponent10491;
