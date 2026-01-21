'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11462<T> = T extends (infer U)[]
  ? DeepReadonlyArray11462<U>
  : T extends object
  ? DeepReadonlyObject11462<T>
  : T;

interface DeepReadonlyArray11462<T> extends ReadonlyArray<DeepReadonly11462<T>> {}

type DeepReadonlyObject11462<T> = {
  readonly [P in keyof T]: DeepReadonly11462<T[P]>;
};

type UnionToIntersection11462<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11462<T> = UnionToIntersection11462<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11462<T extends unknown[], V> = [...T, V];

type TuplifyUnion11462<T, L = LastOf11462<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11462<TuplifyUnion11462<Exclude<T, L>>, L>;

type DeepPartial11462<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11462<T[P]> }
  : T;

type Paths11462<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11462<K, Paths11462<T[K], Prev11462[D]>> : never }[keyof T]
  : never;

type Prev11462 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11462<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11462 {
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

type ConfigPaths11462 = Paths11462<NestedConfig11462>;

interface HeavyProps11462 {
  config: DeepPartial11462<NestedConfig11462>;
  path?: ConfigPaths11462;
}

const HeavyComponent11462 = memo(function HeavyComponent11462({ config }: HeavyProps11462) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11462) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11462 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11462: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11462.displayName = 'HeavyComponent11462';
export default HeavyComponent11462;
