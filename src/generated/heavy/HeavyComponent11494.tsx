'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11494<T> = T extends (infer U)[]
  ? DeepReadonlyArray11494<U>
  : T extends object
  ? DeepReadonlyObject11494<T>
  : T;

interface DeepReadonlyArray11494<T> extends ReadonlyArray<DeepReadonly11494<T>> {}

type DeepReadonlyObject11494<T> = {
  readonly [P in keyof T]: DeepReadonly11494<T[P]>;
};

type UnionToIntersection11494<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11494<T> = UnionToIntersection11494<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11494<T extends unknown[], V> = [...T, V];

type TuplifyUnion11494<T, L = LastOf11494<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11494<TuplifyUnion11494<Exclude<T, L>>, L>;

type DeepPartial11494<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11494<T[P]> }
  : T;

type Paths11494<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11494<K, Paths11494<T[K], Prev11494[D]>> : never }[keyof T]
  : never;

type Prev11494 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11494<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11494 {
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

type ConfigPaths11494 = Paths11494<NestedConfig11494>;

interface HeavyProps11494 {
  config: DeepPartial11494<NestedConfig11494>;
  path?: ConfigPaths11494;
}

const HeavyComponent11494 = memo(function HeavyComponent11494({ config }: HeavyProps11494) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11494) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11494 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11494: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11494.displayName = 'HeavyComponent11494';
export default HeavyComponent11494;
