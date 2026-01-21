'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly10821<T> = T extends (infer U)[]
  ? DeepReadonlyArray10821<U>
  : T extends object
  ? DeepReadonlyObject10821<T>
  : T;

interface DeepReadonlyArray10821<T> extends ReadonlyArray<DeepReadonly10821<T>> {}

type DeepReadonlyObject10821<T> = {
  readonly [P in keyof T]: DeepReadonly10821<T[P]>;
};

type UnionToIntersection10821<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf10821<T> = UnionToIntersection10821<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push10821<T extends unknown[], V> = [...T, V];

type TuplifyUnion10821<T, L = LastOf10821<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push10821<TuplifyUnion10821<Exclude<T, L>>, L>;

type DeepPartial10821<T> = T extends object
  ? { [P in keyof T]?: DeepPartial10821<T[P]> }
  : T;

type Paths10821<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join10821<K, Paths10821<T[K], Prev10821[D]>> : never }[keyof T]
  : never;

type Prev10821 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join10821<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig10821 {
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

type ConfigPaths10821 = Paths10821<NestedConfig10821>;

interface HeavyProps10821 {
  config: DeepPartial10821<NestedConfig10821>;
  path?: ConfigPaths10821;
}

const HeavyComponent10821 = memo(function HeavyComponent10821({ config }: HeavyProps10821) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 10821) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-10821 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H10821: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent10821.displayName = 'HeavyComponent10821';
export default HeavyComponent10821;
