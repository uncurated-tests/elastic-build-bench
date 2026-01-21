'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly746<T> = T extends (infer U)[]
  ? DeepReadonlyArray746<U>
  : T extends object
  ? DeepReadonlyObject746<T>
  : T;

interface DeepReadonlyArray746<T> extends ReadonlyArray<DeepReadonly746<T>> {}

type DeepReadonlyObject746<T> = {
  readonly [P in keyof T]: DeepReadonly746<T[P]>;
};

type UnionToIntersection746<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf746<T> = UnionToIntersection746<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push746<T extends unknown[], V> = [...T, V];

type TuplifyUnion746<T, L = LastOf746<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push746<TuplifyUnion746<Exclude<T, L>>, L>;

type DeepPartial746<T> = T extends object
  ? { [P in keyof T]?: DeepPartial746<T[P]> }
  : T;

type Paths746<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join746<K, Paths746<T[K], Prev746[D]>> : never }[keyof T]
  : never;

type Prev746 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join746<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig746 {
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

type ConfigPaths746 = Paths746<NestedConfig746>;

interface HeavyProps746 {
  config: DeepPartial746<NestedConfig746>;
  path?: ConfigPaths746;
}

const HeavyComponent746 = memo(function HeavyComponent746({ config }: HeavyProps746) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 746) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-746 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H746: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent746.displayName = 'HeavyComponent746';
export default HeavyComponent746;
