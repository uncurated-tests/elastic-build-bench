'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11705<T> = T extends (infer U)[]
  ? DeepReadonlyArray11705<U>
  : T extends object
  ? DeepReadonlyObject11705<T>
  : T;

interface DeepReadonlyArray11705<T> extends ReadonlyArray<DeepReadonly11705<T>> {}

type DeepReadonlyObject11705<T> = {
  readonly [P in keyof T]: DeepReadonly11705<T[P]>;
};

type UnionToIntersection11705<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11705<T> = UnionToIntersection11705<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11705<T extends unknown[], V> = [...T, V];

type TuplifyUnion11705<T, L = LastOf11705<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11705<TuplifyUnion11705<Exclude<T, L>>, L>;

type DeepPartial11705<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11705<T[P]> }
  : T;

type Paths11705<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11705<K, Paths11705<T[K], Prev11705[D]>> : never }[keyof T]
  : never;

type Prev11705 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11705<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11705 {
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

type ConfigPaths11705 = Paths11705<NestedConfig11705>;

interface HeavyProps11705 {
  config: DeepPartial11705<NestedConfig11705>;
  path?: ConfigPaths11705;
}

const HeavyComponent11705 = memo(function HeavyComponent11705({ config }: HeavyProps11705) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11705) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11705 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11705: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11705.displayName = 'HeavyComponent11705';
export default HeavyComponent11705;
