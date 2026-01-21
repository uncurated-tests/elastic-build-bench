'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7773<T> = T extends (infer U)[]
  ? DeepReadonlyArray7773<U>
  : T extends object
  ? DeepReadonlyObject7773<T>
  : T;

interface DeepReadonlyArray7773<T> extends ReadonlyArray<DeepReadonly7773<T>> {}

type DeepReadonlyObject7773<T> = {
  readonly [P in keyof T]: DeepReadonly7773<T[P]>;
};

type UnionToIntersection7773<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7773<T> = UnionToIntersection7773<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7773<T extends unknown[], V> = [...T, V];

type TuplifyUnion7773<T, L = LastOf7773<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7773<TuplifyUnion7773<Exclude<T, L>>, L>;

type DeepPartial7773<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7773<T[P]> }
  : T;

type Paths7773<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7773<K, Paths7773<T[K], Prev7773[D]>> : never }[keyof T]
  : never;

type Prev7773 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7773<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7773 {
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

type ConfigPaths7773 = Paths7773<NestedConfig7773>;

interface HeavyProps7773 {
  config: DeepPartial7773<NestedConfig7773>;
  path?: ConfigPaths7773;
}

const HeavyComponent7773 = memo(function HeavyComponent7773({ config }: HeavyProps7773) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7773) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7773 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7773: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7773.displayName = 'HeavyComponent7773';
export default HeavyComponent7773;
