'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7588<T> = T extends (infer U)[]
  ? DeepReadonlyArray7588<U>
  : T extends object
  ? DeepReadonlyObject7588<T>
  : T;

interface DeepReadonlyArray7588<T> extends ReadonlyArray<DeepReadonly7588<T>> {}

type DeepReadonlyObject7588<T> = {
  readonly [P in keyof T]: DeepReadonly7588<T[P]>;
};

type UnionToIntersection7588<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7588<T> = UnionToIntersection7588<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7588<T extends unknown[], V> = [...T, V];

type TuplifyUnion7588<T, L = LastOf7588<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7588<TuplifyUnion7588<Exclude<T, L>>, L>;

type DeepPartial7588<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7588<T[P]> }
  : T;

type Paths7588<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7588<K, Paths7588<T[K], Prev7588[D]>> : never }[keyof T]
  : never;

type Prev7588 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7588<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7588 {
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

type ConfigPaths7588 = Paths7588<NestedConfig7588>;

interface HeavyProps7588 {
  config: DeepPartial7588<NestedConfig7588>;
  path?: ConfigPaths7588;
}

const HeavyComponent7588 = memo(function HeavyComponent7588({ config }: HeavyProps7588) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7588) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7588 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7588: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7588.displayName = 'HeavyComponent7588';
export default HeavyComponent7588;
