'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11378<T> = T extends (infer U)[]
  ? DeepReadonlyArray11378<U>
  : T extends object
  ? DeepReadonlyObject11378<T>
  : T;

interface DeepReadonlyArray11378<T> extends ReadonlyArray<DeepReadonly11378<T>> {}

type DeepReadonlyObject11378<T> = {
  readonly [P in keyof T]: DeepReadonly11378<T[P]>;
};

type UnionToIntersection11378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11378<T> = UnionToIntersection11378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11378<T extends unknown[], V> = [...T, V];

type TuplifyUnion11378<T, L = LastOf11378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11378<TuplifyUnion11378<Exclude<T, L>>, L>;

type DeepPartial11378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11378<T[P]> }
  : T;

type Paths11378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11378<K, Paths11378<T[K], Prev11378[D]>> : never }[keyof T]
  : never;

type Prev11378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11378 {
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

type ConfigPaths11378 = Paths11378<NestedConfig11378>;

interface HeavyProps11378 {
  config: DeepPartial11378<NestedConfig11378>;
  path?: ConfigPaths11378;
}

const HeavyComponent11378 = memo(function HeavyComponent11378({ config }: HeavyProps11378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11378.displayName = 'HeavyComponent11378';
export default HeavyComponent11378;
