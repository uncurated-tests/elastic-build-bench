'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11836<T> = T extends (infer U)[]
  ? DeepReadonlyArray11836<U>
  : T extends object
  ? DeepReadonlyObject11836<T>
  : T;

interface DeepReadonlyArray11836<T> extends ReadonlyArray<DeepReadonly11836<T>> {}

type DeepReadonlyObject11836<T> = {
  readonly [P in keyof T]: DeepReadonly11836<T[P]>;
};

type UnionToIntersection11836<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11836<T> = UnionToIntersection11836<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11836<T extends unknown[], V> = [...T, V];

type TuplifyUnion11836<T, L = LastOf11836<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11836<TuplifyUnion11836<Exclude<T, L>>, L>;

type DeepPartial11836<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11836<T[P]> }
  : T;

type Paths11836<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11836<K, Paths11836<T[K], Prev11836[D]>> : never }[keyof T]
  : never;

type Prev11836 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11836<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11836 {
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

type ConfigPaths11836 = Paths11836<NestedConfig11836>;

interface HeavyProps11836 {
  config: DeepPartial11836<NestedConfig11836>;
  path?: ConfigPaths11836;
}

const HeavyComponent11836 = memo(function HeavyComponent11836({ config }: HeavyProps11836) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11836) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11836 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11836: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11836.displayName = 'HeavyComponent11836';
export default HeavyComponent11836;
