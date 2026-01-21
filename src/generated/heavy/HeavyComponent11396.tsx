'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11396<T> = T extends (infer U)[]
  ? DeepReadonlyArray11396<U>
  : T extends object
  ? DeepReadonlyObject11396<T>
  : T;

interface DeepReadonlyArray11396<T> extends ReadonlyArray<DeepReadonly11396<T>> {}

type DeepReadonlyObject11396<T> = {
  readonly [P in keyof T]: DeepReadonly11396<T[P]>;
};

type UnionToIntersection11396<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11396<T> = UnionToIntersection11396<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11396<T extends unknown[], V> = [...T, V];

type TuplifyUnion11396<T, L = LastOf11396<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11396<TuplifyUnion11396<Exclude<T, L>>, L>;

type DeepPartial11396<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11396<T[P]> }
  : T;

type Paths11396<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11396<K, Paths11396<T[K], Prev11396[D]>> : never }[keyof T]
  : never;

type Prev11396 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11396<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11396 {
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

type ConfigPaths11396 = Paths11396<NestedConfig11396>;

interface HeavyProps11396 {
  config: DeepPartial11396<NestedConfig11396>;
  path?: ConfigPaths11396;
}

const HeavyComponent11396 = memo(function HeavyComponent11396({ config }: HeavyProps11396) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11396) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11396 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11396: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11396.displayName = 'HeavyComponent11396';
export default HeavyComponent11396;
