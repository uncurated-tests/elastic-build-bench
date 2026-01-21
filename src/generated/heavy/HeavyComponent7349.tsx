'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7349<T> = T extends (infer U)[]
  ? DeepReadonlyArray7349<U>
  : T extends object
  ? DeepReadonlyObject7349<T>
  : T;

interface DeepReadonlyArray7349<T> extends ReadonlyArray<DeepReadonly7349<T>> {}

type DeepReadonlyObject7349<T> = {
  readonly [P in keyof T]: DeepReadonly7349<T[P]>;
};

type UnionToIntersection7349<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7349<T> = UnionToIntersection7349<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7349<T extends unknown[], V> = [...T, V];

type TuplifyUnion7349<T, L = LastOf7349<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7349<TuplifyUnion7349<Exclude<T, L>>, L>;

type DeepPartial7349<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7349<T[P]> }
  : T;

type Paths7349<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7349<K, Paths7349<T[K], Prev7349[D]>> : never }[keyof T]
  : never;

type Prev7349 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7349<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7349 {
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

type ConfigPaths7349 = Paths7349<NestedConfig7349>;

interface HeavyProps7349 {
  config: DeepPartial7349<NestedConfig7349>;
  path?: ConfigPaths7349;
}

const HeavyComponent7349 = memo(function HeavyComponent7349({ config }: HeavyProps7349) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7349) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7349 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7349: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7349.displayName = 'HeavyComponent7349';
export default HeavyComponent7349;
