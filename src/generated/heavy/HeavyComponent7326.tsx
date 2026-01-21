'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7326<T> = T extends (infer U)[]
  ? DeepReadonlyArray7326<U>
  : T extends object
  ? DeepReadonlyObject7326<T>
  : T;

interface DeepReadonlyArray7326<T> extends ReadonlyArray<DeepReadonly7326<T>> {}

type DeepReadonlyObject7326<T> = {
  readonly [P in keyof T]: DeepReadonly7326<T[P]>;
};

type UnionToIntersection7326<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7326<T> = UnionToIntersection7326<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7326<T extends unknown[], V> = [...T, V];

type TuplifyUnion7326<T, L = LastOf7326<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7326<TuplifyUnion7326<Exclude<T, L>>, L>;

type DeepPartial7326<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7326<T[P]> }
  : T;

type Paths7326<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7326<K, Paths7326<T[K], Prev7326[D]>> : never }[keyof T]
  : never;

type Prev7326 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7326<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7326 {
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

type ConfigPaths7326 = Paths7326<NestedConfig7326>;

interface HeavyProps7326 {
  config: DeepPartial7326<NestedConfig7326>;
  path?: ConfigPaths7326;
}

const HeavyComponent7326 = memo(function HeavyComponent7326({ config }: HeavyProps7326) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7326) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7326 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7326: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7326.displayName = 'HeavyComponent7326';
export default HeavyComponent7326;
