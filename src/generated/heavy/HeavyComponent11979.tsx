'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11979<T> = T extends (infer U)[]
  ? DeepReadonlyArray11979<U>
  : T extends object
  ? DeepReadonlyObject11979<T>
  : T;

interface DeepReadonlyArray11979<T> extends ReadonlyArray<DeepReadonly11979<T>> {}

type DeepReadonlyObject11979<T> = {
  readonly [P in keyof T]: DeepReadonly11979<T[P]>;
};

type UnionToIntersection11979<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11979<T> = UnionToIntersection11979<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11979<T extends unknown[], V> = [...T, V];

type TuplifyUnion11979<T, L = LastOf11979<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11979<TuplifyUnion11979<Exclude<T, L>>, L>;

type DeepPartial11979<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11979<T[P]> }
  : T;

type Paths11979<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11979<K, Paths11979<T[K], Prev11979[D]>> : never }[keyof T]
  : never;

type Prev11979 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11979<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11979 {
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

type ConfigPaths11979 = Paths11979<NestedConfig11979>;

interface HeavyProps11979 {
  config: DeepPartial11979<NestedConfig11979>;
  path?: ConfigPaths11979;
}

const HeavyComponent11979 = memo(function HeavyComponent11979({ config }: HeavyProps11979) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11979) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11979 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11979: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11979.displayName = 'HeavyComponent11979';
export default HeavyComponent11979;
