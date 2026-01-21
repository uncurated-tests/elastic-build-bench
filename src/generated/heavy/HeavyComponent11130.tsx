'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11130<T> = T extends (infer U)[]
  ? DeepReadonlyArray11130<U>
  : T extends object
  ? DeepReadonlyObject11130<T>
  : T;

interface DeepReadonlyArray11130<T> extends ReadonlyArray<DeepReadonly11130<T>> {}

type DeepReadonlyObject11130<T> = {
  readonly [P in keyof T]: DeepReadonly11130<T[P]>;
};

type UnionToIntersection11130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11130<T> = UnionToIntersection11130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11130<T extends unknown[], V> = [...T, V];

type TuplifyUnion11130<T, L = LastOf11130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11130<TuplifyUnion11130<Exclude<T, L>>, L>;

type DeepPartial11130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11130<T[P]> }
  : T;

type Paths11130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11130<K, Paths11130<T[K], Prev11130[D]>> : never }[keyof T]
  : never;

type Prev11130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11130 {
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

type ConfigPaths11130 = Paths11130<NestedConfig11130>;

interface HeavyProps11130 {
  config: DeepPartial11130<NestedConfig11130>;
  path?: ConfigPaths11130;
}

const HeavyComponent11130 = memo(function HeavyComponent11130({ config }: HeavyProps11130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11130.displayName = 'HeavyComponent11130';
export default HeavyComponent11130;
