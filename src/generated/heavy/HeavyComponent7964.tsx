'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7964<T> = T extends (infer U)[]
  ? DeepReadonlyArray7964<U>
  : T extends object
  ? DeepReadonlyObject7964<T>
  : T;

interface DeepReadonlyArray7964<T> extends ReadonlyArray<DeepReadonly7964<T>> {}

type DeepReadonlyObject7964<T> = {
  readonly [P in keyof T]: DeepReadonly7964<T[P]>;
};

type UnionToIntersection7964<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7964<T> = UnionToIntersection7964<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7964<T extends unknown[], V> = [...T, V];

type TuplifyUnion7964<T, L = LastOf7964<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7964<TuplifyUnion7964<Exclude<T, L>>, L>;

type DeepPartial7964<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7964<T[P]> }
  : T;

type Paths7964<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7964<K, Paths7964<T[K], Prev7964[D]>> : never }[keyof T]
  : never;

type Prev7964 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7964<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7964 {
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

type ConfigPaths7964 = Paths7964<NestedConfig7964>;

interface HeavyProps7964 {
  config: DeepPartial7964<NestedConfig7964>;
  path?: ConfigPaths7964;
}

const HeavyComponent7964 = memo(function HeavyComponent7964({ config }: HeavyProps7964) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7964) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7964 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7964: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7964.displayName = 'HeavyComponent7964';
export default HeavyComponent7964;
