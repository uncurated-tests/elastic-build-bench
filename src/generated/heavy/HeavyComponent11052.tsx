'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11052<T> = T extends (infer U)[]
  ? DeepReadonlyArray11052<U>
  : T extends object
  ? DeepReadonlyObject11052<T>
  : T;

interface DeepReadonlyArray11052<T> extends ReadonlyArray<DeepReadonly11052<T>> {}

type DeepReadonlyObject11052<T> = {
  readonly [P in keyof T]: DeepReadonly11052<T[P]>;
};

type UnionToIntersection11052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11052<T> = UnionToIntersection11052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11052<T extends unknown[], V> = [...T, V];

type TuplifyUnion11052<T, L = LastOf11052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11052<TuplifyUnion11052<Exclude<T, L>>, L>;

type DeepPartial11052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11052<T[P]> }
  : T;

type Paths11052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11052<K, Paths11052<T[K], Prev11052[D]>> : never }[keyof T]
  : never;

type Prev11052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11052 {
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

type ConfigPaths11052 = Paths11052<NestedConfig11052>;

interface HeavyProps11052 {
  config: DeepPartial11052<NestedConfig11052>;
  path?: ConfigPaths11052;
}

const HeavyComponent11052 = memo(function HeavyComponent11052({ config }: HeavyProps11052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11052.displayName = 'HeavyComponent11052';
export default HeavyComponent11052;
