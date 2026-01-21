'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11105<T> = T extends (infer U)[]
  ? DeepReadonlyArray11105<U>
  : T extends object
  ? DeepReadonlyObject11105<T>
  : T;

interface DeepReadonlyArray11105<T> extends ReadonlyArray<DeepReadonly11105<T>> {}

type DeepReadonlyObject11105<T> = {
  readonly [P in keyof T]: DeepReadonly11105<T[P]>;
};

type UnionToIntersection11105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11105<T> = UnionToIntersection11105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11105<T extends unknown[], V> = [...T, V];

type TuplifyUnion11105<T, L = LastOf11105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11105<TuplifyUnion11105<Exclude<T, L>>, L>;

type DeepPartial11105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11105<T[P]> }
  : T;

type Paths11105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11105<K, Paths11105<T[K], Prev11105[D]>> : never }[keyof T]
  : never;

type Prev11105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11105 {
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

type ConfigPaths11105 = Paths11105<NestedConfig11105>;

interface HeavyProps11105 {
  config: DeepPartial11105<NestedConfig11105>;
  path?: ConfigPaths11105;
}

const HeavyComponent11105 = memo(function HeavyComponent11105({ config }: HeavyProps11105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11105.displayName = 'HeavyComponent11105';
export default HeavyComponent11105;
