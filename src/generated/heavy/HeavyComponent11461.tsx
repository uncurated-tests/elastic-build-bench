'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11461<T> = T extends (infer U)[]
  ? DeepReadonlyArray11461<U>
  : T extends object
  ? DeepReadonlyObject11461<T>
  : T;

interface DeepReadonlyArray11461<T> extends ReadonlyArray<DeepReadonly11461<T>> {}

type DeepReadonlyObject11461<T> = {
  readonly [P in keyof T]: DeepReadonly11461<T[P]>;
};

type UnionToIntersection11461<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11461<T> = UnionToIntersection11461<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11461<T extends unknown[], V> = [...T, V];

type TuplifyUnion11461<T, L = LastOf11461<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11461<TuplifyUnion11461<Exclude<T, L>>, L>;

type DeepPartial11461<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11461<T[P]> }
  : T;

type Paths11461<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11461<K, Paths11461<T[K], Prev11461[D]>> : never }[keyof T]
  : never;

type Prev11461 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11461<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11461 {
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

type ConfigPaths11461 = Paths11461<NestedConfig11461>;

interface HeavyProps11461 {
  config: DeepPartial11461<NestedConfig11461>;
  path?: ConfigPaths11461;
}

const HeavyComponent11461 = memo(function HeavyComponent11461({ config }: HeavyProps11461) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11461) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11461 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11461: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11461.displayName = 'HeavyComponent11461';
export default HeavyComponent11461;
