'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11184<T> = T extends (infer U)[]
  ? DeepReadonlyArray11184<U>
  : T extends object
  ? DeepReadonlyObject11184<T>
  : T;

interface DeepReadonlyArray11184<T> extends ReadonlyArray<DeepReadonly11184<T>> {}

type DeepReadonlyObject11184<T> = {
  readonly [P in keyof T]: DeepReadonly11184<T[P]>;
};

type UnionToIntersection11184<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11184<T> = UnionToIntersection11184<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11184<T extends unknown[], V> = [...T, V];

type TuplifyUnion11184<T, L = LastOf11184<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11184<TuplifyUnion11184<Exclude<T, L>>, L>;

type DeepPartial11184<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11184<T[P]> }
  : T;

type Paths11184<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11184<K, Paths11184<T[K], Prev11184[D]>> : never }[keyof T]
  : never;

type Prev11184 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11184<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11184 {
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

type ConfigPaths11184 = Paths11184<NestedConfig11184>;

interface HeavyProps11184 {
  config: DeepPartial11184<NestedConfig11184>;
  path?: ConfigPaths11184;
}

const HeavyComponent11184 = memo(function HeavyComponent11184({ config }: HeavyProps11184) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11184) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11184 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11184: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11184.displayName = 'HeavyComponent11184';
export default HeavyComponent11184;
