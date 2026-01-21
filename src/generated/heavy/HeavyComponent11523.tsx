'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11523<T> = T extends (infer U)[]
  ? DeepReadonlyArray11523<U>
  : T extends object
  ? DeepReadonlyObject11523<T>
  : T;

interface DeepReadonlyArray11523<T> extends ReadonlyArray<DeepReadonly11523<T>> {}

type DeepReadonlyObject11523<T> = {
  readonly [P in keyof T]: DeepReadonly11523<T[P]>;
};

type UnionToIntersection11523<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11523<T> = UnionToIntersection11523<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11523<T extends unknown[], V> = [...T, V];

type TuplifyUnion11523<T, L = LastOf11523<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11523<TuplifyUnion11523<Exclude<T, L>>, L>;

type DeepPartial11523<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11523<T[P]> }
  : T;

type Paths11523<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11523<K, Paths11523<T[K], Prev11523[D]>> : never }[keyof T]
  : never;

type Prev11523 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11523<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11523 {
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

type ConfigPaths11523 = Paths11523<NestedConfig11523>;

interface HeavyProps11523 {
  config: DeepPartial11523<NestedConfig11523>;
  path?: ConfigPaths11523;
}

const HeavyComponent11523 = memo(function HeavyComponent11523({ config }: HeavyProps11523) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11523) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11523 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11523: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11523.displayName = 'HeavyComponent11523';
export default HeavyComponent11523;
