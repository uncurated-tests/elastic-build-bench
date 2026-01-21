'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11064<T> = T extends (infer U)[]
  ? DeepReadonlyArray11064<U>
  : T extends object
  ? DeepReadonlyObject11064<T>
  : T;

interface DeepReadonlyArray11064<T> extends ReadonlyArray<DeepReadonly11064<T>> {}

type DeepReadonlyObject11064<T> = {
  readonly [P in keyof T]: DeepReadonly11064<T[P]>;
};

type UnionToIntersection11064<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11064<T> = UnionToIntersection11064<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11064<T extends unknown[], V> = [...T, V];

type TuplifyUnion11064<T, L = LastOf11064<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11064<TuplifyUnion11064<Exclude<T, L>>, L>;

type DeepPartial11064<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11064<T[P]> }
  : T;

type Paths11064<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11064<K, Paths11064<T[K], Prev11064[D]>> : never }[keyof T]
  : never;

type Prev11064 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11064<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11064 {
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

type ConfigPaths11064 = Paths11064<NestedConfig11064>;

interface HeavyProps11064 {
  config: DeepPartial11064<NestedConfig11064>;
  path?: ConfigPaths11064;
}

const HeavyComponent11064 = memo(function HeavyComponent11064({ config }: HeavyProps11064) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11064) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11064 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11064: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11064.displayName = 'HeavyComponent11064';
export default HeavyComponent11064;
