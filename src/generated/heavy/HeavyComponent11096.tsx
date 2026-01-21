'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11096<T> = T extends (infer U)[]
  ? DeepReadonlyArray11096<U>
  : T extends object
  ? DeepReadonlyObject11096<T>
  : T;

interface DeepReadonlyArray11096<T> extends ReadonlyArray<DeepReadonly11096<T>> {}

type DeepReadonlyObject11096<T> = {
  readonly [P in keyof T]: DeepReadonly11096<T[P]>;
};

type UnionToIntersection11096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11096<T> = UnionToIntersection11096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11096<T extends unknown[], V> = [...T, V];

type TuplifyUnion11096<T, L = LastOf11096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11096<TuplifyUnion11096<Exclude<T, L>>, L>;

type DeepPartial11096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11096<T[P]> }
  : T;

type Paths11096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11096<K, Paths11096<T[K], Prev11096[D]>> : never }[keyof T]
  : never;

type Prev11096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11096 {
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

type ConfigPaths11096 = Paths11096<NestedConfig11096>;

interface HeavyProps11096 {
  config: DeepPartial11096<NestedConfig11096>;
  path?: ConfigPaths11096;
}

const HeavyComponent11096 = memo(function HeavyComponent11096({ config }: HeavyProps11096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11096.displayName = 'HeavyComponent11096';
export default HeavyComponent11096;
