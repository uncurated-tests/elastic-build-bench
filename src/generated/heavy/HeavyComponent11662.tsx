'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11662<T> = T extends (infer U)[]
  ? DeepReadonlyArray11662<U>
  : T extends object
  ? DeepReadonlyObject11662<T>
  : T;

interface DeepReadonlyArray11662<T> extends ReadonlyArray<DeepReadonly11662<T>> {}

type DeepReadonlyObject11662<T> = {
  readonly [P in keyof T]: DeepReadonly11662<T[P]>;
};

type UnionToIntersection11662<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11662<T> = UnionToIntersection11662<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11662<T extends unknown[], V> = [...T, V];

type TuplifyUnion11662<T, L = LastOf11662<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11662<TuplifyUnion11662<Exclude<T, L>>, L>;

type DeepPartial11662<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11662<T[P]> }
  : T;

type Paths11662<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11662<K, Paths11662<T[K], Prev11662[D]>> : never }[keyof T]
  : never;

type Prev11662 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11662<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11662 {
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

type ConfigPaths11662 = Paths11662<NestedConfig11662>;

interface HeavyProps11662 {
  config: DeepPartial11662<NestedConfig11662>;
  path?: ConfigPaths11662;
}

const HeavyComponent11662 = memo(function HeavyComponent11662({ config }: HeavyProps11662) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11662) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11662 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11662: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11662.displayName = 'HeavyComponent11662';
export default HeavyComponent11662;
