'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11157<T> = T extends (infer U)[]
  ? DeepReadonlyArray11157<U>
  : T extends object
  ? DeepReadonlyObject11157<T>
  : T;

interface DeepReadonlyArray11157<T> extends ReadonlyArray<DeepReadonly11157<T>> {}

type DeepReadonlyObject11157<T> = {
  readonly [P in keyof T]: DeepReadonly11157<T[P]>;
};

type UnionToIntersection11157<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11157<T> = UnionToIntersection11157<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11157<T extends unknown[], V> = [...T, V];

type TuplifyUnion11157<T, L = LastOf11157<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11157<TuplifyUnion11157<Exclude<T, L>>, L>;

type DeepPartial11157<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11157<T[P]> }
  : T;

type Paths11157<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11157<K, Paths11157<T[K], Prev11157[D]>> : never }[keyof T]
  : never;

type Prev11157 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11157<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11157 {
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

type ConfigPaths11157 = Paths11157<NestedConfig11157>;

interface HeavyProps11157 {
  config: DeepPartial11157<NestedConfig11157>;
  path?: ConfigPaths11157;
}

const HeavyComponent11157 = memo(function HeavyComponent11157({ config }: HeavyProps11157) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11157) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11157 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11157: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11157.displayName = 'HeavyComponent11157';
export default HeavyComponent11157;
