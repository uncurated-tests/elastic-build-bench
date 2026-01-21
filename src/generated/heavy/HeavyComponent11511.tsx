'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11511<T> = T extends (infer U)[]
  ? DeepReadonlyArray11511<U>
  : T extends object
  ? DeepReadonlyObject11511<T>
  : T;

interface DeepReadonlyArray11511<T> extends ReadonlyArray<DeepReadonly11511<T>> {}

type DeepReadonlyObject11511<T> = {
  readonly [P in keyof T]: DeepReadonly11511<T[P]>;
};

type UnionToIntersection11511<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11511<T> = UnionToIntersection11511<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11511<T extends unknown[], V> = [...T, V];

type TuplifyUnion11511<T, L = LastOf11511<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11511<TuplifyUnion11511<Exclude<T, L>>, L>;

type DeepPartial11511<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11511<T[P]> }
  : T;

type Paths11511<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11511<K, Paths11511<T[K], Prev11511[D]>> : never }[keyof T]
  : never;

type Prev11511 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11511<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11511 {
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

type ConfigPaths11511 = Paths11511<NestedConfig11511>;

interface HeavyProps11511 {
  config: DeepPartial11511<NestedConfig11511>;
  path?: ConfigPaths11511;
}

const HeavyComponent11511 = memo(function HeavyComponent11511({ config }: HeavyProps11511) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11511) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11511 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11511: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11511.displayName = 'HeavyComponent11511';
export default HeavyComponent11511;
