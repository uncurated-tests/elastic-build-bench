'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11913<T> = T extends (infer U)[]
  ? DeepReadonlyArray11913<U>
  : T extends object
  ? DeepReadonlyObject11913<T>
  : T;

interface DeepReadonlyArray11913<T> extends ReadonlyArray<DeepReadonly11913<T>> {}

type DeepReadonlyObject11913<T> = {
  readonly [P in keyof T]: DeepReadonly11913<T[P]>;
};

type UnionToIntersection11913<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11913<T> = UnionToIntersection11913<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11913<T extends unknown[], V> = [...T, V];

type TuplifyUnion11913<T, L = LastOf11913<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11913<TuplifyUnion11913<Exclude<T, L>>, L>;

type DeepPartial11913<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11913<T[P]> }
  : T;

type Paths11913<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11913<K, Paths11913<T[K], Prev11913[D]>> : never }[keyof T]
  : never;

type Prev11913 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11913<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11913 {
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

type ConfigPaths11913 = Paths11913<NestedConfig11913>;

interface HeavyProps11913 {
  config: DeepPartial11913<NestedConfig11913>;
  path?: ConfigPaths11913;
}

const HeavyComponent11913 = memo(function HeavyComponent11913({ config }: HeavyProps11913) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11913) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11913 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11913: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11913.displayName = 'HeavyComponent11913';
export default HeavyComponent11913;
