'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10266<T> = T extends (infer U)[]
  ? DeepReadonlyArray10266<U>
  : T extends object
  ? DeepReadonlyObject10266<T>
  : T;

interface DeepReadonlyArray10266<T> extends ReadonlyArray<DeepReadonly10266<T>> {}

type DeepReadonlyObject10266<T> = {
  readonly [P in keyof T]: DeepReadonly10266<T[P]>;
};

type UnionToIntersection10266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10266<T> = UnionToIntersection10266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10266<T extends unknown[], V> = [...T, V];

type TuplifyUnion10266<T, L = LastOf10266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10266<TuplifyUnion10266<Exclude<T, L>>, L>;

type DeepPartial10266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10266<T[P]> }
  : T;

type Paths10266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10266<K, Paths10266<T[K], Prev10266[D]>> : never }[keyof T]
  : never;

type Prev10266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10266 {
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

type ConfigPaths10266 = Paths10266<NestedConfig10266>;

interface HeavyProps10266 {
  config: DeepPartial10266<NestedConfig10266>;
  path?: ConfigPaths10266;
}

const HeavyComponent10266 = memo(function HeavyComponent10266({ config }: HeavyProps10266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10266.displayName = 'HeavyComponent10266';
export default HeavyComponent10266;
