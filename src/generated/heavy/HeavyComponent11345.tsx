'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11345<T> = T extends (infer U)[]
  ? DeepReadonlyArray11345<U>
  : T extends object
  ? DeepReadonlyObject11345<T>
  : T;

interface DeepReadonlyArray11345<T> extends ReadonlyArray<DeepReadonly11345<T>> {}

type DeepReadonlyObject11345<T> = {
  readonly [P in keyof T]: DeepReadonly11345<T[P]>;
};

type UnionToIntersection11345<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11345<T> = UnionToIntersection11345<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11345<T extends unknown[], V> = [...T, V];

type TuplifyUnion11345<T, L = LastOf11345<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11345<TuplifyUnion11345<Exclude<T, L>>, L>;

type DeepPartial11345<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11345<T[P]> }
  : T;

type Paths11345<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11345<K, Paths11345<T[K], Prev11345[D]>> : never }[keyof T]
  : never;

type Prev11345 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11345<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11345 {
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

type ConfigPaths11345 = Paths11345<NestedConfig11345>;

interface HeavyProps11345 {
  config: DeepPartial11345<NestedConfig11345>;
  path?: ConfigPaths11345;
}

const HeavyComponent11345 = memo(function HeavyComponent11345({ config }: HeavyProps11345) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11345) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11345 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11345: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11345.displayName = 'HeavyComponent11345';
export default HeavyComponent11345;
