'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10820<T> = T extends (infer U)[]
  ? DeepReadonlyArray10820<U>
  : T extends object
  ? DeepReadonlyObject10820<T>
  : T;

interface DeepReadonlyArray10820<T> extends ReadonlyArray<DeepReadonly10820<T>> {}

type DeepReadonlyObject10820<T> = {
  readonly [P in keyof T]: DeepReadonly10820<T[P]>;
};

type UnionToIntersection10820<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10820<T> = UnionToIntersection10820<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10820<T extends unknown[], V> = [...T, V];

type TuplifyUnion10820<T, L = LastOf10820<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10820<TuplifyUnion10820<Exclude<T, L>>, L>;

type DeepPartial10820<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10820<T[P]> }
  : T;

type Paths10820<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10820<K, Paths10820<T[K], Prev10820[D]>> : never }[keyof T]
  : never;

type Prev10820 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10820<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10820 {
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

type ConfigPaths10820 = Paths10820<NestedConfig10820>;

interface HeavyProps10820 {
  config: DeepPartial10820<NestedConfig10820>;
  path?: ConfigPaths10820;
}

const HeavyComponent10820 = memo(function HeavyComponent10820({ config }: HeavyProps10820) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10820) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10820 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10820: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10820.displayName = 'HeavyComponent10820';
export default HeavyComponent10820;
