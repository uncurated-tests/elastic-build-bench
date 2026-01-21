'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11874<T> = T extends (infer U)[]
  ? DeepReadonlyArray11874<U>
  : T extends object
  ? DeepReadonlyObject11874<T>
  : T;

interface DeepReadonlyArray11874<T> extends ReadonlyArray<DeepReadonly11874<T>> {}

type DeepReadonlyObject11874<T> = {
  readonly [P in keyof T]: DeepReadonly11874<T[P]>;
};

type UnionToIntersection11874<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11874<T> = UnionToIntersection11874<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11874<T extends unknown[], V> = [...T, V];

type TuplifyUnion11874<T, L = LastOf11874<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11874<TuplifyUnion11874<Exclude<T, L>>, L>;

type DeepPartial11874<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11874<T[P]> }
  : T;

type Paths11874<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11874<K, Paths11874<T[K], Prev11874[D]>> : never }[keyof T]
  : never;

type Prev11874 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11874<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11874 {
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

type ConfigPaths11874 = Paths11874<NestedConfig11874>;

interface HeavyProps11874 {
  config: DeepPartial11874<NestedConfig11874>;
  path?: ConfigPaths11874;
}

const HeavyComponent11874 = memo(function HeavyComponent11874({ config }: HeavyProps11874) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11874) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11874 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11874: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11874.displayName = 'HeavyComponent11874';
export default HeavyComponent11874;
