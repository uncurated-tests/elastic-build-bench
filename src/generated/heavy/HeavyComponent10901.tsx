'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10901<T> = T extends (infer U)[]
  ? DeepReadonlyArray10901<U>
  : T extends object
  ? DeepReadonlyObject10901<T>
  : T;

interface DeepReadonlyArray10901<T> extends ReadonlyArray<DeepReadonly10901<T>> {}

type DeepReadonlyObject10901<T> = {
  readonly [P in keyof T]: DeepReadonly10901<T[P]>;
};

type UnionToIntersection10901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10901<T> = UnionToIntersection10901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10901<T extends unknown[], V> = [...T, V];

type TuplifyUnion10901<T, L = LastOf10901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10901<TuplifyUnion10901<Exclude<T, L>>, L>;

type DeepPartial10901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10901<T[P]> }
  : T;

type Paths10901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10901<K, Paths10901<T[K], Prev10901[D]>> : never }[keyof T]
  : never;

type Prev10901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10901 {
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

type ConfigPaths10901 = Paths10901<NestedConfig10901>;

interface HeavyProps10901 {
  config: DeepPartial10901<NestedConfig10901>;
  path?: ConfigPaths10901;
}

const HeavyComponent10901 = memo(function HeavyComponent10901({ config }: HeavyProps10901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10901.displayName = 'HeavyComponent10901';
export default HeavyComponent10901;
