'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11788<T> = T extends (infer U)[]
  ? DeepReadonlyArray11788<U>
  : T extends object
  ? DeepReadonlyObject11788<T>
  : T;

interface DeepReadonlyArray11788<T> extends ReadonlyArray<DeepReadonly11788<T>> {}

type DeepReadonlyObject11788<T> = {
  readonly [P in keyof T]: DeepReadonly11788<T[P]>;
};

type UnionToIntersection11788<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11788<T> = UnionToIntersection11788<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11788<T extends unknown[], V> = [...T, V];

type TuplifyUnion11788<T, L = LastOf11788<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11788<TuplifyUnion11788<Exclude<T, L>>, L>;

type DeepPartial11788<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11788<T[P]> }
  : T;

type Paths11788<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11788<K, Paths11788<T[K], Prev11788[D]>> : never }[keyof T]
  : never;

type Prev11788 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11788<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11788 {
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

type ConfigPaths11788 = Paths11788<NestedConfig11788>;

interface HeavyProps11788 {
  config: DeepPartial11788<NestedConfig11788>;
  path?: ConfigPaths11788;
}

const HeavyComponent11788 = memo(function HeavyComponent11788({ config }: HeavyProps11788) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11788) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11788 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11788: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11788.displayName = 'HeavyComponent11788';
export default HeavyComponent11788;
