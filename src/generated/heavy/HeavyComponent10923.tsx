'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10923<T> = T extends (infer U)[]
  ? DeepReadonlyArray10923<U>
  : T extends object
  ? DeepReadonlyObject10923<T>
  : T;

interface DeepReadonlyArray10923<T> extends ReadonlyArray<DeepReadonly10923<T>> {}

type DeepReadonlyObject10923<T> = {
  readonly [P in keyof T]: DeepReadonly10923<T[P]>;
};

type UnionToIntersection10923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10923<T> = UnionToIntersection10923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10923<T extends unknown[], V> = [...T, V];

type TuplifyUnion10923<T, L = LastOf10923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10923<TuplifyUnion10923<Exclude<T, L>>, L>;

type DeepPartial10923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10923<T[P]> }
  : T;

type Paths10923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10923<K, Paths10923<T[K], Prev10923[D]>> : never }[keyof T]
  : never;

type Prev10923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10923 {
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

type ConfigPaths10923 = Paths10923<NestedConfig10923>;

interface HeavyProps10923 {
  config: DeepPartial10923<NestedConfig10923>;
  path?: ConfigPaths10923;
}

const HeavyComponent10923 = memo(function HeavyComponent10923({ config }: HeavyProps10923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10923.displayName = 'HeavyComponent10923';
export default HeavyComponent10923;
