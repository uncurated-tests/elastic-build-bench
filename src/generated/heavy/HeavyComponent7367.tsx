'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7367<T> = T extends (infer U)[]
  ? DeepReadonlyArray7367<U>
  : T extends object
  ? DeepReadonlyObject7367<T>
  : T;

interface DeepReadonlyArray7367<T> extends ReadonlyArray<DeepReadonly7367<T>> {}

type DeepReadonlyObject7367<T> = {
  readonly [P in keyof T]: DeepReadonly7367<T[P]>;
};

type UnionToIntersection7367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7367<T> = UnionToIntersection7367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7367<T extends unknown[], V> = [...T, V];

type TuplifyUnion7367<T, L = LastOf7367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7367<TuplifyUnion7367<Exclude<T, L>>, L>;

type DeepPartial7367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7367<T[P]> }
  : T;

type Paths7367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7367<K, Paths7367<T[K], Prev7367[D]>> : never }[keyof T]
  : never;

type Prev7367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7367 {
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

type ConfigPaths7367 = Paths7367<NestedConfig7367>;

interface HeavyProps7367 {
  config: DeepPartial7367<NestedConfig7367>;
  path?: ConfigPaths7367;
}

const HeavyComponent7367 = memo(function HeavyComponent7367({ config }: HeavyProps7367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7367.displayName = 'HeavyComponent7367';
export default HeavyComponent7367;
