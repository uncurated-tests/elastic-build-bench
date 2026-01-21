'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10738<T> = T extends (infer U)[]
  ? DeepReadonlyArray10738<U>
  : T extends object
  ? DeepReadonlyObject10738<T>
  : T;

interface DeepReadonlyArray10738<T> extends ReadonlyArray<DeepReadonly10738<T>> {}

type DeepReadonlyObject10738<T> = {
  readonly [P in keyof T]: DeepReadonly10738<T[P]>;
};

type UnionToIntersection10738<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10738<T> = UnionToIntersection10738<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10738<T extends unknown[], V> = [...T, V];

type TuplifyUnion10738<T, L = LastOf10738<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10738<TuplifyUnion10738<Exclude<T, L>>, L>;

type DeepPartial10738<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10738<T[P]> }
  : T;

type Paths10738<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10738<K, Paths10738<T[K], Prev10738[D]>> : never }[keyof T]
  : never;

type Prev10738 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10738<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10738 {
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

type ConfigPaths10738 = Paths10738<NestedConfig10738>;

interface HeavyProps10738 {
  config: DeepPartial10738<NestedConfig10738>;
  path?: ConfigPaths10738;
}

const HeavyComponent10738 = memo(function HeavyComponent10738({ config }: HeavyProps10738) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10738) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10738 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10738: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10738.displayName = 'HeavyComponent10738';
export default HeavyComponent10738;
