'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10611<T> = T extends (infer U)[]
  ? DeepReadonlyArray10611<U>
  : T extends object
  ? DeepReadonlyObject10611<T>
  : T;

interface DeepReadonlyArray10611<T> extends ReadonlyArray<DeepReadonly10611<T>> {}

type DeepReadonlyObject10611<T> = {
  readonly [P in keyof T]: DeepReadonly10611<T[P]>;
};

type UnionToIntersection10611<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10611<T> = UnionToIntersection10611<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10611<T extends unknown[], V> = [...T, V];

type TuplifyUnion10611<T, L = LastOf10611<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10611<TuplifyUnion10611<Exclude<T, L>>, L>;

type DeepPartial10611<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10611<T[P]> }
  : T;

type Paths10611<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10611<K, Paths10611<T[K], Prev10611[D]>> : never }[keyof T]
  : never;

type Prev10611 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10611<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10611 {
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

type ConfigPaths10611 = Paths10611<NestedConfig10611>;

interface HeavyProps10611 {
  config: DeepPartial10611<NestedConfig10611>;
  path?: ConfigPaths10611;
}

const HeavyComponent10611 = memo(function HeavyComponent10611({ config }: HeavyProps10611) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10611) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10611 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10611: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10611.displayName = 'HeavyComponent10611';
export default HeavyComponent10611;
