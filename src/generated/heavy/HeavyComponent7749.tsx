'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7749<T> = T extends (infer U)[]
  ? DeepReadonlyArray7749<U>
  : T extends object
  ? DeepReadonlyObject7749<T>
  : T;

interface DeepReadonlyArray7749<T> extends ReadonlyArray<DeepReadonly7749<T>> {}

type DeepReadonlyObject7749<T> = {
  readonly [P in keyof T]: DeepReadonly7749<T[P]>;
};

type UnionToIntersection7749<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7749<T> = UnionToIntersection7749<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7749<T extends unknown[], V> = [...T, V];

type TuplifyUnion7749<T, L = LastOf7749<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7749<TuplifyUnion7749<Exclude<T, L>>, L>;

type DeepPartial7749<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7749<T[P]> }
  : T;

type Paths7749<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7749<K, Paths7749<T[K], Prev7749[D]>> : never }[keyof T]
  : never;

type Prev7749 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7749<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7749 {
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

type ConfigPaths7749 = Paths7749<NestedConfig7749>;

interface HeavyProps7749 {
  config: DeepPartial7749<NestedConfig7749>;
  path?: ConfigPaths7749;
}

const HeavyComponent7749 = memo(function HeavyComponent7749({ config }: HeavyProps7749) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7749) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7749 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7749: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7749.displayName = 'HeavyComponent7749';
export default HeavyComponent7749;
