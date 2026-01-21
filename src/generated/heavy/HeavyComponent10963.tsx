'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10963<T> = T extends (infer U)[]
  ? DeepReadonlyArray10963<U>
  : T extends object
  ? DeepReadonlyObject10963<T>
  : T;

interface DeepReadonlyArray10963<T> extends ReadonlyArray<DeepReadonly10963<T>> {}

type DeepReadonlyObject10963<T> = {
  readonly [P in keyof T]: DeepReadonly10963<T[P]>;
};

type UnionToIntersection10963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10963<T> = UnionToIntersection10963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10963<T extends unknown[], V> = [...T, V];

type TuplifyUnion10963<T, L = LastOf10963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10963<TuplifyUnion10963<Exclude<T, L>>, L>;

type DeepPartial10963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10963<T[P]> }
  : T;

type Paths10963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10963<K, Paths10963<T[K], Prev10963[D]>> : never }[keyof T]
  : never;

type Prev10963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10963 {
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

type ConfigPaths10963 = Paths10963<NestedConfig10963>;

interface HeavyProps10963 {
  config: DeepPartial10963<NestedConfig10963>;
  path?: ConfigPaths10963;
}

const HeavyComponent10963 = memo(function HeavyComponent10963({ config }: HeavyProps10963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10963.displayName = 'HeavyComponent10963';
export default HeavyComponent10963;
