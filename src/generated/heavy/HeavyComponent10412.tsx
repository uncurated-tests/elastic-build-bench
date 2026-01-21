'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10412<T> = T extends (infer U)[]
  ? DeepReadonlyArray10412<U>
  : T extends object
  ? DeepReadonlyObject10412<T>
  : T;

interface DeepReadonlyArray10412<T> extends ReadonlyArray<DeepReadonly10412<T>> {}

type DeepReadonlyObject10412<T> = {
  readonly [P in keyof T]: DeepReadonly10412<T[P]>;
};

type UnionToIntersection10412<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10412<T> = UnionToIntersection10412<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10412<T extends unknown[], V> = [...T, V];

type TuplifyUnion10412<T, L = LastOf10412<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10412<TuplifyUnion10412<Exclude<T, L>>, L>;

type DeepPartial10412<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10412<T[P]> }
  : T;

type Paths10412<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10412<K, Paths10412<T[K], Prev10412[D]>> : never }[keyof T]
  : never;

type Prev10412 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10412<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10412 {
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

type ConfigPaths10412 = Paths10412<NestedConfig10412>;

interface HeavyProps10412 {
  config: DeepPartial10412<NestedConfig10412>;
  path?: ConfigPaths10412;
}

const HeavyComponent10412 = memo(function HeavyComponent10412({ config }: HeavyProps10412) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10412) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10412 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10412: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10412.displayName = 'HeavyComponent10412';
export default HeavyComponent10412;
