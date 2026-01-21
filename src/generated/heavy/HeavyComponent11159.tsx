'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11159<T> = T extends (infer U)[]
  ? DeepReadonlyArray11159<U>
  : T extends object
  ? DeepReadonlyObject11159<T>
  : T;

interface DeepReadonlyArray11159<T> extends ReadonlyArray<DeepReadonly11159<T>> {}

type DeepReadonlyObject11159<T> = {
  readonly [P in keyof T]: DeepReadonly11159<T[P]>;
};

type UnionToIntersection11159<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11159<T> = UnionToIntersection11159<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11159<T extends unknown[], V> = [...T, V];

type TuplifyUnion11159<T, L = LastOf11159<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11159<TuplifyUnion11159<Exclude<T, L>>, L>;

type DeepPartial11159<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11159<T[P]> }
  : T;

type Paths11159<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11159<K, Paths11159<T[K], Prev11159[D]>> : never }[keyof T]
  : never;

type Prev11159 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11159<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11159 {
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

type ConfigPaths11159 = Paths11159<NestedConfig11159>;

interface HeavyProps11159 {
  config: DeepPartial11159<NestedConfig11159>;
  path?: ConfigPaths11159;
}

const HeavyComponent11159 = memo(function HeavyComponent11159({ config }: HeavyProps11159) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11159) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11159 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11159: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11159.displayName = 'HeavyComponent11159';
export default HeavyComponent11159;
