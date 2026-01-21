'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11811<T> = T extends (infer U)[]
  ? DeepReadonlyArray11811<U>
  : T extends object
  ? DeepReadonlyObject11811<T>
  : T;

interface DeepReadonlyArray11811<T> extends ReadonlyArray<DeepReadonly11811<T>> {}

type DeepReadonlyObject11811<T> = {
  readonly [P in keyof T]: DeepReadonly11811<T[P]>;
};

type UnionToIntersection11811<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11811<T> = UnionToIntersection11811<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11811<T extends unknown[], V> = [...T, V];

type TuplifyUnion11811<T, L = LastOf11811<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11811<TuplifyUnion11811<Exclude<T, L>>, L>;

type DeepPartial11811<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11811<T[P]> }
  : T;

type Paths11811<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11811<K, Paths11811<T[K], Prev11811[D]>> : never }[keyof T]
  : never;

type Prev11811 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11811<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11811 {
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

type ConfigPaths11811 = Paths11811<NestedConfig11811>;

interface HeavyProps11811 {
  config: DeepPartial11811<NestedConfig11811>;
  path?: ConfigPaths11811;
}

const HeavyComponent11811 = memo(function HeavyComponent11811({ config }: HeavyProps11811) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11811) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11811 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11811: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11811.displayName = 'HeavyComponent11811';
export default HeavyComponent11811;
