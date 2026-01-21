'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11093<T> = T extends (infer U)[]
  ? DeepReadonlyArray11093<U>
  : T extends object
  ? DeepReadonlyObject11093<T>
  : T;

interface DeepReadonlyArray11093<T> extends ReadonlyArray<DeepReadonly11093<T>> {}

type DeepReadonlyObject11093<T> = {
  readonly [P in keyof T]: DeepReadonly11093<T[P]>;
};

type UnionToIntersection11093<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11093<T> = UnionToIntersection11093<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11093<T extends unknown[], V> = [...T, V];

type TuplifyUnion11093<T, L = LastOf11093<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11093<TuplifyUnion11093<Exclude<T, L>>, L>;

type DeepPartial11093<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11093<T[P]> }
  : T;

type Paths11093<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11093<K, Paths11093<T[K], Prev11093[D]>> : never }[keyof T]
  : never;

type Prev11093 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11093<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11093 {
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

type ConfigPaths11093 = Paths11093<NestedConfig11093>;

interface HeavyProps11093 {
  config: DeepPartial11093<NestedConfig11093>;
  path?: ConfigPaths11093;
}

const HeavyComponent11093 = memo(function HeavyComponent11093({ config }: HeavyProps11093) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11093) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11093 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11093: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11093.displayName = 'HeavyComponent11093';
export default HeavyComponent11093;
