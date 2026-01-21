'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11758<T> = T extends (infer U)[]
  ? DeepReadonlyArray11758<U>
  : T extends object
  ? DeepReadonlyObject11758<T>
  : T;

interface DeepReadonlyArray11758<T> extends ReadonlyArray<DeepReadonly11758<T>> {}

type DeepReadonlyObject11758<T> = {
  readonly [P in keyof T]: DeepReadonly11758<T[P]>;
};

type UnionToIntersection11758<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11758<T> = UnionToIntersection11758<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11758<T extends unknown[], V> = [...T, V];

type TuplifyUnion11758<T, L = LastOf11758<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11758<TuplifyUnion11758<Exclude<T, L>>, L>;

type DeepPartial11758<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11758<T[P]> }
  : T;

type Paths11758<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11758<K, Paths11758<T[K], Prev11758[D]>> : never }[keyof T]
  : never;

type Prev11758 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11758<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11758 {
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

type ConfigPaths11758 = Paths11758<NestedConfig11758>;

interface HeavyProps11758 {
  config: DeepPartial11758<NestedConfig11758>;
  path?: ConfigPaths11758;
}

const HeavyComponent11758 = memo(function HeavyComponent11758({ config }: HeavyProps11758) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11758) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11758 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11758: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11758.displayName = 'HeavyComponent11758';
export default HeavyComponent11758;
