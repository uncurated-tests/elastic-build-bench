'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7887<T> = T extends (infer U)[]
  ? DeepReadonlyArray7887<U>
  : T extends object
  ? DeepReadonlyObject7887<T>
  : T;

interface DeepReadonlyArray7887<T> extends ReadonlyArray<DeepReadonly7887<T>> {}

type DeepReadonlyObject7887<T> = {
  readonly [P in keyof T]: DeepReadonly7887<T[P]>;
};

type UnionToIntersection7887<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7887<T> = UnionToIntersection7887<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7887<T extends unknown[], V> = [...T, V];

type TuplifyUnion7887<T, L = LastOf7887<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7887<TuplifyUnion7887<Exclude<T, L>>, L>;

type DeepPartial7887<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7887<T[P]> }
  : T;

type Paths7887<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7887<K, Paths7887<T[K], Prev7887[D]>> : never }[keyof T]
  : never;

type Prev7887 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7887<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7887 {
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

type ConfigPaths7887 = Paths7887<NestedConfig7887>;

interface HeavyProps7887 {
  config: DeepPartial7887<NestedConfig7887>;
  path?: ConfigPaths7887;
}

const HeavyComponent7887 = memo(function HeavyComponent7887({ config }: HeavyProps7887) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7887) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7887 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7887: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7887.displayName = 'HeavyComponent7887';
export default HeavyComponent7887;
