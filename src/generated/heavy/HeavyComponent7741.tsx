'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7741<T> = T extends (infer U)[]
  ? DeepReadonlyArray7741<U>
  : T extends object
  ? DeepReadonlyObject7741<T>
  : T;

interface DeepReadonlyArray7741<T> extends ReadonlyArray<DeepReadonly7741<T>> {}

type DeepReadonlyObject7741<T> = {
  readonly [P in keyof T]: DeepReadonly7741<T[P]>;
};

type UnionToIntersection7741<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7741<T> = UnionToIntersection7741<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7741<T extends unknown[], V> = [...T, V];

type TuplifyUnion7741<T, L = LastOf7741<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7741<TuplifyUnion7741<Exclude<T, L>>, L>;

type DeepPartial7741<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7741<T[P]> }
  : T;

type Paths7741<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7741<K, Paths7741<T[K], Prev7741[D]>> : never }[keyof T]
  : never;

type Prev7741 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7741<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7741 {
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

type ConfigPaths7741 = Paths7741<NestedConfig7741>;

interface HeavyProps7741 {
  config: DeepPartial7741<NestedConfig7741>;
  path?: ConfigPaths7741;
}

const HeavyComponent7741 = memo(function HeavyComponent7741({ config }: HeavyProps7741) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7741) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7741 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7741: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7741.displayName = 'HeavyComponent7741';
export default HeavyComponent7741;
