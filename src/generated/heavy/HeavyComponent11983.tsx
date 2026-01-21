'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11983<T> = T extends (infer U)[]
  ? DeepReadonlyArray11983<U>
  : T extends object
  ? DeepReadonlyObject11983<T>
  : T;

interface DeepReadonlyArray11983<T> extends ReadonlyArray<DeepReadonly11983<T>> {}

type DeepReadonlyObject11983<T> = {
  readonly [P in keyof T]: DeepReadonly11983<T[P]>;
};

type UnionToIntersection11983<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11983<T> = UnionToIntersection11983<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11983<T extends unknown[], V> = [...T, V];

type TuplifyUnion11983<T, L = LastOf11983<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11983<TuplifyUnion11983<Exclude<T, L>>, L>;

type DeepPartial11983<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11983<T[P]> }
  : T;

type Paths11983<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11983<K, Paths11983<T[K], Prev11983[D]>> : never }[keyof T]
  : never;

type Prev11983 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11983<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11983 {
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

type ConfigPaths11983 = Paths11983<NestedConfig11983>;

interface HeavyProps11983 {
  config: DeepPartial11983<NestedConfig11983>;
  path?: ConfigPaths11983;
}

const HeavyComponent11983 = memo(function HeavyComponent11983({ config }: HeavyProps11983) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11983) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11983 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11983: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11983.displayName = 'HeavyComponent11983';
export default HeavyComponent11983;
