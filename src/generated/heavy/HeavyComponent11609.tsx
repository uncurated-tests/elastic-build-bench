'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11609<T> = T extends (infer U)[]
  ? DeepReadonlyArray11609<U>
  : T extends object
  ? DeepReadonlyObject11609<T>
  : T;

interface DeepReadonlyArray11609<T> extends ReadonlyArray<DeepReadonly11609<T>> {}

type DeepReadonlyObject11609<T> = {
  readonly [P in keyof T]: DeepReadonly11609<T[P]>;
};

type UnionToIntersection11609<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11609<T> = UnionToIntersection11609<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11609<T extends unknown[], V> = [...T, V];

type TuplifyUnion11609<T, L = LastOf11609<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11609<TuplifyUnion11609<Exclude<T, L>>, L>;

type DeepPartial11609<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11609<T[P]> }
  : T;

type Paths11609<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11609<K, Paths11609<T[K], Prev11609[D]>> : never }[keyof T]
  : never;

type Prev11609 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11609<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11609 {
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

type ConfigPaths11609 = Paths11609<NestedConfig11609>;

interface HeavyProps11609 {
  config: DeepPartial11609<NestedConfig11609>;
  path?: ConfigPaths11609;
}

const HeavyComponent11609 = memo(function HeavyComponent11609({ config }: HeavyProps11609) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11609) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11609 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11609: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11609.displayName = 'HeavyComponent11609';
export default HeavyComponent11609;
