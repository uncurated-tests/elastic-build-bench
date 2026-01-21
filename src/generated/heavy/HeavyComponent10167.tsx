'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10167<T> = T extends (infer U)[]
  ? DeepReadonlyArray10167<U>
  : T extends object
  ? DeepReadonlyObject10167<T>
  : T;

interface DeepReadonlyArray10167<T> extends ReadonlyArray<DeepReadonly10167<T>> {}

type DeepReadonlyObject10167<T> = {
  readonly [P in keyof T]: DeepReadonly10167<T[P]>;
};

type UnionToIntersection10167<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10167<T> = UnionToIntersection10167<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10167<T extends unknown[], V> = [...T, V];

type TuplifyUnion10167<T, L = LastOf10167<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10167<TuplifyUnion10167<Exclude<T, L>>, L>;

type DeepPartial10167<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10167<T[P]> }
  : T;

type Paths10167<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10167<K, Paths10167<T[K], Prev10167[D]>> : never }[keyof T]
  : never;

type Prev10167 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10167<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10167 {
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

type ConfigPaths10167 = Paths10167<NestedConfig10167>;

interface HeavyProps10167 {
  config: DeepPartial10167<NestedConfig10167>;
  path?: ConfigPaths10167;
}

const HeavyComponent10167 = memo(function HeavyComponent10167({ config }: HeavyProps10167) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10167) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10167 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10167: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10167.displayName = 'HeavyComponent10167';
export default HeavyComponent10167;
