'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7374<T> = T extends (infer U)[]
  ? DeepReadonlyArray7374<U>
  : T extends object
  ? DeepReadonlyObject7374<T>
  : T;

interface DeepReadonlyArray7374<T> extends ReadonlyArray<DeepReadonly7374<T>> {}

type DeepReadonlyObject7374<T> = {
  readonly [P in keyof T]: DeepReadonly7374<T[P]>;
};

type UnionToIntersection7374<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7374<T> = UnionToIntersection7374<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7374<T extends unknown[], V> = [...T, V];

type TuplifyUnion7374<T, L = LastOf7374<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7374<TuplifyUnion7374<Exclude<T, L>>, L>;

type DeepPartial7374<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7374<T[P]> }
  : T;

type Paths7374<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7374<K, Paths7374<T[K], Prev7374[D]>> : never }[keyof T]
  : never;

type Prev7374 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7374<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7374 {
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

type ConfigPaths7374 = Paths7374<NestedConfig7374>;

interface HeavyProps7374 {
  config: DeepPartial7374<NestedConfig7374>;
  path?: ConfigPaths7374;
}

const HeavyComponent7374 = memo(function HeavyComponent7374({ config }: HeavyProps7374) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7374) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7374 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7374: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7374.displayName = 'HeavyComponent7374';
export default HeavyComponent7374;
