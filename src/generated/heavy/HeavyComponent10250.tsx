'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10250<T> = T extends (infer U)[]
  ? DeepReadonlyArray10250<U>
  : T extends object
  ? DeepReadonlyObject10250<T>
  : T;

interface DeepReadonlyArray10250<T> extends ReadonlyArray<DeepReadonly10250<T>> {}

type DeepReadonlyObject10250<T> = {
  readonly [P in keyof T]: DeepReadonly10250<T[P]>;
};

type UnionToIntersection10250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10250<T> = UnionToIntersection10250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10250<T extends unknown[], V> = [...T, V];

type TuplifyUnion10250<T, L = LastOf10250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10250<TuplifyUnion10250<Exclude<T, L>>, L>;

type DeepPartial10250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10250<T[P]> }
  : T;

type Paths10250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10250<K, Paths10250<T[K], Prev10250[D]>> : never }[keyof T]
  : never;

type Prev10250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10250 {
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

type ConfigPaths10250 = Paths10250<NestedConfig10250>;

interface HeavyProps10250 {
  config: DeepPartial10250<NestedConfig10250>;
  path?: ConfigPaths10250;
}

const HeavyComponent10250 = memo(function HeavyComponent10250({ config }: HeavyProps10250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10250.displayName = 'HeavyComponent10250';
export default HeavyComponent10250;
