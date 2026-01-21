'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11776<T> = T extends (infer U)[]
  ? DeepReadonlyArray11776<U>
  : T extends object
  ? DeepReadonlyObject11776<T>
  : T;

interface DeepReadonlyArray11776<T> extends ReadonlyArray<DeepReadonly11776<T>> {}

type DeepReadonlyObject11776<T> = {
  readonly [P in keyof T]: DeepReadonly11776<T[P]>;
};

type UnionToIntersection11776<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11776<T> = UnionToIntersection11776<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11776<T extends unknown[], V> = [...T, V];

type TuplifyUnion11776<T, L = LastOf11776<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11776<TuplifyUnion11776<Exclude<T, L>>, L>;

type DeepPartial11776<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11776<T[P]> }
  : T;

type Paths11776<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11776<K, Paths11776<T[K], Prev11776[D]>> : never }[keyof T]
  : never;

type Prev11776 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11776<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11776 {
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

type ConfigPaths11776 = Paths11776<NestedConfig11776>;

interface HeavyProps11776 {
  config: DeepPartial11776<NestedConfig11776>;
  path?: ConfigPaths11776;
}

const HeavyComponent11776 = memo(function HeavyComponent11776({ config }: HeavyProps11776) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11776) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11776 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11776: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11776.displayName = 'HeavyComponent11776';
export default HeavyComponent11776;
