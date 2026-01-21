'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10368<T> = T extends (infer U)[]
  ? DeepReadonlyArray10368<U>
  : T extends object
  ? DeepReadonlyObject10368<T>
  : T;

interface DeepReadonlyArray10368<T> extends ReadonlyArray<DeepReadonly10368<T>> {}

type DeepReadonlyObject10368<T> = {
  readonly [P in keyof T]: DeepReadonly10368<T[P]>;
};

type UnionToIntersection10368<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10368<T> = UnionToIntersection10368<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10368<T extends unknown[], V> = [...T, V];

type TuplifyUnion10368<T, L = LastOf10368<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10368<TuplifyUnion10368<Exclude<T, L>>, L>;

type DeepPartial10368<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10368<T[P]> }
  : T;

type Paths10368<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10368<K, Paths10368<T[K], Prev10368[D]>> : never }[keyof T]
  : never;

type Prev10368 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10368<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10368 {
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

type ConfigPaths10368 = Paths10368<NestedConfig10368>;

interface HeavyProps10368 {
  config: DeepPartial10368<NestedConfig10368>;
  path?: ConfigPaths10368;
}

const HeavyComponent10368 = memo(function HeavyComponent10368({ config }: HeavyProps10368) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10368) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10368 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10368: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10368.displayName = 'HeavyComponent10368';
export default HeavyComponent10368;
