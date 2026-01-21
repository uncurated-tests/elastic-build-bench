'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2040<T> = T extends (infer U)[]
  ? DeepReadonlyArray2040<U>
  : T extends object
  ? DeepReadonlyObject2040<T>
  : T;

interface DeepReadonlyArray2040<T> extends ReadonlyArray<DeepReadonly2040<T>> {}

type DeepReadonlyObject2040<T> = {
  readonly [P in keyof T]: DeepReadonly2040<T[P]>;
};

type UnionToIntersection2040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2040<T> = UnionToIntersection2040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2040<T extends unknown[], V> = [...T, V];

type TuplifyUnion2040<T, L = LastOf2040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2040<TuplifyUnion2040<Exclude<T, L>>, L>;

type DeepPartial2040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2040<T[P]> }
  : T;

type Paths2040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2040<K, Paths2040<T[K], Prev2040[D]>> : never }[keyof T]
  : never;

type Prev2040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2040 {
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

type ConfigPaths2040 = Paths2040<NestedConfig2040>;

interface HeavyProps2040 {
  config: DeepPartial2040<NestedConfig2040>;
  path?: ConfigPaths2040;
}

const HeavyComponent2040 = memo(function HeavyComponent2040({ config }: HeavyProps2040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2040.displayName = 'HeavyComponent2040';
export default HeavyComponent2040;
