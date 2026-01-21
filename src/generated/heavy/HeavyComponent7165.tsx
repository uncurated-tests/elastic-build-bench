'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7165<T> = T extends (infer U)[]
  ? DeepReadonlyArray7165<U>
  : T extends object
  ? DeepReadonlyObject7165<T>
  : T;

interface DeepReadonlyArray7165<T> extends ReadonlyArray<DeepReadonly7165<T>> {}

type DeepReadonlyObject7165<T> = {
  readonly [P in keyof T]: DeepReadonly7165<T[P]>;
};

type UnionToIntersection7165<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7165<T> = UnionToIntersection7165<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7165<T extends unknown[], V> = [...T, V];

type TuplifyUnion7165<T, L = LastOf7165<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7165<TuplifyUnion7165<Exclude<T, L>>, L>;

type DeepPartial7165<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7165<T[P]> }
  : T;

type Paths7165<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7165<K, Paths7165<T[K], Prev7165[D]>> : never }[keyof T]
  : never;

type Prev7165 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7165<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7165 {
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

type ConfigPaths7165 = Paths7165<NestedConfig7165>;

interface HeavyProps7165 {
  config: DeepPartial7165<NestedConfig7165>;
  path?: ConfigPaths7165;
}

const HeavyComponent7165 = memo(function HeavyComponent7165({ config }: HeavyProps7165) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7165) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7165 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7165: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7165.displayName = 'HeavyComponent7165';
export default HeavyComponent7165;
