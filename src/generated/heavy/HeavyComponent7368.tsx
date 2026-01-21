'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7368<T> = T extends (infer U)[]
  ? DeepReadonlyArray7368<U>
  : T extends object
  ? DeepReadonlyObject7368<T>
  : T;

interface DeepReadonlyArray7368<T> extends ReadonlyArray<DeepReadonly7368<T>> {}

type DeepReadonlyObject7368<T> = {
  readonly [P in keyof T]: DeepReadonly7368<T[P]>;
};

type UnionToIntersection7368<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7368<T> = UnionToIntersection7368<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7368<T extends unknown[], V> = [...T, V];

type TuplifyUnion7368<T, L = LastOf7368<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7368<TuplifyUnion7368<Exclude<T, L>>, L>;

type DeepPartial7368<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7368<T[P]> }
  : T;

type Paths7368<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7368<K, Paths7368<T[K], Prev7368[D]>> : never }[keyof T]
  : never;

type Prev7368 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7368<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7368 {
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

type ConfigPaths7368 = Paths7368<NestedConfig7368>;

interface HeavyProps7368 {
  config: DeepPartial7368<NestedConfig7368>;
  path?: ConfigPaths7368;
}

const HeavyComponent7368 = memo(function HeavyComponent7368({ config }: HeavyProps7368) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7368) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7368 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7368: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7368.displayName = 'HeavyComponent7368';
export default HeavyComponent7368;
