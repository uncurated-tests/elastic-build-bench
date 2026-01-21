'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11740<T> = T extends (infer U)[]
  ? DeepReadonlyArray11740<U>
  : T extends object
  ? DeepReadonlyObject11740<T>
  : T;

interface DeepReadonlyArray11740<T> extends ReadonlyArray<DeepReadonly11740<T>> {}

type DeepReadonlyObject11740<T> = {
  readonly [P in keyof T]: DeepReadonly11740<T[P]>;
};

type UnionToIntersection11740<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11740<T> = UnionToIntersection11740<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11740<T extends unknown[], V> = [...T, V];

type TuplifyUnion11740<T, L = LastOf11740<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11740<TuplifyUnion11740<Exclude<T, L>>, L>;

type DeepPartial11740<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11740<T[P]> }
  : T;

type Paths11740<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11740<K, Paths11740<T[K], Prev11740[D]>> : never }[keyof T]
  : never;

type Prev11740 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11740<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11740 {
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

type ConfigPaths11740 = Paths11740<NestedConfig11740>;

interface HeavyProps11740 {
  config: DeepPartial11740<NestedConfig11740>;
  path?: ConfigPaths11740;
}

const HeavyComponent11740 = memo(function HeavyComponent11740({ config }: HeavyProps11740) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11740) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11740 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11740: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11740.displayName = 'HeavyComponent11740';
export default HeavyComponent11740;
