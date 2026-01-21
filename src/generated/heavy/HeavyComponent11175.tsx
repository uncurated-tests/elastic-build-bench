'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11175<T> = T extends (infer U)[]
  ? DeepReadonlyArray11175<U>
  : T extends object
  ? DeepReadonlyObject11175<T>
  : T;

interface DeepReadonlyArray11175<T> extends ReadonlyArray<DeepReadonly11175<T>> {}

type DeepReadonlyObject11175<T> = {
  readonly [P in keyof T]: DeepReadonly11175<T[P]>;
};

type UnionToIntersection11175<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11175<T> = UnionToIntersection11175<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11175<T extends unknown[], V> = [...T, V];

type TuplifyUnion11175<T, L = LastOf11175<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11175<TuplifyUnion11175<Exclude<T, L>>, L>;

type DeepPartial11175<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11175<T[P]> }
  : T;

type Paths11175<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11175<K, Paths11175<T[K], Prev11175[D]>> : never }[keyof T]
  : never;

type Prev11175 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11175<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11175 {
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

type ConfigPaths11175 = Paths11175<NestedConfig11175>;

interface HeavyProps11175 {
  config: DeepPartial11175<NestedConfig11175>;
  path?: ConfigPaths11175;
}

const HeavyComponent11175 = memo(function HeavyComponent11175({ config }: HeavyProps11175) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11175) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11175 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11175: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11175.displayName = 'HeavyComponent11175';
export default HeavyComponent11175;
