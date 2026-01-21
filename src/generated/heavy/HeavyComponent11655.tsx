'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11655<T> = T extends (infer U)[]
  ? DeepReadonlyArray11655<U>
  : T extends object
  ? DeepReadonlyObject11655<T>
  : T;

interface DeepReadonlyArray11655<T> extends ReadonlyArray<DeepReadonly11655<T>> {}

type DeepReadonlyObject11655<T> = {
  readonly [P in keyof T]: DeepReadonly11655<T[P]>;
};

type UnionToIntersection11655<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11655<T> = UnionToIntersection11655<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11655<T extends unknown[], V> = [...T, V];

type TuplifyUnion11655<T, L = LastOf11655<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11655<TuplifyUnion11655<Exclude<T, L>>, L>;

type DeepPartial11655<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11655<T[P]> }
  : T;

type Paths11655<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11655<K, Paths11655<T[K], Prev11655[D]>> : never }[keyof T]
  : never;

type Prev11655 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11655<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11655 {
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

type ConfigPaths11655 = Paths11655<NestedConfig11655>;

interface HeavyProps11655 {
  config: DeepPartial11655<NestedConfig11655>;
  path?: ConfigPaths11655;
}

const HeavyComponent11655 = memo(function HeavyComponent11655({ config }: HeavyProps11655) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11655) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11655 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11655: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11655.displayName = 'HeavyComponent11655';
export default HeavyComponent11655;
