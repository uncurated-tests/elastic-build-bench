'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11967<T> = T extends (infer U)[]
  ? DeepReadonlyArray11967<U>
  : T extends object
  ? DeepReadonlyObject11967<T>
  : T;

interface DeepReadonlyArray11967<T> extends ReadonlyArray<DeepReadonly11967<T>> {}

type DeepReadonlyObject11967<T> = {
  readonly [P in keyof T]: DeepReadonly11967<T[P]>;
};

type UnionToIntersection11967<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11967<T> = UnionToIntersection11967<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11967<T extends unknown[], V> = [...T, V];

type TuplifyUnion11967<T, L = LastOf11967<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11967<TuplifyUnion11967<Exclude<T, L>>, L>;

type DeepPartial11967<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11967<T[P]> }
  : T;

type Paths11967<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11967<K, Paths11967<T[K], Prev11967[D]>> : never }[keyof T]
  : never;

type Prev11967 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11967<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11967 {
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

type ConfigPaths11967 = Paths11967<NestedConfig11967>;

interface HeavyProps11967 {
  config: DeepPartial11967<NestedConfig11967>;
  path?: ConfigPaths11967;
}

const HeavyComponent11967 = memo(function HeavyComponent11967({ config }: HeavyProps11967) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11967) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11967 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11967: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11967.displayName = 'HeavyComponent11967';
export default HeavyComponent11967;
