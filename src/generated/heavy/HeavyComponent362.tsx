'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly362<T> = T extends (infer U)[]
  ? DeepReadonlyArray362<U>
  : T extends object
  ? DeepReadonlyObject362<T>
  : T;

interface DeepReadonlyArray362<T> extends ReadonlyArray<DeepReadonly362<T>> {}

type DeepReadonlyObject362<T> = {
  readonly [P in keyof T]: DeepReadonly362<T[P]>;
};

type UnionToIntersection362<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf362<T> = UnionToIntersection362<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push362<T extends unknown[], V> = [...T, V];

type TuplifyUnion362<T, L = LastOf362<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push362<TuplifyUnion362<Exclude<T, L>>, L>;

type DeepPartial362<T> = T extends object
  ? { [P in keyof T]?: DeepPartial362<T[P]> }
  : T;

type Paths362<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join362<K, Paths362<T[K], Prev362[D]>> : never }[keyof T]
  : never;

type Prev362 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join362<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig362 {
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

type ConfigPaths362 = Paths362<NestedConfig362>;

interface HeavyProps362 {
  config: DeepPartial362<NestedConfig362>;
  path?: ConfigPaths362;
}

const HeavyComponent362 = memo(function HeavyComponent362({ config }: HeavyProps362) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 362) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-362 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H362: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent362.displayName = 'HeavyComponent362';
export default HeavyComponent362;
