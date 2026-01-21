'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11481<T> = T extends (infer U)[]
  ? DeepReadonlyArray11481<U>
  : T extends object
  ? DeepReadonlyObject11481<T>
  : T;

interface DeepReadonlyArray11481<T> extends ReadonlyArray<DeepReadonly11481<T>> {}

type DeepReadonlyObject11481<T> = {
  readonly [P in keyof T]: DeepReadonly11481<T[P]>;
};

type UnionToIntersection11481<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11481<T> = UnionToIntersection11481<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11481<T extends unknown[], V> = [...T, V];

type TuplifyUnion11481<T, L = LastOf11481<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11481<TuplifyUnion11481<Exclude<T, L>>, L>;

type DeepPartial11481<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11481<T[P]> }
  : T;

type Paths11481<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11481<K, Paths11481<T[K], Prev11481[D]>> : never }[keyof T]
  : never;

type Prev11481 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11481<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11481 {
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

type ConfigPaths11481 = Paths11481<NestedConfig11481>;

interface HeavyProps11481 {
  config: DeepPartial11481<NestedConfig11481>;
  path?: ConfigPaths11481;
}

const HeavyComponent11481 = memo(function HeavyComponent11481({ config }: HeavyProps11481) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11481) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11481 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11481: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11481.displayName = 'HeavyComponent11481';
export default HeavyComponent11481;
