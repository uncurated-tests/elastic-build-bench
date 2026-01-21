'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10071<T> = T extends (infer U)[]
  ? DeepReadonlyArray10071<U>
  : T extends object
  ? DeepReadonlyObject10071<T>
  : T;

interface DeepReadonlyArray10071<T> extends ReadonlyArray<DeepReadonly10071<T>> {}

type DeepReadonlyObject10071<T> = {
  readonly [P in keyof T]: DeepReadonly10071<T[P]>;
};

type UnionToIntersection10071<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10071<T> = UnionToIntersection10071<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10071<T extends unknown[], V> = [...T, V];

type TuplifyUnion10071<T, L = LastOf10071<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10071<TuplifyUnion10071<Exclude<T, L>>, L>;

type DeepPartial10071<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10071<T[P]> }
  : T;

type Paths10071<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10071<K, Paths10071<T[K], Prev10071[D]>> : never }[keyof T]
  : never;

type Prev10071 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10071<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10071 {
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

type ConfigPaths10071 = Paths10071<NestedConfig10071>;

interface HeavyProps10071 {
  config: DeepPartial10071<NestedConfig10071>;
  path?: ConfigPaths10071;
}

const HeavyComponent10071 = memo(function HeavyComponent10071({ config }: HeavyProps10071) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10071) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10071 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10071: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10071.displayName = 'HeavyComponent10071';
export default HeavyComponent10071;
