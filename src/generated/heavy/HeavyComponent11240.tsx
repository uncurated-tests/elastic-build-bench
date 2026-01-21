'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11240<T> = T extends (infer U)[]
  ? DeepReadonlyArray11240<U>
  : T extends object
  ? DeepReadonlyObject11240<T>
  : T;

interface DeepReadonlyArray11240<T> extends ReadonlyArray<DeepReadonly11240<T>> {}

type DeepReadonlyObject11240<T> = {
  readonly [P in keyof T]: DeepReadonly11240<T[P]>;
};

type UnionToIntersection11240<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11240<T> = UnionToIntersection11240<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11240<T extends unknown[], V> = [...T, V];

type TuplifyUnion11240<T, L = LastOf11240<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11240<TuplifyUnion11240<Exclude<T, L>>, L>;

type DeepPartial11240<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11240<T[P]> }
  : T;

type Paths11240<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11240<K, Paths11240<T[K], Prev11240[D]>> : never }[keyof T]
  : never;

type Prev11240 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11240<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11240 {
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

type ConfigPaths11240 = Paths11240<NestedConfig11240>;

interface HeavyProps11240 {
  config: DeepPartial11240<NestedConfig11240>;
  path?: ConfigPaths11240;
}

const HeavyComponent11240 = memo(function HeavyComponent11240({ config }: HeavyProps11240) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11240) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11240 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11240: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11240.displayName = 'HeavyComponent11240';
export default HeavyComponent11240;
