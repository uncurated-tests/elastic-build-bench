'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11808<T> = T extends (infer U)[]
  ? DeepReadonlyArray11808<U>
  : T extends object
  ? DeepReadonlyObject11808<T>
  : T;

interface DeepReadonlyArray11808<T> extends ReadonlyArray<DeepReadonly11808<T>> {}

type DeepReadonlyObject11808<T> = {
  readonly [P in keyof T]: DeepReadonly11808<T[P]>;
};

type UnionToIntersection11808<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11808<T> = UnionToIntersection11808<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11808<T extends unknown[], V> = [...T, V];

type TuplifyUnion11808<T, L = LastOf11808<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11808<TuplifyUnion11808<Exclude<T, L>>, L>;

type DeepPartial11808<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11808<T[P]> }
  : T;

type Paths11808<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11808<K, Paths11808<T[K], Prev11808[D]>> : never }[keyof T]
  : never;

type Prev11808 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11808<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11808 {
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

type ConfigPaths11808 = Paths11808<NestedConfig11808>;

interface HeavyProps11808 {
  config: DeepPartial11808<NestedConfig11808>;
  path?: ConfigPaths11808;
}

const HeavyComponent11808 = memo(function HeavyComponent11808({ config }: HeavyProps11808) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11808) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11808 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11808: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11808.displayName = 'HeavyComponent11808';
export default HeavyComponent11808;
