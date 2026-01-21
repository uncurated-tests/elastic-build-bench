'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7124<T> = T extends (infer U)[]
  ? DeepReadonlyArray7124<U>
  : T extends object
  ? DeepReadonlyObject7124<T>
  : T;

interface DeepReadonlyArray7124<T> extends ReadonlyArray<DeepReadonly7124<T>> {}

type DeepReadonlyObject7124<T> = {
  readonly [P in keyof T]: DeepReadonly7124<T[P]>;
};

type UnionToIntersection7124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7124<T> = UnionToIntersection7124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7124<T extends unknown[], V> = [...T, V];

type TuplifyUnion7124<T, L = LastOf7124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7124<TuplifyUnion7124<Exclude<T, L>>, L>;

type DeepPartial7124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7124<T[P]> }
  : T;

type Paths7124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7124<K, Paths7124<T[K], Prev7124[D]>> : never }[keyof T]
  : never;

type Prev7124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7124 {
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

type ConfigPaths7124 = Paths7124<NestedConfig7124>;

interface HeavyProps7124 {
  config: DeepPartial7124<NestedConfig7124>;
  path?: ConfigPaths7124;
}

const HeavyComponent7124 = memo(function HeavyComponent7124({ config }: HeavyProps7124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7124.displayName = 'HeavyComponent7124';
export default HeavyComponent7124;
