'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11880<T> = T extends (infer U)[]
  ? DeepReadonlyArray11880<U>
  : T extends object
  ? DeepReadonlyObject11880<T>
  : T;

interface DeepReadonlyArray11880<T> extends ReadonlyArray<DeepReadonly11880<T>> {}

type DeepReadonlyObject11880<T> = {
  readonly [P in keyof T]: DeepReadonly11880<T[P]>;
};

type UnionToIntersection11880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11880<T> = UnionToIntersection11880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11880<T extends unknown[], V> = [...T, V];

type TuplifyUnion11880<T, L = LastOf11880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11880<TuplifyUnion11880<Exclude<T, L>>, L>;

type DeepPartial11880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11880<T[P]> }
  : T;

type Paths11880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11880<K, Paths11880<T[K], Prev11880[D]>> : never }[keyof T]
  : never;

type Prev11880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11880 {
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

type ConfigPaths11880 = Paths11880<NestedConfig11880>;

interface HeavyProps11880 {
  config: DeepPartial11880<NestedConfig11880>;
  path?: ConfigPaths11880;
}

const HeavyComponent11880 = memo(function HeavyComponent11880({ config }: HeavyProps11880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11880.displayName = 'HeavyComponent11880';
export default HeavyComponent11880;
