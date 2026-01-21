'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly11045<T> = T extends (infer U)[]
  ? DeepReadonlyArray11045<U>
  : T extends object
  ? DeepReadonlyObject11045<T>
  : T;

interface DeepReadonlyArray11045<T> extends ReadonlyArray<DeepReadonly11045<T>> {}

type DeepReadonlyObject11045<T> = {
  readonly [P in keyof T]: DeepReadonly11045<T[P]>;
};

type UnionToIntersection11045<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf11045<T> = UnionToIntersection11045<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push11045<T extends unknown[], V> = [...T, V];

type TuplifyUnion11045<T, L = LastOf11045<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push11045<TuplifyUnion11045<Exclude<T, L>>, L>;

type DeepPartial11045<T> = T extends object
  ? { [P in keyof T]?: DeepPartial11045<T[P]> }
  : T;

type Paths11045<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join11045<K, Paths11045<T[K], Prev11045[D]>> : never }[keyof T]
  : never;

type Prev11045 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join11045<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig11045 {
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

type ConfigPaths11045 = Paths11045<NestedConfig11045>;

interface HeavyProps11045 {
  config: DeepPartial11045<NestedConfig11045>;
  path?: ConfigPaths11045;
}

const HeavyComponent11045 = memo(function HeavyComponent11045({ config }: HeavyProps11045) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 11045) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-11045 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H11045: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent11045.displayName = 'HeavyComponent11045';
export default HeavyComponent11045;
