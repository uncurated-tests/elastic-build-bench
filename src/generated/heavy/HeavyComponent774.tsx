'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly774<T> = T extends (infer U)[]
  ? DeepReadonlyArray774<U>
  : T extends object
  ? DeepReadonlyObject774<T>
  : T;

interface DeepReadonlyArray774<T> extends ReadonlyArray<DeepReadonly774<T>> {}

type DeepReadonlyObject774<T> = {
  readonly [P in keyof T]: DeepReadonly774<T[P]>;
};

type UnionToIntersection774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf774<T> = UnionToIntersection774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push774<T extends unknown[], V> = [...T, V];

type TuplifyUnion774<T, L = LastOf774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push774<TuplifyUnion774<Exclude<T, L>>, L>;

type DeepPartial774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial774<T[P]> }
  : T;

type Paths774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join774<K, Paths774<T[K], Prev774[D]>> : never }[keyof T]
  : never;

type Prev774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig774 {
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

type ConfigPaths774 = Paths774<NestedConfig774>;

interface HeavyProps774 {
  config: DeepPartial774<NestedConfig774>;
  path?: ConfigPaths774;
}

const HeavyComponent774 = memo(function HeavyComponent774({ config }: HeavyProps774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent774.displayName = 'HeavyComponent774';
export default HeavyComponent774;
