'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2730<T> = T extends (infer U)[]
  ? DeepReadonlyArray2730<U>
  : T extends object
  ? DeepReadonlyObject2730<T>
  : T;

interface DeepReadonlyArray2730<T> extends ReadonlyArray<DeepReadonly2730<T>> {}

type DeepReadonlyObject2730<T> = {
  readonly [P in keyof T]: DeepReadonly2730<T[P]>;
};

type UnionToIntersection2730<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2730<T> = UnionToIntersection2730<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2730<T extends unknown[], V> = [...T, V];

type TuplifyUnion2730<T, L = LastOf2730<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2730<TuplifyUnion2730<Exclude<T, L>>, L>;

type DeepPartial2730<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2730<T[P]> }
  : T;

type Paths2730<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2730<K, Paths2730<T[K], Prev2730[D]>> : never }[keyof T]
  : never;

type Prev2730 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2730<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2730 {
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

type ConfigPaths2730 = Paths2730<NestedConfig2730>;

interface HeavyProps2730 {
  config: DeepPartial2730<NestedConfig2730>;
  path?: ConfigPaths2730;
}

const HeavyComponent2730 = memo(function HeavyComponent2730({ config }: HeavyProps2730) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2730) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2730 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2730: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2730.displayName = 'HeavyComponent2730';
export default HeavyComponent2730;
