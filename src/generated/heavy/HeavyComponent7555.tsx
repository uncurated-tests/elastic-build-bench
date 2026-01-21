'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7555<T> = T extends (infer U)[]
  ? DeepReadonlyArray7555<U>
  : T extends object
  ? DeepReadonlyObject7555<T>
  : T;

interface DeepReadonlyArray7555<T> extends ReadonlyArray<DeepReadonly7555<T>> {}

type DeepReadonlyObject7555<T> = {
  readonly [P in keyof T]: DeepReadonly7555<T[P]>;
};

type UnionToIntersection7555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7555<T> = UnionToIntersection7555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7555<T extends unknown[], V> = [...T, V];

type TuplifyUnion7555<T, L = LastOf7555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7555<TuplifyUnion7555<Exclude<T, L>>, L>;

type DeepPartial7555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7555<T[P]> }
  : T;

type Paths7555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7555<K, Paths7555<T[K], Prev7555[D]>> : never }[keyof T]
  : never;

type Prev7555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7555 {
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

type ConfigPaths7555 = Paths7555<NestedConfig7555>;

interface HeavyProps7555 {
  config: DeepPartial7555<NestedConfig7555>;
  path?: ConfigPaths7555;
}

const HeavyComponent7555 = memo(function HeavyComponent7555({ config }: HeavyProps7555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7555.displayName = 'HeavyComponent7555';
export default HeavyComponent7555;
