'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11725<T> = T extends (infer U)[]
  ? DeepReadonlyArray11725<U>
  : T extends object
  ? DeepReadonlyObject11725<T>
  : T;

interface DeepReadonlyArray11725<T> extends ReadonlyArray<DeepReadonly11725<T>> {}

type DeepReadonlyObject11725<T> = {
  readonly [P in keyof T]: DeepReadonly11725<T[P]>;
};

type UnionToIntersection11725<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11725<T> = UnionToIntersection11725<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11725<T extends unknown[], V> = [...T, V];

type TuplifyUnion11725<T, L = LastOf11725<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11725<TuplifyUnion11725<Exclude<T, L>>, L>;

type DeepPartial11725<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11725<T[P]> }
  : T;

type Paths11725<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11725<K, Paths11725<T[K], Prev11725[D]>> : never }[keyof T]
  : never;

type Prev11725 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11725<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11725 {
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

type ConfigPaths11725 = Paths11725<NestedConfig11725>;

interface HeavyProps11725 {
  config: DeepPartial11725<NestedConfig11725>;
  path?: ConfigPaths11725;
}

const HeavyComponent11725 = memo(function HeavyComponent11725({ config }: HeavyProps11725) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11725) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11725 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11725: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11725.displayName = 'HeavyComponent11725';
export default HeavyComponent11725;
