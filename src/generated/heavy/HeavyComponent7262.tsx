'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7262<T> = T extends (infer U)[]
  ? DeepReadonlyArray7262<U>
  : T extends object
  ? DeepReadonlyObject7262<T>
  : T;

interface DeepReadonlyArray7262<T> extends ReadonlyArray<DeepReadonly7262<T>> {}

type DeepReadonlyObject7262<T> = {
  readonly [P in keyof T]: DeepReadonly7262<T[P]>;
};

type UnionToIntersection7262<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7262<T> = UnionToIntersection7262<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7262<T extends unknown[], V> = [...T, V];

type TuplifyUnion7262<T, L = LastOf7262<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7262<TuplifyUnion7262<Exclude<T, L>>, L>;

type DeepPartial7262<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7262<T[P]> }
  : T;

type Paths7262<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7262<K, Paths7262<T[K], Prev7262[D]>> : never }[keyof T]
  : never;

type Prev7262 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7262<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7262 {
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

type ConfigPaths7262 = Paths7262<NestedConfig7262>;

interface HeavyProps7262 {
  config: DeepPartial7262<NestedConfig7262>;
  path?: ConfigPaths7262;
}

const HeavyComponent7262 = memo(function HeavyComponent7262({ config }: HeavyProps7262) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7262) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7262 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7262: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7262.displayName = 'HeavyComponent7262';
export default HeavyComponent7262;
