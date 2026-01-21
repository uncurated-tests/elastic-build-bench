'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7646<T> = T extends (infer U)[]
  ? DeepReadonlyArray7646<U>
  : T extends object
  ? DeepReadonlyObject7646<T>
  : T;

interface DeepReadonlyArray7646<T> extends ReadonlyArray<DeepReadonly7646<T>> {}

type DeepReadonlyObject7646<T> = {
  readonly [P in keyof T]: DeepReadonly7646<T[P]>;
};

type UnionToIntersection7646<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7646<T> = UnionToIntersection7646<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7646<T extends unknown[], V> = [...T, V];

type TuplifyUnion7646<T, L = LastOf7646<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7646<TuplifyUnion7646<Exclude<T, L>>, L>;

type DeepPartial7646<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7646<T[P]> }
  : T;

type Paths7646<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7646<K, Paths7646<T[K], Prev7646[D]>> : never }[keyof T]
  : never;

type Prev7646 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7646<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7646 {
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

type ConfigPaths7646 = Paths7646<NestedConfig7646>;

interface HeavyProps7646 {
  config: DeepPartial7646<NestedConfig7646>;
  path?: ConfigPaths7646;
}

const HeavyComponent7646 = memo(function HeavyComponent7646({ config }: HeavyProps7646) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7646) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7646 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7646: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7646.displayName = 'HeavyComponent7646';
export default HeavyComponent7646;
