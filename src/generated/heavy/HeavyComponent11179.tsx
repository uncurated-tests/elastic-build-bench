'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11179<T> = T extends (infer U)[]
  ? DeepReadonlyArray11179<U>
  : T extends object
  ? DeepReadonlyObject11179<T>
  : T;

interface DeepReadonlyArray11179<T> extends ReadonlyArray<DeepReadonly11179<T>> {}

type DeepReadonlyObject11179<T> = {
  readonly [P in keyof T]: DeepReadonly11179<T[P]>;
};

type UnionToIntersection11179<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11179<T> = UnionToIntersection11179<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11179<T extends unknown[], V> = [...T, V];

type TuplifyUnion11179<T, L = LastOf11179<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11179<TuplifyUnion11179<Exclude<T, L>>, L>;

type DeepPartial11179<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11179<T[P]> }
  : T;

type Paths11179<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11179<K, Paths11179<T[K], Prev11179[D]>> : never }[keyof T]
  : never;

type Prev11179 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11179<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11179 {
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

type ConfigPaths11179 = Paths11179<NestedConfig11179>;

interface HeavyProps11179 {
  config: DeepPartial11179<NestedConfig11179>;
  path?: ConfigPaths11179;
}

const HeavyComponent11179 = memo(function HeavyComponent11179({ config }: HeavyProps11179) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11179) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11179 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11179: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11179.displayName = 'HeavyComponent11179';
export default HeavyComponent11179;
