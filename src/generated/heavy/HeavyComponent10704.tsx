'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10704<T> = T extends (infer U)[]
  ? DeepReadonlyArray10704<U>
  : T extends object
  ? DeepReadonlyObject10704<T>
  : T;

interface DeepReadonlyArray10704<T> extends ReadonlyArray<DeepReadonly10704<T>> {}

type DeepReadonlyObject10704<T> = {
  readonly [P in keyof T]: DeepReadonly10704<T[P]>;
};

type UnionToIntersection10704<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10704<T> = UnionToIntersection10704<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10704<T extends unknown[], V> = [...T, V];

type TuplifyUnion10704<T, L = LastOf10704<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10704<TuplifyUnion10704<Exclude<T, L>>, L>;

type DeepPartial10704<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10704<T[P]> }
  : T;

type Paths10704<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10704<K, Paths10704<T[K], Prev10704[D]>> : never }[keyof T]
  : never;

type Prev10704 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10704<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10704 {
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

type ConfigPaths10704 = Paths10704<NestedConfig10704>;

interface HeavyProps10704 {
  config: DeepPartial10704<NestedConfig10704>;
  path?: ConfigPaths10704;
}

const HeavyComponent10704 = memo(function HeavyComponent10704({ config }: HeavyProps10704) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10704) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10704 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10704: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10704.displayName = 'HeavyComponent10704';
export default HeavyComponent10704;
