'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11965<T> = T extends (infer U)[]
  ? DeepReadonlyArray11965<U>
  : T extends object
  ? DeepReadonlyObject11965<T>
  : T;

interface DeepReadonlyArray11965<T> extends ReadonlyArray<DeepReadonly11965<T>> {}

type DeepReadonlyObject11965<T> = {
  readonly [P in keyof T]: DeepReadonly11965<T[P]>;
};

type UnionToIntersection11965<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11965<T> = UnionToIntersection11965<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11965<T extends unknown[], V> = [...T, V];

type TuplifyUnion11965<T, L = LastOf11965<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11965<TuplifyUnion11965<Exclude<T, L>>, L>;

type DeepPartial11965<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11965<T[P]> }
  : T;

type Paths11965<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11965<K, Paths11965<T[K], Prev11965[D]>> : never }[keyof T]
  : never;

type Prev11965 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11965<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11965 {
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

type ConfigPaths11965 = Paths11965<NestedConfig11965>;

interface HeavyProps11965 {
  config: DeepPartial11965<NestedConfig11965>;
  path?: ConfigPaths11965;
}

const HeavyComponent11965 = memo(function HeavyComponent11965({ config }: HeavyProps11965) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11965) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11965 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11965: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11965.displayName = 'HeavyComponent11965';
export default HeavyComponent11965;
