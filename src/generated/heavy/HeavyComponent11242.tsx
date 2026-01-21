'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11242<T> = T extends (infer U)[]
  ? DeepReadonlyArray11242<U>
  : T extends object
  ? DeepReadonlyObject11242<T>
  : T;

interface DeepReadonlyArray11242<T> extends ReadonlyArray<DeepReadonly11242<T>> {}

type DeepReadonlyObject11242<T> = {
  readonly [P in keyof T]: DeepReadonly11242<T[P]>;
};

type UnionToIntersection11242<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11242<T> = UnionToIntersection11242<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11242<T extends unknown[], V> = [...T, V];

type TuplifyUnion11242<T, L = LastOf11242<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11242<TuplifyUnion11242<Exclude<T, L>>, L>;

type DeepPartial11242<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11242<T[P]> }
  : T;

type Paths11242<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11242<K, Paths11242<T[K], Prev11242[D]>> : never }[keyof T]
  : never;

type Prev11242 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11242<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11242 {
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

type ConfigPaths11242 = Paths11242<NestedConfig11242>;

interface HeavyProps11242 {
  config: DeepPartial11242<NestedConfig11242>;
  path?: ConfigPaths11242;
}

const HeavyComponent11242 = memo(function HeavyComponent11242({ config }: HeavyProps11242) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11242) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11242 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11242: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11242.displayName = 'HeavyComponent11242';
export default HeavyComponent11242;
