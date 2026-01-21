'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11390<T> = T extends (infer U)[]
  ? DeepReadonlyArray11390<U>
  : T extends object
  ? DeepReadonlyObject11390<T>
  : T;

interface DeepReadonlyArray11390<T> extends ReadonlyArray<DeepReadonly11390<T>> {}

type DeepReadonlyObject11390<T> = {
  readonly [P in keyof T]: DeepReadonly11390<T[P]>;
};

type UnionToIntersection11390<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11390<T> = UnionToIntersection11390<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11390<T extends unknown[], V> = [...T, V];

type TuplifyUnion11390<T, L = LastOf11390<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11390<TuplifyUnion11390<Exclude<T, L>>, L>;

type DeepPartial11390<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11390<T[P]> }
  : T;

type Paths11390<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11390<K, Paths11390<T[K], Prev11390[D]>> : never }[keyof T]
  : never;

type Prev11390 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11390<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11390 {
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

type ConfigPaths11390 = Paths11390<NestedConfig11390>;

interface HeavyProps11390 {
  config: DeepPartial11390<NestedConfig11390>;
  path?: ConfigPaths11390;
}

const HeavyComponent11390 = memo(function HeavyComponent11390({ config }: HeavyProps11390) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11390) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11390 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11390: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11390.displayName = 'HeavyComponent11390';
export default HeavyComponent11390;
