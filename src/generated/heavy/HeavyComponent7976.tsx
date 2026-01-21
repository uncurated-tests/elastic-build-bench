'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly7976<T> = T extends (infer U)[]
  ? DeepReadonlyArray7976<U>
  : T extends object
  ? DeepReadonlyObject7976<T>
  : T;

interface DeepReadonlyArray7976<T> extends ReadonlyArray<DeepReadonly7976<T>> {}

type DeepReadonlyObject7976<T> = {
  readonly [P in keyof T]: DeepReadonly7976<T[P]>;
};

type UnionToIntersection7976<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf7976<T> = UnionToIntersection7976<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push7976<T extends unknown[], V> = [...T, V];

type TuplifyUnion7976<T, L = LastOf7976<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push7976<TuplifyUnion7976<Exclude<T, L>>, L>;

type DeepPartial7976<T> = T extends object
  ? { [P in keyof T]?: DeepPartial7976<T[P]> }
  : T;

type Paths7976<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join7976<K, Paths7976<T[K], Prev7976[D]>> : never }[keyof T]
  : never;

type Prev7976 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join7976<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig7976 {
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

type ConfigPaths7976 = Paths7976<NestedConfig7976>;

interface HeavyProps7976 {
  config: DeepPartial7976<NestedConfig7976>;
  path?: ConfigPaths7976;
}

const HeavyComponent7976 = memo(function HeavyComponent7976({ config }: HeavyProps7976) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 7976) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-7976 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H7976: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent7976.displayName = 'HeavyComponent7976';
export default HeavyComponent7976;
