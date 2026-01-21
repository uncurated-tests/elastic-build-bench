'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7996<T> = T extends (infer U)[]
  ? DeepReadonlyArray7996<U>
  : T extends object
  ? DeepReadonlyObject7996<T>
  : T;

interface DeepReadonlyArray7996<T> extends ReadonlyArray<DeepReadonly7996<T>> {}

type DeepReadonlyObject7996<T> = {
  readonly [P in keyof T]: DeepReadonly7996<T[P]>;
};

type UnionToIntersection7996<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7996<T> = UnionToIntersection7996<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7996<T extends unknown[], V> = [...T, V];

type TuplifyUnion7996<T, L = LastOf7996<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7996<TuplifyUnion7996<Exclude<T, L>>, L>;

type DeepPartial7996<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7996<T[P]> }
  : T;

type Paths7996<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7996<K, Paths7996<T[K], Prev7996[D]>> : never }[keyof T]
  : never;

type Prev7996 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7996<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7996 {
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

type ConfigPaths7996 = Paths7996<NestedConfig7996>;

interface HeavyProps7996 {
  config: DeepPartial7996<NestedConfig7996>;
  path?: ConfigPaths7996;
}

const HeavyComponent7996 = memo(function HeavyComponent7996({ config }: HeavyProps7996) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7996) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7996 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7996: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7996.displayName = 'HeavyComponent7996';
export default HeavyComponent7996;
