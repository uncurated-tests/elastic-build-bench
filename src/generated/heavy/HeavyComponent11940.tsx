'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11940<T> = T extends (infer U)[]
  ? DeepReadonlyArray11940<U>
  : T extends object
  ? DeepReadonlyObject11940<T>
  : T;

interface DeepReadonlyArray11940<T> extends ReadonlyArray<DeepReadonly11940<T>> {}

type DeepReadonlyObject11940<T> = {
  readonly [P in keyof T]: DeepReadonly11940<T[P]>;
};

type UnionToIntersection11940<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11940<T> = UnionToIntersection11940<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11940<T extends unknown[], V> = [...T, V];

type TuplifyUnion11940<T, L = LastOf11940<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11940<TuplifyUnion11940<Exclude<T, L>>, L>;

type DeepPartial11940<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11940<T[P]> }
  : T;

type Paths11940<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11940<K, Paths11940<T[K], Prev11940[D]>> : never }[keyof T]
  : never;

type Prev11940 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11940<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11940 {
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

type ConfigPaths11940 = Paths11940<NestedConfig11940>;

interface HeavyProps11940 {
  config: DeepPartial11940<NestedConfig11940>;
  path?: ConfigPaths11940;
}

const HeavyComponent11940 = memo(function HeavyComponent11940({ config }: HeavyProps11940) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11940) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11940 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11940: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11940.displayName = 'HeavyComponent11940';
export default HeavyComponent11940;
