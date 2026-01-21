'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11977<T> = T extends (infer U)[]
  ? DeepReadonlyArray11977<U>
  : T extends object
  ? DeepReadonlyObject11977<T>
  : T;

interface DeepReadonlyArray11977<T> extends ReadonlyArray<DeepReadonly11977<T>> {}

type DeepReadonlyObject11977<T> = {
  readonly [P in keyof T]: DeepReadonly11977<T[P]>;
};

type UnionToIntersection11977<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11977<T> = UnionToIntersection11977<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11977<T extends unknown[], V> = [...T, V];

type TuplifyUnion11977<T, L = LastOf11977<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11977<TuplifyUnion11977<Exclude<T, L>>, L>;

type DeepPartial11977<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11977<T[P]> }
  : T;

type Paths11977<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11977<K, Paths11977<T[K], Prev11977[D]>> : never }[keyof T]
  : never;

type Prev11977 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11977<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11977 {
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

type ConfigPaths11977 = Paths11977<NestedConfig11977>;

interface HeavyProps11977 {
  config: DeepPartial11977<NestedConfig11977>;
  path?: ConfigPaths11977;
}

const HeavyComponent11977 = memo(function HeavyComponent11977({ config }: HeavyProps11977) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11977) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11977 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11977: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11977.displayName = 'HeavyComponent11977';
export default HeavyComponent11977;
