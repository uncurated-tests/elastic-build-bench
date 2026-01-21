'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10049<T> = T extends (infer U)[]
  ? DeepReadonlyArray10049<U>
  : T extends object
  ? DeepReadonlyObject10049<T>
  : T;

interface DeepReadonlyArray10049<T> extends ReadonlyArray<DeepReadonly10049<T>> {}

type DeepReadonlyObject10049<T> = {
  readonly [P in keyof T]: DeepReadonly10049<T[P]>;
};

type UnionToIntersection10049<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10049<T> = UnionToIntersection10049<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10049<T extends unknown[], V> = [...T, V];

type TuplifyUnion10049<T, L = LastOf10049<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10049<TuplifyUnion10049<Exclude<T, L>>, L>;

type DeepPartial10049<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10049<T[P]> }
  : T;

type Paths10049<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10049<K, Paths10049<T[K], Prev10049[D]>> : never }[keyof T]
  : never;

type Prev10049 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10049<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10049 {
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

type ConfigPaths10049 = Paths10049<NestedConfig10049>;

interface HeavyProps10049 {
  config: DeepPartial10049<NestedConfig10049>;
  path?: ConfigPaths10049;
}

const HeavyComponent10049 = memo(function HeavyComponent10049({ config }: HeavyProps10049) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10049) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10049 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10049: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10049.displayName = 'HeavyComponent10049';
export default HeavyComponent10049;
