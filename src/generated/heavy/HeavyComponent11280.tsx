'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11280<T> = T extends (infer U)[]
  ? DeepReadonlyArray11280<U>
  : T extends object
  ? DeepReadonlyObject11280<T>
  : T;

interface DeepReadonlyArray11280<T> extends ReadonlyArray<DeepReadonly11280<T>> {}

type DeepReadonlyObject11280<T> = {
  readonly [P in keyof T]: DeepReadonly11280<T[P]>;
};

type UnionToIntersection11280<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11280<T> = UnionToIntersection11280<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11280<T extends unknown[], V> = [...T, V];

type TuplifyUnion11280<T, L = LastOf11280<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11280<TuplifyUnion11280<Exclude<T, L>>, L>;

type DeepPartial11280<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11280<T[P]> }
  : T;

type Paths11280<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11280<K, Paths11280<T[K], Prev11280[D]>> : never }[keyof T]
  : never;

type Prev11280 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11280<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11280 {
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

type ConfigPaths11280 = Paths11280<NestedConfig11280>;

interface HeavyProps11280 {
  config: DeepPartial11280<NestedConfig11280>;
  path?: ConfigPaths11280;
}

const HeavyComponent11280 = memo(function HeavyComponent11280({ config }: HeavyProps11280) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11280) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11280 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11280: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11280.displayName = 'HeavyComponent11280';
export default HeavyComponent11280;
