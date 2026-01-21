'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11833<T> = T extends (infer U)[]
  ? DeepReadonlyArray11833<U>
  : T extends object
  ? DeepReadonlyObject11833<T>
  : T;

interface DeepReadonlyArray11833<T> extends ReadonlyArray<DeepReadonly11833<T>> {}

type DeepReadonlyObject11833<T> = {
  readonly [P in keyof T]: DeepReadonly11833<T[P]>;
};

type UnionToIntersection11833<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11833<T> = UnionToIntersection11833<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11833<T extends unknown[], V> = [...T, V];

type TuplifyUnion11833<T, L = LastOf11833<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11833<TuplifyUnion11833<Exclude<T, L>>, L>;

type DeepPartial11833<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11833<T[P]> }
  : T;

type Paths11833<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11833<K, Paths11833<T[K], Prev11833[D]>> : never }[keyof T]
  : never;

type Prev11833 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11833<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11833 {
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

type ConfigPaths11833 = Paths11833<NestedConfig11833>;

interface HeavyProps11833 {
  config: DeepPartial11833<NestedConfig11833>;
  path?: ConfigPaths11833;
}

const HeavyComponent11833 = memo(function HeavyComponent11833({ config }: HeavyProps11833) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11833) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11833 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11833: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11833.displayName = 'HeavyComponent11833';
export default HeavyComponent11833;
