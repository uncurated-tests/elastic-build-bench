'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10705<T> = T extends (infer U)[]
  ? DeepReadonlyArray10705<U>
  : T extends object
  ? DeepReadonlyObject10705<T>
  : T;

interface DeepReadonlyArray10705<T> extends ReadonlyArray<DeepReadonly10705<T>> {}

type DeepReadonlyObject10705<T> = {
  readonly [P in keyof T]: DeepReadonly10705<T[P]>;
};

type UnionToIntersection10705<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10705<T> = UnionToIntersection10705<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10705<T extends unknown[], V> = [...T, V];

type TuplifyUnion10705<T, L = LastOf10705<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10705<TuplifyUnion10705<Exclude<T, L>>, L>;

type DeepPartial10705<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10705<T[P]> }
  : T;

type Paths10705<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10705<K, Paths10705<T[K], Prev10705[D]>> : never }[keyof T]
  : never;

type Prev10705 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10705<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10705 {
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

type ConfigPaths10705 = Paths10705<NestedConfig10705>;

interface HeavyProps10705 {
  config: DeepPartial10705<NestedConfig10705>;
  path?: ConfigPaths10705;
}

const HeavyComponent10705 = memo(function HeavyComponent10705({ config }: HeavyProps10705) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10705) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10705 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10705: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10705.displayName = 'HeavyComponent10705';
export default HeavyComponent10705;
