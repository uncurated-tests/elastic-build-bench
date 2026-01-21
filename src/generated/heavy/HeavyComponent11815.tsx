'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11815<T> = T extends (infer U)[]
  ? DeepReadonlyArray11815<U>
  : T extends object
  ? DeepReadonlyObject11815<T>
  : T;

interface DeepReadonlyArray11815<T> extends ReadonlyArray<DeepReadonly11815<T>> {}

type DeepReadonlyObject11815<T> = {
  readonly [P in keyof T]: DeepReadonly11815<T[P]>;
};

type UnionToIntersection11815<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11815<T> = UnionToIntersection11815<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11815<T extends unknown[], V> = [...T, V];

type TuplifyUnion11815<T, L = LastOf11815<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11815<TuplifyUnion11815<Exclude<T, L>>, L>;

type DeepPartial11815<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11815<T[P]> }
  : T;

type Paths11815<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11815<K, Paths11815<T[K], Prev11815[D]>> : never }[keyof T]
  : never;

type Prev11815 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11815<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11815 {
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

type ConfigPaths11815 = Paths11815<NestedConfig11815>;

interface HeavyProps11815 {
  config: DeepPartial11815<NestedConfig11815>;
  path?: ConfigPaths11815;
}

const HeavyComponent11815 = memo(function HeavyComponent11815({ config }: HeavyProps11815) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11815) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11815 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11815: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11815.displayName = 'HeavyComponent11815';
export default HeavyComponent11815;
