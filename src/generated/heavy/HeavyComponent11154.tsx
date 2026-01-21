'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11154<T> = T extends (infer U)[]
  ? DeepReadonlyArray11154<U>
  : T extends object
  ? DeepReadonlyObject11154<T>
  : T;

interface DeepReadonlyArray11154<T> extends ReadonlyArray<DeepReadonly11154<T>> {}

type DeepReadonlyObject11154<T> = {
  readonly [P in keyof T]: DeepReadonly11154<T[P]>;
};

type UnionToIntersection11154<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11154<T> = UnionToIntersection11154<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11154<T extends unknown[], V> = [...T, V];

type TuplifyUnion11154<T, L = LastOf11154<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11154<TuplifyUnion11154<Exclude<T, L>>, L>;

type DeepPartial11154<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11154<T[P]> }
  : T;

type Paths11154<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11154<K, Paths11154<T[K], Prev11154[D]>> : never }[keyof T]
  : never;

type Prev11154 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11154<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11154 {
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

type ConfigPaths11154 = Paths11154<NestedConfig11154>;

interface HeavyProps11154 {
  config: DeepPartial11154<NestedConfig11154>;
  path?: ConfigPaths11154;
}

const HeavyComponent11154 = memo(function HeavyComponent11154({ config }: HeavyProps11154) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11154) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11154 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11154: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11154.displayName = 'HeavyComponent11154';
export default HeavyComponent11154;
