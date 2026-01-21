'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13555<T> = T extends (infer U)[]
  ? DeepReadonlyArray13555<U>
  : T extends object
  ? DeepReadonlyObject13555<T>
  : T;

interface DeepReadonlyArray13555<T> extends ReadonlyArray<DeepReadonly13555<T>> {}

type DeepReadonlyObject13555<T> = {
  readonly [P in keyof T]: DeepReadonly13555<T[P]>;
};

type UnionToIntersection13555<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13555<T> = UnionToIntersection13555<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13555<T extends unknown[], V> = [...T, V];

type TuplifyUnion13555<T, L = LastOf13555<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13555<TuplifyUnion13555<Exclude<T, L>>, L>;

type DeepPartial13555<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13555<T[P]> }
  : T;

type Paths13555<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13555<K, Paths13555<T[K], Prev13555[D]>> : never }[keyof T]
  : never;

type Prev13555 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13555<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13555 {
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

type ConfigPaths13555 = Paths13555<NestedConfig13555>;

interface HeavyProps13555 {
  config: DeepPartial13555<NestedConfig13555>;
  path?: ConfigPaths13555;
}

const HeavyComponent13555 = memo(function HeavyComponent13555({ config }: HeavyProps13555) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13555) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13555 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13555: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13555.displayName = 'HeavyComponent13555';
export default HeavyComponent13555;
