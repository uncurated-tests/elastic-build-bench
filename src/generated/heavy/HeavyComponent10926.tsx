'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10926<T> = T extends (infer U)[]
  ? DeepReadonlyArray10926<U>
  : T extends object
  ? DeepReadonlyObject10926<T>
  : T;

interface DeepReadonlyArray10926<T> extends ReadonlyArray<DeepReadonly10926<T>> {}

type DeepReadonlyObject10926<T> = {
  readonly [P in keyof T]: DeepReadonly10926<T[P]>;
};

type UnionToIntersection10926<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10926<T> = UnionToIntersection10926<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10926<T extends unknown[], V> = [...T, V];

type TuplifyUnion10926<T, L = LastOf10926<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10926<TuplifyUnion10926<Exclude<T, L>>, L>;

type DeepPartial10926<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10926<T[P]> }
  : T;

type Paths10926<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10926<K, Paths10926<T[K], Prev10926[D]>> : never }[keyof T]
  : never;

type Prev10926 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10926<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10926 {
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

type ConfigPaths10926 = Paths10926<NestedConfig10926>;

interface HeavyProps10926 {
  config: DeepPartial10926<NestedConfig10926>;
  path?: ConfigPaths10926;
}

const HeavyComponent10926 = memo(function HeavyComponent10926({ config }: HeavyProps10926) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10926) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10926 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10926: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10926.displayName = 'HeavyComponent10926';
export default HeavyComponent10926;
