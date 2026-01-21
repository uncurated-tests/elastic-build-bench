'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10163<T> = T extends (infer U)[]
  ? DeepReadonlyArray10163<U>
  : T extends object
  ? DeepReadonlyObject10163<T>
  : T;

interface DeepReadonlyArray10163<T> extends ReadonlyArray<DeepReadonly10163<T>> {}

type DeepReadonlyObject10163<T> = {
  readonly [P in keyof T]: DeepReadonly10163<T[P]>;
};

type UnionToIntersection10163<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10163<T> = UnionToIntersection10163<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10163<T extends unknown[], V> = [...T, V];

type TuplifyUnion10163<T, L = LastOf10163<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10163<TuplifyUnion10163<Exclude<T, L>>, L>;

type DeepPartial10163<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10163<T[P]> }
  : T;

type Paths10163<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10163<K, Paths10163<T[K], Prev10163[D]>> : never }[keyof T]
  : never;

type Prev10163 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10163<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10163 {
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

type ConfigPaths10163 = Paths10163<NestedConfig10163>;

interface HeavyProps10163 {
  config: DeepPartial10163<NestedConfig10163>;
  path?: ConfigPaths10163;
}

const HeavyComponent10163 = memo(function HeavyComponent10163({ config }: HeavyProps10163) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10163) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10163 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10163: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10163.displayName = 'HeavyComponent10163';
export default HeavyComponent10163;
