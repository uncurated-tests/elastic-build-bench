'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11957<T> = T extends (infer U)[]
  ? DeepReadonlyArray11957<U>
  : T extends object
  ? DeepReadonlyObject11957<T>
  : T;

interface DeepReadonlyArray11957<T> extends ReadonlyArray<DeepReadonly11957<T>> {}

type DeepReadonlyObject11957<T> = {
  readonly [P in keyof T]: DeepReadonly11957<T[P]>;
};

type UnionToIntersection11957<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11957<T> = UnionToIntersection11957<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11957<T extends unknown[], V> = [...T, V];

type TuplifyUnion11957<T, L = LastOf11957<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11957<TuplifyUnion11957<Exclude<T, L>>, L>;

type DeepPartial11957<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11957<T[P]> }
  : T;

type Paths11957<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11957<K, Paths11957<T[K], Prev11957[D]>> : never }[keyof T]
  : never;

type Prev11957 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11957<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11957 {
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

type ConfigPaths11957 = Paths11957<NestedConfig11957>;

interface HeavyProps11957 {
  config: DeepPartial11957<NestedConfig11957>;
  path?: ConfigPaths11957;
}

const HeavyComponent11957 = memo(function HeavyComponent11957({ config }: HeavyProps11957) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11957) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11957 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11957: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11957.displayName = 'HeavyComponent11957';
export default HeavyComponent11957;
