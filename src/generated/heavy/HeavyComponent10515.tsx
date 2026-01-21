'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10515<T> = T extends (infer U)[]
  ? DeepReadonlyArray10515<U>
  : T extends object
  ? DeepReadonlyObject10515<T>
  : T;

interface DeepReadonlyArray10515<T> extends ReadonlyArray<DeepReadonly10515<T>> {}

type DeepReadonlyObject10515<T> = {
  readonly [P in keyof T]: DeepReadonly10515<T[P]>;
};

type UnionToIntersection10515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10515<T> = UnionToIntersection10515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10515<T extends unknown[], V> = [...T, V];

type TuplifyUnion10515<T, L = LastOf10515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10515<TuplifyUnion10515<Exclude<T, L>>, L>;

type DeepPartial10515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10515<T[P]> }
  : T;

type Paths10515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10515<K, Paths10515<T[K], Prev10515[D]>> : never }[keyof T]
  : never;

type Prev10515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10515 {
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

type ConfigPaths10515 = Paths10515<NestedConfig10515>;

interface HeavyProps10515 {
  config: DeepPartial10515<NestedConfig10515>;
  path?: ConfigPaths10515;
}

const HeavyComponent10515 = memo(function HeavyComponent10515({ config }: HeavyProps10515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10515.displayName = 'HeavyComponent10515';
export default HeavyComponent10515;
