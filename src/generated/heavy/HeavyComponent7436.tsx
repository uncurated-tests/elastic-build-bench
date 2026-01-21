'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7436<T> = T extends (infer U)[]
  ? DeepReadonlyArray7436<U>
  : T extends object
  ? DeepReadonlyObject7436<T>
  : T;

interface DeepReadonlyArray7436<T> extends ReadonlyArray<DeepReadonly7436<T>> {}

type DeepReadonlyObject7436<T> = {
  readonly [P in keyof T]: DeepReadonly7436<T[P]>;
};

type UnionToIntersection7436<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7436<T> = UnionToIntersection7436<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7436<T extends unknown[], V> = [...T, V];

type TuplifyUnion7436<T, L = LastOf7436<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7436<TuplifyUnion7436<Exclude<T, L>>, L>;

type DeepPartial7436<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7436<T[P]> }
  : T;

type Paths7436<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7436<K, Paths7436<T[K], Prev7436[D]>> : never }[keyof T]
  : never;

type Prev7436 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7436<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7436 {
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

type ConfigPaths7436 = Paths7436<NestedConfig7436>;

interface HeavyProps7436 {
  config: DeepPartial7436<NestedConfig7436>;
  path?: ConfigPaths7436;
}

const HeavyComponent7436 = memo(function HeavyComponent7436({ config }: HeavyProps7436) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7436) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7436 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7436: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7436.displayName = 'HeavyComponent7436';
export default HeavyComponent7436;
