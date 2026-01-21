'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11626<T> = T extends (infer U)[]
  ? DeepReadonlyArray11626<U>
  : T extends object
  ? DeepReadonlyObject11626<T>
  : T;

interface DeepReadonlyArray11626<T> extends ReadonlyArray<DeepReadonly11626<T>> {}

type DeepReadonlyObject11626<T> = {
  readonly [P in keyof T]: DeepReadonly11626<T[P]>;
};

type UnionToIntersection11626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11626<T> = UnionToIntersection11626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11626<T extends unknown[], V> = [...T, V];

type TuplifyUnion11626<T, L = LastOf11626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11626<TuplifyUnion11626<Exclude<T, L>>, L>;

type DeepPartial11626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11626<T[P]> }
  : T;

type Paths11626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11626<K, Paths11626<T[K], Prev11626[D]>> : never }[keyof T]
  : never;

type Prev11626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11626 {
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

type ConfigPaths11626 = Paths11626<NestedConfig11626>;

interface HeavyProps11626 {
  config: DeepPartial11626<NestedConfig11626>;
  path?: ConfigPaths11626;
}

const HeavyComponent11626 = memo(function HeavyComponent11626({ config }: HeavyProps11626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11626.displayName = 'HeavyComponent11626';
export default HeavyComponent11626;
