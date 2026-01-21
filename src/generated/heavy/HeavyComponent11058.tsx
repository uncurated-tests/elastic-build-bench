'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11058<T> = T extends (infer U)[]
  ? DeepReadonlyArray11058<U>
  : T extends object
  ? DeepReadonlyObject11058<T>
  : T;

interface DeepReadonlyArray11058<T> extends ReadonlyArray<DeepReadonly11058<T>> {}

type DeepReadonlyObject11058<T> = {
  readonly [P in keyof T]: DeepReadonly11058<T[P]>;
};

type UnionToIntersection11058<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11058<T> = UnionToIntersection11058<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11058<T extends unknown[], V> = [...T, V];

type TuplifyUnion11058<T, L = LastOf11058<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11058<TuplifyUnion11058<Exclude<T, L>>, L>;

type DeepPartial11058<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11058<T[P]> }
  : T;

type Paths11058<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11058<K, Paths11058<T[K], Prev11058[D]>> : never }[keyof T]
  : never;

type Prev11058 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11058<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11058 {
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

type ConfigPaths11058 = Paths11058<NestedConfig11058>;

interface HeavyProps11058 {
  config: DeepPartial11058<NestedConfig11058>;
  path?: ConfigPaths11058;
}

const HeavyComponent11058 = memo(function HeavyComponent11058({ config }: HeavyProps11058) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11058) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11058 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11058: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11058.displayName = 'HeavyComponent11058';
export default HeavyComponent11058;
