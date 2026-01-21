'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11224<T> = T extends (infer U)[]
  ? DeepReadonlyArray11224<U>
  : T extends object
  ? DeepReadonlyObject11224<T>
  : T;

interface DeepReadonlyArray11224<T> extends ReadonlyArray<DeepReadonly11224<T>> {}

type DeepReadonlyObject11224<T> = {
  readonly [P in keyof T]: DeepReadonly11224<T[P]>;
};

type UnionToIntersection11224<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11224<T> = UnionToIntersection11224<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11224<T extends unknown[], V> = [...T, V];

type TuplifyUnion11224<T, L = LastOf11224<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11224<TuplifyUnion11224<Exclude<T, L>>, L>;

type DeepPartial11224<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11224<T[P]> }
  : T;

type Paths11224<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11224<K, Paths11224<T[K], Prev11224[D]>> : never }[keyof T]
  : never;

type Prev11224 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11224<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11224 {
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

type ConfigPaths11224 = Paths11224<NestedConfig11224>;

interface HeavyProps11224 {
  config: DeepPartial11224<NestedConfig11224>;
  path?: ConfigPaths11224;
}

const HeavyComponent11224 = memo(function HeavyComponent11224({ config }: HeavyProps11224) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11224) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11224 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11224: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11224.displayName = 'HeavyComponent11224';
export default HeavyComponent11224;
