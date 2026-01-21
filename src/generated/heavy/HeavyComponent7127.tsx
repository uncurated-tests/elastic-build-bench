'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7127<T> = T extends (infer U)[]
  ? DeepReadonlyArray7127<U>
  : T extends object
  ? DeepReadonlyObject7127<T>
  : T;

interface DeepReadonlyArray7127<T> extends ReadonlyArray<DeepReadonly7127<T>> {}

type DeepReadonlyObject7127<T> = {
  readonly [P in keyof T]: DeepReadonly7127<T[P]>;
};

type UnionToIntersection7127<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7127<T> = UnionToIntersection7127<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7127<T extends unknown[], V> = [...T, V];

type TuplifyUnion7127<T, L = LastOf7127<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7127<TuplifyUnion7127<Exclude<T, L>>, L>;

type DeepPartial7127<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7127<T[P]> }
  : T;

type Paths7127<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7127<K, Paths7127<T[K], Prev7127[D]>> : never }[keyof T]
  : never;

type Prev7127 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7127<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7127 {
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

type ConfigPaths7127 = Paths7127<NestedConfig7127>;

interface HeavyProps7127 {
  config: DeepPartial7127<NestedConfig7127>;
  path?: ConfigPaths7127;
}

const HeavyComponent7127 = memo(function HeavyComponent7127({ config }: HeavyProps7127) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7127) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7127 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7127: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7127.displayName = 'HeavyComponent7127';
export default HeavyComponent7127;
