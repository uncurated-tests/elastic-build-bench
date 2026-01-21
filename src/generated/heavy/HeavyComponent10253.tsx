'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10253<T> = T extends (infer U)[]
  ? DeepReadonlyArray10253<U>
  : T extends object
  ? DeepReadonlyObject10253<T>
  : T;

interface DeepReadonlyArray10253<T> extends ReadonlyArray<DeepReadonly10253<T>> {}

type DeepReadonlyObject10253<T> = {
  readonly [P in keyof T]: DeepReadonly10253<T[P]>;
};

type UnionToIntersection10253<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10253<T> = UnionToIntersection10253<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10253<T extends unknown[], V> = [...T, V];

type TuplifyUnion10253<T, L = LastOf10253<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10253<TuplifyUnion10253<Exclude<T, L>>, L>;

type DeepPartial10253<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10253<T[P]> }
  : T;

type Paths10253<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10253<K, Paths10253<T[K], Prev10253[D]>> : never }[keyof T]
  : never;

type Prev10253 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10253<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10253 {
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

type ConfigPaths10253 = Paths10253<NestedConfig10253>;

interface HeavyProps10253 {
  config: DeepPartial10253<NestedConfig10253>;
  path?: ConfigPaths10253;
}

const HeavyComponent10253 = memo(function HeavyComponent10253({ config }: HeavyProps10253) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10253) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10253 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10253: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10253.displayName = 'HeavyComponent10253';
export default HeavyComponent10253;
