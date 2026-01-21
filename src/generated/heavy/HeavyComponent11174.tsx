'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11174<T> = T extends (infer U)[]
  ? DeepReadonlyArray11174<U>
  : T extends object
  ? DeepReadonlyObject11174<T>
  : T;

interface DeepReadonlyArray11174<T> extends ReadonlyArray<DeepReadonly11174<T>> {}

type DeepReadonlyObject11174<T> = {
  readonly [P in keyof T]: DeepReadonly11174<T[P]>;
};

type UnionToIntersection11174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11174<T> = UnionToIntersection11174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11174<T extends unknown[], V> = [...T, V];

type TuplifyUnion11174<T, L = LastOf11174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11174<TuplifyUnion11174<Exclude<T, L>>, L>;

type DeepPartial11174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11174<T[P]> }
  : T;

type Paths11174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11174<K, Paths11174<T[K], Prev11174[D]>> : never }[keyof T]
  : never;

type Prev11174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11174 {
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

type ConfigPaths11174 = Paths11174<NestedConfig11174>;

interface HeavyProps11174 {
  config: DeepPartial11174<NestedConfig11174>;
  path?: ConfigPaths11174;
}

const HeavyComponent11174 = memo(function HeavyComponent11174({ config }: HeavyProps11174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11174.displayName = 'HeavyComponent11174';
export default HeavyComponent11174;
