'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11070<T> = T extends (infer U)[]
  ? DeepReadonlyArray11070<U>
  : T extends object
  ? DeepReadonlyObject11070<T>
  : T;

interface DeepReadonlyArray11070<T> extends ReadonlyArray<DeepReadonly11070<T>> {}

type DeepReadonlyObject11070<T> = {
  readonly [P in keyof T]: DeepReadonly11070<T[P]>;
};

type UnionToIntersection11070<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11070<T> = UnionToIntersection11070<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11070<T extends unknown[], V> = [...T, V];

type TuplifyUnion11070<T, L = LastOf11070<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11070<TuplifyUnion11070<Exclude<T, L>>, L>;

type DeepPartial11070<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11070<T[P]> }
  : T;

type Paths11070<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11070<K, Paths11070<T[K], Prev11070[D]>> : never }[keyof T]
  : never;

type Prev11070 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11070<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11070 {
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

type ConfigPaths11070 = Paths11070<NestedConfig11070>;

interface HeavyProps11070 {
  config: DeepPartial11070<NestedConfig11070>;
  path?: ConfigPaths11070;
}

const HeavyComponent11070 = memo(function HeavyComponent11070({ config }: HeavyProps11070) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11070) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11070 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11070: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11070.displayName = 'HeavyComponent11070';
export default HeavyComponent11070;
