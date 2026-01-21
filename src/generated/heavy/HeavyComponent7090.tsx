'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7090<T> = T extends (infer U)[]
  ? DeepReadonlyArray7090<U>
  : T extends object
  ? DeepReadonlyObject7090<T>
  : T;

interface DeepReadonlyArray7090<T> extends ReadonlyArray<DeepReadonly7090<T>> {}

type DeepReadonlyObject7090<T> = {
  readonly [P in keyof T]: DeepReadonly7090<T[P]>;
};

type UnionToIntersection7090<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7090<T> = UnionToIntersection7090<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7090<T extends unknown[], V> = [...T, V];

type TuplifyUnion7090<T, L = LastOf7090<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7090<TuplifyUnion7090<Exclude<T, L>>, L>;

type DeepPartial7090<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7090<T[P]> }
  : T;

type Paths7090<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7090<K, Paths7090<T[K], Prev7090[D]>> : never }[keyof T]
  : never;

type Prev7090 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7090<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7090 {
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

type ConfigPaths7090 = Paths7090<NestedConfig7090>;

interface HeavyProps7090 {
  config: DeepPartial7090<NestedConfig7090>;
  path?: ConfigPaths7090;
}

const HeavyComponent7090 = memo(function HeavyComponent7090({ config }: HeavyProps7090) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7090) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7090 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7090: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7090.displayName = 'HeavyComponent7090';
export default HeavyComponent7090;
