'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13706<T> = T extends (infer U)[]
  ? DeepReadonlyArray13706<U>
  : T extends object
  ? DeepReadonlyObject13706<T>
  : T;

interface DeepReadonlyArray13706<T> extends ReadonlyArray<DeepReadonly13706<T>> {}

type DeepReadonlyObject13706<T> = {
  readonly [P in keyof T]: DeepReadonly13706<T[P]>;
};

type UnionToIntersection13706<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13706<T> = UnionToIntersection13706<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13706<T extends unknown[], V> = [...T, V];

type TuplifyUnion13706<T, L = LastOf13706<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13706<TuplifyUnion13706<Exclude<T, L>>, L>;

type DeepPartial13706<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13706<T[P]> }
  : T;

type Paths13706<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13706<K, Paths13706<T[K], Prev13706[D]>> : never }[keyof T]
  : never;

type Prev13706 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13706<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13706 {
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

type ConfigPaths13706 = Paths13706<NestedConfig13706>;

interface HeavyProps13706 {
  config: DeepPartial13706<NestedConfig13706>;
  path?: ConfigPaths13706;
}

const HeavyComponent13706 = memo(function HeavyComponent13706({ config }: HeavyProps13706) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13706) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13706 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13706: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13706.displayName = 'HeavyComponent13706';
export default HeavyComponent13706;
