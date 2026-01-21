'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11801<T> = T extends (infer U)[]
  ? DeepReadonlyArray11801<U>
  : T extends object
  ? DeepReadonlyObject11801<T>
  : T;

interface DeepReadonlyArray11801<T> extends ReadonlyArray<DeepReadonly11801<T>> {}

type DeepReadonlyObject11801<T> = {
  readonly [P in keyof T]: DeepReadonly11801<T[P]>;
};

type UnionToIntersection11801<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11801<T> = UnionToIntersection11801<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11801<T extends unknown[], V> = [...T, V];

type TuplifyUnion11801<T, L = LastOf11801<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11801<TuplifyUnion11801<Exclude<T, L>>, L>;

type DeepPartial11801<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11801<T[P]> }
  : T;

type Paths11801<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11801<K, Paths11801<T[K], Prev11801[D]>> : never }[keyof T]
  : never;

type Prev11801 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11801<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11801 {
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

type ConfigPaths11801 = Paths11801<NestedConfig11801>;

interface HeavyProps11801 {
  config: DeepPartial11801<NestedConfig11801>;
  path?: ConfigPaths11801;
}

const HeavyComponent11801 = memo(function HeavyComponent11801({ config }: HeavyProps11801) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11801) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11801 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11801: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11801.displayName = 'HeavyComponent11801';
export default HeavyComponent11801;
