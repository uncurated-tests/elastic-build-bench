'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11298<T> = T extends (infer U)[]
  ? DeepReadonlyArray11298<U>
  : T extends object
  ? DeepReadonlyObject11298<T>
  : T;

interface DeepReadonlyArray11298<T> extends ReadonlyArray<DeepReadonly11298<T>> {}

type DeepReadonlyObject11298<T> = {
  readonly [P in keyof T]: DeepReadonly11298<T[P]>;
};

type UnionToIntersection11298<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11298<T> = UnionToIntersection11298<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11298<T extends unknown[], V> = [...T, V];

type TuplifyUnion11298<T, L = LastOf11298<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11298<TuplifyUnion11298<Exclude<T, L>>, L>;

type DeepPartial11298<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11298<T[P]> }
  : T;

type Paths11298<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11298<K, Paths11298<T[K], Prev11298[D]>> : never }[keyof T]
  : never;

type Prev11298 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11298<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11298 {
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

type ConfigPaths11298 = Paths11298<NestedConfig11298>;

interface HeavyProps11298 {
  config: DeepPartial11298<NestedConfig11298>;
  path?: ConfigPaths11298;
}

const HeavyComponent11298 = memo(function HeavyComponent11298({ config }: HeavyProps11298) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11298) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11298 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11298: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11298.displayName = 'HeavyComponent11298';
export default HeavyComponent11298;
