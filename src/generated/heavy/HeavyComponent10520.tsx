'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10520<T> = T extends (infer U)[]
  ? DeepReadonlyArray10520<U>
  : T extends object
  ? DeepReadonlyObject10520<T>
  : T;

interface DeepReadonlyArray10520<T> extends ReadonlyArray<DeepReadonly10520<T>> {}

type DeepReadonlyObject10520<T> = {
  readonly [P in keyof T]: DeepReadonly10520<T[P]>;
};

type UnionToIntersection10520<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10520<T> = UnionToIntersection10520<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10520<T extends unknown[], V> = [...T, V];

type TuplifyUnion10520<T, L = LastOf10520<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10520<TuplifyUnion10520<Exclude<T, L>>, L>;

type DeepPartial10520<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10520<T[P]> }
  : T;

type Paths10520<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10520<K, Paths10520<T[K], Prev10520[D]>> : never }[keyof T]
  : never;

type Prev10520 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10520<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10520 {
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

type ConfigPaths10520 = Paths10520<NestedConfig10520>;

interface HeavyProps10520 {
  config: DeepPartial10520<NestedConfig10520>;
  path?: ConfigPaths10520;
}

const HeavyComponent10520 = memo(function HeavyComponent10520({ config }: HeavyProps10520) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10520) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10520 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10520: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10520.displayName = 'HeavyComponent10520';
export default HeavyComponent10520;
