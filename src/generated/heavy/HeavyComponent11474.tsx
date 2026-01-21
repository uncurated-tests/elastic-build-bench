'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11474<T> = T extends (infer U)[]
  ? DeepReadonlyArray11474<U>
  : T extends object
  ? DeepReadonlyObject11474<T>
  : T;

interface DeepReadonlyArray11474<T> extends ReadonlyArray<DeepReadonly11474<T>> {}

type DeepReadonlyObject11474<T> = {
  readonly [P in keyof T]: DeepReadonly11474<T[P]>;
};

type UnionToIntersection11474<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11474<T> = UnionToIntersection11474<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11474<T extends unknown[], V> = [...T, V];

type TuplifyUnion11474<T, L = LastOf11474<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11474<TuplifyUnion11474<Exclude<T, L>>, L>;

type DeepPartial11474<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11474<T[P]> }
  : T;

type Paths11474<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11474<K, Paths11474<T[K], Prev11474[D]>> : never }[keyof T]
  : never;

type Prev11474 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11474<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11474 {
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

type ConfigPaths11474 = Paths11474<NestedConfig11474>;

interface HeavyProps11474 {
  config: DeepPartial11474<NestedConfig11474>;
  path?: ConfigPaths11474;
}

const HeavyComponent11474 = memo(function HeavyComponent11474({ config }: HeavyProps11474) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11474) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11474 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11474: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11474.displayName = 'HeavyComponent11474';
export default HeavyComponent11474;
