'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10338<T> = T extends (infer U)[]
  ? DeepReadonlyArray10338<U>
  : T extends object
  ? DeepReadonlyObject10338<T>
  : T;

interface DeepReadonlyArray10338<T> extends ReadonlyArray<DeepReadonly10338<T>> {}

type DeepReadonlyObject10338<T> = {
  readonly [P in keyof T]: DeepReadonly10338<T[P]>;
};

type UnionToIntersection10338<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10338<T> = UnionToIntersection10338<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10338<T extends unknown[], V> = [...T, V];

type TuplifyUnion10338<T, L = LastOf10338<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10338<TuplifyUnion10338<Exclude<T, L>>, L>;

type DeepPartial10338<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10338<T[P]> }
  : T;

type Paths10338<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10338<K, Paths10338<T[K], Prev10338[D]>> : never }[keyof T]
  : never;

type Prev10338 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10338<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10338 {
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

type ConfigPaths10338 = Paths10338<NestedConfig10338>;

interface HeavyProps10338 {
  config: DeepPartial10338<NestedConfig10338>;
  path?: ConfigPaths10338;
}

const HeavyComponent10338 = memo(function HeavyComponent10338({ config }: HeavyProps10338) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10338) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10338 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10338: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10338.displayName = 'HeavyComponent10338';
export default HeavyComponent10338;
