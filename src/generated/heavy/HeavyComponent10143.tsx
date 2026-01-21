'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10143<T> = T extends (infer U)[]
  ? DeepReadonlyArray10143<U>
  : T extends object
  ? DeepReadonlyObject10143<T>
  : T;

interface DeepReadonlyArray10143<T> extends ReadonlyArray<DeepReadonly10143<T>> {}

type DeepReadonlyObject10143<T> = {
  readonly [P in keyof T]: DeepReadonly10143<T[P]>;
};

type UnionToIntersection10143<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10143<T> = UnionToIntersection10143<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10143<T extends unknown[], V> = [...T, V];

type TuplifyUnion10143<T, L = LastOf10143<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10143<TuplifyUnion10143<Exclude<T, L>>, L>;

type DeepPartial10143<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10143<T[P]> }
  : T;

type Paths10143<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10143<K, Paths10143<T[K], Prev10143[D]>> : never }[keyof T]
  : never;

type Prev10143 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10143<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10143 {
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

type ConfigPaths10143 = Paths10143<NestedConfig10143>;

interface HeavyProps10143 {
  config: DeepPartial10143<NestedConfig10143>;
  path?: ConfigPaths10143;
}

const HeavyComponent10143 = memo(function HeavyComponent10143({ config }: HeavyProps10143) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10143) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10143 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10143: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10143.displayName = 'HeavyComponent10143';
export default HeavyComponent10143;
