'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11733<T> = T extends (infer U)[]
  ? DeepReadonlyArray11733<U>
  : T extends object
  ? DeepReadonlyObject11733<T>
  : T;

interface DeepReadonlyArray11733<T> extends ReadonlyArray<DeepReadonly11733<T>> {}

type DeepReadonlyObject11733<T> = {
  readonly [P in keyof T]: DeepReadonly11733<T[P]>;
};

type UnionToIntersection11733<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11733<T> = UnionToIntersection11733<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11733<T extends unknown[], V> = [...T, V];

type TuplifyUnion11733<T, L = LastOf11733<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11733<TuplifyUnion11733<Exclude<T, L>>, L>;

type DeepPartial11733<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11733<T[P]> }
  : T;

type Paths11733<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11733<K, Paths11733<T[K], Prev11733[D]>> : never }[keyof T]
  : never;

type Prev11733 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11733<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11733 {
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

type ConfigPaths11733 = Paths11733<NestedConfig11733>;

interface HeavyProps11733 {
  config: DeepPartial11733<NestedConfig11733>;
  path?: ConfigPaths11733;
}

const HeavyComponent11733 = memo(function HeavyComponent11733({ config }: HeavyProps11733) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11733) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11733 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11733: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11733.displayName = 'HeavyComponent11733';
export default HeavyComponent11733;
