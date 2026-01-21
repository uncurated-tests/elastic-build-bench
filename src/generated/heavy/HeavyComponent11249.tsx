'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11249<T> = T extends (infer U)[]
  ? DeepReadonlyArray11249<U>
  : T extends object
  ? DeepReadonlyObject11249<T>
  : T;

interface DeepReadonlyArray11249<T> extends ReadonlyArray<DeepReadonly11249<T>> {}

type DeepReadonlyObject11249<T> = {
  readonly [P in keyof T]: DeepReadonly11249<T[P]>;
};

type UnionToIntersection11249<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11249<T> = UnionToIntersection11249<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11249<T extends unknown[], V> = [...T, V];

type TuplifyUnion11249<T, L = LastOf11249<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11249<TuplifyUnion11249<Exclude<T, L>>, L>;

type DeepPartial11249<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11249<T[P]> }
  : T;

type Paths11249<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11249<K, Paths11249<T[K], Prev11249[D]>> : never }[keyof T]
  : never;

type Prev11249 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11249<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11249 {
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

type ConfigPaths11249 = Paths11249<NestedConfig11249>;

interface HeavyProps11249 {
  config: DeepPartial11249<NestedConfig11249>;
  path?: ConfigPaths11249;
}

const HeavyComponent11249 = memo(function HeavyComponent11249({ config }: HeavyProps11249) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11249) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11249 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11249: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11249.displayName = 'HeavyComponent11249';
export default HeavyComponent11249;
