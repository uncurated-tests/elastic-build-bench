'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11350<T> = T extends (infer U)[]
  ? DeepReadonlyArray11350<U>
  : T extends object
  ? DeepReadonlyObject11350<T>
  : T;

interface DeepReadonlyArray11350<T> extends ReadonlyArray<DeepReadonly11350<T>> {}

type DeepReadonlyObject11350<T> = {
  readonly [P in keyof T]: DeepReadonly11350<T[P]>;
};

type UnionToIntersection11350<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11350<T> = UnionToIntersection11350<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11350<T extends unknown[], V> = [...T, V];

type TuplifyUnion11350<T, L = LastOf11350<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11350<TuplifyUnion11350<Exclude<T, L>>, L>;

type DeepPartial11350<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11350<T[P]> }
  : T;

type Paths11350<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11350<K, Paths11350<T[K], Prev11350[D]>> : never }[keyof T]
  : never;

type Prev11350 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11350<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11350 {
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

type ConfigPaths11350 = Paths11350<NestedConfig11350>;

interface HeavyProps11350 {
  config: DeepPartial11350<NestedConfig11350>;
  path?: ConfigPaths11350;
}

const HeavyComponent11350 = memo(function HeavyComponent11350({ config }: HeavyProps11350) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11350) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11350 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11350: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11350.displayName = 'HeavyComponent11350';
export default HeavyComponent11350;
