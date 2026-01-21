'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10950<T> = T extends (infer U)[]
  ? DeepReadonlyArray10950<U>
  : T extends object
  ? DeepReadonlyObject10950<T>
  : T;

interface DeepReadonlyArray10950<T> extends ReadonlyArray<DeepReadonly10950<T>> {}

type DeepReadonlyObject10950<T> = {
  readonly [P in keyof T]: DeepReadonly10950<T[P]>;
};

type UnionToIntersection10950<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10950<T> = UnionToIntersection10950<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10950<T extends unknown[], V> = [...T, V];

type TuplifyUnion10950<T, L = LastOf10950<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10950<TuplifyUnion10950<Exclude<T, L>>, L>;

type DeepPartial10950<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10950<T[P]> }
  : T;

type Paths10950<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10950<K, Paths10950<T[K], Prev10950[D]>> : never }[keyof T]
  : never;

type Prev10950 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10950<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10950 {
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

type ConfigPaths10950 = Paths10950<NestedConfig10950>;

interface HeavyProps10950 {
  config: DeepPartial10950<NestedConfig10950>;
  path?: ConfigPaths10950;
}

const HeavyComponent10950 = memo(function HeavyComponent10950({ config }: HeavyProps10950) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10950) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10950 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10950: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10950.displayName = 'HeavyComponent10950';
export default HeavyComponent10950;
