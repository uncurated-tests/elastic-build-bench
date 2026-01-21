'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2026<T> = T extends (infer U)[]
  ? DeepReadonlyArray2026<U>
  : T extends object
  ? DeepReadonlyObject2026<T>
  : T;

interface DeepReadonlyArray2026<T> extends ReadonlyArray<DeepReadonly2026<T>> {}

type DeepReadonlyObject2026<T> = {
  readonly [P in keyof T]: DeepReadonly2026<T[P]>;
};

type UnionToIntersection2026<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2026<T> = UnionToIntersection2026<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2026<T extends unknown[], V> = [...T, V];

type TuplifyUnion2026<T, L = LastOf2026<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2026<TuplifyUnion2026<Exclude<T, L>>, L>;

type DeepPartial2026<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2026<T[P]> }
  : T;

type Paths2026<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2026<K, Paths2026<T[K], Prev2026[D]>> : never }[keyof T]
  : never;

type Prev2026 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2026<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2026 {
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

type ConfigPaths2026 = Paths2026<NestedConfig2026>;

interface HeavyProps2026 {
  config: DeepPartial2026<NestedConfig2026>;
  path?: ConfigPaths2026;
}

const HeavyComponent2026 = memo(function HeavyComponent2026({ config }: HeavyProps2026) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2026) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2026 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2026: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2026.displayName = 'HeavyComponent2026';
export default HeavyComponent2026;
