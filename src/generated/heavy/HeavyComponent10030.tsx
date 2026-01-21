'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10030<T> = T extends (infer U)[]
  ? DeepReadonlyArray10030<U>
  : T extends object
  ? DeepReadonlyObject10030<T>
  : T;

interface DeepReadonlyArray10030<T> extends ReadonlyArray<DeepReadonly10030<T>> {}

type DeepReadonlyObject10030<T> = {
  readonly [P in keyof T]: DeepReadonly10030<T[P]>;
};

type UnionToIntersection10030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10030<T> = UnionToIntersection10030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10030<T extends unknown[], V> = [...T, V];

type TuplifyUnion10030<T, L = LastOf10030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10030<TuplifyUnion10030<Exclude<T, L>>, L>;

type DeepPartial10030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10030<T[P]> }
  : T;

type Paths10030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10030<K, Paths10030<T[K], Prev10030[D]>> : never }[keyof T]
  : never;

type Prev10030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10030 {
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

type ConfigPaths10030 = Paths10030<NestedConfig10030>;

interface HeavyProps10030 {
  config: DeepPartial10030<NestedConfig10030>;
  path?: ConfigPaths10030;
}

const HeavyComponent10030 = memo(function HeavyComponent10030({ config }: HeavyProps10030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10030.displayName = 'HeavyComponent10030';
export default HeavyComponent10030;
