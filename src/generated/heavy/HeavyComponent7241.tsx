'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7241<T> = T extends (infer U)[]
  ? DeepReadonlyArray7241<U>
  : T extends object
  ? DeepReadonlyObject7241<T>
  : T;

interface DeepReadonlyArray7241<T> extends ReadonlyArray<DeepReadonly7241<T>> {}

type DeepReadonlyObject7241<T> = {
  readonly [P in keyof T]: DeepReadonly7241<T[P]>;
};

type UnionToIntersection7241<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7241<T> = UnionToIntersection7241<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7241<T extends unknown[], V> = [...T, V];

type TuplifyUnion7241<T, L = LastOf7241<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7241<TuplifyUnion7241<Exclude<T, L>>, L>;

type DeepPartial7241<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7241<T[P]> }
  : T;

type Paths7241<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7241<K, Paths7241<T[K], Prev7241[D]>> : never }[keyof T]
  : never;

type Prev7241 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7241<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7241 {
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

type ConfigPaths7241 = Paths7241<NestedConfig7241>;

interface HeavyProps7241 {
  config: DeepPartial7241<NestedConfig7241>;
  path?: ConfigPaths7241;
}

const HeavyComponent7241 = memo(function HeavyComponent7241({ config }: HeavyProps7241) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7241) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7241 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7241: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7241.displayName = 'HeavyComponent7241';
export default HeavyComponent7241;
