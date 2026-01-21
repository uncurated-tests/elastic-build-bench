'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11281<T> = T extends (infer U)[]
  ? DeepReadonlyArray11281<U>
  : T extends object
  ? DeepReadonlyObject11281<T>
  : T;

interface DeepReadonlyArray11281<T> extends ReadonlyArray<DeepReadonly11281<T>> {}

type DeepReadonlyObject11281<T> = {
  readonly [P in keyof T]: DeepReadonly11281<T[P]>;
};

type UnionToIntersection11281<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11281<T> = UnionToIntersection11281<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11281<T extends unknown[], V> = [...T, V];

type TuplifyUnion11281<T, L = LastOf11281<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11281<TuplifyUnion11281<Exclude<T, L>>, L>;

type DeepPartial11281<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11281<T[P]> }
  : T;

type Paths11281<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11281<K, Paths11281<T[K], Prev11281[D]>> : never }[keyof T]
  : never;

type Prev11281 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11281<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11281 {
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

type ConfigPaths11281 = Paths11281<NestedConfig11281>;

interface HeavyProps11281 {
  config: DeepPartial11281<NestedConfig11281>;
  path?: ConfigPaths11281;
}

const HeavyComponent11281 = memo(function HeavyComponent11281({ config }: HeavyProps11281) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11281) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11281 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11281: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11281.displayName = 'HeavyComponent11281';
export default HeavyComponent11281;
