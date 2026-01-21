'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10825<T> = T extends (infer U)[]
  ? DeepReadonlyArray10825<U>
  : T extends object
  ? DeepReadonlyObject10825<T>
  : T;

interface DeepReadonlyArray10825<T> extends ReadonlyArray<DeepReadonly10825<T>> {}

type DeepReadonlyObject10825<T> = {
  readonly [P in keyof T]: DeepReadonly10825<T[P]>;
};

type UnionToIntersection10825<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10825<T> = UnionToIntersection10825<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10825<T extends unknown[], V> = [...T, V];

type TuplifyUnion10825<T, L = LastOf10825<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10825<TuplifyUnion10825<Exclude<T, L>>, L>;

type DeepPartial10825<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10825<T[P]> }
  : T;

type Paths10825<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10825<K, Paths10825<T[K], Prev10825[D]>> : never }[keyof T]
  : never;

type Prev10825 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10825<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10825 {
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

type ConfigPaths10825 = Paths10825<NestedConfig10825>;

interface HeavyProps10825 {
  config: DeepPartial10825<NestedConfig10825>;
  path?: ConfigPaths10825;
}

const HeavyComponent10825 = memo(function HeavyComponent10825({ config }: HeavyProps10825) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10825) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10825 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10825: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10825.displayName = 'HeavyComponent10825';
export default HeavyComponent10825;
