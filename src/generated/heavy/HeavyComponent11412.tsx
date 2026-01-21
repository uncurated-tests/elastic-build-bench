'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11412<T> = T extends (infer U)[]
  ? DeepReadonlyArray11412<U>
  : T extends object
  ? DeepReadonlyObject11412<T>
  : T;

interface DeepReadonlyArray11412<T> extends ReadonlyArray<DeepReadonly11412<T>> {}

type DeepReadonlyObject11412<T> = {
  readonly [P in keyof T]: DeepReadonly11412<T[P]>;
};

type UnionToIntersection11412<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11412<T> = UnionToIntersection11412<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11412<T extends unknown[], V> = [...T, V];

type TuplifyUnion11412<T, L = LastOf11412<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11412<TuplifyUnion11412<Exclude<T, L>>, L>;

type DeepPartial11412<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11412<T[P]> }
  : T;

type Paths11412<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11412<K, Paths11412<T[K], Prev11412[D]>> : never }[keyof T]
  : never;

type Prev11412 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11412<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11412 {
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

type ConfigPaths11412 = Paths11412<NestedConfig11412>;

interface HeavyProps11412 {
  config: DeepPartial11412<NestedConfig11412>;
  path?: ConfigPaths11412;
}

const HeavyComponent11412 = memo(function HeavyComponent11412({ config }: HeavyProps11412) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11412) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11412 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11412: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11412.displayName = 'HeavyComponent11412';
export default HeavyComponent11412;
