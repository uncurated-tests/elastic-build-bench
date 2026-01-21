'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11596<T> = T extends (infer U)[]
  ? DeepReadonlyArray11596<U>
  : T extends object
  ? DeepReadonlyObject11596<T>
  : T;

interface DeepReadonlyArray11596<T> extends ReadonlyArray<DeepReadonly11596<T>> {}

type DeepReadonlyObject11596<T> = {
  readonly [P in keyof T]: DeepReadonly11596<T[P]>;
};

type UnionToIntersection11596<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11596<T> = UnionToIntersection11596<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11596<T extends unknown[], V> = [...T, V];

type TuplifyUnion11596<T, L = LastOf11596<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11596<TuplifyUnion11596<Exclude<T, L>>, L>;

type DeepPartial11596<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11596<T[P]> }
  : T;

type Paths11596<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11596<K, Paths11596<T[K], Prev11596[D]>> : never }[keyof T]
  : never;

type Prev11596 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11596<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11596 {
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

type ConfigPaths11596 = Paths11596<NestedConfig11596>;

interface HeavyProps11596 {
  config: DeepPartial11596<NestedConfig11596>;
  path?: ConfigPaths11596;
}

const HeavyComponent11596 = memo(function HeavyComponent11596({ config }: HeavyProps11596) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11596) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11596 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11596: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11596.displayName = 'HeavyComponent11596';
export default HeavyComponent11596;
