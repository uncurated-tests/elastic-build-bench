'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11805<T> = T extends (infer U)[]
  ? DeepReadonlyArray11805<U>
  : T extends object
  ? DeepReadonlyObject11805<T>
  : T;

interface DeepReadonlyArray11805<T> extends ReadonlyArray<DeepReadonly11805<T>> {}

type DeepReadonlyObject11805<T> = {
  readonly [P in keyof T]: DeepReadonly11805<T[P]>;
};

type UnionToIntersection11805<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11805<T> = UnionToIntersection11805<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11805<T extends unknown[], V> = [...T, V];

type TuplifyUnion11805<T, L = LastOf11805<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11805<TuplifyUnion11805<Exclude<T, L>>, L>;

type DeepPartial11805<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11805<T[P]> }
  : T;

type Paths11805<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11805<K, Paths11805<T[K], Prev11805[D]>> : never }[keyof T]
  : never;

type Prev11805 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11805<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11805 {
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

type ConfigPaths11805 = Paths11805<NestedConfig11805>;

interface HeavyProps11805 {
  config: DeepPartial11805<NestedConfig11805>;
  path?: ConfigPaths11805;
}

const HeavyComponent11805 = memo(function HeavyComponent11805({ config }: HeavyProps11805) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11805) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11805 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11805: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11805.displayName = 'HeavyComponent11805';
export default HeavyComponent11805;
