'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11517<T> = T extends (infer U)[]
  ? DeepReadonlyArray11517<U>
  : T extends object
  ? DeepReadonlyObject11517<T>
  : T;

interface DeepReadonlyArray11517<T> extends ReadonlyArray<DeepReadonly11517<T>> {}

type DeepReadonlyObject11517<T> = {
  readonly [P in keyof T]: DeepReadonly11517<T[P]>;
};

type UnionToIntersection11517<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11517<T> = UnionToIntersection11517<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11517<T extends unknown[], V> = [...T, V];

type TuplifyUnion11517<T, L = LastOf11517<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11517<TuplifyUnion11517<Exclude<T, L>>, L>;

type DeepPartial11517<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11517<T[P]> }
  : T;

type Paths11517<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11517<K, Paths11517<T[K], Prev11517[D]>> : never }[keyof T]
  : never;

type Prev11517 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11517<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11517 {
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

type ConfigPaths11517 = Paths11517<NestedConfig11517>;

interface HeavyProps11517 {
  config: DeepPartial11517<NestedConfig11517>;
  path?: ConfigPaths11517;
}

const HeavyComponent11517 = memo(function HeavyComponent11517({ config }: HeavyProps11517) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11517) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11517 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11517: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11517.displayName = 'HeavyComponent11517';
export default HeavyComponent11517;
