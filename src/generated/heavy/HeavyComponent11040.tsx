'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11040<T> = T extends (infer U)[]
  ? DeepReadonlyArray11040<U>
  : T extends object
  ? DeepReadonlyObject11040<T>
  : T;

interface DeepReadonlyArray11040<T> extends ReadonlyArray<DeepReadonly11040<T>> {}

type DeepReadonlyObject11040<T> = {
  readonly [P in keyof T]: DeepReadonly11040<T[P]>;
};

type UnionToIntersection11040<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11040<T> = UnionToIntersection11040<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11040<T extends unknown[], V> = [...T, V];

type TuplifyUnion11040<T, L = LastOf11040<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11040<TuplifyUnion11040<Exclude<T, L>>, L>;

type DeepPartial11040<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11040<T[P]> }
  : T;

type Paths11040<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11040<K, Paths11040<T[K], Prev11040[D]>> : never }[keyof T]
  : never;

type Prev11040 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11040<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11040 {
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

type ConfigPaths11040 = Paths11040<NestedConfig11040>;

interface HeavyProps11040 {
  config: DeepPartial11040<NestedConfig11040>;
  path?: ConfigPaths11040;
}

const HeavyComponent11040 = memo(function HeavyComponent11040({ config }: HeavyProps11040) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11040) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11040 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11040: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11040.displayName = 'HeavyComponent11040';
export default HeavyComponent11040;
