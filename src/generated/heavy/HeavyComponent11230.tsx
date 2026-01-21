'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11230<T> = T extends (infer U)[]
  ? DeepReadonlyArray11230<U>
  : T extends object
  ? DeepReadonlyObject11230<T>
  : T;

interface DeepReadonlyArray11230<T> extends ReadonlyArray<DeepReadonly11230<T>> {}

type DeepReadonlyObject11230<T> = {
  readonly [P in keyof T]: DeepReadonly11230<T[P]>;
};

type UnionToIntersection11230<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11230<T> = UnionToIntersection11230<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11230<T extends unknown[], V> = [...T, V];

type TuplifyUnion11230<T, L = LastOf11230<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11230<TuplifyUnion11230<Exclude<T, L>>, L>;

type DeepPartial11230<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11230<T[P]> }
  : T;

type Paths11230<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11230<K, Paths11230<T[K], Prev11230[D]>> : never }[keyof T]
  : never;

type Prev11230 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11230<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11230 {
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

type ConfigPaths11230 = Paths11230<NestedConfig11230>;

interface HeavyProps11230 {
  config: DeepPartial11230<NestedConfig11230>;
  path?: ConfigPaths11230;
}

const HeavyComponent11230 = memo(function HeavyComponent11230({ config }: HeavyProps11230) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11230) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11230 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11230: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11230.displayName = 'HeavyComponent11230';
export default HeavyComponent11230;
