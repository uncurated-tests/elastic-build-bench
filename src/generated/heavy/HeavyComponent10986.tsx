'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10986<T> = T extends (infer U)[]
  ? DeepReadonlyArray10986<U>
  : T extends object
  ? DeepReadonlyObject10986<T>
  : T;

interface DeepReadonlyArray10986<T> extends ReadonlyArray<DeepReadonly10986<T>> {}

type DeepReadonlyObject10986<T> = {
  readonly [P in keyof T]: DeepReadonly10986<T[P]>;
};

type UnionToIntersection10986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10986<T> = UnionToIntersection10986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10986<T extends unknown[], V> = [...T, V];

type TuplifyUnion10986<T, L = LastOf10986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10986<TuplifyUnion10986<Exclude<T, L>>, L>;

type DeepPartial10986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10986<T[P]> }
  : T;

type Paths10986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10986<K, Paths10986<T[K], Prev10986[D]>> : never }[keyof T]
  : never;

type Prev10986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10986 {
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

type ConfigPaths10986 = Paths10986<NestedConfig10986>;

interface HeavyProps10986 {
  config: DeepPartial10986<NestedConfig10986>;
  path?: ConfigPaths10986;
}

const HeavyComponent10986 = memo(function HeavyComponent10986({ config }: HeavyProps10986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10986.displayName = 'HeavyComponent10986';
export default HeavyComponent10986;
