'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10340<T> = T extends (infer U)[]
  ? DeepReadonlyArray10340<U>
  : T extends object
  ? DeepReadonlyObject10340<T>
  : T;

interface DeepReadonlyArray10340<T> extends ReadonlyArray<DeepReadonly10340<T>> {}

type DeepReadonlyObject10340<T> = {
  readonly [P in keyof T]: DeepReadonly10340<T[P]>;
};

type UnionToIntersection10340<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10340<T> = UnionToIntersection10340<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10340<T extends unknown[], V> = [...T, V];

type TuplifyUnion10340<T, L = LastOf10340<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10340<TuplifyUnion10340<Exclude<T, L>>, L>;

type DeepPartial10340<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10340<T[P]> }
  : T;

type Paths10340<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10340<K, Paths10340<T[K], Prev10340[D]>> : never }[keyof T]
  : never;

type Prev10340 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10340<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10340 {
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

type ConfigPaths10340 = Paths10340<NestedConfig10340>;

interface HeavyProps10340 {
  config: DeepPartial10340<NestedConfig10340>;
  path?: ConfigPaths10340;
}

const HeavyComponent10340 = memo(function HeavyComponent10340({ config }: HeavyProps10340) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10340) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10340 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10340: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10340.displayName = 'HeavyComponent10340';
export default HeavyComponent10340;
