'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11088<T> = T extends (infer U)[]
  ? DeepReadonlyArray11088<U>
  : T extends object
  ? DeepReadonlyObject11088<T>
  : T;

interface DeepReadonlyArray11088<T> extends ReadonlyArray<DeepReadonly11088<T>> {}

type DeepReadonlyObject11088<T> = {
  readonly [P in keyof T]: DeepReadonly11088<T[P]>;
};

type UnionToIntersection11088<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11088<T> = UnionToIntersection11088<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11088<T extends unknown[], V> = [...T, V];

type TuplifyUnion11088<T, L = LastOf11088<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11088<TuplifyUnion11088<Exclude<T, L>>, L>;

type DeepPartial11088<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11088<T[P]> }
  : T;

type Paths11088<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11088<K, Paths11088<T[K], Prev11088[D]>> : never }[keyof T]
  : never;

type Prev11088 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11088<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11088 {
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

type ConfigPaths11088 = Paths11088<NestedConfig11088>;

interface HeavyProps11088 {
  config: DeepPartial11088<NestedConfig11088>;
  path?: ConfigPaths11088;
}

const HeavyComponent11088 = memo(function HeavyComponent11088({ config }: HeavyProps11088) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11088) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11088 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11088: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11088.displayName = 'HeavyComponent11088';
export default HeavyComponent11088;
