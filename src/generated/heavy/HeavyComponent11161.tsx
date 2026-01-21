'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11161<T> = T extends (infer U)[]
  ? DeepReadonlyArray11161<U>
  : T extends object
  ? DeepReadonlyObject11161<T>
  : T;

interface DeepReadonlyArray11161<T> extends ReadonlyArray<DeepReadonly11161<T>> {}

type DeepReadonlyObject11161<T> = {
  readonly [P in keyof T]: DeepReadonly11161<T[P]>;
};

type UnionToIntersection11161<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11161<T> = UnionToIntersection11161<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11161<T extends unknown[], V> = [...T, V];

type TuplifyUnion11161<T, L = LastOf11161<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11161<TuplifyUnion11161<Exclude<T, L>>, L>;

type DeepPartial11161<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11161<T[P]> }
  : T;

type Paths11161<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11161<K, Paths11161<T[K], Prev11161[D]>> : never }[keyof T]
  : never;

type Prev11161 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11161<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11161 {
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

type ConfigPaths11161 = Paths11161<NestedConfig11161>;

interface HeavyProps11161 {
  config: DeepPartial11161<NestedConfig11161>;
  path?: ConfigPaths11161;
}

const HeavyComponent11161 = memo(function HeavyComponent11161({ config }: HeavyProps11161) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11161) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11161 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11161: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11161.displayName = 'HeavyComponent11161';
export default HeavyComponent11161;
