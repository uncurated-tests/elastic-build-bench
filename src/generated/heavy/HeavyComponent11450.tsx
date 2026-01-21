'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11450<T> = T extends (infer U)[]
  ? DeepReadonlyArray11450<U>
  : T extends object
  ? DeepReadonlyObject11450<T>
  : T;

interface DeepReadonlyArray11450<T> extends ReadonlyArray<DeepReadonly11450<T>> {}

type DeepReadonlyObject11450<T> = {
  readonly [P in keyof T]: DeepReadonly11450<T[P]>;
};

type UnionToIntersection11450<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11450<T> = UnionToIntersection11450<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11450<T extends unknown[], V> = [...T, V];

type TuplifyUnion11450<T, L = LastOf11450<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11450<TuplifyUnion11450<Exclude<T, L>>, L>;

type DeepPartial11450<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11450<T[P]> }
  : T;

type Paths11450<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11450<K, Paths11450<T[K], Prev11450[D]>> : never }[keyof T]
  : never;

type Prev11450 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11450<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11450 {
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

type ConfigPaths11450 = Paths11450<NestedConfig11450>;

interface HeavyProps11450 {
  config: DeepPartial11450<NestedConfig11450>;
  path?: ConfigPaths11450;
}

const HeavyComponent11450 = memo(function HeavyComponent11450({ config }: HeavyProps11450) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11450) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11450 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11450: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11450.displayName = 'HeavyComponent11450';
export default HeavyComponent11450;
