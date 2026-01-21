'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11246<T> = T extends (infer U)[]
  ? DeepReadonlyArray11246<U>
  : T extends object
  ? DeepReadonlyObject11246<T>
  : T;

interface DeepReadonlyArray11246<T> extends ReadonlyArray<DeepReadonly11246<T>> {}

type DeepReadonlyObject11246<T> = {
  readonly [P in keyof T]: DeepReadonly11246<T[P]>;
};

type UnionToIntersection11246<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11246<T> = UnionToIntersection11246<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11246<T extends unknown[], V> = [...T, V];

type TuplifyUnion11246<T, L = LastOf11246<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11246<TuplifyUnion11246<Exclude<T, L>>, L>;

type DeepPartial11246<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11246<T[P]> }
  : T;

type Paths11246<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11246<K, Paths11246<T[K], Prev11246[D]>> : never }[keyof T]
  : never;

type Prev11246 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11246<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11246 {
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

type ConfigPaths11246 = Paths11246<NestedConfig11246>;

interface HeavyProps11246 {
  config: DeepPartial11246<NestedConfig11246>;
  path?: ConfigPaths11246;
}

const HeavyComponent11246 = memo(function HeavyComponent11246({ config }: HeavyProps11246) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11246) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11246 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11246: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11246.displayName = 'HeavyComponent11246';
export default HeavyComponent11246;
