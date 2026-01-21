'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10061<T> = T extends (infer U)[]
  ? DeepReadonlyArray10061<U>
  : T extends object
  ? DeepReadonlyObject10061<T>
  : T;

interface DeepReadonlyArray10061<T> extends ReadonlyArray<DeepReadonly10061<T>> {}

type DeepReadonlyObject10061<T> = {
  readonly [P in keyof T]: DeepReadonly10061<T[P]>;
};

type UnionToIntersection10061<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10061<T> = UnionToIntersection10061<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10061<T extends unknown[], V> = [...T, V];

type TuplifyUnion10061<T, L = LastOf10061<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10061<TuplifyUnion10061<Exclude<T, L>>, L>;

type DeepPartial10061<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10061<T[P]> }
  : T;

type Paths10061<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10061<K, Paths10061<T[K], Prev10061[D]>> : never }[keyof T]
  : never;

type Prev10061 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10061<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10061 {
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

type ConfigPaths10061 = Paths10061<NestedConfig10061>;

interface HeavyProps10061 {
  config: DeepPartial10061<NestedConfig10061>;
  path?: ConfigPaths10061;
}

const HeavyComponent10061 = memo(function HeavyComponent10061({ config }: HeavyProps10061) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10061) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10061 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10061: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10061.displayName = 'HeavyComponent10061';
export default HeavyComponent10061;
