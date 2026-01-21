'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7982<T> = T extends (infer U)[]
  ? DeepReadonlyArray7982<U>
  : T extends object
  ? DeepReadonlyObject7982<T>
  : T;

interface DeepReadonlyArray7982<T> extends ReadonlyArray<DeepReadonly7982<T>> {}

type DeepReadonlyObject7982<T> = {
  readonly [P in keyof T]: DeepReadonly7982<T[P]>;
};

type UnionToIntersection7982<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7982<T> = UnionToIntersection7982<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7982<T extends unknown[], V> = [...T, V];

type TuplifyUnion7982<T, L = LastOf7982<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7982<TuplifyUnion7982<Exclude<T, L>>, L>;

type DeepPartial7982<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7982<T[P]> }
  : T;

type Paths7982<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7982<K, Paths7982<T[K], Prev7982[D]>> : never }[keyof T]
  : never;

type Prev7982 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7982<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7982 {
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

type ConfigPaths7982 = Paths7982<NestedConfig7982>;

interface HeavyProps7982 {
  config: DeepPartial7982<NestedConfig7982>;
  path?: ConfigPaths7982;
}

const HeavyComponent7982 = memo(function HeavyComponent7982({ config }: HeavyProps7982) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7982) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7982 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7982: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7982.displayName = 'HeavyComponent7982';
export default HeavyComponent7982;
