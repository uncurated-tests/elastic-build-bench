'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11925<T> = T extends (infer U)[]
  ? DeepReadonlyArray11925<U>
  : T extends object
  ? DeepReadonlyObject11925<T>
  : T;

interface DeepReadonlyArray11925<T> extends ReadonlyArray<DeepReadonly11925<T>> {}

type DeepReadonlyObject11925<T> = {
  readonly [P in keyof T]: DeepReadonly11925<T[P]>;
};

type UnionToIntersection11925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11925<T> = UnionToIntersection11925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11925<T extends unknown[], V> = [...T, V];

type TuplifyUnion11925<T, L = LastOf11925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11925<TuplifyUnion11925<Exclude<T, L>>, L>;

type DeepPartial11925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11925<T[P]> }
  : T;

type Paths11925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11925<K, Paths11925<T[K], Prev11925[D]>> : never }[keyof T]
  : never;

type Prev11925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11925 {
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

type ConfigPaths11925 = Paths11925<NestedConfig11925>;

interface HeavyProps11925 {
  config: DeepPartial11925<NestedConfig11925>;
  path?: ConfigPaths11925;
}

const HeavyComponent11925 = memo(function HeavyComponent11925({ config }: HeavyProps11925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11925.displayName = 'HeavyComponent11925';
export default HeavyComponent11925;
