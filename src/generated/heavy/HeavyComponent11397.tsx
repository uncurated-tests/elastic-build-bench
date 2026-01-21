'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11397<T> = T extends (infer U)[]
  ? DeepReadonlyArray11397<U>
  : T extends object
  ? DeepReadonlyObject11397<T>
  : T;

interface DeepReadonlyArray11397<T> extends ReadonlyArray<DeepReadonly11397<T>> {}

type DeepReadonlyObject11397<T> = {
  readonly [P in keyof T]: DeepReadonly11397<T[P]>;
};

type UnionToIntersection11397<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11397<T> = UnionToIntersection11397<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11397<T extends unknown[], V> = [...T, V];

type TuplifyUnion11397<T, L = LastOf11397<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11397<TuplifyUnion11397<Exclude<T, L>>, L>;

type DeepPartial11397<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11397<T[P]> }
  : T;

type Paths11397<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11397<K, Paths11397<T[K], Prev11397[D]>> : never }[keyof T]
  : never;

type Prev11397 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11397<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11397 {
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

type ConfigPaths11397 = Paths11397<NestedConfig11397>;

interface HeavyProps11397 {
  config: DeepPartial11397<NestedConfig11397>;
  path?: ConfigPaths11397;
}

const HeavyComponent11397 = memo(function HeavyComponent11397({ config }: HeavyProps11397) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11397) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11397 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11397: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11397.displayName = 'HeavyComponent11397';
export default HeavyComponent11397;
