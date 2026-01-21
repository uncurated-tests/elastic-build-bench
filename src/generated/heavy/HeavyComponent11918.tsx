'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11918<T> = T extends (infer U)[]
  ? DeepReadonlyArray11918<U>
  : T extends object
  ? DeepReadonlyObject11918<T>
  : T;

interface DeepReadonlyArray11918<T> extends ReadonlyArray<DeepReadonly11918<T>> {}

type DeepReadonlyObject11918<T> = {
  readonly [P in keyof T]: DeepReadonly11918<T[P]>;
};

type UnionToIntersection11918<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11918<T> = UnionToIntersection11918<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11918<T extends unknown[], V> = [...T, V];

type TuplifyUnion11918<T, L = LastOf11918<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11918<TuplifyUnion11918<Exclude<T, L>>, L>;

type DeepPartial11918<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11918<T[P]> }
  : T;

type Paths11918<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11918<K, Paths11918<T[K], Prev11918[D]>> : never }[keyof T]
  : never;

type Prev11918 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11918<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11918 {
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

type ConfigPaths11918 = Paths11918<NestedConfig11918>;

interface HeavyProps11918 {
  config: DeepPartial11918<NestedConfig11918>;
  path?: ConfigPaths11918;
}

const HeavyComponent11918 = memo(function HeavyComponent11918({ config }: HeavyProps11918) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11918) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11918 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11918: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11918.displayName = 'HeavyComponent11918';
export default HeavyComponent11918;
