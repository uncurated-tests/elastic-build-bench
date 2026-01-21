'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11337<T> = T extends (infer U)[]
  ? DeepReadonlyArray11337<U>
  : T extends object
  ? DeepReadonlyObject11337<T>
  : T;

interface DeepReadonlyArray11337<T> extends ReadonlyArray<DeepReadonly11337<T>> {}

type DeepReadonlyObject11337<T> = {
  readonly [P in keyof T]: DeepReadonly11337<T[P]>;
};

type UnionToIntersection11337<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11337<T> = UnionToIntersection11337<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11337<T extends unknown[], V> = [...T, V];

type TuplifyUnion11337<T, L = LastOf11337<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11337<TuplifyUnion11337<Exclude<T, L>>, L>;

type DeepPartial11337<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11337<T[P]> }
  : T;

type Paths11337<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11337<K, Paths11337<T[K], Prev11337[D]>> : never }[keyof T]
  : never;

type Prev11337 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11337<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11337 {
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

type ConfigPaths11337 = Paths11337<NestedConfig11337>;

interface HeavyProps11337 {
  config: DeepPartial11337<NestedConfig11337>;
  path?: ConfigPaths11337;
}

const HeavyComponent11337 = memo(function HeavyComponent11337({ config }: HeavyProps11337) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11337) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11337 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11337: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11337.displayName = 'HeavyComponent11337';
export default HeavyComponent11337;
