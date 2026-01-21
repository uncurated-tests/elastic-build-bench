'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10578<T> = T extends (infer U)[]
  ? DeepReadonlyArray10578<U>
  : T extends object
  ? DeepReadonlyObject10578<T>
  : T;

interface DeepReadonlyArray10578<T> extends ReadonlyArray<DeepReadonly10578<T>> {}

type DeepReadonlyObject10578<T> = {
  readonly [P in keyof T]: DeepReadonly10578<T[P]>;
};

type UnionToIntersection10578<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10578<T> = UnionToIntersection10578<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10578<T extends unknown[], V> = [...T, V];

type TuplifyUnion10578<T, L = LastOf10578<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10578<TuplifyUnion10578<Exclude<T, L>>, L>;

type DeepPartial10578<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10578<T[P]> }
  : T;

type Paths10578<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10578<K, Paths10578<T[K], Prev10578[D]>> : never }[keyof T]
  : never;

type Prev10578 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10578<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10578 {
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

type ConfigPaths10578 = Paths10578<NestedConfig10578>;

interface HeavyProps10578 {
  config: DeepPartial10578<NestedConfig10578>;
  path?: ConfigPaths10578;
}

const HeavyComponent10578 = memo(function HeavyComponent10578({ config }: HeavyProps10578) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10578) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10578 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10578: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10578.displayName = 'HeavyComponent10578';
export default HeavyComponent10578;
