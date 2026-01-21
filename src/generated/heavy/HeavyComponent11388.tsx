'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11388<T> = T extends (infer U)[]
  ? DeepReadonlyArray11388<U>
  : T extends object
  ? DeepReadonlyObject11388<T>
  : T;

interface DeepReadonlyArray11388<T> extends ReadonlyArray<DeepReadonly11388<T>> {}

type DeepReadonlyObject11388<T> = {
  readonly [P in keyof T]: DeepReadonly11388<T[P]>;
};

type UnionToIntersection11388<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11388<T> = UnionToIntersection11388<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11388<T extends unknown[], V> = [...T, V];

type TuplifyUnion11388<T, L = LastOf11388<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11388<TuplifyUnion11388<Exclude<T, L>>, L>;

type DeepPartial11388<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11388<T[P]> }
  : T;

type Paths11388<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11388<K, Paths11388<T[K], Prev11388[D]>> : never }[keyof T]
  : never;

type Prev11388 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11388<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11388 {
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

type ConfigPaths11388 = Paths11388<NestedConfig11388>;

interface HeavyProps11388 {
  config: DeepPartial11388<NestedConfig11388>;
  path?: ConfigPaths11388;
}

const HeavyComponent11388 = memo(function HeavyComponent11388({ config }: HeavyProps11388) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11388) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11388 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11388: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11388.displayName = 'HeavyComponent11388';
export default HeavyComponent11388;
