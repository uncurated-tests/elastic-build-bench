'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10991<T> = T extends (infer U)[]
  ? DeepReadonlyArray10991<U>
  : T extends object
  ? DeepReadonlyObject10991<T>
  : T;

interface DeepReadonlyArray10991<T> extends ReadonlyArray<DeepReadonly10991<T>> {}

type DeepReadonlyObject10991<T> = {
  readonly [P in keyof T]: DeepReadonly10991<T[P]>;
};

type UnionToIntersection10991<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10991<T> = UnionToIntersection10991<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10991<T extends unknown[], V> = [...T, V];

type TuplifyUnion10991<T, L = LastOf10991<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10991<TuplifyUnion10991<Exclude<T, L>>, L>;

type DeepPartial10991<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10991<T[P]> }
  : T;

type Paths10991<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10991<K, Paths10991<T[K], Prev10991[D]>> : never }[keyof T]
  : never;

type Prev10991 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10991<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10991 {
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

type ConfigPaths10991 = Paths10991<NestedConfig10991>;

interface HeavyProps10991 {
  config: DeepPartial10991<NestedConfig10991>;
  path?: ConfigPaths10991;
}

const HeavyComponent10991 = memo(function HeavyComponent10991({ config }: HeavyProps10991) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10991) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10991 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10991: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10991.displayName = 'HeavyComponent10991';
export default HeavyComponent10991;
