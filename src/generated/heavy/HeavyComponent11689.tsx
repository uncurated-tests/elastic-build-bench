'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11689<T> = T extends (infer U)[]
  ? DeepReadonlyArray11689<U>
  : T extends object
  ? DeepReadonlyObject11689<T>
  : T;

interface DeepReadonlyArray11689<T> extends ReadonlyArray<DeepReadonly11689<T>> {}

type DeepReadonlyObject11689<T> = {
  readonly [P in keyof T]: DeepReadonly11689<T[P]>;
};

type UnionToIntersection11689<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11689<T> = UnionToIntersection11689<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11689<T extends unknown[], V> = [...T, V];

type TuplifyUnion11689<T, L = LastOf11689<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11689<TuplifyUnion11689<Exclude<T, L>>, L>;

type DeepPartial11689<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11689<T[P]> }
  : T;

type Paths11689<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11689<K, Paths11689<T[K], Prev11689[D]>> : never }[keyof T]
  : never;

type Prev11689 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11689<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11689 {
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

type ConfigPaths11689 = Paths11689<NestedConfig11689>;

interface HeavyProps11689 {
  config: DeepPartial11689<NestedConfig11689>;
  path?: ConfigPaths11689;
}

const HeavyComponent11689 = memo(function HeavyComponent11689({ config }: HeavyProps11689) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11689) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11689 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11689: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11689.displayName = 'HeavyComponent11689';
export default HeavyComponent11689;
