'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10161<T> = T extends (infer U)[]
  ? DeepReadonlyArray10161<U>
  : T extends object
  ? DeepReadonlyObject10161<T>
  : T;

interface DeepReadonlyArray10161<T> extends ReadonlyArray<DeepReadonly10161<T>> {}

type DeepReadonlyObject10161<T> = {
  readonly [P in keyof T]: DeepReadonly10161<T[P]>;
};

type UnionToIntersection10161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10161<T> = UnionToIntersection10161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10161<T extends unknown[], V> = [...T, V];

type TuplifyUnion10161<T, L = LastOf10161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10161<TuplifyUnion10161<Exclude<T, L>>, L>;

type DeepPartial10161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10161<T[P]> }
  : T;

type Paths10161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10161<K, Paths10161<T[K], Prev10161[D]>> : never }[keyof T]
  : never;

type Prev10161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10161 {
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

type ConfigPaths10161 = Paths10161<NestedConfig10161>;

interface HeavyProps10161 {
  config: DeepPartial10161<NestedConfig10161>;
  path?: ConfigPaths10161;
}

const HeavyComponent10161 = memo(function HeavyComponent10161({ config }: HeavyProps10161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10161.displayName = 'HeavyComponent10161';
export default HeavyComponent10161;
