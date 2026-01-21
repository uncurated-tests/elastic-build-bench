'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11546<T> = T extends (infer U)[]
  ? DeepReadonlyArray11546<U>
  : T extends object
  ? DeepReadonlyObject11546<T>
  : T;

interface DeepReadonlyArray11546<T> extends ReadonlyArray<DeepReadonly11546<T>> {}

type DeepReadonlyObject11546<T> = {
  readonly [P in keyof T]: DeepReadonly11546<T[P]>;
};

type UnionToIntersection11546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11546<T> = UnionToIntersection11546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11546<T extends unknown[], V> = [...T, V];

type TuplifyUnion11546<T, L = LastOf11546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11546<TuplifyUnion11546<Exclude<T, L>>, L>;

type DeepPartial11546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11546<T[P]> }
  : T;

type Paths11546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11546<K, Paths11546<T[K], Prev11546[D]>> : never }[keyof T]
  : never;

type Prev11546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11546 {
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

type ConfigPaths11546 = Paths11546<NestedConfig11546>;

interface HeavyProps11546 {
  config: DeepPartial11546<NestedConfig11546>;
  path?: ConfigPaths11546;
}

const HeavyComponent11546 = memo(function HeavyComponent11546({ config }: HeavyProps11546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11546.displayName = 'HeavyComponent11546';
export default HeavyComponent11546;
