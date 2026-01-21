'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11575<T> = T extends (infer U)[]
  ? DeepReadonlyArray11575<U>
  : T extends object
  ? DeepReadonlyObject11575<T>
  : T;

interface DeepReadonlyArray11575<T> extends ReadonlyArray<DeepReadonly11575<T>> {}

type DeepReadonlyObject11575<T> = {
  readonly [P in keyof T]: DeepReadonly11575<T[P]>;
};

type UnionToIntersection11575<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11575<T> = UnionToIntersection11575<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11575<T extends unknown[], V> = [...T, V];

type TuplifyUnion11575<T, L = LastOf11575<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11575<TuplifyUnion11575<Exclude<T, L>>, L>;

type DeepPartial11575<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11575<T[P]> }
  : T;

type Paths11575<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11575<K, Paths11575<T[K], Prev11575[D]>> : never }[keyof T]
  : never;

type Prev11575 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11575<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11575 {
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

type ConfigPaths11575 = Paths11575<NestedConfig11575>;

interface HeavyProps11575 {
  config: DeepPartial11575<NestedConfig11575>;
  path?: ConfigPaths11575;
}

const HeavyComponent11575 = memo(function HeavyComponent11575({ config }: HeavyProps11575) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11575) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11575 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11575: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11575.displayName = 'HeavyComponent11575';
export default HeavyComponent11575;
