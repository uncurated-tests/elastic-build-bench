'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11960<T> = T extends (infer U)[]
  ? DeepReadonlyArray11960<U>
  : T extends object
  ? DeepReadonlyObject11960<T>
  : T;

interface DeepReadonlyArray11960<T> extends ReadonlyArray<DeepReadonly11960<T>> {}

type DeepReadonlyObject11960<T> = {
  readonly [P in keyof T]: DeepReadonly11960<T[P]>;
};

type UnionToIntersection11960<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11960<T> = UnionToIntersection11960<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11960<T extends unknown[], V> = [...T, V];

type TuplifyUnion11960<T, L = LastOf11960<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11960<TuplifyUnion11960<Exclude<T, L>>, L>;

type DeepPartial11960<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11960<T[P]> }
  : T;

type Paths11960<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11960<K, Paths11960<T[K], Prev11960[D]>> : never }[keyof T]
  : never;

type Prev11960 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11960<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11960 {
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

type ConfigPaths11960 = Paths11960<NestedConfig11960>;

interface HeavyProps11960 {
  config: DeepPartial11960<NestedConfig11960>;
  path?: ConfigPaths11960;
}

const HeavyComponent11960 = memo(function HeavyComponent11960({ config }: HeavyProps11960) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11960) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11960 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11960: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11960.displayName = 'HeavyComponent11960';
export default HeavyComponent11960;
