'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11613<T> = T extends (infer U)[]
  ? DeepReadonlyArray11613<U>
  : T extends object
  ? DeepReadonlyObject11613<T>
  : T;

interface DeepReadonlyArray11613<T> extends ReadonlyArray<DeepReadonly11613<T>> {}

type DeepReadonlyObject11613<T> = {
  readonly [P in keyof T]: DeepReadonly11613<T[P]>;
};

type UnionToIntersection11613<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11613<T> = UnionToIntersection11613<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11613<T extends unknown[], V> = [...T, V];

type TuplifyUnion11613<T, L = LastOf11613<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11613<TuplifyUnion11613<Exclude<T, L>>, L>;

type DeepPartial11613<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11613<T[P]> }
  : T;

type Paths11613<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11613<K, Paths11613<T[K], Prev11613[D]>> : never }[keyof T]
  : never;

type Prev11613 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11613<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11613 {
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

type ConfigPaths11613 = Paths11613<NestedConfig11613>;

interface HeavyProps11613 {
  config: DeepPartial11613<NestedConfig11613>;
  path?: ConfigPaths11613;
}

const HeavyComponent11613 = memo(function HeavyComponent11613({ config }: HeavyProps11613) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11613) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11613 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11613: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11613.displayName = 'HeavyComponent11613';
export default HeavyComponent11613;
