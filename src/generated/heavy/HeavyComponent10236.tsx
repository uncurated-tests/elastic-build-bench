'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10236<T> = T extends (infer U)[]
  ? DeepReadonlyArray10236<U>
  : T extends object
  ? DeepReadonlyObject10236<T>
  : T;

interface DeepReadonlyArray10236<T> extends ReadonlyArray<DeepReadonly10236<T>> {}

type DeepReadonlyObject10236<T> = {
  readonly [P in keyof T]: DeepReadonly10236<T[P]>;
};

type UnionToIntersection10236<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10236<T> = UnionToIntersection10236<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10236<T extends unknown[], V> = [...T, V];

type TuplifyUnion10236<T, L = LastOf10236<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10236<TuplifyUnion10236<Exclude<T, L>>, L>;

type DeepPartial10236<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10236<T[P]> }
  : T;

type Paths10236<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10236<K, Paths10236<T[K], Prev10236[D]>> : never }[keyof T]
  : never;

type Prev10236 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10236<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10236 {
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

type ConfigPaths10236 = Paths10236<NestedConfig10236>;

interface HeavyProps10236 {
  config: DeepPartial10236<NestedConfig10236>;
  path?: ConfigPaths10236;
}

const HeavyComponent10236 = memo(function HeavyComponent10236({ config }: HeavyProps10236) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10236) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10236 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10236: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10236.displayName = 'HeavyComponent10236';
export default HeavyComponent10236;
