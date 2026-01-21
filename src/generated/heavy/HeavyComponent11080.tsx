'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11080<T> = T extends (infer U)[]
  ? DeepReadonlyArray11080<U>
  : T extends object
  ? DeepReadonlyObject11080<T>
  : T;

interface DeepReadonlyArray11080<T> extends ReadonlyArray<DeepReadonly11080<T>> {}

type DeepReadonlyObject11080<T> = {
  readonly [P in keyof T]: DeepReadonly11080<T[P]>;
};

type UnionToIntersection11080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11080<T> = UnionToIntersection11080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11080<T extends unknown[], V> = [...T, V];

type TuplifyUnion11080<T, L = LastOf11080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11080<TuplifyUnion11080<Exclude<T, L>>, L>;

type DeepPartial11080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11080<T[P]> }
  : T;

type Paths11080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11080<K, Paths11080<T[K], Prev11080[D]>> : never }[keyof T]
  : never;

type Prev11080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11080 {
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

type ConfigPaths11080 = Paths11080<NestedConfig11080>;

interface HeavyProps11080 {
  config: DeepPartial11080<NestedConfig11080>;
  path?: ConfigPaths11080;
}

const HeavyComponent11080 = memo(function HeavyComponent11080({ config }: HeavyProps11080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11080.displayName = 'HeavyComponent11080';
export default HeavyComponent11080;
