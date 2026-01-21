'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11452<T> = T extends (infer U)[]
  ? DeepReadonlyArray11452<U>
  : T extends object
  ? DeepReadonlyObject11452<T>
  : T;

interface DeepReadonlyArray11452<T> extends ReadonlyArray<DeepReadonly11452<T>> {}

type DeepReadonlyObject11452<T> = {
  readonly [P in keyof T]: DeepReadonly11452<T[P]>;
};

type UnionToIntersection11452<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11452<T> = UnionToIntersection11452<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11452<T extends unknown[], V> = [...T, V];

type TuplifyUnion11452<T, L = LastOf11452<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11452<TuplifyUnion11452<Exclude<T, L>>, L>;

type DeepPartial11452<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11452<T[P]> }
  : T;

type Paths11452<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11452<K, Paths11452<T[K], Prev11452[D]>> : never }[keyof T]
  : never;

type Prev11452 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11452<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11452 {
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

type ConfigPaths11452 = Paths11452<NestedConfig11452>;

interface HeavyProps11452 {
  config: DeepPartial11452<NestedConfig11452>;
  path?: ConfigPaths11452;
}

const HeavyComponent11452 = memo(function HeavyComponent11452({ config }: HeavyProps11452) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11452) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11452 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11452: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11452.displayName = 'HeavyComponent11452';
export default HeavyComponent11452;
