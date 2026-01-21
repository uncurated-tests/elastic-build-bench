'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11615<T> = T extends (infer U)[]
  ? DeepReadonlyArray11615<U>
  : T extends object
  ? DeepReadonlyObject11615<T>
  : T;

interface DeepReadonlyArray11615<T> extends ReadonlyArray<DeepReadonly11615<T>> {}

type DeepReadonlyObject11615<T> = {
  readonly [P in keyof T]: DeepReadonly11615<T[P]>;
};

type UnionToIntersection11615<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11615<T> = UnionToIntersection11615<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11615<T extends unknown[], V> = [...T, V];

type TuplifyUnion11615<T, L = LastOf11615<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11615<TuplifyUnion11615<Exclude<T, L>>, L>;

type DeepPartial11615<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11615<T[P]> }
  : T;

type Paths11615<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11615<K, Paths11615<T[K], Prev11615[D]>> : never }[keyof T]
  : never;

type Prev11615 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11615<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11615 {
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

type ConfigPaths11615 = Paths11615<NestedConfig11615>;

interface HeavyProps11615 {
  config: DeepPartial11615<NestedConfig11615>;
  path?: ConfigPaths11615;
}

const HeavyComponent11615 = memo(function HeavyComponent11615({ config }: HeavyProps11615) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11615) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11615 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11615: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11615.displayName = 'HeavyComponent11615';
export default HeavyComponent11615;
