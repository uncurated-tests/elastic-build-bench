'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7771<T> = T extends (infer U)[]
  ? DeepReadonlyArray7771<U>
  : T extends object
  ? DeepReadonlyObject7771<T>
  : T;

interface DeepReadonlyArray7771<T> extends ReadonlyArray<DeepReadonly7771<T>> {}

type DeepReadonlyObject7771<T> = {
  readonly [P in keyof T]: DeepReadonly7771<T[P]>;
};

type UnionToIntersection7771<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7771<T> = UnionToIntersection7771<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7771<T extends unknown[], V> = [...T, V];

type TuplifyUnion7771<T, L = LastOf7771<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7771<TuplifyUnion7771<Exclude<T, L>>, L>;

type DeepPartial7771<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7771<T[P]> }
  : T;

type Paths7771<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7771<K, Paths7771<T[K], Prev7771[D]>> : never }[keyof T]
  : never;

type Prev7771 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7771<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7771 {
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

type ConfigPaths7771 = Paths7771<NestedConfig7771>;

interface HeavyProps7771 {
  config: DeepPartial7771<NestedConfig7771>;
  path?: ConfigPaths7771;
}

const HeavyComponent7771 = memo(function HeavyComponent7771({ config }: HeavyProps7771) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7771) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7771 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7771: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7771.displayName = 'HeavyComponent7771';
export default HeavyComponent7771;
