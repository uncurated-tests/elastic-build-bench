'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11891<T> = T extends (infer U)[]
  ? DeepReadonlyArray11891<U>
  : T extends object
  ? DeepReadonlyObject11891<T>
  : T;

interface DeepReadonlyArray11891<T> extends ReadonlyArray<DeepReadonly11891<T>> {}

type DeepReadonlyObject11891<T> = {
  readonly [P in keyof T]: DeepReadonly11891<T[P]>;
};

type UnionToIntersection11891<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11891<T> = UnionToIntersection11891<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11891<T extends unknown[], V> = [...T, V];

type TuplifyUnion11891<T, L = LastOf11891<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11891<TuplifyUnion11891<Exclude<T, L>>, L>;

type DeepPartial11891<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11891<T[P]> }
  : T;

type Paths11891<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11891<K, Paths11891<T[K], Prev11891[D]>> : never }[keyof T]
  : never;

type Prev11891 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11891<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11891 {
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

type ConfigPaths11891 = Paths11891<NestedConfig11891>;

interface HeavyProps11891 {
  config: DeepPartial11891<NestedConfig11891>;
  path?: ConfigPaths11891;
}

const HeavyComponent11891 = memo(function HeavyComponent11891({ config }: HeavyProps11891) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11891) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11891 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11891: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11891.displayName = 'HeavyComponent11891';
export default HeavyComponent11891;
