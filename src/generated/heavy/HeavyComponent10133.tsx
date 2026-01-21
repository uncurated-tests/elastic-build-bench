'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10133<T> = T extends (infer U)[]
  ? DeepReadonlyArray10133<U>
  : T extends object
  ? DeepReadonlyObject10133<T>
  : T;

interface DeepReadonlyArray10133<T> extends ReadonlyArray<DeepReadonly10133<T>> {}

type DeepReadonlyObject10133<T> = {
  readonly [P in keyof T]: DeepReadonly10133<T[P]>;
};

type UnionToIntersection10133<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10133<T> = UnionToIntersection10133<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10133<T extends unknown[], V> = [...T, V];

type TuplifyUnion10133<T, L = LastOf10133<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10133<TuplifyUnion10133<Exclude<T, L>>, L>;

type DeepPartial10133<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10133<T[P]> }
  : T;

type Paths10133<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10133<K, Paths10133<T[K], Prev10133[D]>> : never }[keyof T]
  : never;

type Prev10133 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10133<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10133 {
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

type ConfigPaths10133 = Paths10133<NestedConfig10133>;

interface HeavyProps10133 {
  config: DeepPartial10133<NestedConfig10133>;
  path?: ConfigPaths10133;
}

const HeavyComponent10133 = memo(function HeavyComponent10133({ config }: HeavyProps10133) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10133) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10133 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10133: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10133.displayName = 'HeavyComponent10133';
export default HeavyComponent10133;
