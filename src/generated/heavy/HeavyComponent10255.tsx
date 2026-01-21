'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10255<T> = T extends (infer U)[]
  ? DeepReadonlyArray10255<U>
  : T extends object
  ? DeepReadonlyObject10255<T>
  : T;

interface DeepReadonlyArray10255<T> extends ReadonlyArray<DeepReadonly10255<T>> {}

type DeepReadonlyObject10255<T> = {
  readonly [P in keyof T]: DeepReadonly10255<T[P]>;
};

type UnionToIntersection10255<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10255<T> = UnionToIntersection10255<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10255<T extends unknown[], V> = [...T, V];

type TuplifyUnion10255<T, L = LastOf10255<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10255<TuplifyUnion10255<Exclude<T, L>>, L>;

type DeepPartial10255<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10255<T[P]> }
  : T;

type Paths10255<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10255<K, Paths10255<T[K], Prev10255[D]>> : never }[keyof T]
  : never;

type Prev10255 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10255<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10255 {
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

type ConfigPaths10255 = Paths10255<NestedConfig10255>;

interface HeavyProps10255 {
  config: DeepPartial10255<NestedConfig10255>;
  path?: ConfigPaths10255;
}

const HeavyComponent10255 = memo(function HeavyComponent10255({ config }: HeavyProps10255) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10255) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10255 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10255: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10255.displayName = 'HeavyComponent10255';
export default HeavyComponent10255;
