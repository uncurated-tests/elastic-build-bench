'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11566<T> = T extends (infer U)[]
  ? DeepReadonlyArray11566<U>
  : T extends object
  ? DeepReadonlyObject11566<T>
  : T;

interface DeepReadonlyArray11566<T> extends ReadonlyArray<DeepReadonly11566<T>> {}

type DeepReadonlyObject11566<T> = {
  readonly [P in keyof T]: DeepReadonly11566<T[P]>;
};

type UnionToIntersection11566<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11566<T> = UnionToIntersection11566<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11566<T extends unknown[], V> = [...T, V];

type TuplifyUnion11566<T, L = LastOf11566<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11566<TuplifyUnion11566<Exclude<T, L>>, L>;

type DeepPartial11566<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11566<T[P]> }
  : T;

type Paths11566<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11566<K, Paths11566<T[K], Prev11566[D]>> : never }[keyof T]
  : never;

type Prev11566 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11566<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11566 {
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

type ConfigPaths11566 = Paths11566<NestedConfig11566>;

interface HeavyProps11566 {
  config: DeepPartial11566<NestedConfig11566>;
  path?: ConfigPaths11566;
}

const HeavyComponent11566 = memo(function HeavyComponent11566({ config }: HeavyProps11566) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11566) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11566 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11566: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11566.displayName = 'HeavyComponent11566';
export default HeavyComponent11566;
