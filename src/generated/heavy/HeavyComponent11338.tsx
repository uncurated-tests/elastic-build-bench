'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11338<T> = T extends (infer U)[]
  ? DeepReadonlyArray11338<U>
  : T extends object
  ? DeepReadonlyObject11338<T>
  : T;

interface DeepReadonlyArray11338<T> extends ReadonlyArray<DeepReadonly11338<T>> {}

type DeepReadonlyObject11338<T> = {
  readonly [P in keyof T]: DeepReadonly11338<T[P]>;
};

type UnionToIntersection11338<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11338<T> = UnionToIntersection11338<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11338<T extends unknown[], V> = [...T, V];

type TuplifyUnion11338<T, L = LastOf11338<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11338<TuplifyUnion11338<Exclude<T, L>>, L>;

type DeepPartial11338<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11338<T[P]> }
  : T;

type Paths11338<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11338<K, Paths11338<T[K], Prev11338[D]>> : never }[keyof T]
  : never;

type Prev11338 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11338<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11338 {
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

type ConfigPaths11338 = Paths11338<NestedConfig11338>;

interface HeavyProps11338 {
  config: DeepPartial11338<NestedConfig11338>;
  path?: ConfigPaths11338;
}

const HeavyComponent11338 = memo(function HeavyComponent11338({ config }: HeavyProps11338) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11338) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11338 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11338: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11338.displayName = 'HeavyComponent11338';
export default HeavyComponent11338;
