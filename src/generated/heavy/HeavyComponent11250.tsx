'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11250<T> = T extends (infer U)[]
  ? DeepReadonlyArray11250<U>
  : T extends object
  ? DeepReadonlyObject11250<T>
  : T;

interface DeepReadonlyArray11250<T> extends ReadonlyArray<DeepReadonly11250<T>> {}

type DeepReadonlyObject11250<T> = {
  readonly [P in keyof T]: DeepReadonly11250<T[P]>;
};

type UnionToIntersection11250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11250<T> = UnionToIntersection11250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11250<T extends unknown[], V> = [...T, V];

type TuplifyUnion11250<T, L = LastOf11250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11250<TuplifyUnion11250<Exclude<T, L>>, L>;

type DeepPartial11250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11250<T[P]> }
  : T;

type Paths11250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11250<K, Paths11250<T[K], Prev11250[D]>> : never }[keyof T]
  : never;

type Prev11250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11250 {
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

type ConfigPaths11250 = Paths11250<NestedConfig11250>;

interface HeavyProps11250 {
  config: DeepPartial11250<NestedConfig11250>;
  path?: ConfigPaths11250;
}

const HeavyComponent11250 = memo(function HeavyComponent11250({ config }: HeavyProps11250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11250.displayName = 'HeavyComponent11250';
export default HeavyComponent11250;
