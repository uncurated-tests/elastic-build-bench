'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13882<T> = T extends (infer U)[]
  ? DeepReadonlyArray13882<U>
  : T extends object
  ? DeepReadonlyObject13882<T>
  : T;

interface DeepReadonlyArray13882<T> extends ReadonlyArray<DeepReadonly13882<T>> {}

type DeepReadonlyObject13882<T> = {
  readonly [P in keyof T]: DeepReadonly13882<T[P]>;
};

type UnionToIntersection13882<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13882<T> = UnionToIntersection13882<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13882<T extends unknown[], V> = [...T, V];

type TuplifyUnion13882<T, L = LastOf13882<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13882<TuplifyUnion13882<Exclude<T, L>>, L>;

type DeepPartial13882<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13882<T[P]> }
  : T;

type Paths13882<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13882<K, Paths13882<T[K], Prev13882[D]>> : never }[keyof T]
  : never;

type Prev13882 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13882<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13882 {
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

type ConfigPaths13882 = Paths13882<NestedConfig13882>;

interface HeavyProps13882 {
  config: DeepPartial13882<NestedConfig13882>;
  path?: ConfigPaths13882;
}

const HeavyComponent13882 = memo(function HeavyComponent13882({ config }: HeavyProps13882) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13882) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13882 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13882: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13882.displayName = 'HeavyComponent13882';
export default HeavyComponent13882;
