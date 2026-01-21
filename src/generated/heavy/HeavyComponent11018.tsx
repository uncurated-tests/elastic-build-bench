'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11018<T> = T extends (infer U)[]
  ? DeepReadonlyArray11018<U>
  : T extends object
  ? DeepReadonlyObject11018<T>
  : T;

interface DeepReadonlyArray11018<T> extends ReadonlyArray<DeepReadonly11018<T>> {}

type DeepReadonlyObject11018<T> = {
  readonly [P in keyof T]: DeepReadonly11018<T[P]>;
};

type UnionToIntersection11018<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11018<T> = UnionToIntersection11018<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11018<T extends unknown[], V> = [...T, V];

type TuplifyUnion11018<T, L = LastOf11018<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11018<TuplifyUnion11018<Exclude<T, L>>, L>;

type DeepPartial11018<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11018<T[P]> }
  : T;

type Paths11018<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11018<K, Paths11018<T[K], Prev11018[D]>> : never }[keyof T]
  : never;

type Prev11018 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11018<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11018 {
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

type ConfigPaths11018 = Paths11018<NestedConfig11018>;

interface HeavyProps11018 {
  config: DeepPartial11018<NestedConfig11018>;
  path?: ConfigPaths11018;
}

const HeavyComponent11018 = memo(function HeavyComponent11018({ config }: HeavyProps11018) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11018) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11018 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11018: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11018.displayName = 'HeavyComponent11018';
export default HeavyComponent11018;
