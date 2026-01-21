'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11601<T> = T extends (infer U)[]
  ? DeepReadonlyArray11601<U>
  : T extends object
  ? DeepReadonlyObject11601<T>
  : T;

interface DeepReadonlyArray11601<T> extends ReadonlyArray<DeepReadonly11601<T>> {}

type DeepReadonlyObject11601<T> = {
  readonly [P in keyof T]: DeepReadonly11601<T[P]>;
};

type UnionToIntersection11601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11601<T> = UnionToIntersection11601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11601<T extends unknown[], V> = [...T, V];

type TuplifyUnion11601<T, L = LastOf11601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11601<TuplifyUnion11601<Exclude<T, L>>, L>;

type DeepPartial11601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11601<T[P]> }
  : T;

type Paths11601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11601<K, Paths11601<T[K], Prev11601[D]>> : never }[keyof T]
  : never;

type Prev11601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11601 {
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

type ConfigPaths11601 = Paths11601<NestedConfig11601>;

interface HeavyProps11601 {
  config: DeepPartial11601<NestedConfig11601>;
  path?: ConfigPaths11601;
}

const HeavyComponent11601 = memo(function HeavyComponent11601({ config }: HeavyProps11601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11601.displayName = 'HeavyComponent11601';
export default HeavyComponent11601;
