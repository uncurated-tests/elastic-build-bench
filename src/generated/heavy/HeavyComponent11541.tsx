'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11541<T> = T extends (infer U)[]
  ? DeepReadonlyArray11541<U>
  : T extends object
  ? DeepReadonlyObject11541<T>
  : T;

interface DeepReadonlyArray11541<T> extends ReadonlyArray<DeepReadonly11541<T>> {}

type DeepReadonlyObject11541<T> = {
  readonly [P in keyof T]: DeepReadonly11541<T[P]>;
};

type UnionToIntersection11541<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11541<T> = UnionToIntersection11541<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11541<T extends unknown[], V> = [...T, V];

type TuplifyUnion11541<T, L = LastOf11541<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11541<TuplifyUnion11541<Exclude<T, L>>, L>;

type DeepPartial11541<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11541<T[P]> }
  : T;

type Paths11541<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11541<K, Paths11541<T[K], Prev11541[D]>> : never }[keyof T]
  : never;

type Prev11541 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11541<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11541 {
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

type ConfigPaths11541 = Paths11541<NestedConfig11541>;

interface HeavyProps11541 {
  config: DeepPartial11541<NestedConfig11541>;
  path?: ConfigPaths11541;
}

const HeavyComponent11541 = memo(function HeavyComponent11541({ config }: HeavyProps11541) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11541) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11541 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11541: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11541.displayName = 'HeavyComponent11541';
export default HeavyComponent11541;
