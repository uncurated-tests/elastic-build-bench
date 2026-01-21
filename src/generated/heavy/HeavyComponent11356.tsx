'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11356<T> = T extends (infer U)[]
  ? DeepReadonlyArray11356<U>
  : T extends object
  ? DeepReadonlyObject11356<T>
  : T;

interface DeepReadonlyArray11356<T> extends ReadonlyArray<DeepReadonly11356<T>> {}

type DeepReadonlyObject11356<T> = {
  readonly [P in keyof T]: DeepReadonly11356<T[P]>;
};

type UnionToIntersection11356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11356<T> = UnionToIntersection11356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11356<T extends unknown[], V> = [...T, V];

type TuplifyUnion11356<T, L = LastOf11356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11356<TuplifyUnion11356<Exclude<T, L>>, L>;

type DeepPartial11356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11356<T[P]> }
  : T;

type Paths11356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11356<K, Paths11356<T[K], Prev11356[D]>> : never }[keyof T]
  : never;

type Prev11356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11356 {
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

type ConfigPaths11356 = Paths11356<NestedConfig11356>;

interface HeavyProps11356 {
  config: DeepPartial11356<NestedConfig11356>;
  path?: ConfigPaths11356;
}

const HeavyComponent11356 = memo(function HeavyComponent11356({ config }: HeavyProps11356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11356.displayName = 'HeavyComponent11356';
export default HeavyComponent11356;
