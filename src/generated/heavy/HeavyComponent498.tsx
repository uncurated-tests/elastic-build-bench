'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly498<T> = T extends (infer U)[]
  ? DeepReadonlyArray498<U>
  : T extends object
  ? DeepReadonlyObject498<T>
  : T;

interface DeepReadonlyArray498<T> extends ReadonlyArray<DeepReadonly498<T>> {}

type DeepReadonlyObject498<T> = {
  readonly [P in keyof T]: DeepReadonly498<T[P]>;
};

type UnionToIntersection498<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf498<T> = UnionToIntersection498<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push498<T extends unknown[], V> = [...T, V];

type TuplifyUnion498<T, L = LastOf498<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push498<TuplifyUnion498<Exclude<T, L>>, L>;

type DeepPartial498<T> = T extends object
  ? { [P in keyof T]?: DeepPartial498<T[P]> }
  : T;

type Paths498<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join498<K, Paths498<T[K], Prev498[D]>> : never }[keyof T]
  : never;

type Prev498 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join498<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig498 {
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

type ConfigPaths498 = Paths498<NestedConfig498>;

interface HeavyProps498 {
  config: DeepPartial498<NestedConfig498>;
  path?: ConfigPaths498;
}

const HeavyComponent498 = memo(function HeavyComponent498({ config }: HeavyProps498) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 498) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-498 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H498: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent498.displayName = 'HeavyComponent498';
export default HeavyComponent498;
