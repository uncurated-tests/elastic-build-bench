'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11761<T> = T extends (infer U)[]
  ? DeepReadonlyArray11761<U>
  : T extends object
  ? DeepReadonlyObject11761<T>
  : T;

interface DeepReadonlyArray11761<T> extends ReadonlyArray<DeepReadonly11761<T>> {}

type DeepReadonlyObject11761<T> = {
  readonly [P in keyof T]: DeepReadonly11761<T[P]>;
};

type UnionToIntersection11761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11761<T> = UnionToIntersection11761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11761<T extends unknown[], V> = [...T, V];

type TuplifyUnion11761<T, L = LastOf11761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11761<TuplifyUnion11761<Exclude<T, L>>, L>;

type DeepPartial11761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11761<T[P]> }
  : T;

type Paths11761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11761<K, Paths11761<T[K], Prev11761[D]>> : never }[keyof T]
  : never;

type Prev11761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11761 {
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

type ConfigPaths11761 = Paths11761<NestedConfig11761>;

interface HeavyProps11761 {
  config: DeepPartial11761<NestedConfig11761>;
  path?: ConfigPaths11761;
}

const HeavyComponent11761 = memo(function HeavyComponent11761({ config }: HeavyProps11761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11761.displayName = 'HeavyComponent11761';
export default HeavyComponent11761;
