'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11490<T> = T extends (infer U)[]
  ? DeepReadonlyArray11490<U>
  : T extends object
  ? DeepReadonlyObject11490<T>
  : T;

interface DeepReadonlyArray11490<T> extends ReadonlyArray<DeepReadonly11490<T>> {}

type DeepReadonlyObject11490<T> = {
  readonly [P in keyof T]: DeepReadonly11490<T[P]>;
};

type UnionToIntersection11490<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11490<T> = UnionToIntersection11490<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11490<T extends unknown[], V> = [...T, V];

type TuplifyUnion11490<T, L = LastOf11490<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11490<TuplifyUnion11490<Exclude<T, L>>, L>;

type DeepPartial11490<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11490<T[P]> }
  : T;

type Paths11490<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11490<K, Paths11490<T[K], Prev11490[D]>> : never }[keyof T]
  : never;

type Prev11490 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11490<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11490 {
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

type ConfigPaths11490 = Paths11490<NestedConfig11490>;

interface HeavyProps11490 {
  config: DeepPartial11490<NestedConfig11490>;
  path?: ConfigPaths11490;
}

const HeavyComponent11490 = memo(function HeavyComponent11490({ config }: HeavyProps11490) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11490) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11490 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11490: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11490.displayName = 'HeavyComponent11490';
export default HeavyComponent11490;
