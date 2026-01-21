'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11663<T> = T extends (infer U)[]
  ? DeepReadonlyArray11663<U>
  : T extends object
  ? DeepReadonlyObject11663<T>
  : T;

interface DeepReadonlyArray11663<T> extends ReadonlyArray<DeepReadonly11663<T>> {}

type DeepReadonlyObject11663<T> = {
  readonly [P in keyof T]: DeepReadonly11663<T[P]>;
};

type UnionToIntersection11663<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11663<T> = UnionToIntersection11663<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11663<T extends unknown[], V> = [...T, V];

type TuplifyUnion11663<T, L = LastOf11663<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11663<TuplifyUnion11663<Exclude<T, L>>, L>;

type DeepPartial11663<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11663<T[P]> }
  : T;

type Paths11663<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11663<K, Paths11663<T[K], Prev11663[D]>> : never }[keyof T]
  : never;

type Prev11663 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11663<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11663 {
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

type ConfigPaths11663 = Paths11663<NestedConfig11663>;

interface HeavyProps11663 {
  config: DeepPartial11663<NestedConfig11663>;
  path?: ConfigPaths11663;
}

const HeavyComponent11663 = memo(function HeavyComponent11663({ config }: HeavyProps11663) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11663) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11663 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11663: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11663.displayName = 'HeavyComponent11663';
export default HeavyComponent11663;
