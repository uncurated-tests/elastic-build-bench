'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11144<T> = T extends (infer U)[]
  ? DeepReadonlyArray11144<U>
  : T extends object
  ? DeepReadonlyObject11144<T>
  : T;

interface DeepReadonlyArray11144<T> extends ReadonlyArray<DeepReadonly11144<T>> {}

type DeepReadonlyObject11144<T> = {
  readonly [P in keyof T]: DeepReadonly11144<T[P]>;
};

type UnionToIntersection11144<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11144<T> = UnionToIntersection11144<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11144<T extends unknown[], V> = [...T, V];

type TuplifyUnion11144<T, L = LastOf11144<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11144<TuplifyUnion11144<Exclude<T, L>>, L>;

type DeepPartial11144<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11144<T[P]> }
  : T;

type Paths11144<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11144<K, Paths11144<T[K], Prev11144[D]>> : never }[keyof T]
  : never;

type Prev11144 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11144<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11144 {
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

type ConfigPaths11144 = Paths11144<NestedConfig11144>;

interface HeavyProps11144 {
  config: DeepPartial11144<NestedConfig11144>;
  path?: ConfigPaths11144;
}

const HeavyComponent11144 = memo(function HeavyComponent11144({ config }: HeavyProps11144) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11144) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11144 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11144: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11144.displayName = 'HeavyComponent11144';
export default HeavyComponent11144;
