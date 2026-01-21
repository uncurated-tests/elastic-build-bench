'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11369<T> = T extends (infer U)[]
  ? DeepReadonlyArray11369<U>
  : T extends object
  ? DeepReadonlyObject11369<T>
  : T;

interface DeepReadonlyArray11369<T> extends ReadonlyArray<DeepReadonly11369<T>> {}

type DeepReadonlyObject11369<T> = {
  readonly [P in keyof T]: DeepReadonly11369<T[P]>;
};

type UnionToIntersection11369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11369<T> = UnionToIntersection11369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11369<T extends unknown[], V> = [...T, V];

type TuplifyUnion11369<T, L = LastOf11369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11369<TuplifyUnion11369<Exclude<T, L>>, L>;

type DeepPartial11369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11369<T[P]> }
  : T;

type Paths11369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11369<K, Paths11369<T[K], Prev11369[D]>> : never }[keyof T]
  : never;

type Prev11369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11369 {
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

type ConfigPaths11369 = Paths11369<NestedConfig11369>;

interface HeavyProps11369 {
  config: DeepPartial11369<NestedConfig11369>;
  path?: ConfigPaths11369;
}

const HeavyComponent11369 = memo(function HeavyComponent11369({ config }: HeavyProps11369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11369.displayName = 'HeavyComponent11369';
export default HeavyComponent11369;
