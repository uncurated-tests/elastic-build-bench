'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11569<T> = T extends (infer U)[]
  ? DeepReadonlyArray11569<U>
  : T extends object
  ? DeepReadonlyObject11569<T>
  : T;

interface DeepReadonlyArray11569<T> extends ReadonlyArray<DeepReadonly11569<T>> {}

type DeepReadonlyObject11569<T> = {
  readonly [P in keyof T]: DeepReadonly11569<T[P]>;
};

type UnionToIntersection11569<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11569<T> = UnionToIntersection11569<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11569<T extends unknown[], V> = [...T, V];

type TuplifyUnion11569<T, L = LastOf11569<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11569<TuplifyUnion11569<Exclude<T, L>>, L>;

type DeepPartial11569<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11569<T[P]> }
  : T;

type Paths11569<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11569<K, Paths11569<T[K], Prev11569[D]>> : never }[keyof T]
  : never;

type Prev11569 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11569<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11569 {
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

type ConfigPaths11569 = Paths11569<NestedConfig11569>;

interface HeavyProps11569 {
  config: DeepPartial11569<NestedConfig11569>;
  path?: ConfigPaths11569;
}

const HeavyComponent11569 = memo(function HeavyComponent11569({ config }: HeavyProps11569) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11569) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11569 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11569: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11569.displayName = 'HeavyComponent11569';
export default HeavyComponent11569;
