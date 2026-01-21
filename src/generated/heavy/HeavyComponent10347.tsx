'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10347<T> = T extends (infer U)[]
  ? DeepReadonlyArray10347<U>
  : T extends object
  ? DeepReadonlyObject10347<T>
  : T;

interface DeepReadonlyArray10347<T> extends ReadonlyArray<DeepReadonly10347<T>> {}

type DeepReadonlyObject10347<T> = {
  readonly [P in keyof T]: DeepReadonly10347<T[P]>;
};

type UnionToIntersection10347<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10347<T> = UnionToIntersection10347<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10347<T extends unknown[], V> = [...T, V];

type TuplifyUnion10347<T, L = LastOf10347<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10347<TuplifyUnion10347<Exclude<T, L>>, L>;

type DeepPartial10347<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10347<T[P]> }
  : T;

type Paths10347<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10347<K, Paths10347<T[K], Prev10347[D]>> : never }[keyof T]
  : never;

type Prev10347 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10347<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10347 {
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

type ConfigPaths10347 = Paths10347<NestedConfig10347>;

interface HeavyProps10347 {
  config: DeepPartial10347<NestedConfig10347>;
  path?: ConfigPaths10347;
}

const HeavyComponent10347 = memo(function HeavyComponent10347({ config }: HeavyProps10347) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10347) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10347 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10347: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10347.displayName = 'HeavyComponent10347';
export default HeavyComponent10347;
