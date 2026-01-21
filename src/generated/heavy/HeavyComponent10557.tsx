'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10557<T> = T extends (infer U)[]
  ? DeepReadonlyArray10557<U>
  : T extends object
  ? DeepReadonlyObject10557<T>
  : T;

interface DeepReadonlyArray10557<T> extends ReadonlyArray<DeepReadonly10557<T>> {}

type DeepReadonlyObject10557<T> = {
  readonly [P in keyof T]: DeepReadonly10557<T[P]>;
};

type UnionToIntersection10557<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10557<T> = UnionToIntersection10557<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10557<T extends unknown[], V> = [...T, V];

type TuplifyUnion10557<T, L = LastOf10557<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10557<TuplifyUnion10557<Exclude<T, L>>, L>;

type DeepPartial10557<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10557<T[P]> }
  : T;

type Paths10557<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10557<K, Paths10557<T[K], Prev10557[D]>> : never }[keyof T]
  : never;

type Prev10557 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10557<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10557 {
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

type ConfigPaths10557 = Paths10557<NestedConfig10557>;

interface HeavyProps10557 {
  config: DeepPartial10557<NestedConfig10557>;
  path?: ConfigPaths10557;
}

const HeavyComponent10557 = memo(function HeavyComponent10557({ config }: HeavyProps10557) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10557) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10557 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10557: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10557.displayName = 'HeavyComponent10557';
export default HeavyComponent10557;
