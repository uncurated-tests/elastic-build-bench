'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11782<T> = T extends (infer U)[]
  ? DeepReadonlyArray11782<U>
  : T extends object
  ? DeepReadonlyObject11782<T>
  : T;

interface DeepReadonlyArray11782<T> extends ReadonlyArray<DeepReadonly11782<T>> {}

type DeepReadonlyObject11782<T> = {
  readonly [P in keyof T]: DeepReadonly11782<T[P]>;
};

type UnionToIntersection11782<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11782<T> = UnionToIntersection11782<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11782<T extends unknown[], V> = [...T, V];

type TuplifyUnion11782<T, L = LastOf11782<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11782<TuplifyUnion11782<Exclude<T, L>>, L>;

type DeepPartial11782<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11782<T[P]> }
  : T;

type Paths11782<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11782<K, Paths11782<T[K], Prev11782[D]>> : never }[keyof T]
  : never;

type Prev11782 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11782<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11782 {
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

type ConfigPaths11782 = Paths11782<NestedConfig11782>;

interface HeavyProps11782 {
  config: DeepPartial11782<NestedConfig11782>;
  path?: ConfigPaths11782;
}

const HeavyComponent11782 = memo(function HeavyComponent11782({ config }: HeavyProps11782) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11782) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11782 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11782: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11782.displayName = 'HeavyComponent11782';
export default HeavyComponent11782;
