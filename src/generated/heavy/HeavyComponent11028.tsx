'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11028<T> = T extends (infer U)[]
  ? DeepReadonlyArray11028<U>
  : T extends object
  ? DeepReadonlyObject11028<T>
  : T;

interface DeepReadonlyArray11028<T> extends ReadonlyArray<DeepReadonly11028<T>> {}

type DeepReadonlyObject11028<T> = {
  readonly [P in keyof T]: DeepReadonly11028<T[P]>;
};

type UnionToIntersection11028<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11028<T> = UnionToIntersection11028<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11028<T extends unknown[], V> = [...T, V];

type TuplifyUnion11028<T, L = LastOf11028<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11028<TuplifyUnion11028<Exclude<T, L>>, L>;

type DeepPartial11028<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11028<T[P]> }
  : T;

type Paths11028<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11028<K, Paths11028<T[K], Prev11028[D]>> : never }[keyof T]
  : never;

type Prev11028 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11028<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11028 {
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

type ConfigPaths11028 = Paths11028<NestedConfig11028>;

interface HeavyProps11028 {
  config: DeepPartial11028<NestedConfig11028>;
  path?: ConfigPaths11028;
}

const HeavyComponent11028 = memo(function HeavyComponent11028({ config }: HeavyProps11028) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11028) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11028 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11028: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11028.displayName = 'HeavyComponent11028';
export default HeavyComponent11028;
