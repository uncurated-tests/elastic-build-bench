'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11754<T> = T extends (infer U)[]
  ? DeepReadonlyArray11754<U>
  : T extends object
  ? DeepReadonlyObject11754<T>
  : T;

interface DeepReadonlyArray11754<T> extends ReadonlyArray<DeepReadonly11754<T>> {}

type DeepReadonlyObject11754<T> = {
  readonly [P in keyof T]: DeepReadonly11754<T[P]>;
};

type UnionToIntersection11754<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11754<T> = UnionToIntersection11754<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11754<T extends unknown[], V> = [...T, V];

type TuplifyUnion11754<T, L = LastOf11754<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11754<TuplifyUnion11754<Exclude<T, L>>, L>;

type DeepPartial11754<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11754<T[P]> }
  : T;

type Paths11754<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11754<K, Paths11754<T[K], Prev11754[D]>> : never }[keyof T]
  : never;

type Prev11754 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11754<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11754 {
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

type ConfigPaths11754 = Paths11754<NestedConfig11754>;

interface HeavyProps11754 {
  config: DeepPartial11754<NestedConfig11754>;
  path?: ConfigPaths11754;
}

const HeavyComponent11754 = memo(function HeavyComponent11754({ config }: HeavyProps11754) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11754) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11754 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11754: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11754.displayName = 'HeavyComponent11754';
export default HeavyComponent11754;
