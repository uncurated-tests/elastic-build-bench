'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10550<T> = T extends (infer U)[]
  ? DeepReadonlyArray10550<U>
  : T extends object
  ? DeepReadonlyObject10550<T>
  : T;

interface DeepReadonlyArray10550<T> extends ReadonlyArray<DeepReadonly10550<T>> {}

type DeepReadonlyObject10550<T> = {
  readonly [P in keyof T]: DeepReadonly10550<T[P]>;
};

type UnionToIntersection10550<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10550<T> = UnionToIntersection10550<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10550<T extends unknown[], V> = [...T, V];

type TuplifyUnion10550<T, L = LastOf10550<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10550<TuplifyUnion10550<Exclude<T, L>>, L>;

type DeepPartial10550<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10550<T[P]> }
  : T;

type Paths10550<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10550<K, Paths10550<T[K], Prev10550[D]>> : never }[keyof T]
  : never;

type Prev10550 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10550<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10550 {
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

type ConfigPaths10550 = Paths10550<NestedConfig10550>;

interface HeavyProps10550 {
  config: DeepPartial10550<NestedConfig10550>;
  path?: ConfigPaths10550;
}

const HeavyComponent10550 = memo(function HeavyComponent10550({ config }: HeavyProps10550) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10550) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10550 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10550: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10550.displayName = 'HeavyComponent10550';
export default HeavyComponent10550;
