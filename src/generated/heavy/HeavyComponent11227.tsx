'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11227<T> = T extends (infer U)[]
  ? DeepReadonlyArray11227<U>
  : T extends object
  ? DeepReadonlyObject11227<T>
  : T;

interface DeepReadonlyArray11227<T> extends ReadonlyArray<DeepReadonly11227<T>> {}

type DeepReadonlyObject11227<T> = {
  readonly [P in keyof T]: DeepReadonly11227<T[P]>;
};

type UnionToIntersection11227<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11227<T> = UnionToIntersection11227<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11227<T extends unknown[], V> = [...T, V];

type TuplifyUnion11227<T, L = LastOf11227<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11227<TuplifyUnion11227<Exclude<T, L>>, L>;

type DeepPartial11227<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11227<T[P]> }
  : T;

type Paths11227<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11227<K, Paths11227<T[K], Prev11227[D]>> : never }[keyof T]
  : never;

type Prev11227 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11227<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11227 {
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

type ConfigPaths11227 = Paths11227<NestedConfig11227>;

interface HeavyProps11227 {
  config: DeepPartial11227<NestedConfig11227>;
  path?: ConfigPaths11227;
}

const HeavyComponent11227 = memo(function HeavyComponent11227({ config }: HeavyProps11227) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11227) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11227 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11227: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11227.displayName = 'HeavyComponent11227';
export default HeavyComponent11227;
