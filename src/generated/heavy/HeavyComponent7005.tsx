'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7005<T> = T extends (infer U)[]
  ? DeepReadonlyArray7005<U>
  : T extends object
  ? DeepReadonlyObject7005<T>
  : T;

interface DeepReadonlyArray7005<T> extends ReadonlyArray<DeepReadonly7005<T>> {}

type DeepReadonlyObject7005<T> = {
  readonly [P in keyof T]: DeepReadonly7005<T[P]>;
};

type UnionToIntersection7005<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7005<T> = UnionToIntersection7005<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7005<T extends unknown[], V> = [...T, V];

type TuplifyUnion7005<T, L = LastOf7005<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7005<TuplifyUnion7005<Exclude<T, L>>, L>;

type DeepPartial7005<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7005<T[P]> }
  : T;

type Paths7005<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7005<K, Paths7005<T[K], Prev7005[D]>> : never }[keyof T]
  : never;

type Prev7005 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7005<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7005 {
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

type ConfigPaths7005 = Paths7005<NestedConfig7005>;

interface HeavyProps7005 {
  config: DeepPartial7005<NestedConfig7005>;
  path?: ConfigPaths7005;
}

const HeavyComponent7005 = memo(function HeavyComponent7005({ config }: HeavyProps7005) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7005) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7005 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7005: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7005.displayName = 'HeavyComponent7005';
export default HeavyComponent7005;
